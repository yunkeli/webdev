import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { NewerCmpComponent } from './newer-cmp/newer-cmp.component';


@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    NewCmpComponent,
    NewerCmpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
