/* eslint-disable @next/next/no-img-element */
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

                    {/* SHOP */}
                    <div className="hover:text-zinc-700 group">
                        <a href="/shop" className="relative hover:underline underline-offset-4 transition-all duration-500 ease-linear"> Shop </a>

                        {/* DROPDOWN */}
                        <div className="hidden group-hover:flex justify-between absolute top-16 left-0 p-5 max-h-max w-full bg-white text-black dark:bg-zinc-700 dark:text-white text-base">
                            <div className="flex flex-col gap-2 w-1/6 pr-20">
                                <a href="#" className="pb-3 hover:underline underline-offset-2 dark:text-white dark:hover:text-white text-zinc-900 hover:text-zinc-700 font-semibold">DETOX</a>
                                <a href="#" className="pb-3 hover:underline underline-offset-2 dark:text-white dark:hover:text-white text-zinc-900 hover:text-zinc-700 font-light">Kale & Blueberry</a>
                                <a href="#" className="pb-3 hover:underline underline-offset-2 dark:text-white dark:hover:text-white text-zinc-900 hover:text-zinc-700 font-light">Ginger & Pear</a>
                                <a href="#" className="pb-3 hover:underline underline-offset-2 dark:text-white dark:hover:text-white text-zinc-900 hover:text-zinc-700 font-light">Spinach & Pineapple</a>
                                <a href="#" className="pb-3 hover:underline underline-offset-2 dark:text-white dark:hover:text-white text-zinc-900 hover:text-zinc-700 font-light">Cucumber & Melon</a>
                                <a href="#" className="pb-3 hover:underline underline-offset-2 dark:text-white dark:hover:text-white text-zinc-900 hover:text-zinc-700 font-light">Avocado & Mango</a>
                                <a href="#" className="pb-3 hover:underline underline-offset-2 dark:text-white dark:hover:text-white text-zinc-900 hover:text-zinc-700 font-light">Beet & Berry</a>
                                <a href="#" className="pb-3 hover:underline underline-offset-2 dark:text-white dark:hover:text-white text-zinc-900 hover:text-zinc-700 font-light">Raspberry & Pineapple</a>
                            </div>

                            <div className="flex flex-col gap-2 w-1/6 pr-20">
                                <a href="#" className="pb-3 hover:underline underline-offset-2 dark:text-white dark:hover:text-white text-zinc-900 hover:text-zinc-700 font-semibold">ENERGY BOOSTING</a>
                                <a href="#" className="pb-3 hover:underline underline-offset-2 dark:text-white dark:hover:text-white text-zinc-900 hover:text-zinc-700 font-light">Mango & Coconut</a>
                                <a href="#" className="pb-3 hover:underline underline-offset-2 dark:text-white dark:hover:text-white text-zinc-900 hover:text-zinc-700 font-light">Kale & Blueberry</a>
                                <a href="#" className="pb-3 hover:underline underline-offset-2 dark:text-white dark:hover:text-white text-zinc-900 hover:text-zinc-700 font-light">Peanut & Banana</a>
                                <a href="#" className="pb-3 hover:underline underline-offset-2 dark:text-white dark:hover:text-white text-zinc-900 hover:text-zinc-700 font-light">Strawberry & Banana</a>
                                <a href="#" className="pb-3 hover:underline underline-offset-2 dark:text-white dark:hover:text-white text-zinc-900 hover:text-zinc-700 font-light">Peach & Pineapple</a>
                                <a href="#" className="pb-3 hover:underline underline-offset-2 dark:text-white dark:hover:text-white text-zinc-900 hover:text-zinc-700 font-light">Almonds & Banana</a>
                            </div>

                            <div className="flex flex-col gap-2 w-1/6 pr-20">
                                <a href="#" className="pb-3 hover:underline underline-offset-2 dark:text-white dark:hover:text-white text-zinc-900 hover:text-zinc-700 font-semibold">SUPER GREEN</a>
                                <a href="#" className="pb-3 hover:underline underline-offset-2 dark:text-white dark:hover:text-white text-zinc-900 hover:text-zinc-700 font-light">Spinach & Pineapple</a>
                                <a href="#" className="pb-3 hover:underline underline-offset-2 dark:text-white dark:hover:text-white text-zinc-900 hover:text-zinc-700 font-light">Ginger & Pear</a>
                                <a href="#" className="pb-3 hover:underline underline-offset-2 dark:text-white dark:hover:text-white text-zinc-900 hover:text-zinc-700 font-light">Cucumber & Melon</a>
                                <a href="#" className="pb-3 hover:underline underline-offset-2 dark:text-white dark:hover:text-white text-zinc-900 hover:text-zinc-700 font-light">Avocado & Mango</a>
                            </div>

                            <div className="flex flex-col items-center gap-3 w-1/6">
                                <a href="#"><img src="/dropdown/almondandbanana.png" alt="almond and banana" /></a>
                                <a href="#"><h4 className="text-center font-semibold hover:underline">50% OFF LIMITED SALE</h4></a>
                                <a href="#"><p className="text-center font-light">Until Midnight Sunday</p></a>
                            </div>

                            <div className="flex flex-col items-center gap-3 w-1/6">
                                <a href="#"><img src="/dropdown/thankyou.png" alt="Thank You" /></a>
                                <a href="#"><h4 className="text-center font-semibold">GIFT CARD</h4></a>
                                <a href="#"><p className="text-center font-light">Treat your friends and family</p></a>
                            </div>
                        </div>
                    </div>

                    {/* ABOUT */}
                    <div className="hover:text-zinc-700 group">
                        <a href="/about" className="relative hover:underline underline-offset-4 transition-all duration-500 ease-linear">About</a>

                        {/* DROPDOWN */}
                        <div className="hidden group-hover:flex justify-between absolute top-20 left-0 r p-5 max-h-max w-full bg-white text-black dark:bg-zinc-700 dark:text-white text-base">
                            
                            <div className="flex flex-col gap-2 w-1/6 pr-24">
                                <a href="#" className="pb-3 hover:underline underline-offset-2 dark:text-white dark:hover:text-white text-zinc-900 hover:text-zinc-700 font-semibold">DISCOVER</a>
                                <a href="#" className="pb-3 hover:underline underline-offset-2 dark:text-white dark:hover:text-white text-zinc-900 hover:text-zinc-700 font-light">About Us</a>
                                <a href="#" className="pb-3 hover:underline underline-offset-2 dark:text-white dark:hover:text-white text-zinc-900 hover:text-zinc-700 font-light">Blog</a>
                                <a href="#" className="pb-3 hover:underline underline-offset-2 dark:text-white dark:hover:text-white text-zinc-900 hover:text-zinc-700 font-light">Recipes</a>
                            </div>

                            <div className="flex flex-col gap-2 w-1/6 pr-24">
                                <a href="#" className="pb-3 hover:underline underline-offset-2 dark:text-white dark:hover:text-white text-zinc-900 hover:text-zinc-700 font-semibold">CONTACT</a>
                                <a href="#" className="pb-3 hover:underline underline-offset-2 dark:text-white dark:hover:text-white text-zinc-900 hover:text-zinc-700 font-light">FAQs</a>
                                <a href="#" className="pb-3 hover:underline underline-offset-2 dark:text-white dark:hover:text-white text-zinc-900 hover:text-zinc-700 font-light">Contact Us</a>
                                <a href="#" className="pb-3 hover:underline underline-offset-2 dark:text-white dark:hover:text-white text-zinc-900 hover:text-zinc-700 font-light">Wholesale Enquiries</a>
                            </div>

                            <div className="w-1/5"></div>

                            <div className="flex flex-col items-center gap-2 w-1/6">
                                <a href="#"><img src="/dropdown/story.png" alt="story" /></a>
                                <a href="#"><h4 className="text-center font-semibold hover:underline">OUR STORY</h4></a>
                                <a href="#"><p className="text-center font-light">Origin and future vision</p></a>
                            </div>

                            <div className="flex flex-col items-center gap-2 w-1/6">
                                <a href="#"><img src="/dropdown/recipes.png" alt="recipes" /></a>
                                <a href="#"><h4 className="text-center font-semibold hover:underline">RECIPES</h4></a>
                                <a href="#"><p className="text-center font-light">Create your healthy lifestyle</p></a>
                            </div>

                        </div>
                    </div>
                    
                    {/* THEME FEAUTURES */}
                    <div className="hover:underline underline-offset-4 transition-all duration-500 ease-linear hover:text-zinc-700">
                        <a href="/theme-feautures">Theme Feautures</a>
                    </div>
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
                    <a href="#"><IoSearch size={24} className="text-black"/></a>
                    <a href="#"><FaRegUser size={24} className="text-black"/></a>
                    <a href="#"><IoMdCart size={24} className="text-black"/></a>
                </div>

                {/* MOBILE-VIEW-RIGHT */}
                <div className="w-1/3 md:hidden flex items-center justify-end gap-4 text-black dark:text-white">
                    <a href="#"><FaRegUser size={24} className="text-black"/></a>
                    <a href="#"><IoMdCart size={24} className="text-black"/></a>
                </div>

            </nav>
        </div>
    )
}