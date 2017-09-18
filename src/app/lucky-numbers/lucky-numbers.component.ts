import { Component, OnInit, Input } from '@angular/core';
import { AppService } from "../app.service";

@Component({
  selector: 'app-lucky-numbers',
  templateUrl: './lucky-numbers.component.html',
  styleUrls: ['./lucky-numbers.component.scss']
})
export class LuckyNumbersComponent implements OnInit {
  @Input() matchedBalls: string = "";
  luckyNumbers: any[] = [];

  matchedBlue: string = "0";
  matchedRed: any[] = [];

  constructor(
    private appService: AppService
  ) {}

  ngOnInit() {
    let luckyNumbers = this.appService.getLuckNumbers();

    luckyNumbers.forEach((balls) => {
      let redBalls = balls.split("+")[0];
      let blueBall = balls.split("+")[1];
      this.luckyNumbers.push({
        redBalls: redBalls.split(","),
        blueBall: blueBall
      });
    });
    
    if(this.matchedBalls) {
      this.matchedBlue = this.matchedBalls.split("+")[1];
      this.matchedRed = this.matchedBalls.split("+")[0].split(",");
    }
  }
  
  isMatchedRedBall(redBall) {
    return this.matchedBalls && !this.matchedRed.includes(redBall);
  }
}
