export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-CA', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'CAD'
  }).format(price);
};
export const formatDate = (date: Date) => {
  return date.toLocaleDateString();
};
