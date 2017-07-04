import {
  Component,
  ViewEncapsulation
} from '@angular/core';
import {
  WidgetRegistry,
  Validator,
  DefaultWidgetRegistry
} from './lib';

@Component({
  selector: 'sf-demo-app',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: WidgetRegistry, useClass: DefaultWidgetRegistry }]
})
export class AppComponent {
  schema: any;
  model: any;
  errors: any;
  fieldValidators = {};
  actions = {};

  constructor(registry: WidgetRegistry) {
    this.schema = require('./sampleschema.json');
  }

  changeSchema() {
    this.schema = require('./otherschema.json');
    this.errors = {
      "email": "Error!"
    }
  }
}
