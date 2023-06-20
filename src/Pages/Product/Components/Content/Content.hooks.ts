/**
 * @desc Dependencias
 */
import { useCallback, useEffect, useState } from "react";
import { useAtom } from "jotai";
import { useRoute } from "wouter";

/**
 * @desc Atom's
 */
import { atomCurrentProduct } from "./Content.atoms";

/**
 * @desc Servicie's
 */
import BicycleMemoryService from "../../../../Services/Bicycle/Bicycle";

/**
 * @desc Model's
 */
import Item from "../../../../Models/Cart/Item";
import { Product } from "../../../../Models/Cart/Cart";
import { Bicycle } from "../../../../Models/Bicycle/Bicycle";
import { IForm } from "../../../../Models/Jotai-Form";
import dayjs from "dayjs";

/**
 * @desc Interface del hook
 */
interface IUseProduct {
    data: Product | null;
}

/**
 * @desc Hook: Manejador del producto
 */
export const useProduct = () : IUseProduct => {

    // Atomo del producto
    const [ data, setData ] = useAtom( atomCurrentProduct );
    // Ruta
    const [ , params ] = useRoute("/bicycle/product/:slug");

    /**
     * @desc Evento de inicialización
     */
    const initialize = useCallback(async () => {

        // Servicio
        const service = new BicycleMemoryService();

        if( !params?.slug ) return;
        
        // Validamos el tipo de parametro requerido
        const slug : string = params.slug;

        // Obtenemos la bicicleta
        const bicycle : Bicycle | undefined = await service.get( slug );

        // Validamos la existencia
        if( !bicycle ) return;

        // Obtenemos el producto
        const product = new Item({
            "id"      : "30", 
            "dateFrom": dayjs().format("DD/MM/YYYY"),
            "quantity": 1
        }, bicycle ) as Product;

        // Asignamos los datos del producto
        setData( product );

    }, [ params, setData ] );

    /**
     * @desc Obtenemos el producto en el montaje
     */
    useEffect(() => {

        if( data )
            return;

        initialize();
        
    }, [ initialize, data ] );

    return {
        data
    }

};

/**
 * @desc Interface del hook
 */
interface IUserReservation {
    showReservation: boolean;
    onOpen: ( payload : IForm ) => Promise<void>;
    onClose: ( ) => Promise<void>;
    product: Product | null;
}

/**
 * @desc Hook: Manejador de la reservación
 */
export const useReservation = ( ) : IUserReservation  => {

    // Estado de visulizacion
    const [ showReservation, setShowReservation ] = useState( false );
    const [ product, setProduct ] = useState<Product | null>( null );

    /**
     * @desc Manejador de la apertura
     */
    const onOpen = async ( form : IForm ) => {

        // Actualizamos el producto
        setProduct( form.values as Product );
        // Visibilizamos la reservación 
        setShowReservation( true );

    }
    /**
     * @desc Manejador de cierre
     */
    const onClose = async () => setShowReservation( false );

    return {
        onOpen,
        onClose,
        showReservation,
        product
    }

};