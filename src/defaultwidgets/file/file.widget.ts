import { Component } from '@angular/core';

import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-file-widget',
  template: `<div>
	<input [name]="name" class="text-widget file-widget" [attr.id]="id" [formControl]="control" type="file" [attr.disabled]="schema.readOnly?true:null" >
	<input *ngIf="schema.readOnly" [attr.name]="name" type="hidden" [formControl]="control">
</div>`
})
export class FileWidget extends ControlWidget {

  constructor() {
    super();
  }
}
