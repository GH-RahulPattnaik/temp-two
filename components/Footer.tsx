/* eslint-disable @next/next/no-img-element */
import CurrencySelector from "./PaymentFromCountryDropdown";

export default function Footer() {
    return (
        <div className="dark:text-white dark:bg-zinc-950 bg-slate-400">
            <div className="w-full h-52 flex flex-col justify-center items-center gap-5">
                <CurrencySelector />
                <div className="flex w-full items-center justify-center gap-6">
                    <div className="h-8 w-10 border"><img src="/common-footer/visa.png" alt="visa" className="h-full w-full"/></div>
                    <div className="h-8 w-10 border"><img src="/common-footer/mastercard.png" alt="mastercard" className="h-full w-full"/></div>
                    <div className="h-8 w-10 border"><img src="/common-footer/paypal.png" alt="paypal" className="h-full w-full"/></div>
                </div>
                <div className="w-full flex flex-wrap items-center justify-center">
                    <div className="w-full md:w-1/3 text-center md:text-end px-8">© 2024, Flow - Theme - Nourish</div>
                    <div className="w-full md:w-1/3 md:border-l border-white text-center md:text-start  px-8">Powered by Shopify</div>
                </div>
            </div>
        </div>
    )
}