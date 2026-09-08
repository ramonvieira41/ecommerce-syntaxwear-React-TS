import MensTreeDasher from '@/assets/images/tree-dasher-2-natural-black-boyal-blue.webp'
import MensTreeRunnerNz from '@/assets/images/tree-runner-nz-weathered-brown.webp'
import MensWoolCruiser from '@/assets/images/wool-cruiser-burgundy.webp'
import MensWoolCruiserSlipOn from '@/assets/images/wool-cruiser-slip-on-dark-grey.webp'
import MensWoolCruiserWaterproof from '@/assets/images/wool-cruiser-waterproof-natural-black.webp'
import IconCart from "@/assets/images/cart.png"
import { useState } from "react"
import { formatCurrency } from '../../utils/format-currency'

const productsInCart = [
    { id: 1, name: 'Produto 1', image: MensTreeDasher, price: 35, quantity: 5 },
    { id: 2, name: 'Produto 2', image: MensTreeRunnerNz, price: 75, quantity: 2 },
    { id: 3, name: 'Produto 3', image: MensWoolCruiser, price: 85, quantity: 4 },
    { id: 4, name: 'Produto 4', image: MensWoolCruiserSlipOn, price: 135, quantity: 6 },
    { id: 5, name: 'Produto 5', image: MensWoolCruiserWaterproof, price: 15, quantity: 2 }
]

export const ShoppingCart = () => {
    const [iconIsOpen, setIconIsOpen] = useState<boolean>(false)


    return (
        <>
            <button className="cursor-pointer" onClick={() => setIconIsOpen(!iconIsOpen)}>
                <img src={IconCart} alt="ícone do carrinho" />
            </button>

            <div className={`${iconIsOpen ? "bg-black/70 visible" : "bg-transparent invisible"} fixed top-0 bottom-0 left-0 right-0`} onClick={() => setIconIsOpen(!iconIsOpen)}>

                <div className={`${iconIsOpen ? "translate-x-0" : "translate-x-full"} absolute bg-white top-0 right-0 bottom-0 pt-6 transition-all duration-500 ease-in-out w-75 md:w-106`} onClick={(e) => e.stopPropagation()}>
                    
                    <header className="flex items-center justify-between px-5">
                        <p className="text-2xl font-semibold">Carrinho ({productsInCart.length})</p>
                        <button className="text-xl cursor-pointer" onClick={() => setIconIsOpen(!iconIsOpen)}>X</button>
                    </header>

                    <ul className="p-4 h-[calc(100%-140px)] overflow-y-auto scrollbar-hide flex flex-col gap-3">
                        {productsInCart.map((product) => (
                            <li className="flex flex-col gap-1 px-6" key={product.id}>
                                <button className="self-end text-xs cursor-pointer">X</button>

                                <div className="flex gap-4">
                                    <img src={product.image} alt={product.name} className="w-16 h-16" />

                                    <div className="flex flex-col items-start">
                                        <p className="mb-1 text-sm">{product.name}</p>
                                        <p className="mb-1 text-sm">Quantidade: {product.quantity}</p>

                                        <p className="mb-3.5">
                                            <span className="font-bold mr-1.5">{formatCurrency(product.price)}</span> {""} à vista
                                        </p>

                                        <div className="border flex gap-6 py-1 px-3">
                                            <button className="cursor-pointer">-</button>
                                            <p>{product.quantity}</p>
                                            <button className="cursor-pointer">+</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <footer className="absolute bottom-0 w-full h-25 p-4">
                        <button className="h-full w-full bg-black text-white rounded-xs cursor-pointer hover:bg-gray-800">Fechar Pedido</button>
                    </footer>
                </div>

            </div>
        </>
    )
}