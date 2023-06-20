
/**
 * @desc Modelos
 */
import { Bicycle, Bicycles } from "../../Models/Bicycle/Bicycle";
import { ServiceBase } from "../../Models/Bicycle/BicycleService";
import { AddBicycle, UpdateBicycle } from "../../Models/Bicycle/Bicycle.dto";

/**
 * @desc Data
 */
import Store from "../../Store/Data";

/**
 * @desc Bicicleta
 */
class BicycleMemoryService extends ServiceBase {

    /**
     * @desc Datos de las bicicletas
     */
    private Data: Bicycles = Store;

    /**
     * @desc Obtiene todas las bicicletas
     */
    async create( data: Bicycle ) : Promise<Bicycle>{

        // Nuevo item
        const item = {
            ...data,
            "id"        : Number( this.Data.length + 1 ).toString(),
            "createdAt" : new Date().toLocaleDateString()
        };

        return item;

    }

    /**
     * @desc Obtiene todas las bicicletas
     */
    async add( data: AddBicycle ) : Promise<Bicycle>{

        // añadimos el item
        this.Data?.push( data );

        return this.Data[ this.Data?.length - 1 ];

    }

    /**
     * @desc Obtiene todas las bicicletas
     */
    async update( id: Bicycle['id'], data: UpdateBicycle ): Promise<Bicycle>{

        // Indice encontrado
        const index = this.Data?.findIndex(( item : Bicycle ) =>  item.id === id );

        // Verificamos si se encontro
        const prevData = this.Data[index];

        // Actualizamos la bicicleta
        this.Data[index] = {
            ...prevData,
            ...data
        };

        return this.Data[index];

    }

    /**
     * @desc Obtiene una bicicleta
     */
    async get( id: Bicycle['id'] ) : Promise<Bicycle | undefined>{

        return this.Data.find( ( item: Bicycle ) => item.id === id );

    }

    /**
     * @desc Obtiene todas las bicicletas
     */
    async getAll( ) : Promise<Bicycles>{

        return this.Data;

    }

    /**
     * @desc Obtiene todas las bicicletas
     */
    async delete( id: Bicycle['id'] ) : Promise<boolean>{

        // Filtramos el item.
        this.Data = this.Data.filter( item => item.id !== id );

        return true;

    }
}

export default BicycleMemoryService;