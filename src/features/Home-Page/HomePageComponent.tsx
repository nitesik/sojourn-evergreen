import Image from "next/image";
import waves from "@/assets/wave.svg";
import { siteConfig } from "@/utils/siteConfig";
import {
  Facebook,
  Instagram,
  Smile,
  Calendar,
  Globe,
  ArrowBigRight,
  Star,
  Crown,
  BadgeDollarSign,
  ChevronRight,
  ShieldCheck,
  Clock,
  Receipt,
  Cross,
  X,
  Menu,
} from "lucide-react";
import { icons } from "@/utils/icons";
import { CustomImage } from "@/component";
import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

// Evergreen Sojourn

export default function HomePageComponent() {
  const [currentFAQ, setCurrentFAQ] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleForm(event: React.FormEvent) {
    event.preventDefault();
  }

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <main>
      <Head>
        <title>Evergreen Sojourn</title>
      </Head>
      <div className="bg-bhutan bg-left xl:bg-center h-[100vh] xl:h-[120vh] relative bg-no-repeat bg-cover flex justify-center">
        <div className="w-full xl:w-[1200px] 2xl:w-[1500px] text-white px-3 xl:px-0 relative">
          <div className="mt-5 font-jolly flex justify-between items-center text-primary">
            <h1 className="text-5xl  font-bold hover:scale-105 transition-transform z-50 ease-in-out cursor-pointer">
              Evergreen Sojourn
            </h1>
            <span className="hidden xl:flex gap-2 text-3xl">
              {siteConfig.getHeaders().map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className="transition-transform cursor-pointer ease-in-out hover:-translate-y-2"
                >
                  {item.name}
                </Link>
              ))}
            </span>
            <span className="hidden xl:flex gap-3 hover:[&>*]:scale-110 [&>*]:transition-all [&>*]:ease-in-out [&>*]:cursor-pointer">
              <Facebook className="" />
              <Instagram />
            </span>
            <button
              onClick={() => {
                setIsMenuOpen((prev) => !prev);
              }}
              className="inline xl:hidden z-50"
            >
              {isMenuOpen ? (
                <X
                  className={`w-8 h-8 transition-all duration-1000 ${
                    isMenuOpen && "customOpen"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-8 h-8 transition-all ${
                    isMenuOpen || "customOpen"
                  }`}
                />
              )}
            </button>
            {isMenuOpen && (
              <div className="xl:hidden absolute h-screen top-0 left-0 w-full z-40 bg-main grid place-content-center">
                <span className="flex flex-col gap-3 text-5xl text-center">
                  {siteConfig.getHeaders().map((item, index) => (
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      href={item.href}
                      key={index}
                      className="transition-transform cursor-pointer ease-in-out hover:-translate-y-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                </span>
              </div>
            )}
          </div>

          <div className="mt-[100px] z-10 relative font-jolly flex flex-col items-center gap-6 xl:gap-0 xl:items-end">
            <h1 className="text-5xl md:text-6xl xl:text-8xl font-extrabold text-center xl:text-end text-primary ">
              Unveiling Bhutan&apos;s Evergreen <br /> Wonders
            </h1>
            <p className="text-3xl w-full max-w-[600px] xl:w-[600px] text-center xl:text-end my-4">
              Discover the enchantments of Bhutan with your tailor-made dream
              journey. Our tours encompass a spectrum of destinations tailored
              to suit a myriad of interests.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("book")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="text-3xl border-2 border-primary rounded text-primary px-7 py-3 hover:bg-primary hover:text-white transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
        <Image
          src={waves}
          alt="waves"
          height={100}
          width={100}
          className="w-full absolute bottom-0 translate-y-1"
        />
      </div>

      <div className="flex justify-center pt-5">
        <div className="w-full xl:w-[1200px] 2xl:w-[1500px] text-white px-3 xl:px-0">
          <div className="grid grid-cols-1 xl:grid-cols-2 place-content-between">
            <div className="flex flex-col gap-10">
              <span className="flex justify-between flex-shrink-0">
                <div className="text-center flex flex-col items-center gap-2">
                  <Calendar width={45} height={45} className="text-secondary" />
                  <h3 className="text-base xl:text-lg font-bold">
                    Years of Experience
                  </h3>
                  <h2 className="text-xl xl:text-3xl font-extrabold">10</h2>
                </div>
                <hr className="border-2 border-secondary h-full" />
                <div className="text-center flex flex-col items-center gap-2">
                  <Smile width={45} height={45} className="text-secondary" />
                  <h3 className="text-base xl:text-lg font-bold">
                    Satisfied Clients
                  </h3>
                  <h2 className="text-xl xl:text-3xl font-extrabold">1000s</h2>
                </div>
                <hr className="border-2 border-secondary h-full" />
                <div className="text-center flex flex-col items-center gap-2">
                  <Globe width={45} height={45} className="text-secondary" />
                  <h3 className="text-base xl:text-lg font-bold">
                    Countries Covered
                  </h3>
                  <h2 className="text-xl xl:text-3xl font-extrabold">5</h2>
                </div>
              </span>
              <p className="text-lg text-center xl:text-start">
                Explore a myriad of destinations with our tours, each designed
                to accommodate diverse interests. Whether you crave sun-kissed
                beaches with azure waters, awe-inspiring mountain vistas, serene
                lakes, or verdant forests, we have the perfect itinerary for
                you.
              </p>
              <div className="flex justify-between items-center">
                <span className="flex gap-6 items-center text-secondary [&>*]:h-[35px] [&>*]:w-[35px]">
                  <Star />
                  <Crown />
                  <BadgeDollarSign />
                </span>
                <span className="flex items-center cursor-pointer hover:text-secondary transition-colors">
                  <h3 className="text-xl ">Learn more.</h3>
                  <ChevronRight className="" height={35} width={35} />
                </span>
              </div>
            </div>
            <div className="rotate flex md:justify-center xl:justify-end mt-14 xl:mt-0 flex-col-reverse md:flex-row items-center [&>*]:rounded [&>*]:border-4 gap-2 pr-5">
              <Image
                src={icons.bhutan_pic}
                alt="pic"
                width={150}
                height={100}
                className="h-[150px]"
              />
              <Image
                src={icons.bhutan_pic_2}
                alt="pic"
                width={200}
                height={100}
                className="h-[200px]"
              />
              <Image
                src={icons.bhutan_pic_3}
                alt="pic"
                width={250}
                height={100}
                className="h-[250px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="flex py-[150px]">
        <div className="flex-1 flex flex-col xl:flex-row justify-between items-center gap-14 px-5 xl:px-0">
          <Image
            src={icons.office_pic}
            alt="office"
            height={100}
            width={100}
            className="h-full w-[700px] flex-1 border-[7px] rounded xl:rounded-e xl:border-l-0"
          />
          <div className="w-full xl:w-1/2 [&>p]:text-center xl:[&>p]:text-start text-white text-base grid gap-3">
            <h1 className="font-jolly text-5xl text-center">About Us</h1>
            <p>
              At our agency, we dedicate ourselves to curating distinctive and
              unforgettable travel adventures for our clients. This commitment
              is reflected in our practice of carefully selecting a new
              exclusive tour every three months, ensuring that we consistently
              provide the most thrilling and current options.
            </p>
            <p>
              Browse through our galleries to immerse yourself in breathtaking
              photos and firsthand accounts from our exclusive tours. Stay
              updated with our upcoming tours, which we refresh every three
              months to continuously offer exciting experiences.
            </p>
            <Link
              href="mailto:evergreensojourn@gmail.com"
              className="w-full text-center xl:text-start"
            >
              evergreensojourn@gmail.com
            </Link>
            <p>Contact no: +975 77310720</p>
            <p>
              Explore our exclusive gallery tours, featuring past highlights
              such as:
            </p>
            <p>Address: Kelwong Building, 2nd Floor, Wogzin Lam, Thimphu</p>
            <span className="flex justify-evenly mt-5 [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:gap-2">
              <div>
                <ShieldCheck className="text-secondary w-[35px] h-[35px]" />
                <h3>Safety</h3>
              </div>
              <div>
                <Clock className="text-secondary w-[35px] h-[35px]" />
                <h3>Support</h3>
              </div>
              <div>
                <Receipt className="text-secondary w-[35px] h-[35px]" />
                <h3>Value</h3>
              </div>
            </span>
          </div>
        </div>
        <div className="customDiv"></div>
      </div>

      <div id="destinations" className="flex flex-col items-center">
        <h1 className="font-jolly text-5xl md:text-7xl text-white">
          DESTINATIONS
        </h1>
        <div className="sticky top-0 bg-main z-50 my-[50px] w-full flex justify-center border-4 border-secondary border-l-0 border-r-0">
          <div className="w-full xl:w-[1200px] 2xl:w-[1500px] flex items-center justify-between px-5 md:px-0 md:justify-evenly font-white font-jolly text-4xl py-4 text-white hover:[&>span]:scale-125 [&>span]:cursor-pointer [&>span]:transition-transform">
            <span>Paro</span>
            <span>Thimphu</span>
            <span>Haa</span>
            <span>Gasa</span>
            <span>Punakha</span>
          </div>
        </div>
        <div className="xl:w-[1200px] 2xl:w-[1500px] grid customGrid px-5 md:px-0 md:pl-5">
          <div className="flex flex-col items-center text-white gap-3">
            <h3 className="text-5xl text-primary font-jolly text-center md:text-start">
              Five reasons to visit Bhutan
            </h3>
            <div className="w-full mt-[70px]">
              <div className="grid customSubGrid h-[300px]">
                <span className="grid place-content-center">
                  <CustomImage
                    src={icons.bhutan_pic_12}
                    dir="left"
                    className="h-fit"
                  />
                </span>
                <span className="relative  flex justify-center items-center">
                  <div className="w-[5px] h-full bg-secondary" />
                  <div className="h-5 w-5 rounded-full bg-primary absolute"></div>
                </span>
                <span className="grid place-content-center">
                  <p className="text-base md:text-xl">
                    <span className="text-primary">
                      Rich cultural heritage:
                    </span>{" "}
                    explore the history, art and architecture of some of the
                    world&apos;s oldest and most fascinating civilizations in
                    Asia, from ancient temples in Paro to the majestic
                    Monasteries in Thimphu.
                  </p>
                </span>
              </div>

              <div className="grid customSubGrid h-[300px]">
                <span className="grid place-content-center">
                  <p className="text-base md:text-xl">
                    <span className="text-primary">Natural Beauty:</span>{" "}
                    Explore the world&apos;s most stunning natural terrains,
                    from the majestic Himalayas to the vibrant tropical forests
                    of South Asia, with our agency.
                  </p>
                </span>
                <span className="relative flex justify-center items-center">
                  <div className="w-[5px] h-full bg-secondary" />
                  <div className="h-5 w-5 rounded-full bg-primary absolute"></div>
                </span>
                <span className="grid place-content-center">
                  <CustomImage
                    src={icons.bhutan_pic_7}
                    dir="right"
                    className="h-fit"
                  />
                </span>
              </div>

              <div className="grid customSubGrid h-[300px]">
                <span className="grid place-content-center">
                  <CustomImage
                    src={icons.bhutan_pic_13}
                    dir="left"
                    className="h-fit"
                    childClassName="object-top"
                  />
                </span>
                <span className="relative flex justify-center items-center">
                  <div className="w-[5px] h-full bg-secondary" />
                  <div className="h-5 w-5 rounded-full bg-primary absolute"></div>
                </span>
                <span className="grid place-content-center">
                  <p className="text-base md:text-xl">
                    <span className="text-primary">Incredible Food:</span> Savor
                    the rich array of delectable dishes and flavors Bhutan
                    presents, from the spicy curries of Thimphu to a variety of
                    other mouthwatering meals
                  </p>
                </span>
              </div>

              <div className="grid customSubGrid h-[300px]">
                <span className="grid place-content-center">
                  <p className="text-base md:text-xl">
                    <span className="text-primary">Warm Hospitality:</span>{" "}
                    Experience the warmth and hospitality of Bhutan&apos;s
                    people, renowned for their kindness and generous spirit, and
                    create lasting memories on your journey
                  </p>
                </span>
                <span className="relative flex justify-center items-center">
                  <div className="w-[5px] h-full bg-secondary" />
                  <div className="h-5 w-5 rounded-full bg-primary absolute"></div>
                </span>
                <span className="grid place-content-center">
                  <CustomImage
                    src={icons.bhutan_pic_14}
                    dir="right"
                    className="h-fit"
                    childClassName="object-bottom"
                  />
                </span>
              </div>

              <div className="grid customSubGrid h-[300px]">
                <span className="grid place-content-center">
                  <CustomImage
                    src={icons.bhutan_pic_10}
                    dir="left"
                    className="h-fit"
                    childClassName="object-bottom"
                  />
                </span>
                <span className="relative flex justify-center items-center">
                  <div className="w-[5px] h-full bg-secondary" />
                  <div className="h-5 w-5 rounded-full bg-primary absolute"></div>
                </span>
                <span className="grid place-content-center">
                  <p className="text-base md:text-xl">
                    <span className="text-primary">Vibrant Places:</span>{" "}
                    explore the history, art and architecture of some of the
                    world&apos;s oldest and most fascinating civilizations in
                    Asia, from ancient temples in Paro to the majestic
                    Monasteries in Thimphu.
                  </p>
                </span>
              </div>

              <div className="flex justify-center mt-[50px]">
                <button
                  onClick={() =>
                    document
                      .getElementById("book")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                  className="text-3xl border-2 border-primary rounded text-primary px-7 py-3 hover:bg-primary hover:text-white transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div className="flex justify-center pt-[100px] xl:pt-[150px]">
        <div
          id="exclusive-tours"
          className="w-full xl:w-[1200px] 2xl:w-[1500px] px-5 xl:px-0 text-white"
        >
          <h1 className="text-center font-jolly text-6xl xl:text-9xl">
            Exclusive Tour
          </h1>
          <div className="flex items-center xl:items-start flex-col xl:flex-row xl:[&>div]:w-1/2 mt-[125px] xl:justify-between xl:gap-14">
            <div className="grid grid-cols-3 gap-y-5 xl:gap-y-0 relative">
              <CustomImage src={icons.bhutan_pic} className="border-2 z-[8]" />
              <CustomImage
                src={icons.bhutan_pic_2}
                className="border-2 z-[9]"
              />
              <CustomImage
                src={icons.bhutan_pic_3}
                className="border-2 z-[10]"
              />
              <CustomImage
                src={icons.bhutan_pic_4}
                className="xl:-translate-x-[100px] -translate-y-[70px] border-2 z-[5]"
              />
              <CustomImage
                src={icons.bhutan_pic_5}
                className="xl:-translate-x-[120px] -translate-y-[70px] border-2 z-[6]"
              />
              <CustomImage
                src={icons.bhutan_pic_6}
                className="xl:-translate-x-[120px] -translate-y-[70px] border-2 z-[7]"
              />
              <CustomImage
                src={icons.bhutan_pic_7}
                className="border-2 z-[3] -translate-y-[120px]"
              />
              <CustomImage
                src={icons.bhutan_pic_8}
                className="border-2 z-[4] -translate-y-[120px]"
              />
              <CustomImage
                src={icons.bhutan_pic_9}
                className="border-2 z-[5] -translate-y-[120px]"
              />
            </div>
            <div className="z-50 grid gap-5 text-base xl:text-xl">
              <p className="">
                At Exclusive Tours, we specialize in crafting bespoke travel
                experiences that leave a lasting impression. Our commitment to
                excellence drives us to introduce new exclusive tours every
                three months, ensuring our clients always have access to the
                latest and most thrilling adventures. From idyllic beaches to
                awe-inspiring mountain vistas, our carefully curated itineraries
                cater to a variety of tastes and interests. With a focus on
                cultural immersion and personalized service, we provide unique
                opportunities to explore hidden gems and create unforgettable
                memories. Join us on a journey tailored to your desires, where
                every moment is designed to be extraordinary.
              </p>
              <ul className="list-disc pl-5 grid gap-1">
                <li>Trekking through the majestic mountains of Paro</li>
                <li>
                  Delving into various monasteries for cultural exploration
                </li>
                <li>Engaging with locals and savoring authentic dishes</li>
                <li>
                  Embarking on district-hopping journeys to encounter diverse
                  cultures
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-[100px]">
        <div className="w-full px-5 xl:px-0 xl:w-[1200px] 2xl:w-[1500px] flex flex-col items-center gap-7 text-black">
          <h1 id="book" className="font-jolly text-6xl xl:text-8xl text-white">
            Book a Tour
          </h1>
          <form
            onSubmit={handleForm}
            className="w-full xl:w-2/3 bg-white rounded px-7 py-10 grid gap-6"
          >
            <label className="flex flex-col gap-2">
              <h3 className="text-lg xl:text-2xl font-bold">
                Number of Travellers <span className="text-red-400">*</span>
              </h3>
              <input
                type="number"
                min={1}
                required
                className="bg-[#E5E5E5] p-3 border-2 rounded outline-none focus:border-secondary"
              />
            </label>
            <label className="flex flex-col gap-2">
              <h3 className="text-lg xl:text-2xl font-bold">
                Adults <span className="text-red-400">*</span>
              </h3>
              <input
                type="number"
                min={1}
                required
                className="bg-[#E5E5E5] p-3 border-2 rounded outline-none focus:border-secondary"
              />
            </label>
            <label className="flex flex-col gap-2">
              <h3 className="text-lg xl:text-2xl font-bold">
                Children (2-11 years old)
              </h3>
              <input
                type="number"
                min={1}
                className="bg-[#E5E5E5] p-3 border-2 rounded outline-none focus:border-secondary"
              />
            </label>
            <label className="flex flex-col gap-2">
              <h3 className="text-lg xl:text-2xl font-bold">
                Date of Arrival <span className="text-red-400">*</span>
              </h3>
              <input
                type="date"
                required
                className="bg-[#E5E5E5] p-3 border-2 rounded outline-none focus:border-secondary"
              />
            </label>
            <label className="flex flex-col gap-2">
              <h3 className="text-lg xl:text-2xl font-bold">
                Duration of your stay (in days){" "}
                <span className="text-red-400">*</span>
              </h3>
              <input
                type="number"
                min={1}
                required
                className="bg-[#E5E5E5] p-3 border-2 rounded outline-none focus:border-secondary"
              />
            </label>
            <h2 className="text-secondary xl:text-center text-xl xl:text-3xl font-bold">
              Your Personal Informations
            </h2>
            <label className="flex flex-col gap-2">
              <h3 className="text-lg xl:text-2xl font-bold">
                Your Name <span className="text-red-400">*</span>
              </h3>
              <input
                type="text"
                required
                className="bg-[#E5E5E5] p-3 border-2 rounded outline-none focus:border-secondary"
              />
            </label>
            <label className="flex flex-col gap-2">
              <h3 className="text-lg xl:text-2xl font-bold ">
                Your Email <span className="text-red-400">*</span>
              </h3>
              <input
                type="email"
                required
                className="bg-[#E5E5E5] p-3 border-2 rounded outline-none focus:border-secondary"
              />
            </label>
            <label className="flex flex-col gap-2">
              <h3 className="text-lg xl:text-2xl font-bold">
                Your Phone Number <span className="text-red-400">*</span>
              </h3>
              <input
                type="tel"
                required
                className="bg-[#E5E5E5] p-3 border-2 rounded outline-none focus:border-secondary"
              />
            </label>
            <label className="flex flex-col gap-2">
              <h3 className="text-lg xl:text-2xl font-bold">
                Your Nationality <span className="text-red-400">*</span>
              </h3>
              <input
                type="text"
                required
                className="bg-[#E5E5E5] p-3 border-2 rounded outline-none focus:border-secondary"
              />
            </label>
            <label className="flex flex-col gap-2">
              <h3 className="text-lg xl:text-2xl font-bold">Your Trip Ideas</h3>
              <p>
                Tell us about your favourite activities and desired
                destinations.
              </p>
              <textarea className="bg-[#E5E5E5] p-3 border-2 min-h-[100px] resize-y rounded outline-none focus:border-secondary" />
            </label>
            <button className="text-3xl border-2 hover:border-secondary hover:bg-white rounded hover:text-secondary px-7 py-3 bg-secondary text-white transition-colors">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-center pt-[100px]">
        <div className="w-full px-5 xl:px-0 xl:w-[1200px] 2xl:w-[1500px] flex flex-col items-center gap-14 text-white">
          <h1 className="font-jolly text-6xl xl:text-8xl">FAQs</h1>
          <div className="w-full xl:w-2/3 grid gap-3">
            {siteConfig.getFAQs().map((faq, index) => (
              <div
                key={index}
                onClick={() => {
                  setCurrentFAQ(currentFAQ === index ? null : index);
                }}
                className={`${
                  index !== 0 && "border-t-4 border-secondary pt-5"
                } flex flex-col cursor-pointer flex-1 pb-5`}
              >
                <span className="flex justify-between">
                  <h3 className="text-2xl ">{faq.question}</h3>
                  <ChevronRight
                    className={`${
                      index === currentFAQ ? "rotate-90" : "rotate-0"
                    } text-primary`}
                  />
                </span>
                <span
                  className={`overflow-hidden ${
                    currentFAQ === index ? "h-[40px]" : "h-0"
                  } origin-top`}
                >
                  <h5 className="text-lg mt-2">{faq.question}</h5>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
