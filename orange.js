class Orange {

  constructor() {
    this.diameter = this.randomDiameter();
  }

  randomDiameter() {
    let diameters = [2.5, 2.6, 2.7, 2.8, 2.9, 3.0, 3.1, 3.2];
    return diameters[Math.floor(Math.random() * diameters.length)];
  }

  static generateOrange(count) {
    const oranges = [];
    for (let i = 0; i < count; i++) {
      oranges.push(new Orange());
    }
    return oranges;
  }
}

module.exports = Orange;


function sayHi(name) {

  console.log(name);
}

sayHi('Fn')
