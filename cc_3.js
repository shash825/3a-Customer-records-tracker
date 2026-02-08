let customers = [
    { 
        name: "Rj", 
        email: "Rj@gmail.com",
        purchases: ["apple", "banana"] 
    },
    {   
        name: "Aiden", 
        email: "Aiden@gmail.com",
        purchases: ["pencil", "water"] 
    },
    { 
        name: "Alex", 
        email: "Alex@gmail.com",
        purchases: ["couch", "pillow"]

    },

];

customers.push({
    name: "Ethan",
    email: "Ethan@gmail.com",
    purchases: ["container", "peanut"]

    
});

customers.shift();

customers[0].email = "Aiden10@gmail.com";

customers[1].purchases.push("blanket");

console.log(customers);

customers.forEach(customer => {
    console.log(`${customer.name} || ${customer.email} || Number of purchases: ${customer.purchases.length}`);
});

