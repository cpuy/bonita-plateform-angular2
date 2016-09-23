import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works! awesome dude';

  jvmStatic: any = "";
  jvmDynamic: any = "";
  plateform: any = "";
  


  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('/bonita/API/platform/jvmStatic/undefined')
      .subscribe(response => {
        this.jvmStatic = response.json();
      });

    this.http.get('/bonita/API/platform/jvmDynamic/undefined')
      .subscribe(response => {
        this.jvmDynamic = response.json();
      });

      this.http.get('/bonita/API/platform/platform/undefined')
      .subscribe(response => {
        this.plateform = response.json();
      });
      
  }
}
