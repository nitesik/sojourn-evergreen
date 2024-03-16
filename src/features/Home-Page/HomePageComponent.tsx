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
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Clock,
  Receipt,
} from "lucide-react";
import { icons } from "@/utils/icons";
import { CustomImage } from "@/component";

// Evergreen Sojourn

export default function HomePageComponent() {
  return (
    <main>
      <div className="bg-bhutan bg-center h-[120vh] relative bg-no-repeat bg-cover flex justify-center">
        <div className="xl:w-[1200px] 2xl:w-[1500px] text-white">
          <div className="mt-5 font-jolly flex justify-between items-center text-primary">
            <h1 className="text-5xl  font-bold hover:scale-105 transition-transform ease-in-out cursor-pointer">
              Evergreen Sojourn
            </h1>
            <span className="flex gap-2 text-3xl">
              {siteConfig.getHeaders().map((item, index) => (
                <p
                  key={index}
                  className="transition-transform cursor-pointer ease-in-out hover:-translate-y-2"
                >
                  {item.name}
                </p>
              ))}
            </span>
            <span className="flex gap-3 hover:[&>*]:scale-110 [&>*]:transition-all [&>*]:ease-in-out [&>*]:cursor-pointer">
              <Facebook className="" />
              <Instagram />
            </span>
          </div>

          <div className="mt-[100px] z-10 relative font-jolly flex flex-col items-end">
            <h1 className="text-8xl font-extrabold text-end text-primary ">
              Journey to All Corners of <br /> Bhutan.
            </h1>
            <p className="text-3xl w-[600px] text-end my-4">
              Discover the enchantments of Bhutan with your tailor-made dream
              journey. Our tours encompass a spectrum of destinations tailored
              to suit a myriad of interests.
            </p>
            <button className="text-3xl border-2 border-primary rounded text-primary px-7 py-3 hover:bg-primary hover:text-white transition-colors">
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
        <div className="xl:w-[1200px] 2xl:w-[1500px] text-white">
          <div className="grid grid-cols-2 place-content-between">
            <div className="flex flex-col gap-10">
              <span className="flex justify-between flex-shrink-0">
                <div className="text-center flex flex-col items-center gap-2">
                  <Calendar width={45} height={45} className="text-secondary" />
                  <h3 className="text-lg font-bold">Years of Experience</h3>
                  <h2 className="text-3xl font-extrabold">10</h2>
                </div>
                <hr className="border-2 border-secondary h-full" />
                <div className="text-center flex flex-col items-center gap-2">
                  <Smile width={45} height={45} className="text-secondary" />
                  <h3 className="text-lg font-bold">Years of Experience</h3>
                  <h2 className="text-3xl font-extrabold">10</h2>
                </div>
                <hr className="border-2 border-secondary h-full" />
                <div className="text-center flex flex-col items-center gap-2">
                  <Globe width={45} height={45} className="text-secondary" />
                  <h3 className="text-lg font-bold">Years of Experience</h3>
                  <h2 className="text-3xl font-extrabold">10</h2>
                </div>
              </span>
              <p className="text-lg">
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
            <div className="rotate flex justify-end items-center [&>*]:rounded [&>*]:border-4 gap-2 pr-5">
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

      <div className="flex py-[150px]">
        <div className="flex-1 flex justify-between items-center gap-14">
          <Image
            src={icons.office_pic}
            alt="office"
            height={100}
            width={100}
            className="h-full w-[700px] flex-1 border-[7px] rounded-e border-l-0"
          />
          <div className="w-1/2  text-white text-base grid gap-3">
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
            <p>
              Explore our exclusive gallery tours, featuring past highlights
              such as:
            </p>

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

      <div className="flex flex-col items-center">
        <h1 className="font-jolly text-7xl text-white">DESTINATIONS</h1>
        <div className="my-[50px] w-full flex justify-center border-4 border-secondary border-l-0 border-r-0">
          <div className="xl:w-[1200px] 2xl:w-[1500px] flex items-center justify-evenly font-white font-jolly text-4xl py-4 text-white hover:[&>span]:scale-125 [&>span]:cursor-pointer [&>span]:transition-transform">
            <span>Paro</span>
            <span>Thimphu</span>
            <span>Haa</span>
            <span>Gasa</span>
            <span>Punakha</span>
          </div>
        </div>
        <div className="xl:w-[1200px] 2xl:w-[1500px] grid customGrid pl-5">
          <div className="flex flex-col items-center text-white gap-3">
            <h3 className="text-5xl text-primary font-jolly">
              Five reasons to visit Bhutan
            </h3>
            <div className="w-full mt-[70px]">
              <div className="grid customSubGrid h-[300px]">
                <span className="grid place-content-center">
                  <CustomImage
                    src={icons.bhutan_pic}
                    dir="left"
                    className="h-fit"
                  />
                </span>
                <span className="relative  flex justify-center items-center">
                  <div className="w-[5px] h-full bg-secondary" />
                  <div className="h-5 w-5 rounded-full bg-primary absolute"></div>
                </span>
                <span className="grid place-content-center">
                  <p className="text-xl">
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
                  <p className="text-xl">
                    <span className="text-primary">
                      Rich cultural heritage:
                    </span>{" "}
                    explore the history, art and architecture of some of the
                    world&apos;s oldest and most fascinating civilizations in
                    Asia, from ancient temples in Paro to the majestic
                    Monasteries in Thimphu.
                  </p>
                </span>
                <span className="relative flex justify-center items-center">
                  <div className="w-[5px] h-full bg-secondary" />
                  <div className="h-5 w-5 rounded-full bg-primary absolute"></div>
                </span>
                <span className="grid place-content-center">
                  <CustomImage
                    src={icons.bhutan_pic_2}
                    dir="right"
                    className="h-fit"
                  />
                </span>
              </div>

              <div className="grid customSubGrid h-[300px]">
                <span className="grid place-content-center">
                  <CustomImage
                    src={icons.bhutan_pic}
                    dir="left"
                    className="h-fit"
                  />
                </span>
                <span className="relative flex justify-center items-center">
                  <div className="w-[5px] h-full bg-secondary" />
                  <div className="h-5 w-5 rounded-full bg-primary absolute"></div>
                </span>
                <span className="grid place-content-center">
                  <p className="text-xl">
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
                  <p className="text-xl">
                    <span className="text-primary">
                      Rich cultural heritage:
                    </span>{" "}
                    explore the history, art and architecture of some of the
                    world&apos;s oldest and most fascinating civilizations in
                    Asia, from ancient temples in Paro to the majestic
                    Monasteries in Thimphu.
                  </p>
                </span>
                <span className="relative flex justify-center items-center">
                  <div className="w-[5px] h-full bg-secondary" />
                  <div className="h-5 w-5 rounded-full bg-primary absolute"></div>
                </span>
                <span className="grid place-content-center">
                  <CustomImage
                    src={icons.bhutan_pic_2}
                    dir="right"
                    className="h-fit"
                  />
                </span>
              </div>

              <div className="grid customSubGrid h-[300px]">
                <span className="grid place-content-center">
                  <CustomImage
                    src={icons.bhutan_pic_3}
                    dir="left"
                    className="h-fit"
                  />
                </span>
                <span className="relative flex justify-center items-center">
                  <div className="w-[5px] h-full bg-secondary" />
                  <div className="h-5 w-5 rounded-full bg-primary absolute"></div>
                </span>
                <span className="grid place-content-center">
                  <p className="text-xl">
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

              <div className="flex justify-center mt-[50px]">
                <button className="text-3xl border-2 border-primary rounded text-primary px-7 py-3 hover:bg-primary hover:text-white transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div className="flex justify-center pt-[150px]">
        <div className="xl:w-[1200px] 2xl:w-[1500px] text-white">
          <h1 className="text-center font-jolly text-9xl">Exclusive Tour</h1>
          <div className="flex items-start [&>div]:w-1/2 mt-[125px] justify-between gap-14">
            <div className="grid grid-cols-3 relative">
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
                src={icons.bhutan_pic_2}
                className="-translate-x-[100px] -translate-y-[70px] border-2 z-[5]"
              />
              <CustomImage
                src={icons.bhutan_pic}
                className="-translate-x-[120px] -translate-y-[70px] border-2 z-[6]"
              />
              <CustomImage
                src={icons.bhutan_pic_3}
                className="-translate-x-[120px] -translate-y-[70px] border-2 z-[7]"
              />
              <CustomImage
                src={icons.bhutan_pic_3}
                className="border-2 z-[3] -translate-y-[120px]"
              />
              <CustomImage
                src={icons.bhutan_pic_2}
                className="border-2 z-[4] -translate-y-[120px]"
              />
              <CustomImage
                src={icons.bhutan_pic}
                className="border-2 z-[5] -translate-y-[120px]"
              />
            </div>
            <div className="z-50 grid gap-5 text-xl">
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
    </main>
  );
}
