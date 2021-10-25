///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

 const summedPrice = cart.reduce((acc, curr) => ({price: acc.price + curr.price}))

 console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => {
  // converted coupon to percent assuming its passed as a whole number instead of decimal. ex 50 instead of .5
  return (cartTotal + (cartTotal * tax/100)) * (couponValue/100)
}
console.log(`Final Price: ${calcFinalPrice(100,50,10)}`);

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    first and last name = keep track of who's who (string because thats the best data type for this)

    email = to send emails such as ads and coupons to keep customers interested (string because thats the best data type for this)
    
    rewards member = to determine whether or not they're a member and to gauge customer interest (boolean because this only needs to be a true or false value)

    first time = to take note of whether or not this is a new customer for targeted promos (boolean because this only needs to be a true or false value)

    address = to keep track of our where our customers are coming from (object consisting of 3 string and 1 int because each category within the address needs to be seperated to accessed easily)

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let customer = {
  firstName: "Jay",
  lastName: "Gatsby",
  email: "jayGatsby@oldsport.co",
  isMember: true,
  firstTime: false,
  address: {
    street: "235 Middle Neck Road",
    city: "Port Washington",
    state: "NY",
    zipCode: 11050
  }
}
console.log(customer);
