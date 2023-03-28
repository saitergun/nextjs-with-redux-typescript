export const createDateString = () => {
  const d = new Date()

  const year = d.getFullYear()
  const month = (d.getMonth() + 1).toString().padStart(2, '0')
  const day = d.getDate().toString().padStart(2, '0')

  const hour = d.getHours().toString().padStart(2, '0')
  const minute = d.getMinutes().toString().padStart(2, '0')
  const second = d.getSeconds().toString().padStart(2, '0')

  const date = [year, month, day].join('-')
  const time = [hour, minute, second].join(':')

  return [date, time].join(' ')
}
