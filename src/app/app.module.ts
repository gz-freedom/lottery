import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from "@angular/http";
import { AppService } from "./app.service";
import { ApiService } from "./api.service";
import { AppComponent } from './app.component';
import { LotteryNumbersComponent } from "./lottery-numbers.component";
import { AppDirective } from "./app.directive";
import { LuckyNumbersComponent } from './lucky-numbers/lucky-numbers.component';

@NgModule({
  declarations: [
    AppComponent,
    LotteryNumbersComponent,
    AppDirective,
    LuckyNumbersComponent
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
