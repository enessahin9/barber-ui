export interface UserForViewDto // extends TimeStampRepository 
{
    id: number;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    imageUrl: string | null;
    createdAd: string | null;
    createdUser: string | null;
    updatedAt: string | null;
    updatedUser: boolean | null;
    isUpdated: boolean | null;
    deletedAt: string | null;
    deletedUser: number | null;
    isDeleted: boolean | null;
}