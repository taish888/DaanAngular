import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'

import { Device } from './device';
import { DeviceService } from './device.service';

import { MessageService, SelectItem } from 'primeng/api';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],
  providers: [DatePipe,MessageService],
  styles: [`
    .p-cell-editing {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
  `]
})
export class DeviceComponent implements OnInit {

  devices: Device[];

  headers: any[];

  checked: boolean = true;

  clonedProducts: { [s: string]: Device; } = {};

  constructor(private deviceService: DeviceService, private messageService: MessageService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getDevices();
    this.headers = [
      { field: 'id', header: 'id' },
      { field: 'serialNumber', header: 'serialNumber' },
      { field: 'equipmentNumber', header: 'equipmentNumber' },
      { field: 'type', header: 'type' },
      { field: 'lend', header: 'lend' },
      { field: 'owner', header: 'owner' },
      { field: 'lender', header: 'lender' },
      { field: 'createDate', header: 'createDate' },
      { field: 'updateDate', header: 'updateDate' }
    ];
  }

  getDevices(): void {
    this.deviceService.getDevices().subscribe(devices => this.devices = devices);
  }

  onRowEditInit(device: Device) {
    this.clonedProducts = {};
    this.clonedProducts[device.id] = {...device};
  }

  onRowEditSave(device: Device) {
    delete this.clonedProducts[device.id];
    this.deviceService.updateDevice(device).subscribe();
    this.messageService.add({severity:'success', summary: 'Success', detail:'Product is updated'});
  }

  onRowEditCancel(device: Device, index: number) {
      this.devices[index] = this.clonedProducts[device.id];
      delete this.clonedProducts[device.id];
  }


}
