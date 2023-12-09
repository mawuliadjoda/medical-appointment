import { DocumentData, QueryDocumentSnapshot, Timestamp } from "firebase/firestore"

export enum AppointmentStatusEnum {
    CONFIRMED = 'Confirm\u00E9e',
    CANCELED = 'Annul\u00E9e',
    CLOSED = 'Ferm\u00E9e',
    UNKNOWN = 'Inconnu'
}

export type Appointment = {
    id?: string,
    patientSurName: string,
    patientFirsName: string,
    patientPhoneNumber: string,
    appointmentDate: Date,
    medicalInstitution: string,
    status: AppointmentStatusEnum
    createTime?: Timestamp,
    description?: string
}


export const AppointmentConverter = {
    fromFirestore: (doc: QueryDocumentSnapshot<DocumentData, DocumentData>) => {
        const appointment: Appointment = {
            id: doc.id,
            ...doc.data()
        } as Appointment
        return appointment;
    }
};
