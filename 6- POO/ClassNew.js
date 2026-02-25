function NewUser(id, name, age, arrNumber) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.arrNumber = arrNumber;
}

NewUser.prototype.print = function () {
  console.log(
    `this id => "${this.id}" this.name => "${this.name}" this.age => "${this.age}" ${this.arrNumber}`
  );
  let valores = {};
  let soma = 0;
  for (let i = 0; i < this.arrNumber.length; i++) {
    if (!valores[this.arrNumber[i]]) {
      soma += this.arrNumber[i];
      valores[this.arrNumber[i]] = true;
    }
  }
  console.log(soma)
};

let OldUser = new NewUser(1, "Vasco", 16, [1, 2, 3, 2]);
OldUser.print();