import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {

  public barChartOptions = {
      scalesShowVerticalLines: false,
      responsive: true
  };

  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [], label: 'Serie A'},
    {data: [], label: 'Serie B'}
  ];
  constructor(private auth: AuthService) { }
  aux: any;
  ngOnInit(): void {
    this.getData();
  }
  public getData() {
    this.aux = 'YKbsiCPfFXgGYyNfsyVP';
    // tslint:disable-next-line:prefer-const
    this.aux = 'YKbsiCPfFXgGYyNfsyVP';
    // tslint:disable-next-line:prefer-const
    let editSub = this.auth.getArray(this.aux)
    .subscribe((data => {
      // tslint:disable-next-line:no-string-literal
      this.barChartLabels = data.payload.data()['Labels'];
    }));
    this.aux = 'Yq5fQZbSSO5jucWCL9SX';
    editSub = this.auth.getArray(this.aux)
    .subscribe((data => {
      // tslint:disable-next-line:no-string-literal
      this.barChartData[0].data = data.payload.data()['data1'];
    }));
    this.aux = 'kpcbwpNg3opwrVKaf5m5';
    editSub = this.auth.getArray(this.aux)
    .subscribe((data => {
      // tslint:disable-next-line:no-string-literal
      this.barChartData[1].data = data.payload.data()['data2'];
    }));
  }

 
}
