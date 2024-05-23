// Example of Stack (Primitive types):
// Primitive types like strings are stored on the stack.
let website = "anandachaudhary.com.np"; // 'website' stores the string value directly.

let anotherName = website; // 'anotherName' creates a copy of the string value in 'website'.

console.log(website); // Outputs: anandachaudhary.com.np
console.log(anotherName); // Outputs: anandachaudhary.com.np

// Changing the value of 'anotherName' does not affect 'website' because they are separate copies.
anotherName = "newwebsite.com";
console.log(website); // Still outputs: anandachaudhary.com.np
console.log(anotherName); // Outputs: newwebsite.com

// Example of Heap (Non-Primitive types):
// Non-primitive types like objects are stored on the heap.
let user1 = {
    email: "user1@gmail.com",
    khali: "khalti.com"
};

// 'user2' does not create a new object; it copies the reference to the same object in memory.
let user2 = user1;

// Changing a property on 'user2' affects 'user1' because both references point to the same object.
user2.email = "ananda@gmail.com";

console.log(user1.email); // Outputs: ananda@gmail.com (since 'user1' and 'user2' refer to the same object)
console.log(user2.email); // Outputs: ananda@gmail.com (same as above)
