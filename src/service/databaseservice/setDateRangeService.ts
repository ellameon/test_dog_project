export function setDateRangeService(): Array<string> {
  const fromDate =new Date('23.12.2021').toLocaleDateString("ru")
    const forDate = new Date().toLocaleDateString("ru")

  return [fromDate, forDate]
}