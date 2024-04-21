let props = {
  vasco: true,
  true: "vasco",
};

let props2 = {
  fla: false,
  false: "fla",
};

Object.assign(props, props2);
console.log(props);

const objetoA = new Object();
objetoA.name = "pedro";
objetoA.age = 16;
console.log(`${Object.keys(objetoA).length},${Object.keys(objetoA)}`);
