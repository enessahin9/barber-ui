export interface Order {
    fullName: string | null;
    phoneNumber: string | null;
    email: string | null;
    cargoBranch: string | null;
    sendDate: string | null;
    sendCode: string | null;
    canceledAt: string | null;
    canceledUser: number | null;
    isSend: boolean | null;
    isCancel: boolean | null;

}