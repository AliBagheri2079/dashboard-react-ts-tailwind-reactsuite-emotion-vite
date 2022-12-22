export const changePriceFormat = (number: number): string => {
  const formatedNumber = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);

  return formatedNumber;
};
