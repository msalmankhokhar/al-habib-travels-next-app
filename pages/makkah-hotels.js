import Footer from "@/components/Footer"
import Head from "@/components/Head"
import HolyPlace from "@/components/HolyPlace"
import HotelRow from "@/components/HotelRow"
import Navbar from "@/components/Navbar"
import Rating from "@/components/Rating"
import QueryForm from "@/components/Sections/QueryForm"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

export default function makkahHotels() {
  return (
    <>
      <Head
        title={"Hotels in Makkah"}
        desc={
          "To fulfil your religious duties as a Muslim, you can travel with the Al Habib Travel and benefit from affordable Umrah packages from the UK. Makkah, the holiest city in Saudi Arabia, is the center for performing the sacred practices of the Muslim community, opening the way for Allah's abundant blessings. Countless pilgrims worldwide aim to enjoy luxurious hotel packages during their spiritual journeys each year."
        }
        imgSrc="/img/hotels/makkah.png"
      />
      <div className="bg-brand-blue px-5 py-2 flex items-center justify-center">
        <p className="text-white text-center text-xs xs:text-sm">
          Welcome to Al Habib Travels | Your Trusted Hajj and Umrah Partner
        </p>
      </div>
      <Navbar />
      
      <main>

        <div className="px-3 pt-7">
            <h1 className="text-3xl md:text-4xl mb-5 font-bold brand-blue text-center">Makkah Hotels</h1>
            <div className="flex justify-center rounded-lg gap-4 flex-wrap w-fit mx-auto">
                <div className="rounded-md overflow-hidden relative h-[250px] w-full min-[1014px]:w-[400px] min-[1014px]:h-auto">
                    <Image src={'/img/hotels/makkah.png'} fill style={{objectFit: 'cover', objectPosition: 'center'}} alt="holy kaba makkah"/>
                </div>
                <div className="text-sm max-w-lg flex justify-center flex-col gap-3">
                    <p>
                        To fulfil your religious duties as a Muslim, you can travel with the Al Habib Travel and benefit from affordable Umrah packages from the UK. Makkah, the holiest city in Saudi Arabia, is the center for performing the sacred practices of the Muslim community, opening the way for Allah{`'`}s abundant blessings. Countless pilgrims worldwide aim to enjoy luxurious hotel packages during their spiritual journeys each year. We treat our valued customers like family, offering ease in travel and accommodation. In addition to ticketing and visa services, we provide lodging for our Hajj and Umrah packages.
                    </p>
                    <p>
                        Pilgrims choose our excellent services for their sacred Hajj and Umrah duties at the house of Allah. Before visiting Makkah, it{`'`}s helpful to learn about the key sites. We simplify this process by providing all the necessary details for our clients. All you need is a budget-friendly flight to Jeddah. You can proceed directly to Makkah for your spiritual obligations.
                    </p>
                </div>
            </div>
        </div>
        
        <div className="px-3 mt-7 py-7">
            <h1 className="text-3xl md:text-4xl mb-5 font-bold brand-yellow text-center">List of Hotels in Makkah</h1>
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

        {/* Holy Places in Makkah */}
        <div className="px-3 mt-7 py-7">
            <h1 className="text-3xl md:text-4xl mb-5 font-bold brand-blue text-center">Holy Places in Makkah</h1>
            <div className="flex flex-col gap-5 holyplaces-container">

                <HolyPlace
                    name="Jabal Al-Rahmah"
                    desc={"In Arabic, Jabal means mountain, and Rahmah means Mercy. Jabal Al Rahmah is this mountain area (Arafah), about 20 km east of Mecca. Millions of Muslims all over the world come to perform Hajj every year. On the 9th day, which is the last month of the Islamic Lunar Calendar, Hajjis perform Wukuf (standing) in Arafat Mountain to pray as well as urging for welcoming redemption. They see it as quiet, meditation and an experience zone for anyone who enters with respect and proximity."}
                />
                <HolyPlace
                    name="Masjid Qubah"
                    desc={"Masjid Qubah, belonging to an Islam of the past, awaits about 3 kilometers Southwest of Masjid Old Prophets. It is called the first mosque built by Prophet Muhammad and his companions, a mark of togetherness and faith. Many visitors experience overwhelming peace and spirituality while praying in this masjid. Masjid Qubah, known for its beautiful architecture and religious significance, puts out an invitation every year, and a number of people come to make their spiritual experience at great lengths."}
                />
                <HolyPlace
                    name="Masjid Taneem"
                    desc={`A place of greeting (about 5 miles outside Mecca) is unique for Muslim town workers in Mecca who begin their Hajj at Masjid Taneem. This mosque is commonly called "Masjid Aisha", and many pilgrims visit here to wear their ihram before performing Umrah. Masjid Taneem is a calm and peaceful environment for pilgrims to provide the perfect spiritual starting point before finishing their Holy pilgrimage to Kaaba. For some, it is their maiden visit; for others, it is one of a thousand, but the place exudes an aura of acceptance and warm affection that endears to every pilgrim on the spiritual trail.`}
                />
                <HolyPlace
                    name="Mosque of Al-Khayf"
                    desc={`The Al-Khayf Mosque in Mina is a cherished pilgrimage site during Hajj. It is believed that many prophets, including Prophet Muhammad, prayed here. Known for its rich history and spiritual significance, the mosque provides a peaceful haven for reflection. Pilgrims gather to offer prayers and connect with their faith. This sacred mosque continues to inspire devotion and serenity among those who visit.`}
                />
                <HolyPlace
                    name="Jabal Thawr"
                    desc={`Jabal Thawr, nestled in Mecca's sacred landscape, holds profound significance for Muslims. This mountain symbolises resilience and faith because of its historical role during the Prophet Muhammad's migration. A key highlight is the Thawr Cave, where the Prophet once found refuge. Set amidst stunning natural scenery, Jabal Thawr invites pilgrims to reflect on its stories. Discover the spiritual essence of this revered site as you explore its rich history and beauty.`}
                />
                <HolyPlace
                    name="Jabal Al Nour"
                    desc={`Jabal Al Nour is approximately four kilometers north of the Grand Mosque in Mecca. It is known for the Hira Cave, in which Prophet Muhammad received the first revelation of the Quran. Visitors are drawn to its spiritual significance and the unique journey it offers up the mountain. The climb provides stunning views of Mecca, creating a memorable experience. Explore Jabal Al Nour and uncover its profound connection to Islamic history.`}
                />
                <HolyPlace
                    name="Masjid Aisha"
                    desc={`Masjid Aisha, situated just 8 kilometers from the holy Kaaba in Mecca, is a beloved stop for many pilgrims. It offers a tranquil setting where visitors can dress in their ihram clothes, symbolizing their intention to undertake the Umrah pilgrimage. As a must-visit spiritual landmark, the mosque's serene ambiance makes it ideal for contemplation and preparation. With simple architecture and deep-rooted spiritual significance, Masjid Aisha remains essential to many pilgrims' journeys. Discover the peace and history that make this mosque a cornerstone of Islamic pilgrimage.`}
                />
                <HolyPlace
                    name="Mina"
                    desc={`Explore the spiritual journeys to sacred locations in the heart of Mecca. Just 8 kilometers from the bustling city center lies Mina, a vital site for pilgrims during the Hajj. This guide offers insights into landmarks like Mount Arafat, Masjid Qubah, and Jabal Al Nour. Discover their historical significance and spiritual ambiance inviting visitors from around the globe. Embark on a memorable pilgrimage enriched by the profound heritage of these revered sites.`}
                />
                <HolyPlace
                    name="Jannat-al-Mu'alla"
                    desc={`Situated just 2 Kilometers north of the Grand Mosque in Mecca is a sacred Islamic graveyard, Jannat-al-Mu'alla. In addition to being the burial ground of several ancestors of Prophet Muhammad, it is steeped in history. Visit the Sacred Place of worship by people from around the globe to experience peaceful surroundings for in-depth concentration. Discover the beautiful heritage of Jannat-al-Mu'alla with calm surroundings. Discover why this landmark remains a crucial destination for pilgrims seeking a profound connection to their faith.`}
                />

            </div>
        </div>
        {/* Holy Places in Makkah end*/}
        <div className="flex items-center justify-center">
            <QueryForm />
        </div>
      </main>

      <Footer/>
    </>
  )
}

