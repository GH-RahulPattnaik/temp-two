import { IoSearch } from "react-icons/io5";
import CurrencySelector from "./PaymentFromCountryDropdown";
import { IoMdCart } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import Hamburgermenu from "./Hamburgermenu";

export default function Navbar() {
    return (
        <div className="sticky top-0 z-50 dark:text-white">
            <nav className="w-screen px-4 md:px-8 flex items-center h-20 bg-white text-black border-b">

                {/* MOBILE-VIEW-LEFT */}
                <div className="md:hidden flex justify-start items-center w-1/3 text-black">
                    <Hamburgermenu />
                </div>

                {/* NAV-LIST-LEFT */}
                <div className="w-1/3 hidden md:flex gap-8 text-sm font-semibold">
                    <a href="/shop" className="hover:underline underline-offset-4 transition-all duration-500 ease-linear">Shop</a>
                    <a href="/about" className="hover:underline underline-offset-4 transition-all duration-500 ease-linear">About</a>
                    <a href="/theme-feautures" className="hover:underline underline-offset-4 transition-all duration-500 ease-linear">Theme Feautures</a>
                </div>

                {/* LOGO */}
                <div className="w-1/3 font-serif font-semibold text-2xl flex items-center justify-center gap-2">
                    <h6>F</h6>
                    <h6>L</h6>
                    <h6>O</h6>
                    <h6>W</h6>
                </div>

                {/* NAV-LIST-RIGHT */}
                <div className="w-1/3 md:flex items-center justify-end gap-6 hidden">
                    <CurrencySelector />
                    <a href="#"><IoSearch size={24} className="text-white dark:text-black"/></a>
                    <a href="#"><FaRegUser size={24} className="text-white dark:text-black"/></a>
                    <a href="#"><IoMdCart size={24} className="text-white dark:text-black"/></a>
                </div>

                {/* MOBILE-VIEW-RIGHT */}
                <div className="w-1/3 md:hidden flex items-center justify-end gap-4">
                    <a href="#"><FaRegUser size={24} className="text-black"/></a>
                    <a href="#"><IoMdCart size={24} className="text-black"/></a>
                </div>

            </nav>
        </div>
    )
}