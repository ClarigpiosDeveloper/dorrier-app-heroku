import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { transition, style, animate, trigger } from '@angular/animations';
const enterTransition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('1s ease-in', style({
    opacity: 1
  }))
]);

const leaveTrans = transition(':leave', [
  style({
    opacity: 1
  }),
  animate('1s ease-out', style({
    opacity: 0
  }))
])

const fadeIn = trigger('fadeIn', [
  enterTransition
]);

const fadeOut = trigger('fadeOut', [
  leaveTrans
]);

@Component({
  selector: 'app-slide1',
  templateUrl: './slide1.component.html',
  styleUrls: ['./slide1.component.css'],
  animations: [
    fadeIn,
    fadeOut
  ]
})
export class Slide1Component implements OnInit {
  closeResult = '';
  name = 'Angular';
  show = true;

  onClick() {
    this.show = true;
  }

  onSave() {
    this.show = false;
   this.routestohome();
  }
  constructor(private router : Router,private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  routestohome(){
    setTimeout(() => {
      this.router.navigate(['/slide2']);
  }, 3000);  //3s
}
 

open(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}
 
}

 