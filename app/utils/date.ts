export function getCurrentDate() {
  const date = new Date();

  return {
    day: date.getDate(),
    month: date.getMonth() - 1,
    year: date.getFullYear(),
  }
}