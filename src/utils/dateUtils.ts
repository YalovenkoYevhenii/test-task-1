export function isValidDate(d: Date): boolean {
  return d instanceof Date && !isNaN(d.getTime());
}

export function getIsDateInRange(fromDate: Date, toDate: Date) {
  return (dateToCompare: Date) => {
    if (isValidDate(fromDate) && isValidDate(toDate)) {
      return fromDate <= dateToCompare && toDate >= dateToCompare;
    } else if (isValidDate(fromDate)) {
      return fromDate <= dateToCompare
    } else if (isValidDate(toDate)) {
      return toDate >= dateToCompare;
    }
  }
}