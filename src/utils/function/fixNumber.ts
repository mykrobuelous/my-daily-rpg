export const fixNumber = (num: number, decimalPlaces = 1): number => {
    return isNaN(num) ? 0 : Number(num.toFixed(decimalPlaces));
};
