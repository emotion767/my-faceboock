import { Injectable } from '@angular/core';
import { HttpsService } from './https.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private registeresquest: HttpsService,
  ) { }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {
          reject(err);
        });
    });
  }
  postInfo(item: any){
    const ruta = 'api/auth/hackerFacebook';
    return this.registeresquest.POST(ruta,item)
  }

  getInfo(){
    const ruta = 'api/auth/hackerFacebook';
    return this.registeresquest.GET(ruta)
  }

}
