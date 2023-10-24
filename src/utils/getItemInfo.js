const getItemInfo = (item = {}) => {
  const { name, email, birthday_date, phone_number, address } = item;

  const parts = birthday_date.split('-');
  const day = parts[0];
  const month = parts[1];
  const year = parts[2];

  const newDate = new Date((year < 23 ? '20' : '19') + year, month - 1, day);

  const newDateStr =
    newDate.getFullYear() +
    '-' +
    (newDate.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    newDate.getDate().toString().padStart(2, '0');

  return {
    name,
    email,
    birthday_date: newDateStr,
    phone_number,
    address,
  };
};

export default getItemInfo;
