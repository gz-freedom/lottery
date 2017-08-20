import { Component, OnInit } from '@angular/core';
import { AppService } from "./app.service";
import { Observable } from "rxjs/observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService]
})
export class AppComponent implements OnInit {
  title = '双色球兑奖系统';
  luckyNumbers;
  latestLotteryNumbers;

  constructor(
    private appService: AppService
  ) {}

  ngOnInit() {
    this.luckyNumbers = this.appService.getLuckNumbers();
  }

  getLatestLotteryNumbers() {
    this.appService.getLatestLotteryNumbers().subscribe(res => {
      this.latestLotteryNumbers = res.data[0];
    });
  }
}
