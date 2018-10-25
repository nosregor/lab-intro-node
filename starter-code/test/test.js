// Load the Chai Assertion Library
const assert = require('assert');
// Require the file to be tested
const SortedList = require('../index.js');


describe('SortedList', () => {
  describe('Constructor', () => {
    it('should create an empty SortedList', () => {
      const sl = new SortedList();
      assert.equal(sl.length, 0);
      assert.equal(sl instanceof SortedList, true);
    });
  });

  describe('#add(x)', () => {
    let sl;
    beforeEach(() => {
      sl = new SortedList();
    });
    it('should add a single value to SortedList', () => {
      assert.equal(sl.length, 0);
      sl.add(1);
      assert.equal(sl.length, 1);
    });
    it('should add a third value to SortedList', () => {
      sl.add(30);
      sl.add(20);
      sl.add(10);
      assert.equal(sl.length, 3);
    });
  });

  describe('#get(i)', () => {
    let sl;
    beforeEach(() => {
      sl = new SortedList();
    });

    it('should return an OutOfBounds exception if there is no element in that position', () => {
      try {
        sl.get(20);
      } catch (e) {
        assert.equal(e instanceof Error, true);
        assert.equal(e.message, 'OutOfBounds');
        assert.throws(sl.get, Error, '/OutOfBounds/');
      }
    });

    it('should return the element in that position', () => {
      const foo = 10;
      for (i = 1; i < 200; i++) {
        sl.add(foo * i);
        assert.equal(sl.get(i), foo * i);
      }
    });
  });

  describe('#add(x) and get(i)', () => {
    let sl;
    beforeEach(() => {
      sl = new SortedList();
    });
    it('should add a second value to SortedList, sorted', () => {
      sl.add(20);
      sl.add(10);
      assert.equal(sl.get(1), 10);
      assert.equal(sl.get(2), 20);
    });
    it('should add a third value to SortedList, sorted', () => {
      sl.add(30);
      sl.add(20);
      sl.add(10);
      assert.equal(sl.get(1), 10);
      assert.equal(sl.get(2), 20);
      assert.equal(sl.get(3), 30);
    });
  });

  describe('#max()', () => {
    let sl;
    beforeEach(() => {
      sl = new SortedList();
    });

    it('should return an EmptySortedList exception if there is no element in the list', () => {
      try {
        sl.max();
        // The next line should not be executed
        assert.equal(true, false);
      } catch (e) {
        assert.equal(e instanceof Error, true);
        assert.equal(e.message, 'EmptySortedList');
      }
    });

    it('should return the max element in the list', () => {
      sl.add(10);
      sl.add(20);

      assert.equal(sl.max(), 20);
    });
  });

  describe('#min()', () => {
    let sl;
    beforeEach(() => {
      sl = new SortedList();
    });

    it('should return an EmptySortedList exception if there is no element in the list', () => {
      try {
        sl.min();
        // The next line should not be executed
        assert.equal(true, false);
      } catch (e) {
        assert.equal(e instanceof Error, true);
        assert.equal(e.message, 'EmptySortedList');
      }
    });

    it('should return the min element in the list', () => {
      sl.add(10);
      sl.add(20);

      assert.equal(sl.min(), 10);
    });
  });

  describe('#sum()', () => {
    let sl;
    beforeEach(() => {
      sl = new SortedList();
    });

    it('should return 0 for an empty sorted list', () => {
      assert.equal(sl.sum(), 0);
    });

    it('should add(sum) all elements of the array if there are elements in the list', () => {
      sl.add(1);
      sl.add(2);
      sl.add(3);
      assert.equal(sl.sum(), 6);
    });
  });

  describe('#average()', () => {
    let sl;
    beforeEach(() => {
      sl = new SortedList();
    });

    it('should return an EmptySortedList exception if there are no elements', () => {
      try {
        sl.average();
        // The next line should not be executed
        assert.equal(true, false);
      } catch (e) {
        assert.equal(e instanceof Error, true);
        assert.equal(e.message, 'EmptySortedList');
      }
    });

    it('should return the average of elements in the array', () => {
      for (i = 0; i < 101; i++) {
        sl.add(i * 2);
      }
      assert.equal(sl.average(), 100);
    });
  });
});
