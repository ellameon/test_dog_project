export function createDateRangeService(fromDate: Date, toDate: Date): Array<string> {

  const daysRange = []

  let currentDate = new Date(fromDate)

  while (currentDate <= toDate) {
    daysRange.push(currentDate.toLocaleDateString('ru'))
    currentDate.setDate(currentDate.getDate() + 1)
  }
  return daysRange
}