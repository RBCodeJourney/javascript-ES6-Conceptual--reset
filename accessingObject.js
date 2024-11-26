const Person = {
    name: 'abul',
    age: 23,
    contact: {
        phone: '324546789',
        email: 'abcd@gmail.com'
    },
    education: {
        schoolName: 'backchod high school',
        subject: [
            { name: 'bangla', mark: 45 },
            { name: 'english', mark: 64 },
            { name: 'math', mark: 74 }
        ]
    }
};


// console.log(Person.contact.email);
console.log(Person.education.subject[1].name);
