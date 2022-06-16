import { Component, OnInit } from '@angular/core';
import {ResumeEdu, ResumeWork} from "../types";
import {myResumeEdu, myResumeWork} from "../data";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  resumeEdu: ResumeEdu[] = [];
  resumeWork: ResumeWork[] = [];

  constructor() { }

  ngOnInit(): void {

    this.resumeEdu = myResumeEdu;
    this.resumeWork = myResumeWork;


  }

}
