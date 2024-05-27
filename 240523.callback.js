const message = function() {
    console.log("This message is shown after 3 seconds");
}

setTimeout(message, 3000);

setTimeout(function() {
    console.log("This message is shown after 3 seconds");
}, 3000);

setTimeout(() => {
    console.log("This message is shown after 3 seconds");
}, 3000);