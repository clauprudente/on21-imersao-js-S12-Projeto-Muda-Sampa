class Plant {
  name;
  quantity;
  address;

  constructor(name, quantity, address) {
    this.name = name;
    this.quantity = quantity;
    this.address = address;

    this.constructor.createdPlants.push({
      name: name,
      quantity: quantity,
      address: address,
    });
  }
  setName(newVal) {
    this.name = newVal;
  }
  setQuantity(newVal) {
    this.quantity = newVal;
  }

  static createdPlants = [];
}

module.exports = Plant;
