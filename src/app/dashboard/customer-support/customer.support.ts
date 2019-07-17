import {
  Component,
  OnInit
} from '@angular/core';
import {
  CustomerService
} from './customer-service';
import {
  SharedData
} from '../../shared-service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
@Component({
  selector: 'customer-support',
  templateUrl: 'customer.support.html',
  styleUrls: ['./customer.support.css']
})
export class CustomerSupportComponent implements OnInit {

  constructor(private customerSupport: CustomerService, private fb: FormBuilder, private alert: SharedData) {}
  form: FormGroup
  disable = true;
  topic;
  newsubject = new FormControl("", Validators.required)
  ngOnInit() {
    this.form = this.fb.group({
      message: new FormControl("", Validators.required),
      subject: new FormControl("", Validators.required)
    })
  }
 subjects;
  CustomerSupport() {
    let pars = JSON.parse(localStorage.getItem("currentUser"));
   if(this.topic==undefined)
   {
    this.subjects=this.form.get('subject').value
   }
   else{
     this.subjects=this.topic
   }
    let obj = {
      email: pars.username,
      message:this.form.get('message').value,
      subject:this.subjects
    
    }
    this.customerSupport.support(obj).subscribe(res => {
      this.alert.AlertBox("success", "Your query has been sent")
      this.form.reset();
      this.newsubject.reset();
    });
  }

  isSubject
  queryList = [{
      key: "Having issue in download",
      value: "Having issue in download"
    },
    {
      key: "Issue related to pricing",
      value: "Issue related to pricing"
    },
    {
      key: "other",
      value: "Other"
    }
  ]
  changeSubject(event) {
    if (event.value != '') {
      this.disable = false
    }
  }
  change(event) {
    if (event.isUserInput) {
      if (event.source.value == "other") {
        this.isSubject = event.source.selected
        this.disable = true;
      } else {
        this.isSubject = false
        this.disable = false
      }
    }
  }
}