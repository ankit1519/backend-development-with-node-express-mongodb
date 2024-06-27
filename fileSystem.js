const fs=require('fs');
const data=fs.readFileSync("demo.txt",'utf-8');

console.log(data);

fs.readFile("demo.txt",'utf-8',(err,txt)=>{
    console.log(txt);
})

console.log('done');