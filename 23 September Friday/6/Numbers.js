for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 7 !== 0) {
    console.log("Power");
  }
  if (i % 7 === 0 && i % 5 !== 0) {
    console.log("Coders");
  }
  if (i % 5 === 0 && i % 7 === 0) {
    console.log("PowerCoders");
  }
  if (i % 5 !== 0 && i % 7 !== 0) {
    console.log(i);
  }
}
