    //inbuilt modules

const os = require('os'); //'os' does not need ./ syntax, because we are not linking it from anywhere. It is inbuilt module. 

// how can we use it? Getting info about current user

const user = os.userInfo();
console.log(user);

//or method returns system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS);