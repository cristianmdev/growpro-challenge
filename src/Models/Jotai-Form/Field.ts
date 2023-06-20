/**
 * @desc Interfaz de los campos
 */
export interface IField {
    isDirty: boolean;
    isValid: boolean;
    value: string | number | boolean | null | undefined;
    error: {
        message: string;
    }
}

/**
 * @desc Interfaz de los campos
 */
export interface IFieldDate extends Omit<IField, 'value'>{
    value: string
}