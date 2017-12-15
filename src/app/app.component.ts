import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  testModel = { email: 'a@b.de', productId: 'Netbook_B' }

  //formData = { email: 'a@b.de', password: '', product: { key: 'Netbook_B'} };

  helloWorld() {
    alert('Hello world!');
  }

  //email: string;
  // form: FormGroup;
  // emailControl: AbstractControl;
  // passwordControl: AbstractControl;
  // lookupControl: AbstractControl;


  products = [
    {
      key: 'Notebook_A',
      name: 'Notebook A'
    }, {
      key: 'Netbook_B',
      name: 'Netbook B'
    }, {
      key: 'Netbook_C',
      name: 'Netbook Cee'
    }, {
      key: 'Netbook_D',
      name: 'Netbook D123'
    }
  ];


  ngOnInit() {
    // this.form = new FormGroup({
    //   emailControl: new FormControl('', Validators.compose([Validators.required])),
    //   passwordControl: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
    //   lookupControl: new FormControl('', Validators.compose([Validators.required]))
    // });
    // this.emailControl = this.form.controls['emailControl'];
    // this.passwordControl = this.form.controls['passwordControl'];
    // this.lookupControl = this.form.controls['lookupControl'];
  }

  // toggleFormControlsState(e) {
  //   if (e.value) {
  //     this.emailControl.disable();
  //     this.passwordControl.disable();
  //   } else {
  //     this.emailControl.enable();
  //     this.passwordControl.enable();
  //   }
  // }
}
