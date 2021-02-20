import { Component, HostListener, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  item:any;
  // ans1=[{info:"",ans:[]}];
  info:any;
  index:any;

  suggested = []

  other_options = ['banana', 'strawberry', 'mango', 'apple', 'pears', 'grapes']
  myReactiveForm: FormGroup;
  

  answer = [
    {
      group: 'Suggested',
      
      items:this.suggested,
      // items:[{infos:"",ans1:[]}],
      
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
  }

  onSubmit() {
    console.log(this.myReactiveForm);
    this.item = this.myReactiveForm.get('ans').value
    this.info = this.myReactiveForm.get('info').value

    if (this.suggested.indexOf(this.item) == -1) {
      this.suggested.push(this.item)
      // this.answer[1].items=this.suggested.slice(-2,).reverse()

    } else {
      this.index = this.suggested.indexOf(this.item)
      this.suggested.splice(this.index, 1)
      this.suggested.push(this.item)
      // this.answer[1].items=this.suggested.slice(-2,).reverse()

    }

    this.answer = [
      {
        group: 'Suggested',
        items: this.suggested.slice(-2,).reverse(),
      },
      {
        group: 'other options',
        items: this.other_options,
      },
    ];
    // this.ans1.push({info:this.myReactiveForm.get('info').value,ans:[ this.myReactiveForm.get('info').value]})


  }
}


