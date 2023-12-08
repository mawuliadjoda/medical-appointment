import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
// import AppointmentList from "./AppoitmentList";
import DatePicker  from 'react-datepicker';

// https://reactdatepicker.com/
// https://reactdatepicker.com/
// https://refine.dev/blog/react-date-picker/#select-time
// https://github.com/Hacker0x01/react-datepicker/tree/main
function AppointmentPage() {

  const [startDate, setStartDate] = useState(new Date());

  // const handleColor = (time: any) => {
  //   return time.getHours() > 12 ? "text-success" : "text-error";
  // };



  return (
    <>
    
 {/* 
        <DatePicker selected={startDate} onChange={(date:any) => setStartDate(date)} />
        <DatePicker
          showTimeSelect
          minTime={new Date(0, 0, 0, 12, 30)}
          maxTime={new Date(0, 0, 0, 19, 0)}
          selected={startDate}
          onChange={(date: any) => setStartDate(date)}
          timeIntervals={10}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeClassName={handleColor}
        /> */}

<br />
        <DatePicker
          selected={startDate}
          onChange={(date: any) => setStartDate(date)}
          showTimeSelect
          timeIntervals={10}
          excludeTimes={[
            new Date(0, 0, 0, 12, 30),
            new Date(0, 0, 0, 12, 40),
            new Date(0, 0, 0, 12, 50),
            new Date(0, 0, 0, 12, 20)
          ]}
          dateFormat="MMMM d, yyyy h:mm aa"
          inline
        />
      
    </>
  );
}

export default AppointmentPage;
