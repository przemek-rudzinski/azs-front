import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useState } from 'react'

const DatePicker = (props: { onDayChange: any }) => {
  const [value, onChange] = useState(new Date())
  return (
    <form>
      <h2 className=' text-center font-bold '>kalendarz</h2>
      <Calendar onChange={(val: any) => props.onDayChange(val)} value={value} />
    </form>
  )
}

export default DatePicker
