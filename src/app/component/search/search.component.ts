import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnChanges {

  @Input('search') defaultQuery = '';

  @Output('query-change') queryEmitter = new EventEmitter<string>();

  form: FormGroup;
  query: FormControl;

  constructor (private formBuilder: FormBuilder) {
    this.query = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100)
    ]);
    this.form = this.formBuilder.group({
      query: this.query
    });
  }

  ngOnChanges (changes) {
    if (changes.defaultQuery) {
      this.query.setValue(this.defaultQuery);
    }
  }

  submit () {
    this.queryEmitter.emit(this.query.value);
  }
}
