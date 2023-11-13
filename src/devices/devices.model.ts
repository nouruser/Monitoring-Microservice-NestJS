import { Prisma } from '@prisma/client'; 


export class Devices implements Prisma.DevicesCreateInput {
    id: number;
    name: string;
    connectionTime: string;
    disconnectionTime?: string;
    type?: string;
    manufacturer?: string;
    firmwareVersion?: string;
}

