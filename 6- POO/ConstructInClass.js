class OldUser {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  print() {
    console.log(
      `Meu nome é ${this.name}, tenho ${this.age} anos e sou ${this.job}`
    );
  }
}

let NewUser = new OldUser("Pedro", 16, "dev js");

NewUser.print();

OldUser.prototype.vasco = "lider";
console.log(NewUser.vasco);

const valuesObject = Object.values(NewUser);
const keysObject = Object.keys(NewUser);

for (i in keysObject) {
  console.log(keysObject[i] + ":" + valuesObject[i]);
}
