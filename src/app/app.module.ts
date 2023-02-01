import{ NgModule } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';


@NgModule({
  imports:[
    BrowserDynamicTestingModule
  ], 
  declarations:[
    AppComponent,
    PostComponent,
   
  ],
  bootstrap:[AppComponent]

})
export class AppModule{

}