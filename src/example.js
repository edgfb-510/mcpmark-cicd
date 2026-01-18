const unusedVar = "test";
function badFunction() {
  console.log("This uses double quotes and missing semicolons")
  let anotherUnused = 123
}
badFunction();