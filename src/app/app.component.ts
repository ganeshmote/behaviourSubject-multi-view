import { Component, HostListener, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  item: any;
  v;
  
  info: any;
  index: any;
  a = {};
  suggested = []

  other_options = ['banana', 'strawberry', 'mango', 'apple', 'pears', 'grapes']
  myReactiveForm: FormGroup;


  answer = [
    {
      group: 'Suggested',

      items: this.suggested,

    },
    {
      group: 'other options',
      items: this.other_options,
    },
  ]

  constructor() { }
  ngOnInit() {
    this.myReactiveForm = new FormGroup({

      'ans': new FormControl(null),
      'info': new FormControl(null),

    });
    // this.myReactiveForm.valueChanges.subscribe((res) => console.log(res))
  }

  onInput(event) {
    this.v = event.target.value

    this.answer = [
      {
        group: 'Suggested',
        items: this.a[this.v]
        // .slice(-2,).reverse(),
      },
      {
        group: 'other options',
        items: this.other_options,
      },
    ];
    console.log(this.answer)

  }


  onSubmit() {


  
    this.item = this.myReactiveForm.get('ans').value
    this.info = this.myReactiveForm.get('info').value
    this.index = this.suggested.indexOf(this.item)
    if (!this.a.hasOwnProperty(this.info)) {
      this.a[this.info] = [this.item]
    }
    else {

      if (this.a[this.info].indexOf(this.item) == -1) {
        this.a[this.info].push(this.item)

      } else {
        this.a[this.info].splice(this.index, 1)
        this.a[this.info].push(this.item)
      
      }
    }
    // console.log(this.a)

    if (this.other_options.indexOf(this.item) !== -1) {
      this.other_options.splice(this.other_options.indexOf(this.item), 1)

    }

  }
}


