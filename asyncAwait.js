let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let isShopOpen = false;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log(`shop is closed`));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]} was selected`);

    await time(0000);
    console.log(`Start the production`);

    await time(2000);
    console.log(`Cutting the fruit`);

    await time(1000);
    console.log(`${stocks.liquid[0]} & ${stocks.liquid[1]} has been added`);

    await time(1000);
    console.log(`Starting the machine`);

    await time(2000);
    console.log(`ice cream has been placed on the ${stocks.holder[0]}`);

    await time(3000);
    console.log(`${stocks.toppings[0]} was selected`);

    await time(2000);
    console.log(`serve ice cream `);
  } catch (error) {
    console.log(`customer left`, error);
  } finally {
    console.log(`day has ended, shop is closed`);
  }
}

kitchen();
