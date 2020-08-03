import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      identifier: [null, Validators.required],
      password: [null, Validators.required]
    });
    this.inDev();
  }

  onSubmit(): void {
    this.service.login(this.form.value).subscribe(
      success => this.router.navigate(['products'])
    );
  }


  inDev(): void {
    this.form.patchValue({
      identifier: 'dev@bravosul.com.br',
      password: 'Brvsl@2020'
    });
  }
}
