import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'app-slide2',
  templateUrl: './slide2.component.html',
  styleUrls: ['./slide2.component.css'],
  animations: [
    fadeIn,
    fadeOut
  ]
})
export class Slide2Component implements OnInit {

  name = 'Angular';
  show = true;

  onClick() {
    this.show = true;
  }

  onSave() {
    this.show = false;
   this.routestohome();
  }
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  routestohome(){
    setTimeout(() => {
      this.router.navigate(['/']);
  }, 3000);  //3s
}
 
}
