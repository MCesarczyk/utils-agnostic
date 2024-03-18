import { sortArrayOfObjects } from "./sort";

const array = [
  { id: 2, name: 'b' },
  { id: 4, name: 'a' },
  { id: 1, name: 'd' },
  { id: 3, name: 'c' },
];

describe('SortArrayOfObjects', () => {
  it('should properly sort an array ascending by id', () => {
    const sortedArray = sortArrayOfObjects(array, 'id');
    expect(sortedArray).toEqual([
      { id: 1, name: 'd' },
      { id: 2, name: 'b' },
      { id: 3, name: 'c' },
      { id: 4, name: 'a' },
    ]);
  });

  it('should properly sort an array ascending by name', () => {
    const sortedArray = sortArrayOfObjects(array, 'name');
    expect(sortedArray).toEqual([
      { id: 4, name: 'a' },
      { id: 2, name: 'b' },
      { id: 3, name: 'c' },
      { id: 1, name: 'd' },
    ]);
  });

  it('should do nothing when array elements are equal', () => {
    const sortedArray = sortArrayOfObjects([
      { id: 1, name: 'x' },
      { id: 1, name: 'x' },
      { id: 1, name: 'x' },
    ], 'id');
    expect(sortedArray).toEqual([
      { id: 1, name: 'x' },
      { id: 1, name: 'x' },
      { id: 1, name: 'x' },
    ]);
  });
});
