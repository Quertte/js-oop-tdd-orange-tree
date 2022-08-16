// const Orange = require('./orange');

class OrangeTree {

  constructor(age = 1, height = 5, oranges = []) {
    this.age = age;
    this.height = height;
    this.oranges = oranges;
    this.maxHeight = 25;
  }

  passGrowingSeason() {
    this.age++;
    if (this.maxHeight - this.height >= 2.5) {
      this.height += 2.5;
    }
    if (this.isMature() && this.age < 100) {
      let arr = Orange.generateOrange(Math.floor(Math.random() * (300 - 100) + 100));
      arr.forEach(el => this.oranges.push(el));
    }
  }

  isDead() {
    return this.age >= 100;
  }
  isMature() {
    //  Returns true if the tree is old enough to bear fruit, false otherwise
    return this.age >= 6;
  }

  hasOranges() {
    //  Returns true if there are any oranges on the tree, false otherwise
    return this.oranges.length > 0;
  }

  pickAnOrange() {
    //  Returns an Orange if there are any
    //  Raises a NoOrangesError otherwise
    if (!this.hasOranges()) {
      throw Error('This tree has no oranges');
    }
    return this.oranges.pop();
    //  orange-picking logic goes here
  }
}


// module.exports = OrangeTree;
