console.log("Customer Records Tracker");

let customers = [
    { 
        name: "Rj", 
        email: "Rj@gmail.com",
        purchase: ["apple", "banana"] 
    },
    {   
        name: "Aiden", 
        email: "Aiden@gmail.com",
        purchase: ["pencil", "water"] 
    },
    { 
        name: "Alex", 
        email: "Alex@gmail.com",
        purchase: ["couch", "pillow"]

    },

];

customers.push({
    name: "Ethan",
    email: "Ethan@gmail.com",
    purchase: ["container", "peanut"]

    
});

customers.shift();

console.log(customers);

