import { UserFromDb } from './UserFromDb';

export type DocumentResponse = {
    id: string;
    description: string | null;
    fileExtension: string;
    fileName: string;
    ownerId: string;
    allowedUsers: UserFromDb[]
};
