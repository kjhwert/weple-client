export const getDate = (date: Date) => {
  const tempDate = new Date(date);
  return (
    tempDate.getFullYear() +
    '-' +
    ('0' + (tempDate.getMonth() + 1)).substr(-2) +
    '-' +
    ('0' + tempDate.getDate()).substr(-2)
  );
};

export const getTime = (date: Date) => {
  const tempDate = new Date(date);
  return ('0' + tempDate.getHours()).substr(-2) + ':' + ('0' + tempDate.getMinutes()).substr(-2);
};

export const getToday = () => {
  const today = new Date();
  return (
    today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).substr(-2) + '-' + ('0' + today.getDate()).substr(-2)
  );
};

export const getCurrent = () => {
  const today = new Date();
  return (
    ('0' + today.getHours()).substr(-2) +
    ':' +
    ('0' + today.getMinutes()).substr(-2) +
    ':' +
    ('0' + today.getSeconds()).substr(-2)
  );
};

export const getTotalTime = (date: Date) => {
  return getDate(date) + ' ' + getTime(date);
};

export const getComma = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
