const person = {
    name: "Hero Alom",
    age: 34,
    phone: '9832701830',
    p: [1, 2, 3, 4, 5],
    address: {
        zilla: 'Murshidabad',
        village: 'khosalpur'
    },
};

// how to deply destructure an Object blew the example 
const { address: { zilla, village } } = person;

// beginner way is this 

// const {zilla} = address;
console.log(village)

// const {name, ...rest} = person;
// console.log(rest);



// if need how to change property name with destructure ? below the details structure
// const { phone:mobile, address, name: amarName } = person;
// console.log(mobile)


// const {zilla} = address;
// console.log(zilla);



// const person1 = { ...person };
// person1.email = "hello@gmail.com";
// console.log(person1);

