import Head from "next/head";
import Link from "next/link";

export default function PackageComponent() {
  return (
    <main>
      <Head>
        <title>Evergreen Sojourn - Packages</title>
      </Head>
      <div className="flex justify-center">
        <div className="w-full xl:w-[1200px] 2xl:w-[1500px] px-5 xl:px-0 mt-5 text-primary">
          <Link href="/" className="font-jolly text-5xl w-fit flex ">
            <h1 className="w-fit">Evergreen Sojourn</h1>
          </Link>
        </div>
      </div>
      <div className="flex justify-center pt-[50px]">
        <div className="w-full xl:w-[1200px] 2xl:w-[1500px] px-5 xl:px-0 text-white">
          <h1 className="font-jolly text-6xl xl:text-7xl text-center">
            PACKAGES
          </h1>
          <div className="flex lg:flex-row flex-col gap-3 lg:gap-0 justify-evenly [&>div]:w-full lg:[&>div]:w-[30%] [&>div]:h-fit [&>div]:min-h-[500px] [&>div]:rounded my-10">
            <div className="bg-[#F2B2D7] p-7 text-black flex flex-col gap-3">
              <h1 className="text-3xl font-extrabold">
                Bhutan Classic Sojourn
              </h1>
              <span>
                <h3 className="text-lg font-bold">
                  i. Short Bhutan Sojourn (3 Nights/4 Days)
                </h3>
                <ul className="list-disc pt-2 pl-6 flex flex-col gap-2">
                  <li>
                    Arrival at Paro by any of the airlines and transfer to
                    Thimphu.
                  </li>
                  <p>[ON at Thimphu]</p>
                  <li>
                    Visit to National Memorial Chorten and alternatively to
                    Buddha Dhordenma. After Lunch, drive directly to Paro and
                    visit the National Museum or the Ta Dzong.
                  </li>
                  <p>[ON at Paro]</p>
                  <li>
                    The Tiger Nest Hike and at evening, a walk around Paro town
                    for any shoppings to be done
                  </li>
                  <p>[ON at Paro]</p>
                  <li>Airport drop onwards destination. </li>
                </ul>
              </span>
              <span>
                <h3 className="text-lg font-bold">
                  ii. Glimpses of Bhutan Sojourn (5 Nights/ 6 Days)
                </h3>
                <ul className="list-disc pt-2 pl-6 flex flex-col gap-2">
                  <li>
                    Arrival to Airport by any of the two airlines and transfer
                    to Thimphu.
                  </li>
                  <p>[ON at Thimphu] </p>
                  <li>
                    Visit Memorial Chorten and Buddha Dhoedenma. A short hike
                    from Buddha Dhordenma to Changangkha Temple for scenery of
                    Thimphu city as well.{" "}
                  </li>
                  <p>[ON at Thimphu]</p>
                  <li>
                    Drive to Punakha. At dochula we stop. Lunch at Wangdue
                    Phodrang. Visit Chimi Lhakhang and after that to Punakha
                    Dzong. Then visit long suspension bridge.{" "}
                  </li>
                  <p>[ON at Punakha]</p>
                  <li>
                    Towards paro. Visit Ta Dzong then to Rinpung Dzong through
                    the Traditional covered bridge. a walk around Paro town for
                    any shopping to be done
                  </li>
                  <p>[ON at Paro]</p>
                  <li>
                    Tiger nest Hike. A walk around Paro town for any shopping to
                    be done. (Optional)
                  </li>
                  <p>[ON at Paro]</p>
                  <li> Airport Drop to onwards Destination.</li>
                </ul>
              </span>
              <Link
                href="/#contact"
                className="border-2 font-bold bg-black text-white hover:text-black hover:bg-transparent border-black rounded w-full text-center py-3"
              >
                Book Now
              </Link>
            </div>
            <div className="bg-[#7EE0D6] p-7 text-black flex flex-col gap-3">
              <h1 className="text-3xl font-extrabold">
                Bhutan Festival Sojourn
              </h1>
              <span>
                <h3 className="text-lg font-bold">
                  i. Thimphu Tshechu Sojourn (5Nights/6Days)
                </h3>
                <ul className="list-disc pt-2 pl-6 flex flex-col gap-2">
                  <li>
                    Arrival to Airport by any of the two airlines and transfer
                    to Thimphu.
                  </li>
                  <p>[ON at Thimphu]</p>
                  <li>Visit to Thimphu Tshechu.</li>
                  <p>[ON at Thimphu]</p>
                  <li>
                    Drive to Punakha. At dochula we stop. Lunch at Wangdue
                    Phodrang. Visit Chimi Lhakhang and after that to Punakha
                    Dzong. Then visit long suspension bridge
                  </li>
                  <p>[ON at Punakha]</p>
                  <li>
                    Drive back to Paro. Visit Ta Dzong then to Rinpung Dzong
                    through the Traditional covered bridge. a walk around Paro
                    town for any shopping to be done.
                  </li>
                  <p>[ON at Paro]</p>
                  <li>
                    Tiger nest Hike. A walk around Paro town for any shopping to
                    be done. (Optional)
                  </li>
                  <p>[ON at Paro]</p>
                  <li>Airport Drop to onwards Destination.</li>
                </ul>
              </span>
              <span>
                <h3 className="text-lg font-bold">
                  ii. Nimalung/ Kurjey Tshechu Sojourn (10 Nights/ 11 Days)
                </h3>
                <ul className="list-disc pt-2 pl-6 flex flex-col gap-2">
                  <li>
                    Arrival to airport by any of the two airlines and
                    sightseeing.
                  </li>
                  <p>[ON at Paro]</p>
                  <li>
                    Paro to Bumthang (Drive or by flight). Visit to Jakar Dzong,
                    Jambay Lhakhang, Tamshing lhakhang and Kurjey Lhakhang.
                  </li>
                  <p>[ON at Bumthang.]</p>
                  <li>
                    Witness Kurjey Tshechu. Visit to “Mebar Tsho” or the Burning
                    Lake.
                  </li>
                  <p>[ON at Bumthang.]</p>
                  <li>Nimalung Tshechu.</li>
                  <p>[ON at Bumthang.]</p>
                  <li>
                    Bumthang to Phobjikha valley. Visit to Trongsa Dzong and Taa
                    Dzong
                  </li>
                  <p>[ON at Phobjikha.]</p>
                  <li>
                    Drive to Punakha, visit to Wangdue Phodrang Dzong and Chimi
                    lhakhang popularly known as “The Temple of Fertility”
                  </li>
                  <p>[ON at Punakha]</p>
                  <li>
                    In the morning walk across the long suspension bridge. And
                    visit to Dochu La pass. Upon arrival to Thimphu, visiy to
                    Changlimithang and witness Archery match.{" "}
                  </li>
                  <p>[ON at Thimphu]</p>
                  <li>
                    Visit to Buddha Dhordenma and National Memorial Chorten. In
                    the lunch visit to Simply Bhutan and afterwards to
                    Hadicrafts abd arts work.
                  </li>
                  <p>[ON at Thimphu]</p>
                  <li>
                    In the morning visit to Bhutan postal museum and painting
                    school (School of the 13 arts and crafts) By afternoon drive
                    to Paro and on the way visit to Tamchog Lhakhang.
                  </li>
                  <p>[ON at Paro]</p>
                  <li>Hike to Paro Taktsang</li>
                  <p>[ON at Paro]</p>
                  <li>Airport Drop to onwards Destination</li>
                </ul>
              </span>
              <Link
                href="/#contact"
                className="border-2 font-bold bg-black text-white hover:text-black hover:bg-transparent border-black rounded w-full text-center py-3"
              >
                Book Now
              </Link>
            </div>
            <div className="bg-[#FFBC01]  p-7 text-black flex flex-col gap-3">
              <h1 className="text-3xl font-extrabold">
                Bhutan Trekking Sojourn
              </h1>
              <span>
                <h3 className="text-lg font-bold">
                  i. Druk Trek Path- 9 Days/8 Nights
                </h3>
                <ul className="list-disc pt-2 pl-6 flex flex-col gap-2">
                  <li>Day 1: Paro Arrival - Acclimatization</li>
                  <li>Day 2: Paro Sightseeing</li>
                  <li>Day 3: Transfer from Ta Dzong to Jele Dzong</li>
                  <li>Day 4: Transfer from Jele Dzong to Tsokam</li>
                  <li>Day 5: Transfer from Tsokamto Jimilang Tsho</li>
                  <li>Day 6: Transfer from Jimilang Tsho to Simkotra Tsho</li>
                  <li>
                    Day 7: Transfer from Simkotra Tsho to Phajoding - Transfer
                    to Thimphu
                  </li>
                  <li>Day 8: Thimphu Sightseeing</li>
                  <li>Day 9: Airport drop.</li>
                </ul>
              </span>

              <span>
                <h3 className="text-lg font-bold">
                  ii. Laya-Gasa Trek- 17 Days/ 16 Nights
                </h3>
                <ul className="list-disc pt-2 pl-6 flex flex-col gap-2">
                  <li>Day 01: Paro Arrival</li>
                  <li>
                    Day 02: Acclimatization - Tiger&apos;s Nest Hiking Trip
                  </li>
                  <li>Day 03: Drugyal Dzong - Shana</li>
                  <li>Day 04: Shana - Sio Thangthangkha</li>
                  <li>Day 05: Sio Thangthangkha - Jangothang</li>
                  <li>Day 06: Leisure at Jangothang</li>
                  <li>Day 07: Jangothang - Lingshi</li>
                  <li>Day 08: Lingshi - Chebisa</li>
                  <li>Day 09: Chebisa - Shomuthang</li>
                  <li>Day 10: Shomuthang - Robluthang</li>
                  <li>Day 11: Robluthang - Lingmithang</li>
                  <li>Day 12: Lingmithang - Laya</li>
                  <li>Day 13: Laya - Koena</li>
                  <li>Day 14: Koena - Gasa</li>
                  <li>Day 15: Gasa - Punakha</li>
                  <li>Day 16: Punakha - Thimphu</li>
                  <li>Day 17: Thimphu - Paro | Departure</li>
                </ul>
              </span>
              <Link
                href="/#contact"
                className="border-2 font-bold bg-black text-white hover:text-black hover:bg-transparent border-black rounded w-full text-center py-3"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
