import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AppointmentList from "./AppoitmentList";


// https://reactdatepicker.com/
function AppointmentPage() {

  const [startDate, setStartDate] = useState(new Date());

  const handleColor = (time: any) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };



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
