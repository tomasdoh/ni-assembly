export default function convertTime(time) {
  let days = Math.floor(time / (60*60*1000*24) * 1);
  let hours = Math.floor((time % (60*60*1000*24)) / (60*60*1000) * 1);
  let mins = Math.floor(((time % (60*60*1000*24)) % (60*60*1000))/ (60*1000) * 1);
  let secs = Math.floor((((time % (60*60*1000*24)) % (60*60*1000)) % (60*1000)) / 1000 * 1);
  return `${days} days, ${hours} hours, ${mins} minutes, ${secs} seconds`
}
