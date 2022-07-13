export const dateConverter = (date: Date) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1 < 10 ? `0${newDate.getMonth() + 1}` : newDate.getMonth() + 1;
  const day = newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();

  if (year && month && day) {
    return `${year}.${month}.${day}`;
  }

  return null
};
