import { Component, OnInit } from '@angular/core';
import { TraveldetailService } from './traveldetail.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.css'],
  providers: [TraveldetailService],
})
export class TravelDetailComponent implements OnInit {
  ELEMENT_DATA = {
    action: '',
    requestid: '',
    requesteddate: '',
    traveldate: '',
    traveltime: '',
    sourceLocation: '',
    destinationLocation: '',
    travelType: '',
    currentStatus: '',
  };
  travelDetailsArray: any[] = [];
  displayedColumns: string[] = [
    'action',
    'requestid',
    'requesteddate',
    'traveldate',
    'traveltime',
    'sourceLocation',
    'destinationLocation',
    'travelType',
    'currentStatus',
  ];
  dataSource: any[] = [];

  constructor(private traveldetailService: TraveldetailService) {}

  ngOnInit(): void {
    this.getTraveldetails();
  }
  getTraveldetails(): void {
    this.traveldetailService.getTraveldetails().subscribe((details) => {
      details.response.forEach((element: any) => {
        (this.ELEMENT_DATA.requestid = element.REQUEST_NUM),
          (this.ELEMENT_DATA.requesteddate = element.REQUESTED_DATETIME),
          (this.ELEMENT_DATA.traveldate = element.TRAVEL_DATE),
          (this.ELEMENT_DATA.traveltime = element.TRAVEL_TIME),
          (this.ELEMENT_DATA.sourceLocation = element.SOURCE_LOCATION),
          (this.ELEMENT_DATA.destinationLocation = element.DEST_LOCATION),
          (this.ELEMENT_DATA.travelType = element.TRAVEL_TYPE),
          (this.ELEMENT_DATA.currentStatus = element.CURRENT_STATUS);
        this.travelDetailsArray.push(this.ELEMENT_DATA);
        this.dataSource = this.travelDetailsArray;
      });
    });
  }
}
