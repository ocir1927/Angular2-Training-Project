import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.css']
})
export class InputPasswordComponent implements OnInit {

  constructor() { }

  passwordFormControl = new FormControl('', [
    Validators.minLength(5)]);


  ngOnInit() {
  }

}
