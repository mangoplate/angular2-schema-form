import { Component } from '@angular/core';

import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-checkbox-widget',
  template: `<div>
	<div class="checkbox">
		<label class="horizontal control-label">
			<input [formControl]="control" [attr.name]="name" [indeterminate]="control.value !== false && control.value !== true ? true :null" type="checkbox" [attr.disabled]="schema.readOnly">
			<input *ngIf="schema.readOnly" [attr.name]="name" type="hidden" [formControl]="control">
			{{schema.description}}
		</label>
	</div>
</div>`
})
export class CheckboxWidget extends ControlWidget {}
