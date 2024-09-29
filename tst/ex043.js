let rgxM = /Marca: (nike| adidas | puma | asics)/ig

rgxM.test("Marca: nike") ?  console.log("é nome de marca") : console.log("não é nome de marca")