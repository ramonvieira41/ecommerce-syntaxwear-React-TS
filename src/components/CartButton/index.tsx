import IconCart from "@/assets/images/cart.png"
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

interface CartButtonProps {
    onClick?: () => void;
}

export const CartButton = ({ onClick }: CartButtonProps) => {
    const { cart } = useContext(CartContext)

    return (
        <button
            className="relative cursor-pointer flex items-center"
            onClick={onClick}
        >
            <img src={IconCart} alt="Ícone carrinho de compras" />
            {cart.length > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-error text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    {cart.length}
                </span>
            )}
        </button>
    )
}