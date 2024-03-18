export const sortArrayOfObjects = <T>(array: Array<T>, field: keyof T) => {
  return array.sort((a, b) => {
    const stateA = String(a[field]).toLowerCase();
    const stateB = String(b[field]).toLowerCase();
    if (stateA < stateB) {
      return -1;
    }
    if (stateA > stateB) {
      return +1;
    }
    return 0;
  });
};
