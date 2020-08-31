let fs = require('fs');
let path = require('path');

// PART 1  require, global, emit

// fs.writeFile('./file.js', '', () => {} )
// let file = require('./file');
//
//  console.log(file);



//PART 2 create dir + file

let way1 = path.join(process.cwd(), 'text1.txt');
let way2 = path.join(process.cwd(), 'text2.txt');


fs.writeFile(way1, 'hello data1', (err) => {
    console.log(err)
})

 fs.writeFile(way2, 'hello data 2', (err) => {
     console.log(err)
 })

 fs.mkdir(path.join(process.cwd(), {recursive: true}, 'level1', 'level2'))

for (let i = 0; i <= 3; i++) {
    fs.writeFile(path.join(process.cwd(), 'level1', `text${i}.txt`), 'hello level 1 data 3', (err) => {
        console.log(err)
    })
}

for (let i = 0; i <= 4; i++) {
    fs.writeFile(path.join(process.cwd(), 'level1', 'level2', `text2-${i}.txt`), 'hi lvl 2', (err) => {
        console.log(err)
    })
}

fs.mkdir(path.join(process.cwd(), {recursive: true}, 'lvl1', 'lvl2'))

for (let i = 0; i <= 3; i++) {
    fs.writeFile(path.join(process.cwd(), 'lvl1', `tt${i}.txt`), 'hello level 1 data 3////', (err) => {
        console.log(err)
    })
}

for (let i = 0; i <= 4; i++) {
    fs.writeFile(path.join(process.cwd(), 'lvl1', 'lvl2', `tt2-${i}.txt`), 'hi lvl 2///', (err) => {
        console.log(err)
    })
}
