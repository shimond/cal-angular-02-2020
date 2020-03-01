import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person.model';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
// import { filter, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {
  maxAge = 30;
  person: Person;
  personForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  isEven(control: AbstractControl): ValidationErrors | null {

    const num: number = control.value;
    if (num % 2 === 0) {
      return null;
    }
    return { isNotEven: { currentValue: num } };

  }


  isMaxValid(control: AbstractControl): ValidationErrors | null {
    if (control.value > this.maxAge) {
      return { maxAgeNotValid: true };
    }
  }

  complexValidation(group: AbstractControl) {
    const personToValidate: Person = group.value;
    if (personToValidate.isAdmin && personToValidate.age < 30) {
      return { adminAgeNotValid: { currentAge: personToValidate.age } };
    }
    return null;
  }

  ngOnInit(): void {
    this.person = {
      name: 'David',
      age: 11,
      email: 'dasadd@as.com',
      isAdmin: true
    };

    this.personForm = this.formBuilder.group(
      {
        name: [this.person.name, Validators.required],
        age: [this.person.age, Validators.compose([
          Validators.min(1),
          Validators.required,
          this.isEven,
          (e) => this.isMaxValid(e)])],
        email: [this.person.email],
        isAdmin: [this.person.isAdmin],
      }, { validators: this.complexValidation });

    // this.personForm.errors

    // auto save
    // this.personForm.valueChanges
    //   .pipe(filter(x => this.personForm.valid), debounceTime(400))
    //   .subscribe(x => this.save());
  }

  save() {
    this.person = this.personForm.value;
    console.log('saved');

  }


}
