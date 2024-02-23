/* eslint-disable @next/next/no-img-element */
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { RiTiktokFill } from "react-icons/ri";


export default function Home() {
  return (
    <div>
      {/* Smoothies */}
      <section className="w-screen max-h-max text-white relative flex justify-center">
        <img src="/smoothies/shakes-1.png" alt="orenge" className="w-full h-fit"/>
        <div className="flex flex-col items-center gap-6 w-1/3 absolute top-10 font-bold justify-center text-2xl px-10 text-center">
          <a href="#" className="hover:underline underline-offset-4">ENERGY BOOSTING SMOOTHIES</a>
          <a href="#" className="hover:underline underline-offset-4">SUPER DETOX SMOOTHIES</a>
          <a href="#" className="hover:underline underline-offset-4">SUPER GREEN SMOOTHIES</a>
        </div>
      </section>

      {/* BLOG */}
      <section className="px-8 py-10 text-black dark:text-white">
        <h1 className="dark:text-white text-center text-3xl text-black py-6">FROM THE BLOG</h1>
        <div className="w-full max-h-max flex justify-between gap-5">
          <div className="flex flex-col justify-start gap-5 max-w-sm">
            <img src="/blog-images/blog-1.png" alt="1" className="h-96"/>
            <p className="text-start text-xs">10 july 2023</p>
            <a href="#" className="text-lg font-semibold">POST-WORKOUT RECOVERY: THE POWER OF SMOOTHIES</a>
            <p className="text-sm">ESSENTIAL NUTRIENTS Get post-workout replenishment After a strenuous workout, its crucial to nourish your body with the right nutrients for...</p>
          </div>
          <div className="flex flex-col justify-start gap-5 max-w-sm">
            <img src="/blog-images/blog-2.png" alt="2" className="h-96"/>
            <p className="text-start text-xs">10 july 2023</p>
            <a href="#" className="text-lg font-semibold">COLORFUL BREAKFAST CREATIONS</a>
            <p className="text-sm">REVITALISE YOUR HEALTH Breakfast is often considered the most important meal of the day, and what better way to start...</p>
          </div>
          <div className="flex flex-col justify-start gap-5 max-w-sm">
            <img src="/blog-images/blog-3.png" alt="3" className="h-96"/>
            <p className="text-start text-xs">10 july 2023</p>
            <a href="#" className="text-lg font-semibold">ANTIOXIDANT-RICH SMOOTHIE BLENDS</a>
            <p className="text-sm">REVITALIZE AND REJUVENATE In todays fast-paced world, its crucial to nourish our bodies with wholesome foods that promote optimal health....</p>
          </div>
        </div>
      </section>

      {/* DIRECTION */}
      <section className="h-3/4 w-screen">
        <div className="h-full w-full relative ">
          <img src="/direction-section/map.jpg" alt="map" className="w-full"/>
          <div className="absolute w-96 z-0 top-10 right-10 px-10 py-7 bg-white flex flex-col justify-center gap-4 items-center">
            <h1 className="text-center font-semibold text-2xl">LOCATION PICKUP AVAILABLE</h1>
            <div className="flex flex-col text-center font-light text-sm">
              <p>ABC Street, Bhubaneswer</p>
              <p>Mon - Fri , 8.00am - 8.00pm</p>
              <p>Sat - Sun, 9.00am - 4.00pm</p>
            </div>
            <button className="hover:bg-black bg-zinc-900 text-white px-8 py-2">Get Direction</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="max-h-max w-full md:px-6 px-3 py-4 dark:text-white text-black bg-zinc-900">
        <div className="flex items-start justify-between flex-wrap text-sm gap-4">
          <div className="md:w-1/5 w-full p-4 flex md:items-start items-center flex-col gap-3">
            <a href="#" className="hover:underline underline-offset-4">Shop all</a>
            <a href="#" className="hover:underline underline-offset-4">About us</a>
            <a href="#" className="hover:underline underline-offset-4">Privacy policy</a>
            <a href="#" className="hover:underline underline-offset-4">Refund policy</a>
            <a href="#" className="hover:underline underline-offset-4">Shipping policy</a>
            <a href="#" className="hover:underline underline-offset-4">Term of Service</a>
          </div>
          <div className="md:w-1/5 w-full p-4 flex md:items-start items-center flex-col gap-3">
            <a href="#" className="hover:underline underline-offset-4">Contact us</a>
            <a href="#" className="hover:underline underline-offset-4">FAQs</a>
          </div>
          <div className="md:w-1/5 w-full p-4 flex md:justify-start justify-center gap-5">
            <a href="#" className="text-black dark:text-white"><FiFacebook size={23}/></a>
            <a href="#" className="text-black dark:text-white"><FaXTwitter size={23}/></a>
            <a href="#" className="text-black dark:text-white"><FaInstagram size={23}/></a>
            <a href="#" className="text-black dark:text-white"><RiTiktokFill  size={23}/></a>
          </div>
          <div className="md:w-1/5 w-full p-4 flex md:justify-start justify-center flex-col gap-5">
            <p className="md:text-start text-center">Be the first to know about our biggest and best sales.</p>
            <div className="border-b "><input type="email" placeholder="example@example.com" className="bg-transparent py-3"/></div>
            <button className="font-extralight px-4 py-2 bg-zinc-400 dark:text-white mr-28">SUBSCRIBE</button>
          </div>          
        </div>
      </section>
    </div>
  );
}
