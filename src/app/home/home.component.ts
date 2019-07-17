import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import {SharedData } from './../shared-service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { SalePopUpComponent } from './popup-dialog/pop-up.dialog.component';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})

export class HomeComponent implements OnInit{
  @ViewChild('openModal') openModal: ElementRef;
  endRequest;
  loaded = false;
  CategoryCheck=false;
  public query: any;
  public Rfp: any;
  public selected: any;
  state: any = [];
  cat: any = [];
  category;
  item;
  posted = '';
  enter;
  record: any = [];
  local;
  uname;
  subscribe;
  search: boolean = false;
  enterdate;
  duedate;
  states;
  cates;
  status;
  session;
  public items:object[] = [];


  constructor(public _shareData: SharedData,public dialog: MatDialog) {
    this.items = [
      {
        title: 'Give e-Learning Wings',
        back: "url(https://cloud.geniecapture.com/sliders/banner_1.gif)",
        para: 'GenieCapture propels your organization to the next level with Creation & Consumption of Highly Interactive e-Learning Content for your Training Audience.',
        button: 'Download',
        routes:'/pricing'
      },
      {
        title: 'Unbeatable Price - One Platform',
        back: "url(https://cloud.geniecapture.com/sliders/banner_2.gif)",
        para: 'GenieCapture accelerates your business and students by sharing knowledge and adopt software the Smart Way!',
        button: 'Subscribe',
        routes:'/pricing'
      },
      {
        title: 'Super-Fast, Super-Easy',
        back: "url(https://cloud.geniecapture.com/sliders/banner_3.gif)",
        para: 'GenieCapture makes e-Learning and Software Adoption a breeze with Highly Interactive Software & Video Simulation Training Content!',
        button: 'Free 7-Day Trial',
        routes:'/pricing'
      }
    ]
      }

  public carouselOne: NgxCarousel

  ngOnInit() { 
   
    this.Timer(1563009720000)
   this.showPopUp(1563009720000)
  }
  showPopUp(oldtime)
  {
//    var dialogConfig = new MatDialogConfig();
//    dialogConfig.position = {
//     top: '0',
//     left: '0'
// };
    let now = new Date().getTime()
    let olddate = new Date(oldtime).getTime()
    var distance = olddate - now;
      if(distance > 0)
      {  
        this.dialog.open(SalePopUpComponent, {
        });
      }
  }
  
check_login() {
    if (localStorage.getItem('currentUser')) {
      this.local = localStorage.getItem('currentUser')
      let pars = JSON.parse(this.local)
      this.uname = pars.username
      return true
    }
    else if (sessionStorage.getItem('currentUser')) {
      this.session = sessionStorage.getItem('currentUser')
      let pars = JSON.parse(this.session)
      this.uname = pars.username
      return true
    }
    else {
      return false
    }
  }

  ngAfterContentInit() {
    this.carouselOne = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 3,
      point: { visible: false },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner',
      easing: 'ease'
    }
  }
  Dayss = 0; Hourss = 0; Minutess = 0; Secondss = 0; SaleOff: boolean=false
  Timer(oldtime) {
    var x = setInterval(() => {
      this.SaleOff=true;
      let now = new Date().getTime()
      let olddate = new Date(oldtime).getTime()
      var distance = olddate - now;
      this.Dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.Hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.Minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.Secondss = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        this.SaleOff=false;
        this.Dayss = 0;
        this.Hourss = 0;
        this.Minutess =0;
        this.Secondss =0;
        clearInterval(x);
      }
    }, 1000);
   
  }
}

