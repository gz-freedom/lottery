import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";
import { ApiService } from "./api.service";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

const myLuckyNumbers = [
  "5,24,28,30,32,33+13"
];

@Injectable()
export class AppService {

  constructor(
    private apiService: ApiService
  ) { }
  
  getLuckNumbers() {
    return myLuckyNumbers;
  }

  getLatestLotteryNumbers():Observable<any> {
    return this.apiService.getLatestLotteryNumbers();
  }

}
