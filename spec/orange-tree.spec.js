const OrangeTree = require('../orange-tree');

// Test-Driven Development
describe('OrangeTree', () => {

  let tree;
  let tree1;
  let tree2;

  beforeEach(() => {
    tree = new OrangeTree(6, 5);
    tree1 = new OrangeTree(1, 5);
    tree2 = new OrangeTree(100, 25);
  });

  describe('age', () => {
    test('has an age', () => {
      expect(tree.age).toEqual(6)
    });
  });

  describe('height', () => {
    test('has a height', () => {
      expect(tree.height).toEqual(5)
    });
  });

  // Убери 'x' из `xdescribe`, чтобы включить эти тесты.
  describe('passGrowingSeason', () => {
    beforeEach(() => {
      tree.passGrowingSeason();
    })
    test('should change the tree age', () => {
      expect(tree.age).toEqual(7)
    });

    test('should make the tree grow', () => {
      // This should be more explicit. How much should the tree grow?
      expect(tree.height).toEqual(7.5)
    });

    // If the tree is old enough to bear fruit
    test('should cause the tree to produce oranges', () => {
      expect(tree.oranges.length).toBeGreaterThan(0)
    });

  });

  describe('isMature', () => {

    test('returns true if tree is old enough to bear fruit', () => {
      expect(tree.isMature()).toBeTruthy();
    });

    test('returns false if tree is not old enough to bear fruit', () => {
      expect(tree1.isMature()).toBeFalsy();
    });
  });

  describe('isDead', () => {
    test('should return false for an alive tree', () => {
      expect(tree.isDead()).toBeFalsy();
    });

    test('should return true for a dead tree', () => {
      expect(tree2.isDead()).toBeTruthy();
    });
  });

  describe('hasOranges', () => {
    test('should return true if oranges are on the tree', () => {
      tree.passGrowingSeason();
      expect(tree.hasOranges()).toBeTruthy();
    });

    test('should return false if the tree has no oranges', () => {
      expect(tree1.hasOranges()).toBeFalsy();
    });
  });

  describe('pickAnOrange', () => {
    test('should return an orange from the tree', () => {
      tree.passGrowingSeason();
      let countOranges = tree.oranges.length;
      tree.pickAnOrange();
      expect(tree.oranges.length).toBeLessThan(countOranges);
    });

    test('the returned orange should no longer be on the tree', () => {
      tree.passGrowingSeason();
      let orange = tree.pickAnOrange();
      expect(tree.oranges).toEqual(expect.not.objectContaining(orange))
    });

    test('should raise an error if the tree has no oranges', () => {
      expect(() => tree.pickAnOrange()).toThrowError(new Error('This tree has no oranges'))
    });
  });
});
