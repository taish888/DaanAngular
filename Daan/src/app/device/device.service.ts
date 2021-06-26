import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Device } from './device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) {}

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>('http://daan-env.eba-tjcupvqy.us-east-2.elasticbeanstalk.com/daan/rest/device/findAll');
    //return this.http.get<Device[]>('http://127.0.0.1:5000/daan/rest/device/findAll');
  }

  updateDevice(device: Device): Observable<Device> {
    return this.http.put<Device>('http://daan-env.eba-tjcupvqy.us-east-2.elasticbeanstalk.com/daan/devices/' + device.id, device);
    //return this.http.put<Device>('http://127.0.0.1:5000/daan/devices/' + device.id, device);
  }
}
