import {
    Card,
    Typography,
} from "@material-tailwind/react";
import { useLocation } from "react-router-dom";

const AppointmentDetail = () => {
    const location = useLocation();
    const appointment = location.state;

    return (
        <>
            <br /><br /><br />
            <Card color="transparent" shadow={true}>
                <Typography variant="h4" color="blue-gray" className="mb-5">
                    Récapitulatif de mon rendez-vous médical
                </Typography>

                <div className="mb-1 flex flex-col gap-6 mx-6">

                    <Typography variant="h6" color="blue-gray" className="mb-1">
                        <span className="flex items-center">Telephone : {appointment.patientPhoneNumber}</span>
                    </Typography>

                    <Typography variant="h6" color="blue-gray" className="mb-1">
                        <span className="flex items-center">Nom : {appointment.patientSurName}</span>
                    </Typography>

                    <Typography variant="h6" color="blue-gray" className="mb-1">
                        <span className="flex items-center">Prénom : {appointment.patientFirsName}</span>
                    </Typography>

                    <Typography variant="h6" color="blue-gray" className="mb-1">
                        <span className="flex items-center">Lieu : {appointment.medicalInstitution}</span>
                    </Typography>

                    <Typography variant="h6" color="blue-gray" className="mb-1">
                        <span className="flex items-center">Statut : {appointment.status}</span>
                    </Typography>

                    <Typography variant="h6" color="blue-gray" className="mb-1">
                        <span className="flex items-center">Date : {appointment.appointmentDate.toLocaleString()}</span>
                    </Typography>
                </div>
            </Card>
        </>
    )
}
export default AppointmentDetail