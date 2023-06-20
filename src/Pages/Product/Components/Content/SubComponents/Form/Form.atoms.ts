/**
 * @desc Dependencies
 */
import { atomWithValidate, validateAtoms } from "jotai-form";
import * as Yup from "yup";
import Dayjs from 'dayjs'

/**
 * @desc Formulario
 */
export interface Form { 
  firstName: string;
  email: string;
  areaPhone: string;
  phone: string;
  dateFrom: string;
  quantity: number;
}


/**
 * @desc Schemes
 */
const schemes = {
    "name": Yup.string()
                .min(2, "El minimo son 2 caracteres en el nombre")
                .max(25, "El maximo son 25 caracteres en el nombre")
                .required("El nombre es requerido"),
    "email": Yup.string()
                .email("El formato de email es invalido")
                .required("El email es requerido"),
    "areaPhone": Yup.string()
                    .max(4, "El maximo son 4 caracteres en el cod de area")
                    .required("El cod de area es requerido"),
    "phone": Yup.string()
                .max(10, "El maximo son 10 caracteres en el cod de area")
                .required("El telefono es requerido"),
    "dateFrom": Yup.string()
                .required("La fecha de inicio es requerida"),
    "quantity": Yup.number()
                  .positive("Debe ser un numero positivo")
                  .integer()
                  .max(31, "El maximo son 31 dias de alquiler <br /> comunicate con un asesor por más")
                  .required("La cantidad de dias es requerida")
};

/**
 * @desc Primer nombre
 */
export const atomFirstName = atomWithValidate<string>('', {
  validate: async (v : string) => {

    if( v.length < 2 ) return v;

    await schemes.name.validate(v);
    return v;
  },
});

/**
 * @desc Email del usuario
 */
export const atomEmail = atomWithValidate<string>('', {
    validate: async (v) => {

      if( v.length < 5 ) return v;

      await schemes.email.validate(v);
      return v;
    },
  });
  
/**
 * @desc Codigo de area del telefono
 */
export const atomAreaPhone = atomWithValidate<string>('', {
    validate: async (v) => {

      if( v.length < 1 ) return v;

      await schemes.areaPhone.validate(v);
      return v;
    },
  });
  
/**
 * @desc Numero de telefono
 */
export const atomPhone = atomWithValidate<string>('', {
    validate: async (v) => {
      
      if( v.length < 3 ) return v;
      
      await schemes.phone.validate(v);
      return v;
    },
  });

/**
 * @desc Numero de telefono
 */
export const atomDateFrom = atomWithValidate<string>( Dayjs().format("YYYY-MM-DD"), {
    validate: async (v) => {
      await schemes.dateFrom.validate(v);
      return v;
    },
  });


/**
 * @desc Cantidad
 */
export const atomQuantity = atomWithValidate<number>( 0, {
    validate: async (v) => {

      // Si no hay valor es 0.
      if( !v || v < 1) return 0;

      await schemes.quantity.validate(v);
      return v;
    },
  });

/**
 * @desc Formulario
 */
export const formGroup = validateAtoms(
    {
      firstName: atomFirstName,
      email: atomEmail,
      areaPhone: atomAreaPhone,
      phone: atomPhone,
      dateFrom: atomDateFrom,
      quantity: atomQuantity
    },
    ( values: Record<keyof Form, string | number> ) : void => {

        if ( typeof values.firstName == "string" && ( values.firstName.length <= 2 || values.firstName.length > 40 ) )
            throw new Error("Overall [name] can't be longer minus of 2 and than 40 characters");
        
        if (typeof values.email == "string" && values.email.length > 40)
            throw new Error("Overall [email] can't be longer than 40 characters");

        if (typeof values.areaPhone == "string" && values.areaPhone.length > 3)
            throw new Error("Overall [area phone] can't be longer than 3 characters");

        if (typeof values.phone == "string" && values.phone.length > 15)
            throw new Error("Overall phone can't be longer than 10 characters");

        if ( typeof values.quantity === "number" && values.quantity === 0 )
            throw new Error("quantity is not a positive number");

    },
  );