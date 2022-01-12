<script>
  export let target = new Date('2022-06-04T09:00+02:00')

  import { format, formatDistanceToNow } from 'date-fns'

  const units = {
    day: 86400 * 1000,
    hour: 3600 * 1000,
    minute: 60 * 1000,
    second: 1 * 1000
  }

  let str
  function updateTime () {
    const now = new Date()
    const diff = Number(target) - Number(now)
    const days = Math.floor(diff/units.day)

    const out = {}
    let used = 0
    for (const unit of Object.keys(units)) {
      out[unit] = Math.floor((diff-used)/units[unit])
      used += out[unit] * units[unit]
    }
    str = `${out.day} dnů ${out.hour} hodin ${out.minute} minut ${out.second} vteřin`
  }
  updateTime()
  setInterval(updateTime, 1000)

</script>

<div>Do zahájení zbývá {str}</div>
