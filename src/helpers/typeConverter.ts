export const typeConverter = (filmType: number) => {
  switch (filmType) {
    case 1:
      return 'фильм';

    case 3:
      return 'мультфильм';

    case 2:
    case 5:
      return 'сериал';

    default:
      return 'фильм';
  }
};
