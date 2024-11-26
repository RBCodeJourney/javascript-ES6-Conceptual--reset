const petOwner = {
    name: "Hero Alom",
    contact: {
        phone: "012345678910",
        email: "xyz@gmail.com"
    },
    pet: {
        name: "lofie",
        info: {
            color: "black",
            weight: "1.2kg",
            // food: {
            //     price: 10
            // }
        },
    }
};

console.log(petOwner.pet.info.food?.price);