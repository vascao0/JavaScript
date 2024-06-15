let add = 0;
let values = {};

function tst(arrNumber) {
  for (let i = 0; i < arrNumber.length; i++) {
    if (!values[arrNumber[i]]) {
      add += arrNumber[i];
      values[arrNumber[i]] = true;
    }
  }
  console.log(add);
}
const arrN2 = [5, 2, 6, 3, 5];
arrN2.forEach((arrn3) => {
  console.log(arrn3);
});
tst([5, 2, 5]);