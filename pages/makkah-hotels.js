import Footer from "@/components/Footer"
import Head from "@/components/Head"
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
            <div className="flex justify-center rounded-lg gap-4 flex-wrap w-fit mx-auto p-3">
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
                <table className="text-sm w-full min-w-[600px">
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
                        <HotelRow />
                        <HotelRow />
                        <HotelRow />
                        <HotelRow />
                        <HotelRow />
                        <HotelRow />
                        <HotelRow />
                    </tbody>
                </table>
            </div>
        </div>

        {/* Holy Places in Makkah */}
        <div className="px-3 mt-7 py-7">
            <h1 className="text-3xl md:text-4xl mb-5 font-bold brand-blue text-center">Holy Places in Makkah</h1>
            <div className="flex flex-col gap-5">

                <div className="flex justify-center rounded-lg gap-4 flex-wrap w-fit mx-auto p-3">
                    <div className="rounded-md overflow-hidden relative h-[250px] w-full min-[1014px]:w-[400px] min-[1014px]:h-auto">
                        <Image src={'/img/hotels/makkah.png'} fill style={{objectFit: 'cover', objectPosition: 'center'}} alt="holy kaba makkah"/>
                    </div>
                    <div className="text-sm max-w-lg flex justify-center flex-col gap-3">
                        <h2 className="self-start leading-none text-xl md:text-2xl font-bold brand-blue text-center">Jabbal Al Makkah</h2>
                        <p>
                            To fulfil your religious duties as a Muslim, you can travel with the Al Habib Travel and benefit from affordable Umrah packages from the UK. Makkah, the holiest city in Saudi Arabia, is the center for performing the sacred practices of the Muslim community, opening the way for Allah{`'`}s abundant blessings. Countless pilgrims worldwide aim to enjoy luxurious hotel packages during their spiritual journeys each year. We treat our valued customers like family, offering ease in travel and accommodation. In addition to ticketing and visa services, we provide lodging for our Hajj and Umrah packages.
                        </p>
                        <p>
                            Pilgrims choose our excellent services for their sacred Hajj and Umrah duties at the house of Allah. Before visiting Makkah, it{`'`}s helpful to learn about the key sites. We simplify this process by providing all the necessary details for our clients. All you need is a budget-friendly flight to Jeddah. You can proceed directly to Makkah for your spiritual obligations.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center rounded-lg flex-row-reverse gap-4 flex-wrap w-fit mx-auto p-3">
                    <div className="rounded-md overflow-hidden relative h-[250px] w-full min-[1014px]:w-[400px] min-[1014px]:h-auto">
                        <Image src={'/img/hotels/makkah.png'} fill style={{objectFit: 'cover', objectPosition: 'center'}} alt="holy kaba makkah"/>
                    </div>
                    <div className="text-sm max-w-lg flex justify-center flex-col gap-3">
                        <h2 className="self-start leading-none text-xl md:text-2xl font-bold brand-blue text-center">Jabbal Al Makkah</h2>
                        <p>
                            To fulfil your religious duties as a Muslim, you can travel with the Al Habib Travel and benefit from affordable Umrah packages from the UK. Makkah, the holiest city in Saudi Arabia, is the center for performing the sacred practices of the Muslim community, opening the way for Allah{`'`}s abundant blessings. Countless pilgrims worldwide aim to enjoy luxurious hotel packages during their spiritual journeys each year. We treat our valued customers like family, offering ease in travel and accommodation. In addition to ticketing and visa services, we provide lodging for our Hajj and Umrah packages.
                        </p>
                        <p>
                            Pilgrims choose our excellent services for their sacred Hajj and Umrah duties at the house of Allah. Before visiting Makkah, it{`'`}s helpful to learn about the key sites. We simplify this process by providing all the necessary details for our clients. All you need is a budget-friendly flight to Jeddah. You can proceed directly to Makkah for your spiritual obligations.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center rounded-lg gap-4 flex-wrap w-fit mx-auto p-3">
                    <div className="rounded-md overflow-hidden relative h-[250px] w-full min-[1014px]:w-[400px] min-[1014px]:h-auto">
                        <Image src={'/img/hotels/makkah.png'} fill style={{objectFit: 'cover', objectPosition: 'center'}} alt="holy kaba makkah"/>
                    </div>
                    <div className="text-sm max-w-lg flex justify-center flex-col gap-3">
                        <h2 className="self-start leading-none text-xl md:text-2xl font-bold brand-blue text-center">Jabbal Al Makkah</h2>
                        <p>
                            To fulfil your religious duties as a Muslim, you can travel with the Al Habib Travel and benefit from affordable Umrah packages from the UK. Makkah, the holiest city in Saudi Arabia, is the center for performing the sacred practices of the Muslim community, opening the way for Allah{`'`}s abundant blessings. Countless pilgrims worldwide aim to enjoy luxurious hotel packages during their spiritual journeys each year. We treat our valued customers like family, offering ease in travel and accommodation. In addition to ticketing and visa services, we provide lodging for our Hajj and Umrah packages.
                        </p>
                        <p>
                            Pilgrims choose our excellent services for their sacred Hajj and Umrah duties at the house of Allah. Before visiting Makkah, it{`'`}s helpful to learn about the key sites. We simplify this process by providing all the necessary details for our clients. All you need is a budget-friendly flight to Jeddah. You can proceed directly to Makkah for your spiritual obligations.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center rounded-lg flex-row-reverse gap-4 flex-wrap w-fit mx-auto p-3">
                    <div className="rounded-md overflow-hidden relative h-[250px] w-full min-[1014px]:w-[400px] min-[1014px]:h-auto">
                        <Image src={'/img/hotels/makkah.png'} fill style={{objectFit: 'cover', objectPosition: 'center'}} alt="holy kaba makkah"/>
                    </div>
                    <div className="text-sm max-w-lg flex justify-center flex-col gap-3">
                        <h2 className="self-start leading-none text-xl md:text-2xl font-bold brand-blue text-center">Jabbal Al Makkah</h2>
                        <p>
                            To fulfil your religious duties as a Muslim, you can travel with the Al Habib Travel and benefit from affordable Umrah packages from the UK. Makkah, the holiest city in Saudi Arabia, is the center for performing the sacred practices of the Muslim community, opening the way for Allah{`'`}s abundant blessings. Countless pilgrims worldwide aim to enjoy luxurious hotel packages during their spiritual journeys each year. We treat our valued customers like family, offering ease in travel and accommodation. In addition to ticketing and visa services, we provide lodging for our Hajj and Umrah packages.
                        </p>
                        <p>
                            Pilgrims choose our excellent services for their sacred Hajj and Umrah duties at the house of Allah. Before visiting Makkah, it{`'`}s helpful to learn about the key sites. We simplify this process by providing all the necessary details for our clients. All you need is a budget-friendly flight to Jeddah. You can proceed directly to Makkah for your spiritual obligations.
                        </p>
                    </div>
                </div>

            </div>
        </div>
        {/* Holy Places in Makkah end*/}

        <QueryForm />
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
]


