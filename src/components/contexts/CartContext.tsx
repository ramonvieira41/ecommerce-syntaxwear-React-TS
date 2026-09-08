import { createContext } from 'react';
import type { Product } from '../../interfaces/products';
import type { ProductCart } from './CartProvider'

interface CartContextType {
    cart: ProductCart[],
    addInCart: (product : Product) => void,
    removeFromCart: (product : number) => void,
    incrementInCart: (product : ProductCart) => void,
    decrementInCart: (product : ProductCart) => void
}

export const CartContext = createContext({} as CartContextType);

