
/**
 * @desc Interfaz del formulario
 */
export interface IForm {
    error: null | string | unknown;
    isValid: boolean | undefined;
    isValidating: undefined | boolean;
    values: object
}