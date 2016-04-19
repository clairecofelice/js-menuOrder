// begin with a blank/new order
var order = '';


// build a function to ask questions

function question(itemOptions) {
  var itemOrdered = prompt(itemOptions);
  order += itemOrdered + " ";
}

// call the QUESTION function with the order options
question("Choose one of the following items to customize today: burrito, bowl, taco, salad");
question("What kind of protein would you like: steak, carnitas, chicken, barbacoa, sofritas?");
question("Would you like rice, beans, or fajita veggies?");
question("Would you like to top it off with fresh tomato salsa, tomatillo red-chili salsa, sour cream, tomatillo green-chili salsa, roasted chili-corn salsa, lettuce, guac, or cheese?");
question("Would you like to add chips, salsa, or guacamole? If not, leave the field empty.");
question("Would you like to order a drink? Your options are: bottled water, juice, soft drinks, beer, and margaritas");

// output their order
document.write("<p>You ordered: " + order + "<p>");
