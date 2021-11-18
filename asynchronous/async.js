let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected`);

    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("Production has started");

    setTimeout(() => {
      console.log("The fruit has been chopped");

      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

        setTimeout(() => {
          console.log("the machine has been started");

          setTimeout(() => {
            console.log(`ice cream was placed on the ${stocks.holder[0]}`);

            setTimeout(() => {
              console.log(
                `${stocks.toppings[0]} topping was placed on the ice cream`
              );

              setTimeout(() => {
                console.log("serve ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

order(0, production);

// The outcome is that i now understand what callbacks do and how they can be used. This example above would be as we call it a callback hell
// as it is not very easy on the eye and not clear for yourself nor other developers to read.
// The solution? Promises.
