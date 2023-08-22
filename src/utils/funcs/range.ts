export const miniRange = (num: number): number[] => {
  if (num === 0) return [];
  if (num < 0) {
    const value = [];
    let start = 0;
    while (value.length < Math.abs(num)) {
      value.push(start--);
    }
    return value;
  } else {
    const value = [];
    let start = 0;
    while (value.length < Math.abs(num)) {
      value.push(start++);
    }
    return value;
  }
};
