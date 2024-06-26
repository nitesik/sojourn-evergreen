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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formDetailsSchema } from "@/zodSchema";
import { TypeOf, z } from "zod";
import ErrorMessage from "@/component/errorMessage";
import { toast } from "react-toastify";

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

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<z.infer<typeof formDetailsSchema>>({
    resolver: zodResolver(formDetailsSchema),
  });

  const onSubmit = async (data: z.infer<typeof formDetailsSchema>) => {
    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        toast("Failed to send, please try again later", {
          type: "error",
        });
        return;
      }

      toast("Email sent successfully", {
        type: "success",
      });
    } catch (error) {
      toast("Failed to send, please try again later", {
        type: "error",
      });
    }
  };

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

          <div className="mt-[50px] z-10 relative font-jolly flex flex-col items-center gap-6 xl:gap-0 xl:items-end">
            <Image
              src={icons.logo}
              alt="logo"
              height={100}
              width={300}
              className="min-w-[300px] w-[80%] max-w-[700px]"
            />
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
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="text-3xl border-2 border-primary rounded text-primary px-7 py-3 hover:bg-primary hover:text-white transition-colors"
            >
              Contact Us
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

      {/* <div className="flex justify-center pt-5">
        <div className="w-full xl:w-[1200px] 2xl:w-[1500px] text-white px-3 xl:px-0">
          <div className="grid grid-cols-1 xl:flex flex-row xl:gap-5 justify-between items-center place-content-between">
            <div className="flex flex-col gap-10 xl:w-1/2">
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
      </div> */}

      {/* <div id="about" className="flex py-[50px]">
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
            <p>Address: Kelwong Building, 2nd Floor, Wogzin Lam, Thimphu</p>
          </div>
        </div>
        <div className="customDiv"></div>
      </div> */}

      <div id="about" className="flex justify-center py-[50px]">
        <div className="w-full text-xl xl:w-[1200px] 2xl:w-[1500px] text-white px-3 xl:px-0 grid gap-5">
          <h1 className="font-jolly text-5xl md:text-7xl text-center">
            WHY CHOOSE US?
          </h1>
          <p>
            At EVERGREEN SOJOURN, we believe that travel is not just about
            exploring new destinations; it&apos;s about experiencing the soul of
            a place, immersing oneself in its culture, and creating lifelong
            memories. Nestled in the heart of the majestic Himalayas, Bhutan
            beckons with its pristine landscapes, vibrant traditions, and
            enchanting spirituality. As a leading tours and travel agent based
            in Bhutan, we are dedicated to unveiling the secrets of this
            mystical kingdom and curating unforgettable journeys for our
            cherished guests.
          </p>
          <span>
            <h3 className="text-[40px] mb-5 font-bold text-center font-jolly">
              Our Story
            </h3>
            <p>
              Founded with a passion for sharing Bhutan&apos;s wonders with the
              world, EVERGREEN SOJOURN brings together a team of seasoned travel
              experts, local guides, and cultural enthusiasts who are deeply
              rooted in Bhutan&apos;s heritage. With years of experience and a
              profound love for our homeland, we strive to offer authentic,
              personalized experiences that go beyond the ordinary tourist
              trails.
            </p>
          </span>
          <span>
            <h3 className="text-[40px] mb-5 font-bold text-center font-jolly">
              Our Mission
            </h3>
            <p>
              At EVERGREEN SOJOURN, our mission is simple yet profound: to
              foster meaningful connections between travelers and the essence of
              Bhutan. We are committed to sustainable tourism practices that
              preserve our natural environment, support local communities, and
              uphold the principles of Gross National Happiness. Each journey we
              craft is infused with our values of integrity, respect, and
              genuine hospitality.
            </p>
          </span>
          <span className="grid gap-5">
            <h3 className="text-[40px] mt-4 font-bold text-center font-jolly">
              What Sets Us Apart
            </h3>
            <p>
              Tailored Experiences: We understand that every traveler is unique,
              which is why we meticulously tailor each itinerary to suit
              individual preferences, interests, and budgets.
            </p>
            <p>
              Local Expertise: Our team comprises passionate locals who possess
              an intimate knowledge of Bhutan&apos;s culture, history, and
              hidden gems. From off-the-beaten-path excursions to insider tips,
              we offer unparalleled insights into the Kingdom of Happiness.
            </p>

            <p>
              Ethical Tourism: As responsible stewards of Bhutan&apos;s
              heritage, we prioritize ethical tourism practices that minimize
              our environmental footprint and maximize positive social impact.
              We partner with sustainable lodges, support community-based
              initiatives, and promote cultural preservation efforts.
            </p>

            <p>
              24/7 Support: Your comfort and satisfaction are our top
              priorities. From the moment you inquire about a trip to the time
              you bid farewell to Bhutan, our dedicated team is available
              round-the-clock to address your needs and ensure a seamless travel
              experience.
            </p>
            <p>Join Us on a Journey of Discovery.</p>
            <p>
              Whether you dream of hiking through pristine forests, meditating
              in ancient monasteries, or immersing yourself in Bhutan&apos;s
              colorful festivals, Evergreen Sojourn is your trusted companion
              every step of the way. Let us be your gateway to Bhutan&apos;s
              hidden treasures - where every moment is a masterpiece waiting to
              be painted.
            </p>
            <p>
              Contact us today to start planning your bespoke Bhutanese
              adventure!
            </p>
          </span>
        </div>
      </div>

      <div id="visa" className="flex justify-center">
        <div className="w-full xl:w-[1200px] 2xl:w-[1500px] text-white px-3 xl:px-0 grid gap-5">
          <h1 className="font-jolly text-5xl md:text-7xl text-center">VISA</h1>
          <div className=" text-xl grid gap-3">
            <p>
              All visitors require a visa before travelling to Bhutan (except
              those from India, Bangladesh and the Maldives, for whom the
              relevant processes and fees are outlined separately below).
            </p>
            <p>
              As part of the visa application process, you will be required to
              pay the Sustainable Development Fee (SDF) of US$100 per day (per
              adult; concessionary rates apply for children). More information
              about the SDF can be found here.
            </p>
            <p>
              A non-refundable, one-off visa application fee of US$40 is also
              payable.
            </p>
            <p>
              You can apply online for a visa or permit by completing an
              application form, or if you&apos;re travelling with a tour
              operator or staying at a hotel, they can apply on your behalf.{" "}
            </p>
            <p>
              You can apply for yourself and anyone you&apos;re travelling with,
              provided you have the required information for each person
              travelling.To apply for a visa online you will need:
            </p>
            <ul className="list-disc pl-5 grid gap-1 text-lg">
              <li>A digital copy of a valid passport</li>
              <li>A recent digital passport photo</li>
              <li>Arrival and departure dates </li>
              <li>Valid travel insurance for the duration of your travel </li>
              <li>To apply for a visa online you will need:</li>
              <li>A digital copy of a valid passport</li>
              <li>A recent digital passport photo</li>
              <li>Arrival and departure dates </li>
              <li>
                Valid travel insurance for the duration of your travel
              </li>{" "}
            </ul>
          </div>
        </div>
      </div>

      <div id="destinations" className="flex flex-col items-center mt-[100px]">
        <h1 className="font-jolly text-5xl md:text-7xl text-white">
          EXCLUSIVE TOUR PACKAGES
        </h1>
        <div className="sticky top-0 bg-main z-50 my-[50px] w-full flex justify-center border-4 border-secondary border-l-0 border-r-0"></div>
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
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                  className="text-3xl border-2 border-primary rounded text-primary px-7 py-3 hover:bg-primary hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      {/* <div className="flex justify-center pt-[100px] xl:pt-[150px]">
        <div
          id="exclusive-tours"
          className="w-full xl:w-[1200px] 2xl:w-[1500px] px-5 xl:px-0 text-white"
        >
          <h1 className="text-center font-jolly text-6xl xl:text-9xl">
            Exclusive Tour
          </h1>
          <div className="flex items-center xl:items-start flex-col xl:flex-row xl:[&>div]:w-1/2 mt-[50px] xl:mt-[125px] xl:justify-between xl:gap-14">
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
      </div> */}

      <div className="flex justify-center pt-[100px]">
        <div className="w-full px-5 xl:px-0 xl:w-[1200px] 2xl:w-[1500px] flex flex-col items-center md:items-start text-xl font-semibold gap-2 text-white">
          {siteConfig.context.split("\n").map((sentence, index) => (
            <p key={index}>{sentence}</p>
          ))}
        </div>
      </div>

      <div className="flex justify-center pt-[100px]">
        <div className="w-full px-5 xl:px-0 xl:w-[1200px] 2xl:w-[1500px] flex flex-col items-center gap-14 text-white">
          <h1 className="font-jolly text-6xl xl:text-8xl">FAQs</h1>
          <div className="w-full xl:w-2/3 grid gap-3">
            {siteConfig.getFAQs().map((faq, index) => (
              <div
                key={index}
                className={`${
                  index !== 0 && "border-t-4 border-secondary pt-5"
                } flex flex-col  flex-1 pb-5`}
              >
                <span
                  onClick={() => {
                    setCurrentFAQ(currentFAQ === index ? null : index);
                  }}
                  className="flex justify-between cursor-pointer"
                >
                  <h3 className="text-2xl ">{faq.question}</h3>
                  <ChevronRight
                    className={`${
                      index === currentFAQ ? "rotate-90" : "rotate-0"
                    } text-primary`}
                  />
                </span>
                <span
                  className={`overflow-hidden ${
                    currentFAQ === index ? "h-auto" : "h-0"
                  } origin-top`}
                >
                  {/* <h5 className="text-lg mt-2">{faq.answer}</h5> */}
                  <ul className="list-disc">
                    {faq.answer.split("\n").map((ans, index) => (
                      <li key={index} className="list-disc text-base mt-2">
                        <h5 className="">{ans}</h5>
                      </li>
                    ))}
                  </ul>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-[50px] xl:pt-[100px]">
        <div className="w-full px-5 xl:px-0 xl:w-[1200px] 2xl:w-[1500px] flex flex-col items-center gap-7 text-black">
          <h1
            id="contact"
            className="font-jolly text-6xl xl:text-8xl text-white"
          >
            Contact Us
          </h1>
          <form
            onSubmit={handleSubmit((e) => onSubmit(e))}
            className="w-full xl:w-2/3 bg-white rounded px-7 py-10 grid gap-6"
          >
            <label className="flex flex-col gap-2">
              <h3 className="text-lg xl:text-2xl font-bold">
                Number of Travellers <span className="text-red-400">*</span>
              </h3>
              <input
                {...register("numberOfTravellers")}
                className="bg-[#E5E5E5] p-3 border-2 rounded outline-none focus:border-secondary"
              />
              {errors.numberOfTravellers && (
                <ErrorMessage>{errors.numberOfTravellers.message}</ErrorMessage>
              )}
            </label>
            <label className="flex flex-col gap-2">
              <h3 className="text-lg xl:text-2xl font-bold">
                Adults <span className="text-red-400">*</span>
              </h3>
              <input
                {...register("adults")}
                className="bg-[#E5E5E5] p-3 border-2 rounded outline-none focus:border-secondary"
              />
              {errors.adults && (
                <ErrorMessage>{errors.adults.message}</ErrorMessage>
              )}
            </label>
            <label className="flex flex-col gap-2">
              <h3 className="text-lg xl:text-2xl font-bold">
                Children (2-11 years old)
              </h3>
              <input
                {...register("children")}
                className="bg-[#E5E5E5] p-3 border-2 rounded outline-none focus:border-secondary"
              />
              {errors.children && (
                <ErrorMessage>{errors.children.message}</ErrorMessage>
              )}
            </label>
            <label className="grid flex-col gap-2 flex-1">
              <h3 className="text-lg xl:text-2xl font-bold">
                Date of Arrival <span className="text-red-400">*</span>
              </h3>
              <input
                type="date"
                {...register("dateOfArrival")}
                className="bg-[#E5E5E5] p-3 border-2 rounded outline-none focus:border-secondary"
              />
              {errors.dateOfArrival && (
                <ErrorMessage>{errors.dateOfArrival.message}</ErrorMessage>
              )}
            </label>
            <label className="grid flex-1 flex-col gap-2">
              <h3 className="text-lg xl:text-2xl font-bold">
                Duration of your stay (in days){" "}
                <span className="text-red-400">*</span>
              </h3>
              <input
                {...register("duration")}
                className="bg-[#E5E5E5] p-3 border-2 rounded outline-none focus:border-secondary"
              />
              {errors.duration && (
                <ErrorMessage>{errors.duration.message}</ErrorMessage>
              )}
            </label>
            <h2 className="text-secondary xl:text-center text-xl xl:text-3xl font-bold">
              Your Personal Informations
            </h2>
            <label className="flex flex-col gap-2">
              <h3 className="text-lg xl:text-2xl font-bold">
                Your Name <span className="text-red-400">*</span>
              </h3>
              <input
                {...register("name")}
                className="bg-[#E5E5E5] p-3 border-2 rounded outline-none focus:border-secondary"
              />
              {errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}
            </label>
            <label className="flex flex-col gap-2">
              <h3 className="text-lg xl:text-2xl font-bold ">
                Your Email <span className="text-red-400">*</span>
              </h3>
              <input
                {...register("email")}
                className="bg-[#E5E5E5] p-3 border-2 rounded outline-none focus:border-secondary"
              />
              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
            </label>
            <label className="flex flex-col gap-2">
              <h3 className="text-lg xl:text-2xl font-bold">
                Your Phone Number <span className="text-red-400">*</span>
              </h3>
              <input
                {...register("phoneNumber")}
                className="bg-[#E5E5E5] p-3 border-2 rounded outline-none focus:border-secondary"
              />
              {errors.phoneNumber && (
                <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>
              )}
            </label>
            <label className="flex flex-col gap-2">
              <h3 className="text-lg xl:text-2xl font-bold">
                Your Nationality <span className="text-red-400">*</span>
              </h3>
              <input
                {...register("nationality")}
                className="bg-[#E5E5E5] p-3 border-2 rounded outline-none focus:border-secondary"
              />
              {errors.nationality && (
                <ErrorMessage>{errors.nationality.message}</ErrorMessage>
              )}
            </label>
            <label className="flex flex-col gap-2">
              <h3 className="text-lg xl:text-2xl font-bold">Your Trip Ideas</h3>
              <p>
                Tell us about your favourite activities and desired
                destinations.
              </p>
              <textarea
                {...register("tripIdeas")}
                className="bg-[#E5E5E5] p-3 border-2 min-h-[200px] resize-y rounded outline-none focus:border-secondary"
              />
            </label>
            <button className="text-3xl border-2 hover:border-secondary hover:bg-white rounded hover:text-secondary px-7 py-3 bg-secondary text-white transition-colors">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-center py-[50px]">
        <div className="w-full text-xl xl:w-[1200px] 2xl:w-[1500px] text-white px-3 xl:px-0 grid gap-5">
          <h1 className="text-center text-[50px] font-bold font-jolly">
            Our Partners
          </h1>
          <span className="flex justify-center md:flex-row flex-col gap-4 items-center [&>img]:rounded mt-3">
            <Image src={icons.council} alt="council" width={150} height={150} />
            <Image src={icons.drukair} alt="drukair" width={150} height={150} />
            <Image
              src={icons.tashiair}
              alt="tashiair"
              width={150}
              height={150}
            />
          </span>
        </div>
      </div>

      <footer className="flex justify-center text-white pt-[50px] my-[50px] text-3xl lg:text-start text-center border-t-4 border-secondary">
        <div className="w-full px-5 xl:px-0 xl:w-[1200px] 2xl:w-[1500px] flex lg:flex-row flex-col justify-between items-center gap-8 lg:gap-0">
          <span>© 2024 Evergreen Sojourn</span>
          <span className="flex gap-5 text-xl lg:flex-row flex-col">
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
        </div>
      </footer>
    </main>
  );
}
