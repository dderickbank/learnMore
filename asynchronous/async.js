let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let isShopOpen = true;

let order = (work, time) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log(`our shop is closed`));
    }
  });
};

order(() => console.log(`${stocks.Fruits[1]} was selected`), 2000)
  .then(() => {
    return order(() => console.log(`production has started`), 0500);
  })

  .then(() => {
    return order(() => console.log(`The fruit was chopped`), 2000);
  })

  .then(() => {
    return order(() => console.log(`Water and ice has been added`), 1000);
  })
  .then(() => {
    return order(() => console.log(`The machine has been started`), 1000);
  })
  .then(() => {
    return order(
      () => console.log(`The ${stocks.holder[1]} has been chosen`),
      2000
    );
  })
  .then(() => {
    return order(
      () => console.log(`${stocks.toppings[1]} have been added`),
      3000
    );
  })

  .then(() => {
    return order(() => console.log(`You're icecream is ready. Enjoy!`), 3000);
  })

  .catch(() => {
    console.log(`Customer left`);
  })

  .finally(() => {
    return order(() => console.log(`Day ended, shop is closed`), 3000);
  });
