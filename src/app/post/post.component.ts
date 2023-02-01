import { Component, Input, EventEmitter, Output, OnInit, OnChanges, DoCheck,
   AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit,OnChanges, DoCheck,
AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked  {

 @Input('img') postImg = ''

 @Output() imgSelected = new EventEmitter<string>()
 
 
  constructor(){
    console.log("constructor() called" ,this.postImg)
  }
    ngOnInit(){
      console.log('ngOnInit() called', this.postImg)
    }
  ngDoCheck() {
    console.log("check called")
  }
  ngOnChanges(){
    console.log("Chanhes called")
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentCheked() called")
  }

 ngAfterContentInit() {

  console.log("ngAfterContentInit() called")
   
 } 
 ngAfterViewChecked() {
  console.log("ngAfterViewChecked() called")
 }

 ngAfterViewInit() {
  console.log("ngAfterViewInit called")
 }

}
