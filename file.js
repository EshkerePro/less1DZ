let os = require('os');
let {EventEmitter} = require('events');

function globalAndProcess () {
    console.log(global);
    console.log('------------------------- NEXT PROCESS obj');
    console.log(process)
    console.log('-------------------------');

    global.MyName = 'nick';
    console.log(global.MyName + ' -- global type');
    console.log(process.cwd() + ' -- process.cwd');

    process.env.MyYear = 20;
    console.log(process.env.MyYear + ' process.env type');

    console.log(__dirname + ' :dirname \n' +' filename:' + __filename)

    console.log(os.userInfo(), os.cpus(), os.arch());
}
globalAndProcess();

let ee = new EventEmitter();

ee.on('x1', (numb) => {
    console.log('emiter log '+ numb)
})

ee.emit('x1', 102);
ee.emit('x1', 3245);

ee.once('x2', () => {
    console.log('this once emiter')
})

ee.emit('x2');


module.exports = {
    globalAndProcess
}