const hotels = [
    {
        name: 'Sheraton Makkah Jabal Al Kaaba',
        rating: 5,
        distance: 500
    },
    {
        name: 'Shaza Makkah',
        rating: 5,
        distance: 500
    },
    {
        name: 'Anjum Makkah',
        rating: 5,
        distance: 450
    },
    {
        name: 'DoubleTree by Hilton Makkah Jabal Omar',
        rating: 5,
        distance: 550
    },
    {
        name: 'Jabal Omar Marriot',
        rating: 5,
        distance: 450
    },
    {
        name: 'Hilton Makkah Convention',
        rating: 4,
        distance: 550
    },
    {
        name: 'Address Jabal Omar Makkah',
        rating: 5,
        distance: 600
    },
    {
        name: 'Hilton Suites Makkah',
        rating: 5,
        distance: 350
    },
    {
        name: 'Conrad Makkah',
        rating: 5,
        distance: 300
    },
    {
        name: 'Makkah Towers',
        rating: 5,
        distance: 50
    },
    {
        name: 'Swissotel Al Maqam (Left)',
        rating: 5,
        distance: 50
    },
    {
        name: 'Swissotel Makkah (Right)',
        rating: 5,
        distance: 50
    },
    {
        name: 'Movenpick Hajar Tower',
        rating: 5,
        distance: 50
    },
    {
        name: 'Makkah Clock Tower',
        rating: 5,
        distance: 0
    },
    {
        name: 'Pullman Zam Zam',
        rating: 5,
        distance: 50
    },
    {
        name: 'Al Ghufran Safwah',
        rating: 5,
        distance: 100
    },
    {
        name: 'Al Safwah Royal Orchid',
        rating: 5,
        distance: 100
    },
    {
        name: 'Emaar Al Sultan',
        rating: 3,
        distance: 150
    },
    {
        name: 'Emaar Worth Elite',
        rating: 3,
        distance: 150
    },
    {
        name: 'Swiss Al Khalil',
        rating: 3,
        distance: 700
    },
    {
        name: 'Emaar Al Khalil',
        rating: 3,
        distance: 700
    },
    {
        name: 'Emaar Al Andalusiah',
        rating: 4,
        distance: 600
    },
    {
        name: 'Emaar Al Manar',
        rating: 4,
        distance: 550
    },
    {
        name: 'Emaar Grand',
        rating: 4,
        distance: 600
    },
]


