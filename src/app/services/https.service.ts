import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpsService {
  api = environment.api
  constructor(
    private http: HttpClient
  ) { }

  POST =async (sub: string, obj: any) => await this.http.post<any>(this.api + sub , obj).toPromise();
  GET = async (sub: string) => await this.http.get<any>(this.api + sub).toPromise();
}
