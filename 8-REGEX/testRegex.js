const regex = /a.b/;
console.log(regex.test("aab")); // true (corresponde ao padrão 'a' seguido de qualquer caractere, depois 'b')
console.log(regex.test("acb")); // true
console.log(regex.test("abb")); // false (não corresponde ao padrão 'a' seguido de qualquer caractere e depois 'b')
