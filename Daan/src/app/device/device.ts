import { DatePipe } from "@angular/common";

export interface Device {
    id: number;
    serialNumber: string;
    equipmentNumber: string;
    type: string;
    lend: boolean;
    owner: string;
    lender: string;
    createDate: string;
    updateDate: DatePipe | 'yyyy-MM-dd HH:mm:ss';
  }