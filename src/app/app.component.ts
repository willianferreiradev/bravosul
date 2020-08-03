import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoaderService } from './core/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private spinner: NgxSpinnerService,
    private loader: LoaderService,
  ) { }

  ngOnInit(): void {
    this.loader.loaderState.subscribe(state => {
      state === true ? this.spinner.show() : this.spinner.hide();
    });
  }
}
