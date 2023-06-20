/**
 * @desc Dependencias
 */
import { useAtom,  } from "jotai";
import Dayjs from "dayjs";

/**
 * @desc Estilos
 */
import { 
    Root,
    Content,
        Section, FieldSet,
        Label, TextField,
        Calendar, 
        Error,
        Actions,
            Button
} from "./Form.styles";

/**
 * @desc Hook's
 */
import {
    useFirstName,
    useEmail,
    useAreaPhone,
    usePhone,
    useDateFrom,
    useQuantity,
} from "./Form.hooks"

/**
 * @desc Model's
 */
import { IForm } from "../../../../../../Models/Jotai-Form/Form";
import { IField } from "../../../../../../Models/Jotai-Form/Field";

/**
 * @desc Atom's
 */
import { formGroup } from "./Form.atoms";

/**
 * @desc Interfaz de las propiedades
 */
interface IFormProps {
    onSubmit: ( payload : IForm ) => Promise<void>;
}

/**
 * @desc Pantalla de productos
 */
const Form = ( props : IFormProps ) => {

    // Estado del formulario
    const { firstName, setFirstName } = useFirstName();
    const { email, setEmail } = useEmail();
    const { areaPhone, setAreaPhone } = useAreaPhone();
    const { phone, setPhone } = usePhone();
    const { dateFrom, setDateFrom } = useDateFrom();
    const { quantity, setQuantity } = useQuantity();
    const [ formState] = useAtom<IForm>( formGroup );

    // Alias de las propiedades
    const { onSubmit } = props;

    /**
     * @desc Short function for validation
     */
    const isInvalid = ( field : IField ) => {
        return ( field.isDirty && !field?.isValid ) ? true :  ( !field.isDirty ) ? true :  false;
    };
    // Indicador de la habilitación
    const disabled = (isInvalid( firstName ) || isInvalid( email ) || isInvalid( areaPhone ) || isInvalid( phone ) || isInvalid( quantity )) ? true : false;

    return (
        <Root>
            
            { /* Contenido */ }
            <Content>

                { /* Nombre del usuario */}
                <FieldSet>
                    <Label>Nombre</Label>
                    <TextField size="small" fullWidth value={ firstName.value } onChange={ setFirstName } error={ firstName.isDirty && !firstName.isValid } />
                    {
                        firstName?.error && 
                        <Error> { firstName?.error?.message } </Error>
                    }
                </FieldSet>

                { /* Email del usuario */}
                <FieldSet>
                    <Label>Email</Label>
                    <TextField size="small" fullWidth value={ email.value } onChange={ setEmail } />
                    {
                        email?.error && 
                        <Error> { email?.error?.message } </Error>
                    }
                </FieldSet>


                { /* Sección del telefono */}
                <Section>

                    { /* [Telefono] Codigo de area */}
                    <FieldSet>
                        <Label>Cod de area</Label>
                        <TextField placeholder="Ex: 011" size="small" value={ areaPhone.value } onChange={ setAreaPhone } />
                    {
                        areaPhone?.error && 
                        <Error> { areaPhone?.error?.message } </Error>
                    }
                    </FieldSet>

                    { /* [Telefono] Numero */}
                    <FieldSet>
                        <Label>Numero del télefono</Label>
                        <TextField placeholder="Ex: 2222-0404" size="small" value={ phone.value } onChange={ setPhone } />
                        {
                            phone?.error && 
                            <Error> { phone?.error?.message } </Error>
                        }
                    </FieldSet>

                </Section>

            </Content>

            { /* Contenido */ }
            <Content>

                { /* Calendario */}
                <Section>

                    { /* Fecha de inicio */}
                    <FieldSet>
                        <Label>¿ Desde cuando ?</Label>
                        <Calendar formatDensity="dense" 
                                  value={ Dayjs(dateFrom.value) } 
                                  onAccept={ setDateFrom }
                        />
                        {
                            dateFrom?.error && 
                            <Error> { dateFrom?.error?.message } </Error>
                        }

                    </FieldSet>

                    { /* Cantidad de dias */}
                    <FieldSet>
                        <Label>¿ Cuantos días ?</Label>
                        <TextField type="number" value={ quantity?.value } onChange={ setQuantity } />
                        {
                            quantity?.error && 
                            <Error dangerouslySetInnerHTML={{ __html: quantity?.error?.message }} />
                        }
                    </FieldSet>

                </Section>

            </Content>

            { /* Botón de reserva */ }
            <Actions>
                <Button variant="outlined" disabled={disabled} onClick={ () => onSubmit( formState ) }>
                    Reservar
                </Button>
            </Actions>

        </Root>
    );

};

export default Form;