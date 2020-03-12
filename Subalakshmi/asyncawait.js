const delayAndGetRandom = (ms) => {
  return new Promise(resolve => setTimeout(
    () => {
      const val = Math.trunc(Math.random() * 100);
      resolve(val);
    }, ms
  ));
};
async function fn() {
  const a = await 5;
  const b = await delayAndGetRandom(1000);
  const c = await 4;
  await delayAndGetRandom(1000);
  
  return a + b * c;
}
fn().then(console.log);