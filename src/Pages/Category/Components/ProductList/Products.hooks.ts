/**
 * @desc Dependencias
 */
import { useState, useEffect, useCallback } from "react";

/**
 * @desc Modelos
 */
import { Bicycles } from "../../../../Models/Bicycle/Bicycle";

/**
 * @desc Servicios
 */
import ServiceBicycles from "../../../../Services/Bicycle";

/**
 * @desc Interface de la lista
 */
interface ProductListHook {
    data: Bicycles;
    loading: boolean;
}

/**
 * @desc Hook: Obtiene los productos de la lista
 */
export const useProductList = () : ProductListHook => {

    // Datos
    const [ data, setData ] = useState<Bicycles>([]); 
    const [ loading, setLoading ] = useState<boolean>( true );

    /**
     * @desc Inicializa la busqueda de las bicicletas
     */
    const initialize = useCallback(async () => {
    
        try{

            // Repositorio
            const repository = new ServiceBicycles();
        
            // Obtiene los datos
            const data : Bicycles = await repository.getAll();
            
            // Actualizamos los datos
            setData( data );
            // Actualizamos la carga
            setLoading( false )

        }catch( error ){

            // Actualizamos la carga.
            setLoading( false );

        }

    }, []);

    /**
     * @desc Efecto
     */
    useEffect(() => {

        // Inicializamos la busqueda.
        initialize();

    }, [ initialize ]);

    return {
        data,
        loading
    };

};