// Globals - NO WINDOW! In Node you can always access global variables from anywhere in the app

// __dirname - path to current directory
//__filename - file name
// require - function to use modules (Common JS, similar to React import)
// module - info about current modue (file, similar to React export)
// process - info about envirenment where the program is being executed

console.log(__dirname);
setInterval(() => {
    console.log('hello world')
}, 1000)