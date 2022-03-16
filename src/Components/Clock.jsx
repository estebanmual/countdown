import { useEffect, useState } from 'react'
import style from './Clock.module.css'

function Clock(props) {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    setSeconds(Math.floor((time/1000) % 60));
    setMinutes(Math.floor((time/1000/60) % 60));
    setHours(Math.floor((time/(1000*60*60)% 24)));
    setDays(Math.floor((time/(1000*60*60*24))));
  }

  useEffect(() => {
    getTimeUntil(props.deadline);
  })

  useEffect(() => {
    setInterval(() => getTimeUntil(props.deadline), 1000)
  }, [props.deadline])

  const leading0 = (num) => {
    return num < 10 ? '0' + num : num
  }

return (
    <div className={style.clock}>
            <div className={style.clock__days}>{leading0(days)} days</div>
            <div className={style.clock__hours}>{leading0(hours)} hours</div>
            <div className={style.clock__minutes}>{leading0(minutes)} minutes</div>
            <div className={style.clock__seconds}>{leading0(seconds)} seconds</div>
        </div>
  )
}

export default Clock