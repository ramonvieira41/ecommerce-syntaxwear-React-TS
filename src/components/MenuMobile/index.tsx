import IconMenu from "@/assets/images/menu.png"
import { useState } from "react"
import { Link } from "@tanstack/react-router"
import { FaRegUserCircle } from "react-icons/fa"
import type { NavLink } from "../Header"
import { IoMdClose } from "react-icons/io"

interface MenuMobileProps {
    navLinks: NavLink[];
}

export const MenuMobile = ({ navLinks }: MenuMobileProps) => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

    return (
        <>
            <button
                className="cursor-pointer"
                onClick={() => setMenuIsOpen(!menuIsOpen)}
            >
                <img src={IconMenu} alt="Ícone carrinho de compras" />
            </button>

            <div className={`${menuIsOpen ? "bg-black/70 visible" : "bg-transparent invisible"} fixed top-0 bottom-0 left-0 right-0 z-30`} onClick={() => setMenuIsOpen(!menuIsOpen)}>

                <div className={`${menuIsOpen ? "translate-x-0" : "-translate-x-full"} absolute bg-white top-0 bottom-0 pt-6 transition-all duration-500 ease-in-out w-full sm:w-75`} onClick={(e) => e.stopPropagation()}>
                    <header className="bg-black px-5 py-5 text-white">
                        <nav className="flex justify-between">
                            <Link to="/sign-in" className="flex items-center gap-3">
                                <FaRegUserCircle className="h-6 w-6" />
                                <p>Olá! Faça seu login</p></Link>
                            <IoMdClose className="h-6 w-6 cursor-pointer" onClick={() => setMenuIsOpen(!menuIsOpen)} />
                        </nav>
                    </header>

                    <ul className="p-4 h-[calc(100%-140px)] overflow-y-auto scrollbar-hide flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link to={link.href} onClick={() => setMenuIsOpen(!menuIsOpen)}>
                                    {link.name}</Link>
                            </li>
                        ))}
                        <li><Link to="/our-stores" onClick={() => setMenuIsOpen(!menuIsOpen)}>Nossas Lojas</Link></li>
                        <li><Link to="/about" onClick={() => setMenuIsOpen(!menuIsOpen)}>Sobre</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}