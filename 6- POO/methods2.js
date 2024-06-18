let user = {
    name: '',
    setName: (NewName) => {
        this.name = NewName
    },
    getName: () => {
        return this.name
    }
}

user.setName("S")
console.log(user.getName())