import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experience: any;

  constructor(private http: HttpClient  ) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/getSavedExperience')
    .subscribe((data) => {
      this.experience = data;
    });
  }

}
