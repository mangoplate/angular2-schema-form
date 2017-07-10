export declare abstract class SchemaValidatorFactory {
    abstract createValidatorFn(schema: any): (value: any) => any;
}
export declare class ZSchemaValidatorFactory extends SchemaValidatorFactory {
    protected zschema: any;
    constructor();
    createValidatorFn(schema: any): (value: any) => {
        [key: string]: boolean;
    };
}
