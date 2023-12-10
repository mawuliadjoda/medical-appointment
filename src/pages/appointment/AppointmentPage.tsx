import { FormEvent, useState } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import { Params, useNavigate, useParams } from "react-router-dom";
import { Appointment, AppointmentStatusEnum } from "./Appointment";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { sendWhatsappConfirmationMessage } from "../../whatsappService/WhatsappService";

// https://reactdatepicker.com/
// https://reactdatepicker.com/
// https://refine.dev/blog/react-date-picker/#select-time
// https://github.com/Hacker0x01/react-datepicker/tree/main
function AppointmentPage() {
  const { tel } = useParams<Params>();
  const [startDate, setStartDate] = useState(new Date());
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");

  const navigate = useNavigate();

  // const handleColor = (time: any) => {
  //   return time.getHours() > 12 ? "text-success" : "text-error";
  // };


  const addAppointment = async (e: FormEvent) => {
    e.preventDefault();

    console.log(startDate);
    console.log(firstName);
    console.log(surName);

    const appointment: Appointment = {
      patientSurName: surName,
      patientFirsName: firstName,
      patientPhoneNumber: tel!,
      appointmentDate: startDate,
      medicalInstitution: import.meta.env.VITE_MEDICAL_INSTITUTION,
      status: AppointmentStatusEnum.CONFIRMED
    }

    try {
      const docRef = await addDoc(collection(db, "appointments"), appointment);
      await sendWhatsappConfirmationMessage(surName, tel!, startDate);
      console.log("Document written with ID: ", docRef.id);
    

      // const navigateProps: NavigateProps = {
      //   to: '/appointmentDetail',
      //   state: appointment
      // }
      navigate( '/appointmentDetail', { state: appointment })
      // Navigate(navigateProps)

    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }

  return (
    <>
      <br />
      <Card color="transparent" shadow={true}>

        <Typography variant="h6" color="blue-gray">
          Mon rendez-vous médical
        </Typography>
        <form className="mt-8 mb-2  max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6 mx-6">
            <Typography variant="h6" color="blue-gray" className="mb-1">
              <span className="flex items-center">Telephone : {tel}</span>
            </Typography>

            <Typography variant="h6" color="blue-gray" className="mb-1">
              <span className="flex items-center">Nom</span>
            </Typography>
            <Input
              crossOrigin={undefined}
              size="lg"
              placeholder="Saisir votre nom"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setSurName(e.target.value)} />

            <Typography variant="h6" color="blue-gray" className="-mb-1">
              <span className="flex items-center">Prénom</span>
            </Typography>
            <Input
              crossOrigin={undefined}
              size="lg"
              placeholder="Saisir votre prénom"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <Typography variant="h6" color="blue-gray" className="mb-1">
              <span className="flex items-center">Choisir une date</span>
            </Typography>
          </div>

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

          <div className="mb-1 flex flex-col gap-6 mx-5">
            <Button
              className="mt-6"
              fullWidth
              onClick={addAppointment}>
              Valider
            </Button>
          </div>


        </form>
      </Card>

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
      {/* <DatePicker
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
      /> */}

    </>
  );
}

export default AppointmentPage;
