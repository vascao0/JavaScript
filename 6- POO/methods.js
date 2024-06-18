let user = {
  id: 1,
  name: "pedro",
  job: function () {
    console.log("function in objects js");
  },
  tst: function (arrNumber) {
    let add = 0;
    let values = {};
    for (let i = 0; i < arrNumber.length; i++) {
      if (!values[arrNumber[i]]) {
        add += arrNumber[i];
        values[arrNumber[i]] = true;
      }
    }
    console.log(add);
  },
  arrf: () => {
    console.log("arrow Function in Method");
  },
};

user.tst([5, 2, 2]);
user.arrf();
