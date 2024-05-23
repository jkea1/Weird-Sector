export function timeAgo(pastTimeIso: string): string {
  const now = new Date()
  const pastTime = new Date(pastTimeIso)
  const delta = (now.getTime() - pastTime.getTime()) / 1000

  if (delta < 60) {
    return `${Math.floor(delta)}초 전`
  } else if (delta < 3600) {
    return `${Math.floor(delta / 60)}분 전`
  } else if (delta < 86400) {
    return `${Math.floor(delta / 3600)}시간 전`
  } else {
    return `${Math.floor(delta / 86400)}일 전`
  }
}
