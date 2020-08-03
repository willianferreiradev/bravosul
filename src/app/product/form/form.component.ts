import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: ProductService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.route.params.pipe(
      switchMap(({id}) => {
        if (id) {
          return this.service.findById(id);
        }
        return new Observable(null);
      })
    ).subscribe(
      product => this.form.patchValue(product)
    );
  }

  onSubmit(): void {
    const {id} = this.form.value;

    if (id) {
      this.service.update(this.form.value)
      .subscribe();
    } else {
      this.service.create(this.form.value)
      .subscribe();

    }
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      id: [null, Validators.required],
      name: [null, Validators.required],
      description: [null, Validators.required],
      enabled: [null, Validators.required]
    });
}
}
