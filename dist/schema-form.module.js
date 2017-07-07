import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { FormElementComponent } from './formelement.component';
import { FormComponent } from './form.component';
import { WidgetChooserComponent } from './widgetchooser.component';
import { ArrayWidget, ObjectWidget, CheckboxWidget, FileWidget, IntegerWidget, TextAreaWidget, RadioWidget, RangeWidget, SelectWidget, StringWidget, } from './defaultwidgets';
import { DefaultWidget } from './default.widget';
import { WidgetRegistry } from './widgetregistry';
import { DefaultWidgetRegistry } from './defaultwidgets';
import { SchemaValidatorFactory, ZSchemaValidatorFactory } from './schemavalidatorfactory';
var SchemaFormModule = (function () {
    function SchemaFormModule() {
    }
    SchemaFormModule.forRoot = function () {
        return {
            ngModule: SchemaFormModule,
            providers: [
                {
                    provide: WidgetRegistry,
                    useClass: DefaultWidgetRegistry
                },
                {
                    provide: SchemaValidatorFactory,
                    useClass: ZSchemaValidatorFactory
                }
            ]
        };
    };
    return SchemaFormModule;
}());
export { SchemaFormModule };
SchemaFormModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, ReactiveFormsModule],
                declarations: [
                    FormElementComponent,
                    FormComponent,
                    WidgetChooserComponent,
                    DefaultWidget,
                    ArrayWidget,
                    ObjectWidget,
                    CheckboxWidget,
                    FileWidget,
                    IntegerWidget,
                    TextAreaWidget,
                    RadioWidget,
                    RangeWidget,
                    SelectWidget,
                    StringWidget,
                ],
                entryComponents: [
                    FormElementComponent,
                    FormComponent,
                    WidgetChooserComponent,
                    ArrayWidget,
                    ObjectWidget,
                    CheckboxWidget,
                    FileWidget,
                    IntegerWidget,
                    TextAreaWidget,
                    RadioWidget,
                    RangeWidget,
                    SelectWidget,
                    StringWidget,
                ],
                exports: [
                    FormComponent,
                    FormElementComponent,
                    WidgetChooserComponent,
                    ArrayWidget,
                    ObjectWidget,
                    CheckboxWidget,
                    FileWidget,
                    IntegerWidget,
                    TextAreaWidget,
                    RadioWidget,
                    RangeWidget,
                    SelectWidget,
                    StringWidget,
                ]
            },] },
];
/** @nocollapse */
SchemaFormModule.ctorParameters = function () { return []; };
