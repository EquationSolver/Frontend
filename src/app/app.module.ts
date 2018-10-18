import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { ButtonComponent } from './components/index/button/button.component';
import { InputComponent } from './components/index/input/input.component';
import {FormsModule} from '@angular/forms';
import { ResultComponent } from './components/index/result/result.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ButtonComponent,
    InputComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
