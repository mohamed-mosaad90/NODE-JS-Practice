const { program } = require("commander");
const fs = require("fs");
const { title } = require("process");
const { json } = require("stream/consumers");
program.command("add")
    .description("this add a new data ")
    .requiredOption("-t , --title <string>", "title of add data")
    .requiredOption("-d , --date <string>", "Date of add data")
    .action((data) => {
        console.log(data);
        const readFile = fs.readFileSync('./db.json', "utf8");
        const resReadFile = JSON.parse(readFile);
        console.log(resReadFile);
        resReadFile.push({
            id: Date.now(),
            title: data.title,
            date: data.date
        })
        const transString = JSON.stringify(resReadFile, null, 2)
        fs.writeFileSync('./db.json', transString)
    })
const showAll = () => {
    const readData = fs.readFileSync('./db.json');
    const resData = JSON.parse(readData);
    console.log(resData);

}
///2) list 
program.command("listAll")
    .description("show all data that i have")
    .action(showAll);
// 3) edit
// const edit = (data) => {
//     console.log(data);

//     const readFile = fs.readFileSync('./db.json', "utf8");
//     const resFile = JSON.parse(readFile);
//     // const obj = {
//     //     title: data.title,
//     //     id: data.id

//     // }
//     console.log(data);

// }


program.command("edit").description("edit value of properties")
    .requiredOption("-t , --title <string>", "edit title")
    .requiredOption("-i ,--id <string>", "id")
    .action((data) => {
        console.log(data);

        const readFile = fs.readFileSync('./db.json', "utf8");
        const resFile = JSON.parse(readFile);

        const index = resFile.findIndex((item) => {
            return item.id === +data.id;
        })
        if (index === -1) {
            console.log("not found");

            return;
        }
        resFile[index].title = data.title;

        const finalRes = JSON.stringify(resFile, null, 2);
        fs.writeFileSync('./db.json', finalRes)
        console.log("edite successfully");


    });
const deleteItem = (data) => {

    const readFile = fs.readFileSync('./db.json', "utf8");
    const resFile = JSON.parse(readFile);
    const index = resFile.findIndex((item) => {
        return item.id === +data.id

    })

    console.log(index);
    resFile.splice(index,1)

    const finalRes = JSON.stringify(resFile, null, 2);
    fs.writeFileSync('./db.json', finalRes)

    console.log("delete successfully");

}
program.command("delete")
    .description("delete item")
    .option("-i ,--id <string>", "select id")
    .action(deleteItem);
program.parse();
