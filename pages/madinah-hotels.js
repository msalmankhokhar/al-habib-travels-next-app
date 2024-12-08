import BgOverlay from "@/components/BgOverlay"
import Footer from "@/components/Footer"
import Head from "@/components/Head"
import HolyPlace from "@/components/HolyPlace"
import HotelRow from "@/components/HotelRow"
import Navbar from "@/components/Navbar"
import QueryFormNew from "@/components/QueryFormNew"
import Rating from "@/components/Rating"
import QueryForm from "@/components/Sections/QueryForm"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

export default function madinahHotels() {
  return (
    <>
      <Head
        title={"Hotels in Madinah"}
        desc={
          "To fulfil your religious duties as a Muslim, you can travel with the Al Habib Travel and benefit from affordable Umrah packages from the UK. Madinah, the holiest city in Saudi Arabia, is the center for performing the sacred practices of the Muslim community, opening the way for Allah's abundant blessings. Countless pilgrims worldwide aim to enjoy luxurious hotel packages during their spiritual journeys each year."
        }
        imgSrc="/img/hotels/madinah.png"
      />
      <div className="bg-brand-blue px-5 py-2 flex items-center justify-center">
        <p className="text-white text-center text-xs xs:text-sm">
          Welcome to Al Habib Travels | Your Trusted Hajj and Umrah Partner
        </p>
      </div>
      <Navbar />
      
      <main className="bgOverlay">
        <BgOverlay/>
        <div className="px-3 pt-7">
            <h1 className="text-3xl md:text-4xl mb-5 font-bold brand-blue text-center">Madinah Hotels</h1>
            <div className="flex justify-center rounded-lg gap-4 flex-wrap w-fit mx-auto">
                <div className="rounded-md overflow-hidden relative h-[250px] w-full min-[1014px]:w-[400px] min-[1014px]:h-auto">
                    <Image src={'/img/hotels/madinah.png'} fill style={{objectFit: 'cover', objectPosition: 'center'}} alt="holy kaba madinah"/>
                </div>
                <div className="text-sm max-w-lg flex justify-center flex-col gap-3">
                    <p>
                        We offer dedicated services to global pilgrims for their holy obligations, including Hajj and Umrah. Our 2024 Umrah packages come with comfortable hotel options with a wide range of amenities and services. Muslims worldwide travel to this sacred city to fulfil their religious duties and receive the Almighty Allah{`'`}s blessings. Al Habib Travel’s excellent Umrah Packages from the UK have gained popularity by providing convenient and cost-effective services backed by our IATA and ATOL licenses. Our reliable and affordable services are available 24/7, with comprehensive guidance to ensure a trouble-free sacred journey. When visiting Umrah, you{`'`}ll receive a list of recommended sites known as Ziyarat. To make your dream of visiting these holy places come true, book your flights to Jeddah. Below is a list of sacred sites to explore.
                    </p>
                </div>
            </div>
        </div>

        <div className="px-3 mt-7 py-7">
            <h1 className="text-3xl md:text-4xl mb-5 font-bold brand-yellow text-center">List of Hotels in Madinah</h1>
            <div className="w-full overflow-x-auto">
                <table className="text-sm w-full min-w-[600px] max-w-screen-xl mx-auto">
                    <thead>
                        <tr className="font-bold bg-blue-50">
                            <th className="px-5 py-2 min-w-[250px]">Hotel Name</th>
                            <th className="px-5 py-2 min-w-[160px]">Hotel Type</th>
                            <th className="px-5 py-2 min-w-[160px]">Distance to Haram</th>
                            <th className="px-5 py-2 min-w-[160px]">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            hotels.map(hotel=>{
                                return <HotelRow key={hotel.name} {... hotel}/>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>

        {/* Holy Places in Madinah */}
        <div className="px-3 mt-7 py-7">
            <h1 className="text-3xl md:text-4xl mb-5 font-bold brand-blue text-center">Holy Places in Madinah</h1>
            <div className="flex flex-col gap-5 holyplaces-container">
                <HolyPlace
                    city="madinah"
                    name="Al-Masjid an-Nabawi – The Prophet’s Mosque"
                    desc={"The Prophet's Mosque in Medina holds significance for Muslims globally as it was established by Prophet Muhammad himself. Situated 208 miles away from Mecca in Saudi Arabia, this mosque acts as a point for pilgrims. It draws numerous visitors yearly because of its stunning architecture and deep-rooted history. During their visit to this place of tranquility and beauty, many individuals experience a sense of peace and a profound spiritual bond."}
                />
                <HolyPlace
                    city="madinah"
                    name="Masjid Al-Ahzab – The battle place"
                    desc={"Masjid Al Ahzab is a mosque of importance situated in Medina in Saudi Arabia. It is approximately 3 miles away from the famous Al-Masjid al-Nabawi mosque. It holds significance as the location of the Battle of the Trench. It draws visitors seeking to delve into its past and experience its spiritual ambiance. Visiting Masjid Al Ahzab provides a glimpse into events in its heritage."}
                />
                <HolyPlace
                    city="madinah"
                    name="Quba Mosque – City’s second-largest mosque"
                    desc={"Masjid Qubah, belonging to an Islam of the past, awaits about 3 kilometres Southwest of Masjid Old Prophets. It is called the first mosque built by Prophet Muhammad and his companions, a mark of togetherness and faith. Many visitors experience overwhelming peace and spirituality while praying in this masjid. Masjid Qubah, known for its beautiful architecture and religious significance, puts out an invitation every year, and a number of people come to make their spiritual experience at great lengths."}
                />
                <HolyPlace
                    city="madinah"
                    name="Al-Madinah Museum – The oldest museum in Madinah"
                    desc={"The Al Madinah Museum, in Medinas vividly portrays the area's history and cultural heritage to its visitors in a manner. Located 2 miles ( 3 kilometers) away from Al Masjid an Nabawi the museum attracts history buffs and pilgrims alike with its captivating exhibits. It offers a glimpse into the tales of the era through artifacts and displays. Open from 9 AM to 5 PM daily the museum ensures a visit, with its easy to understand presentations. Be sure to explore and delve deeper into the history of Medina."}
                />
                <HolyPlace
                    city="madinah"
                    name="The Garden of Hazrat Salman Farsi (RA)"
                    desc={"Hazrat Salman Farsi (RA) Garden, in Medina is a destination for tourists in Islamic history and heritage exploration. Situated 4 miles (around 6 kilometers away from Al Masjid an Nabawi) this peaceful garden provides an escape from the busy city life. With its surroundings and calm atmosphere this lovely garden is renowned for being a spot to unwind and contemplate. Take a stroll. Delve into the life of Hazrat Salman Farsi (RA) during a walk in Medina adding depth to your cultural voyage. Uncover this undisclosed treasure and elevate your journey."}
                />
                <HolyPlace
                    city="madinah"
                    name="Mount Uhud"
                    desc={"In Medina, Saudi Arabia, Mount Uhud is a historical landmark. It is approximately 3.5 Miles ( 5.6 Kilometers) from Al-Masjid al-Nabawi. With its connection to the Battle of Uhud, this mountain carries historical and spiritual importance. People who visit Mount Uhud can see where significant events from that era took place, making it a top destination for history and culture enthusiasts. Uncover the tales and insights from this location as you take in the scenery that envelops Medina."}
                />
                <HolyPlace
                    city="madinah"
                    name="Jannat-Ul-Baqi – The oldest Islamic cemetery in Madinah"
                    desc={"The historic cemetery of Jannat Ul Baqi, in Medina, is a burial ground close to Al Masjid al-Nabawi in Saudi Arabia. Numerous renowned figures of Islam, such as relatives and companions of Prophet Muhammad, find their resting place in this revered location. Visitors commonly feel reverence and connection to the history of Islam when they visit this sacred site. Jannat Ul Baqia beckons all those delving into the depths of Islamic culture and heritage to explore its storied grounds in Medina for a profound and reflective experience."}
                />
                <HolyPlace
                    city="madinah"
                    name="Masjid Al-Qiblatain"
                    desc={"During your Umrah pilgrimage, you must visit Masjid Al Qiblatain in Madinah. It is located around 4 miles ( 6 kilometers) from Al-Masjid al-Nabawi. It is known for its historical significance as the site where the orientation of prayer shifted from Jerusalem to Mecca ages ago! Many visitors find themselves enchanted by its vibes and remarkable architecture. Be sure to include a visit to Masjid Al Qiblatain in your schedule for a glimpse into this chapter of Islamic heritage."}
                />
                <HolyPlace
                    city="madinah"
                    name="Madina Media Museum"
                    desc={"The museum, known as the Madina Media Museum, in Medina, Saudi Arabia, draws in visitors to learn about the history of Islam, both up close and personal. Located about 3 kilometers away from the Al Masjid al Nabawi mosque equivalent to 1 mile this museum showcases artifacts that beautifully showcase the legacy of Islam. It welcomes visitors daily from 9 a.m to 7 p.m allowing time for exploration and discovery of its treasures. Find something to intrigue every visitor with a range of artifacts and exhibitions to explore and engage with at the museum that will captivate individuals of all ages. Make sure you include a visit to the enlightening experience at the Medina Media Museum when planning your travels for an enriching glimpse into Islam's history."}
                />
            </div>
        </div>
        {/* Holy Places in Madinah end*/}

        <div className="flex flex-col items-center justify-center py-10">
            <h1 className="sm:text-3xl text-xl font-bold mb-5">Book your Umrah Package</h1>
            <QueryFormNew />
        </div>
      </main>

      <Footer/>
    </>
  )
}

const hotels = [
    {
        name: 'Shaza Al Madinah',
        rating: 5,
        distance: 200
    },
    {
        name: 'Anwar Al Madinah Movenpick',
        rating: 5,
        distance: 100
    },
    {
        name: 'Pullman Zamzam Madinah',
        rating: 5,
        distance: 150
    },
    {
        name: 'Intercontinental Dar Al Hijra',
        rating: 5,
        distance: 200
    },
    {
        name: 'Millennium Taiba Hotel',
        rating: 5,
        distance: 200
    },
    {
        name: 'Millennium Al Aqeeq Madinah Hotel',
        rating: 5,
        distance: 150
    },
    {
        name: 'Crowne Plaza Madniah',
        rating: 5,
        distance: 500
    },
    {
        name: 'Madinah Hilton',
        rating: 5,
        distance: 300
    },
    {
        name: 'Madinah Movenpick Hotel',
        rating: 5,
        distance: 300
    },
    {
        name: 'Al Eiman Royal Hotel',
        rating: 5,
        distance: 200
    },
    {
        name: 'Al Haram Hotel',
        rating: 5,
        distance: 100
    },
    {
        name: 'Dar Al Taqwa Hotel',
        rating: 5,
        distance: 100
    },
    {
        name: 'Rua Al Hijra Hotel',
        rating: 4,
        distance: 400
    },
    {
        name: 'Golden Tulip Al-Zahabi',
        rating: 4,
        distance: 200
    },
    {
        name: 'Elaf Taiba Hotel',
        rating: 4,
        distance: 300
    },
    {
        name: 'Province Al Sham Hotel',
        rating: 3,
        distance: 500
    },
    {
        name: 'Dallah Taiba Hotel',
        rating: 4,
        distance: 100
    },
]