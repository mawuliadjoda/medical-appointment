import { useParams } from "react-router-dom";


type Params = {
    tel: string;
}

const PatientAppointment = () => {

    const { tel } = useParams<Params>();

    return (
        <div>
            <br />
            <br />
            <br />
            <p> welcome to PatientAppointment page </p>
            <p>Phone Number : {tel}</p>

        </div>
    );
}

export default PatientAppointment

