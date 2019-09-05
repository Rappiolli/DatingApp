import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  registerModeToggle() {
    this.registerMode = !this.registerMode;
  }

  getValues() {
    this.http.get('https://localhost:44322/api/values').subscribe(response => {
      this.values = response;
      console.log('values', this.values);
    }, error => {
      console.log(error);
    });
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
}
