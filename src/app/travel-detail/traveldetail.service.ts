import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TraveldetailService {
  getHeroes() {
    throw new Error('Method not implemented.');
  }

  public _url: string = "https://ustcabdev.azurewebsites.net/api/v1/flexicab/fetch-cab-details?COMPANY_ID=1001&USER_NAME=U94010@ust-global.com&START_NUM=1&ROW_COUNT=1000";
  travelDetails: any = [];
  response: any = {};
  constructor(public http: HttpClient) { }

  getTraveldetails():Observable<any> {
    
    // this.http.get(this._url).subscribe(responseData => this.response = responseData);

   return this.http.get('https://ustcabdev.azurewebsites.net/api/v1/flexicab/fetch-cab-details?COMPANY_ID=1001&USER_NAME=U94010@ust-global.com&START_NUM=1&ROW_COUNT=1000');
  }
}
