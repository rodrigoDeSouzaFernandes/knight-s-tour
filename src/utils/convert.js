export const getMatrixPosition = (position) => {
  const [column, line] = position.toLowerCase().split('');

  const toNumber = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  };

  return `${line -1}-${toNumber[column] -1}`
};

export const toLetter = (num) =>
  [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'][Number(num)];
