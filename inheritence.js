class Owner {
    ownerName;
    ownerAge;

    constructor(name, age) {
        this.ownerName = name;
        this.ownerAge = age;
    }
    ownerInfo() {
        console.log(`ownerName: ${this.ownerName}. ownerAge: ${this.ownerAge}`)
    }
}



class Animal extends Owner {
    name;
    color;
    constructor(petName, petColor, wname, wage) {
        super(wname, wage)
        this.name = petName;
        this.color = petColor;
    }
    showInfo() {
        console.log(`my pet name is ${this.name}. color is ${this.color}`)
    }
}

const cat = new Animal('travis', 'white', 'Biswas', 26);
cat.showInfo();
cat.ownerInfo()