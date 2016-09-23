import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works! awesome dude';

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('/bonita/API/platform/jvmStatic/undefined')
      .subscribe(response => {

        console.log(response.json());

        // logs the array of races
      });
  }
}
