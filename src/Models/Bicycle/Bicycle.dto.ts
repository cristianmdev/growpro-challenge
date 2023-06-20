/**
 * @desc Interfaces
 */
import { Bicycle } from "./Bicycle";

/**
 * @desc Utility data object
 */
export interface AddBicycle extends Omit<Bicycle, 'createdAt'>{
    createdAt: Bicycle['createdAt']
}


/**
 * @desc Utility data object
 */
export interface UpdateBicycle extends Partial<AddBicycle>{
    id: Bicycle['id']
}