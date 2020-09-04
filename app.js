let fs = require('fs');
let path = require('path');
let {promisify} = require('util');

// PART 1  require, global, emit
//
// fs.writeFile('./file.js', '', () => {} )
// let file = require('./file');
//
//  console.log(file);



//PART 2 create dir + file
//
// let way1 = path.join(process.cwd(), 'text1.txt');
// let way2 = path.join(process.cwd(), 'text2.txt');
//
//
// fs.writeFile(way1, 'hello data1', (err) => {
//     console.log(err)
// })
//
//  fs.writeFile(way2, 'hello data 2', (err) => {
//      console.log(err)
//  })
//
//  fs.mkdir(path.join(process.cwd(),'level1', 'level2'), {recursive: true}, () => {})
//
// for (let i = 0; i <= 3; i++) {
//     fs.writeFile(path.join(process.cwd(), 'level1', `text${i}.txt`), 'hello level 1 data 3', (err) => {
//         console.log(err)
//     })
// }
//
// for (let i = 0; i <= 4; i++) {
//     fs.writeFile(path.join(process.cwd(), 'level1', 'level2', `text2-${i}.txt`), 'hi lvl 2', (err) => {
//         console.log(err)
//     })
// }
//
// fs.mkdir(path.join(process.cwd(),  'lvl1', 'lvl2'), {recursive: true}, () => {})
//
// for (let i = 0; i <= 3; i++) {
//     fs.writeFile(path.join(process.cwd(), 'lvl1', `tt${i}.txt`), 'hello level 1 data 3////', (err) => {
//         console.log(err)
//     })
// }
//
// for (let i = 0; i <= 4; i++) {
//     fs.writeFile(path.join(process.cwd(), 'lvl1', 'lvl2', `tt2-${i}.txt`), 'hi lvl 2///', (err) => {
//         console.log(err)
//     })
// }



// PART 3. Transport file

const AllFiles = 'AllFiles';
const level1 = 'level1';
const level2 = 'level2';
const lvl1 = 'lvl1';
const lvl2 = 'lvl2';

const rd = promisify(fs.readdir);
const rn = promisify(fs.rename);

const way = async ( level1, level2, lvl1, lvl2) => {


try {
  const file1 = await rd(path.join(__dirname, level1));
    const file2 = await rd(path.join(__dirname, level1, level2));
    const file3 = await rd(path.join(__dirname, lvl1));
    const file4 = await rd(path.join(__dirname, lvl1, lvl2));

    for (let value of file2) {
        rn(path.join(__dirname, file1, file2, value), path.join(__dirname, AllFiles, value));
    }

    for (let value of file1) {
        rn(path.join(__dirname, file1, value), path.join(__dirname, AllFiles, value));
    }

    for (let value of file4) {
        rn(path.join(__dirname, file3, file4, value), path.join(__dirname, AllFiles, value));
    }

    for (let value of file3) {
        rn(path.join(__dirname, file3, value), path.join(__dirname, AllFiles, value));
    }

    for (let value of __dirname) {
        rn(path.join(__dirname, value), path.join(__dirname, AllFiles, value));
    }
}
catch (e) {
    console.log(e + ' this is error')
}
}

way(level1, level2, lvl1, lvl2)
