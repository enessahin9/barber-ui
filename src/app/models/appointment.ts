export interface Appointment {
    userId: number;
    fullName: string | null;
    phoneNumber: string | null;
    email: string | null;
    startDate: string | null;
    endDate: string | null;
    isCompleted: boolean | null;

}