export const delay = <T>(callback: () => T, delayTime: number): Promise<T> => {
  // delayTime in miliseconds
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(callback());
    }, delayTime);
  });
};
