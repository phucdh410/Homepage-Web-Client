const formatNumber = (numb: number) => {
  return numb < 10 ? `0${numb}` : numb;
};

export const convertNumberToTime = (input: number) => {
  //! Input is second duration
  const hours = Math.floor(input / 3600);
  const minutes = Math.floor((input % 3600) / 60);
  const remainingSeconds = Math.floor(input % 60);

  if (hours)
    return (
      hours + ":" + formatNumber(minutes) + ":" + formatNumber(remainingSeconds)
    );

  return formatNumber(minutes) + ":" + formatNumber(remainingSeconds);
};
