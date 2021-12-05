export const getAge = (dobString: string, today: Date): number => {
  const [month, day, year] = dobString.split('/').map((str) => +str);
  const dob = new Date(year, month - 1, day);

  let age = today.getFullYear() - dob.getFullYear();

  const monthsDiff = today.getMonth() - dob.getMonth();

  const preBirthday = monthsDiff < 0 || (!monthsDiff && today.getDate() < dob.getDate());

  if (preBirthday) age--;
  return age;
};
