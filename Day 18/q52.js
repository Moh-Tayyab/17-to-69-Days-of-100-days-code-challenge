"use strict";
/*

Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details.
Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.

Explain & TIP: Just like a box can contain smaller boxes, objects can contain other objects.
This helps organize related information neatly.
*/
let smartPhone = {
    brand: 'Samsung',
    model: 'A32',
    specs: {
        storage: "128GB",
        screenSize: '6.2 inches',
        batteryLife: "10 hours"
    }
};
console.log(smartPhone);
