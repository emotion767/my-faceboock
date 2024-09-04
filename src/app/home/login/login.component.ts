import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeviceDetectorService } from 'ngx-device-detector';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpService } from './../../services/http.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    private myFormBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private deviceService: DeviceDetectorService,
    private httpService: HttpService,
    public bsModalRef: BsModalRef

  ) {
    this.getInfo();
   }

  ngOnInit(): void {
    this.form = this.myFormBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  getInfo(){
    this.httpService.getInfo().then((res: any) => {
    }).catch((err: any) => {
      console.log(err);
    })
  }
  onSubmit(data: any) {
    this.spinner.show();
    if (this.form.valid) {
      const deviseInfo = this.deviceService.getDeviceInfo();
      const isMobile = this.deviceService.isMobile();
      const isTablet = this.deviceService.isTablet();
      const isDesktop = this.deviceService.isDesktop();

      const data2 = {
        "getDeviceInfo": deviseInfo.device,
        "isMobile": isMobile,
        "isDesktop": isDesktop,
        "isTablet": isTablet,
        "email": data.username,
        "password": data.password,
        "latitud": null,
        "longitud": null
      };

      this.httpService.postInfo(data2).then((res: any) => {
        if (res) {
          this.onNoClick()
        } else {
          console.log('error en la peticion');

        }
      }).catch((err: any) => {
        console.log(err);

      })
    }else {
      console.log('error');
      
    }

    setTimeout(() => {
      this.spinner.hide();
    }, 5000)

  }

}
