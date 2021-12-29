export function clearAlertTimeoutService(timerId: number | undefined): void {
  window.clearTimeout(timerId)
}