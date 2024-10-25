let watch = document.getElementById("watch");
watch.innerHTML = "<h2>Here is the watch</h2>";


let theWatch = setInterval(()=>{
    let timenow = new Date();
    let hour = timenow.getHours();
    let mins = timenow.getMinutes();
    let secs = timenow.getSeconds();
    watch.innerHTML = `<h1>${hour} : ${mins} : ${secs}</h1>`;
    
},1000)