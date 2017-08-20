import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from "@angular/http";
import { AppService } from "./app.service";
import { ApiService } from "./api.service";
import { AppComponent } from './app.component';
import { LotteryNumbersComponent } from "./lottery-numbers.component";
import { AppDirective } from "./app.directive";

@NgModule({
  declarations: [
    AppComponent,
    LotteryNumbersComponent,
    AppDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
