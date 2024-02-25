/* eslint-disable @next/next/no-img-element */
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { RiTiktokFill } from "react-icons/ri";

export default function Home() {
  return (
    <div>

      {/* SECTION 1 */}
      <section className="relative h-svh w-full">
        <img src="/frontpage.png" alt="front-page" className="h-full w-full bg-cover"/>
        <div className="flex flex-col md:items-start items-end h-full w-full justify-center absolute top-0 font-bold text-white gap-4 md:px-8 px-4">
          <h1 className="md:text-5xl text-3xl md:text-start text-end">Complete 100%</h1>
          <h2 className="md:text-5xl text-3xl md:text-start text-end text-gray-400">PLASTIC FREE</h2>
          <h4 className="md:text-5xl text-3xl md:text-start text-end">GOODNESS</h4>
          <button className="text-xs px-10 py-3 bg-slate-400 font-light">SHOP NOW</button>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="px-4 md:px-8 py-10 w-full flex flex-wrap justify-evenly items-start gap-5">
        <a href="#" className="px-4 py-8 bg-slate-200 dark:bg-zinc-800 md:max-w-xl w-full flex flex-col gap-6 items-center dark:text-white text-black">
          <img src="/s2/smoothie1.png" alt="1" className="w-full"/>
          <h6 className="text-xs">Bright.Light.Fruity.</h6>          
          <h4 className="font-semibold text-3xl text-center">SUPER DETOX SMOOTHIES</h4>
          <button className="w-fit px-10 py-2 bg-black text-white">SHOP NOW</button>
        </a>
        <a href="#" className="px-4 py-8 bg-slate-200 dark:bg-zinc-800 md:max-w-xl w-full flex flex-col gap-6 items-center dark:text-white text-black">
          <img src="/s2/smoothie2.png" alt="2" className="w-full"/>
          <h6 className="text-xs">Cleansing.Refreshing.Flavourful.</h6>          
          <h4 className="font-semibold text-3xl text-center">ENERGY BOOSTING SMOOTHIES</h4>
          <button className="w-fit px-10 py-2 bg-black text-white">SHOP NOW</button>
        </a>        
      </section>

      {/* SECTION 3 */}
      <section className="px-4 md:px-8 py-10 w-full flex flex-wrap justify-between items-start gap-5 dark:text-white text-black0">
        <div className="md:w-1/5 w-2/5 flex flex-col gap-3 items-center font-light text-sm">
          <a href="#"><img src="/s3/beetandberry.png" alt="1" /></a>
          <a href="#"><h1 className="text-center">Beet & Berry</h1></a>
          <a href="#"><p>From ₹100.00</p></a>
          <button className="py-3 bg-zinc-900 w-full text-white">VIEW OPTIONS</button>
        </div>
        <div className="md:w-1/5 w-2/5 flex flex-col gap-3 items-center font-light text-sm">
          <a href="#"><img src="/s3/kaleandblue.png" alt="2" /></a>
          <a href="#"><h1 className="text-center">Kale & Blueberry</h1></a>
          <a href="#"><p>From ₹110.00</p></a>
          <button className="py-3 bg-zinc-900 w-full text-white">VIEW OPTIONS</button>
        </div>
        <div className="md:w-1/5 w-2/5 flex flex-col gap-3 items-center font-light text-sm">
          <a href="#"><img src="/s3/rasberryandpineapple.png" alt="3" /></a>
          <a href="#"><h1 className="text-center">Beet & Berry</h1></a>
          <a href="#"><p>From ₹130.00</p></a>
          <button className="py-3 bg-zinc-900 w-full text-white">VIEW OPTIONS</button>
        </div>
        <div className="md:w-1/5 w-2/5 flex flex-col gap-3 items-center font-light text-sm">
          <a href="#"><img src="/s3/strawberryandbanana.png" alt="4" /></a>
          <a href="#"><h1 className="text-center">Strawberry & Banana</h1></a>
          <a href="#"><p>From <s className="text-red-500">₹180.00</s> ₹140.00</p></a>
          <button className="py-3 bg-zinc-900 w-full text-white">VIEW OPTIONS</button>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="w-full h-full flex flex-nowrap py-16 md:dark:text-white text-black md:px-8 relative">
        <div className="md:w-1/2 w-full bg-white">
          <img src="/s4/beetandberry.png" alt="img" className="h-full"/>
        </div>
        <div className="w-11/12 flex flex-col gap-5 py-8 md:justify-center h-full items-end absolute pl-4">
          <h1 className="font-bold md:text-5xl text-3xl text-end">7 DAYS. 7 SMOOTHIES.</h1>
          <p className="text-end">Order a smoothie for every day of the week <br /> and we will give you the weekend smoothies for free!</p>
          <button className="w-fit px-10 py-3 dark:bg-zinc-950 dark:hover:bg-black bg-purple-700 hover:bg-purple-950 text-white">SHOP NOW</button>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="md:px-8 px-4 py-4 text-black flex flex-wrap justify-between gap-5 my-8">
        <a href="#" id="discount" className="md:w-5/12 w-full h-40 md:h-60 relative">
          <img src="/s5/image1.png" alt="image1" className="w-full h-full"/>
          <div className="flex flex-col items-start justify-center md:w-4/6 w-full h-full absolute top-0 px-8 font-bold md:text-2xl text-lg gap-2">
            <h1 className="">UP TO 15% OFF</h1>
            <p>DETOX SMOOTHIES</p>
          </div>
        </a>
        <a href="#" id="discount" className="md:w-5/12 w-full h-40 md:h-60 relative">
          <img src="/s5/image2.png" alt="image2" className="w-full h-full"/>
          <div className="flex flex-col items-start justify-center md:w-4/6 w-full h-full absolute top-0 px-8 font-bold md:text-2xl text-lg gap-2">
            <h1 className="">UP TO 30% OFF</h1>
            <p>ENERGY BOOSTING SMOOTHIES</p>
          </div>
        </a>
      </section>

      {/* SECTION 6 */}
      <h1 className="text-black dark:text-white text-center text-3xl">BEST SELLING SMOOTHIES</h1>
      <section className="px-4 md:px-8 py-10 w-full flex flex-wrap justify-between items-start gap-5 dark:text-white text-black">
        <div className="md:w-1/5 w-2/5 flex flex-col gap-3 items-center font-light text-sm">
          <a href="#"><img src="/s6/strawberryandbanana.png" alt="1" /></a>
          <a href="#"><h1 className="text-center">Strawberry & Banana</h1></a> 
          <a href="#"><p>From <s className="text-red-500">₹180.00</s> ₹140.00</p></a>
          <button className="py-3 bg-zinc-900 w-full text-white">VIEW OPTIONS</button>
        </div>
        <div className="md:w-1/5 w-2/5 flex flex-col gap-3 items-center font-light text-sm">
          <a href="#"><img src="/s6/orangeandpumpkin.png" alt="2" /></a>
          <a href="#"><h1 className="text-center">Orange & Pumpkin</h1></a>
          <a href="#"><p>From ₹100.00</p></a>
          <button className="py-3 bg-zinc-900 w-full text-white">VIEW OPTIONS</button>
        </div>
        <div className="md:w-1/5 w-2/5 flex flex-col gap-3 items-center font-light text-sm">
          <a href="#"><img src="/s6/kaleandblue.png" alt="3" /></a>
          <a href="#"><h1 className="text-center">Kale & Blue</h1></a>
          <a href="#"><p>From ₹130.00</p></a>
          <button className="py-3 bg-zinc-900 w-full text-white">VIEW OPTIONS</button>
        </div>
        <div className="md:w-1/5 w-2/5 flex flex-col gap-3 items-center font-light text-sm">
          <a href="#"><img src="/s6/mangoandcoconut.png" alt="4" /></a>
          <a href="#"><h1 className="text-center">Mango & Coconut</h1></a>
          <a href="#"><p>From ₹120.00</p></a>
          <button className="py-3 bg-zinc-900 w-full text-white">VIEW OPTIONS</button>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="h-full w-screen md:relative flex flex-col dark:text-white text-black">
        <img src="founder.png" alt="founder" className="h-full w-full"/>
        <div className="flex h-full w-full md:px-10 items-center md:absolute top-0">
          <div className="md:bg-white md:w-1/2 w-full dark:text-white dark:md:text-zinc-950 flex flex-col md:items-start items-center md:p-8 px-4 py-8 gap-5">
            <h1 className="md:text-start text-center font-semibold md:text-3xl text-xl">MEET THE FOUNDER</h1>
            <p className="md:text-start text-center font-light">Imogen Grey, founder of Queenstown Smoothies, shares her origin story, future vision, and what she loves most about our delicious drinks.</p>
            <button className="w-fit px-10 py-3 text-white bg-zinc-900">READ MORE</button>
          </div>
        </div>
      </section>

      {/* FITNESS DESCRIPTION */}
      <section className="px-6 md:px-16 py-12 mb-4 w-full dark:text-white text-black flex flex-col gap-7">
        <h1 className="text-start md:text-3xl text-xl">FUEL YOUR FITNESS JOURNEY</h1>
        <p className="text-start md:pr-16">Our smoothies provide the necessary nutrients for pre-workout energy, post-workout recovery, and overall well-being. Stay energized, nourished, and ready to achieve your fitness goals with the delicious and healthful smoothies!</p>
      </section>

      {/* BEST FOR PRE-WORKOUT AND POST-WORKOUT */}
      <section className="md:px-8 px-4 w-full max-h-max text-black dark:text-white">
        <div className="flex flex-wrap items-center md:gap-0 gap-8">
          <div className="md:w-1/2 w-full h-full">
            <img src="workout.png" alt="WORKOUT" className="h-full w-full"/>
          </div>
          <div className="md:w-1/4 w-full h-1/2 flex flex-col items-center gap-3">
            <p className="px-5">BEST FOR PRE-WORKOUT</p>
            <img src="/workout/orangeandpumpkin.png" alt="image1" />
          </div>
          <div className="md:w-1/4 w-full h-1/2 flex flex-col items-center gap-3">
            <p className="px-5">BEST FOR POST-WORKOUT</p>
            <img src="/workout/peachandpineapple.png" alt="image2" />
          </div>         
        </div>
      </section>

      {/* SMOOTHIES */}
      <section className="w-screen max-h-max mt-16 md:mt-40 text-white relative -z-0 flex justify-center my-4">
        <img src="/smoothies/shakes-1.png" alt="orenge" className="w-full h-60"/>
        <div className="flex flex-col items-center gap-6 md:w-1/3 w-full absolute top-10 font-bold justify-center text-lg md:text-2xl px-10 text-center">
          <a href="#" className="hover:underline underline-offset-4">ENERGY BOOSTING SMOOTHIES</a>
          <a href="#" className="hover:underline underline-offset-4">SUPER DETOX SMOOTHIES</a>
          <a href="#" className="hover:underline underline-offset-4">SUPER GREEN SMOOTHIES</a>
        </div>
      </section>

      {/* BLOG */}
      <section className="px-8 py-10 text-black dark:text-white">
        <h1 className="dark:text-white text-center text-3xl text-black py-6">FROM THE BLOG</h1>
        <div className="w-full max-h-max flex flex-wrap justify-between gap-9">
          <div className="flex flex-col justify-start gap-5 w-full md:max-w-sm">
            <img src="/blog-images/blog-1.png" alt="1" className="h-96"/>
            <p className="text-start text-xs">10 july 2023</p>
            <a href="#" className="text-lg font-semibold">POST-WORKOUT RECOVERY: THE POWER OF SMOOTHIES</a>
            <p className="text-sm">ESSENTIAL NUTRIENTS Get post-workout replenishment After a strenuous workout, its crucial to nourish your body with the right nutrients for...</p>
          </div>
          <div className="flex flex-col justify-start gap-5 w-full md:max-w-sm">
            <img src="/blog-images/blog-2.png" alt="2" className="h-96"/>
            <p className="text-start text-xs">10 july 2023</p>
            <a href="#" className="text-lg font-semibold">COLORFUL BREAKFAST CREATIONS</a>
            <p className="text-sm">REVITALISE YOUR HEALTH Breakfast is often considered the most important meal of the day, and what better way to start...</p>
          </div>
          <div className="flex flex-col justify-start gap-5 w-full md:max-w-sm">
            <img src="/blog-images/blog-3.png" alt="3" className="h-96"/>
            <p className="text-start text-xs">10 july 2023</p>
            <a href="#" className="text-lg font-semibold">ANTIOXIDANT-RICH SMOOTHIE BLENDS</a>
            <p className="text-sm">REVITALIZE AND REJUVENATE In todays fast-paced world, its crucial to nourish our bodies with wholesome foods that promote optimal health....</p>
          </div>
        </div>
      </section>

      {/* DIRECTION */}
      <section className="max-h-max w-screen">
        <div className="max-h-max w-full relative ">
          <img src="/direction-section/map.jpg" alt="map" className="h-svh w-full"/>
          <div className="px-10 absolute top-0 md:right-10 w-full h-full flex justify-center items-center md:justify-end">
            <div className="bg-white flex flex-col gap-6 md:p-7 p-3 items-center">
              <h1 className="text-center font-semibold text-2xl">LOCATION PICKUP AVAILABLE</h1>
              <div className="flex flex-col text-center font-light text-sm">
                <p>ABC Street, Bhubaneswer</p>
                <p>Mon - Fri , 8.00am - 8.00pm</p>
                <p>Sat - Sun, 9.00am - 4.00pm</p>
              </div>
              <button className="w-fit hover:bg-black bg-zinc-900 text-white px-8 py-2">Get Direction</button>
            </div>
          </div>          
        </div>
      </section>

      {/* FOOTER */}
      <section className="max-h-max w-full md:px-6 px-3 py-4 text-white bg-zinc-800">
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
            <a href="#"><FiFacebook size={23}/></a>
            <a href="#"><FaXTwitter size={23}/></a>
            <a href="#"><FaInstagram size={23}/></a>
            <a href="#"><RiTiktokFill  size={23}/></a>
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
