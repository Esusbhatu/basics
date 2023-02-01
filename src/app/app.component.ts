
 import { Component } from '@angular/core';

 @Component({
  selector:  'app-root',
 templateUrl: './app.component.html', 
 styleUrls:['./app.component.css']

 })
export class AppComponent{
  name =  'Luis ramirez!'
  imgURL = 'https://picsum.photos/id/237/500/500'
  imges = [
    'https://picsum.photos/id/237/500/500',
    'https://picsum.photos/id/1023/500/500',
    'https://picsum.photos/id/23/500/500'
  ]
  currentlydate = new Date()
  cost = 200
  tepm = 25.3 
  pizza = {
    toppings:["pacaronie", "bacor"],
    size : "large"
  }

  blueClass = false
   fontSize = 24
  
  

  getName(){
   return this.name
  }
  
  changeImage(e:KeyboardEvent){
    this.imgURL= (e.target as HTMLInputElement).value
 
  }

  logImg(event: String){
    console.log(event)
  }
}