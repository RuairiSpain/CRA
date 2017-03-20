export const products = [
  {
    name: "Apple",
    price: 0.25,
    related: ["Orange", "Papaya"]
  }, {
    name: "Orange",
    price: 0.30
  }, {
    name: "Banana",
    price: 0.15,
    related: ["Orange", "Papaya", "Apple"]
  }, {
    name: "Papaya",
    price: 0.50,
    related: ["Banana"],
    discount: {
      volume: {
        buy: 3,
        pay: 2,
        notice: "Buy 3 for the price of 2",
        recommendationNotice: "Product suggestion: Add an extra Papaya for FREE!"
      }
    }
  }
];