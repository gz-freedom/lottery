import { Component, Input, OnInit } from "@angular/core";
import { AppComponent } from "./app.component";

@Component({
    selector: "lottery-numbers",
    template: `
        <div class="red-zone">
            <span class="red-ball" [ngClass]="{ 'matched-ball': isMatchRedBall(red) }" *ngFor="let red of redBalls">{{ red }}</span>
        </div>
        <div class="blue-zone">
            <span class="ball" [ngClass]="{ 'matched-ball': matchedBlue === blueBall }">{{ blueBall }}</span>
        </div>
    `,
    styleUrls: ["./app.component.scss"]
})

export class LotteryNumbersComponent implements OnInit {
    @Input() lotteryNumbers: string = "";
    @Input() matchedNumbers: any;
    redBalls: any[] = [];
    blueBall: number = 0;
    matchedRed: any[] = [];
    matchedBlue: number;

    constructor() {}

    ngOnInit() {
        this.redBalls = this.lotteryNumbers.split("+")[0].split(",");
        this.blueBall = +this.lotteryNumbers.split("+")[1];
        if(this.matchedNumbers) {
            console.log(this.matchedNumbers.opencode.split("+")[0]);
            this.matchedRed = this.matchedNumbers.opencode.split("+")[0].split(",");
            this.matchedBlue = +this.matchedNumbers.opencode.split("+")[1];
        }
    }
    isMatchRedBall(ball) {
        return this.matchedRed.includes(ball);
    }
}