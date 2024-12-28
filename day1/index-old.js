const fs = require("fs");

const [, , action, title, time] = process.argv;
//1) read file
const dataString = fs.readFileSync("./db.json", "utf8");
const data = JSON.parse(dataString)
//2) push file
data.push({ id: Date.now(), title, time })
console.log(data);
//3) write file
fs.writeFileSync("./db.json", JSON.stringify(data, null, 2))
/////////////////////////////
