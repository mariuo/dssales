import { Gender } from '../types';

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-CA', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'CAD'
  }).format(price);
};

export const formatDate = (date: Date | string) => {
  return new Date(date).toLocaleDateString();
};

export const formatDateToServer = (date?: Date) => {
  if (date) {
    return date?.toISOString().substring(0, 10);
  }
};

export const formatGender = (gender: Gender) => {
  const textByGender = {
    MALE: 'Homme',
    FEMALE: 'Femmme',
    OTHER: 'Autres'
  };
  return textByGender[gender];
};
