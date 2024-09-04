import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  
  currentTime: string;
  modalRef?: BsModalRef;
  bsModalRef?: BsModalRef;
  constructor(private modalService: BsModalService, public dialog: MatDialog) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.openLoginModal();
    }, 1000)
    
  }
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

  openLoginModal(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '1100px',
      height: '500px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
