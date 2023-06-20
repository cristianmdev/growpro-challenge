/**
 * @desc Tipo de categoria
 */
type Category = "bicycles";

/**
 * @desc Tipos de categorias
 */
export enum SubCategoryTypes{
    old = "old",
    moderns = "moderns",
    electrics = "electrics"
}

/**
 * @desc Una bicicleta
 */
export interface Bicycle {
    id: string;
    name: string;
    image: string;
    createdAt: string;
    category: Category;
    subCategory: SubCategoryTypes;
    description: string;
}

/**
 * @desc Multiple Bicicletas
 */
export type Bicycles = Bicycle[];