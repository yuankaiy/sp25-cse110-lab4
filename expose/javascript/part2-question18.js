setInterval(printSeconds, 1000);

function printSeconds(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}