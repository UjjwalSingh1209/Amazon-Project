export function formatCurrency(pricePaisa) {
    return ((Math.round(pricePaisa) / 100)*94.36).toFixed(2);
}