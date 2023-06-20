/**
 * @desc Dto's
 */
import { Bicycle } from "./Bicycle";
import { AddBicycle, UpdateBicycle } from "./Bicycle.dto";
  
/**
 * @desc Interfaz base de los servicios
 */
export abstract class ServiceBase{

    /**
     * @desc Obtiene una bicicleta
     */
    abstract get( id: string ): Promise<Bicycle | undefined>

    /**
     * @desc Obtiene todas las bicicletas
     */
    abstract getAll(): Promise<Bicycle[]>

    /**
     * @desc Obtiene todas las bicicletas
     */
    abstract add( item: AddBicycle ): Promise<Bicycle>

    /**
     * @desc Obtiene todas las bicicletas
     */
    abstract update( id: Bicycle['id'], item: UpdateBicycle ): Promise<Bicycle>

    /**
     * @desc Elimina una bicicleta
     */
    abstract delete( id: Bicycle['id'] ): Promise<boolean>

}