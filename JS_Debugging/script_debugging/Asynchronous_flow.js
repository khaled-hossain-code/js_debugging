let name = "Debugging";

console.log("Hello EveryOne!");

setTimeout( () => {
  console.log("Welcome to " + name);
}, 0);

setImmediate( () => {
  console.log("Invoke Immediately");
});

console.log("Thanks for watching");
