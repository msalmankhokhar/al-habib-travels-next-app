import Image from "next/image"

export default function HolyPlace({name="Jabbal Al Makkah", desc, city="makkah", folder="holyplaces"}) {
    return (
        <div className="flex justify-center rounded-lg gap-4 flex-wrap w-fit mx-auto">
            <div className="rounded-md overflow-hidden relative h-[250px] w-full min-[1014px]:w-[400px] min-[1014px]:min-h-[250px]">
                <Image src={`/img/${folder}/${city}/${name}.png`} fill style={{ objectFit: 'cover', objectPosition: 'center' }} alt={name} />
            </div>
            <div className="text-sm max-w-lg flex justify-center flex-col gap-3">
                <h2 className="self-start leading-none text-xl md:text-2xl font-bold brand-blue text-center">{name}</h2>
                {
                    desc ||
                    <>
                        <p>
                            To fulfil your religious duties as a Muslim, you can travel with the Al Habib Travel and benefit from affordable Umrah packages from the UK. Makkah, the holiest city in Saudi Arabia, is the center for performing the sacred practices of the Muslim community, opening the way for Allah{`'`}s abundant blessings. Countless pilgrims worldwide aim to enjoy luxurious hotel packages during their spiritual journeys each year. We treat our valued customers like family, offering ease in travel and accommodation. In addition to ticketing and visa services, we provide lodging for our Hajj and Umrah packages.
                        </p>
                        <p>
                            Pilgrims choose our excellent services for their sacred Hajj and Umrah duties at the house of Allah. Before visiting Makkah, it{`'`}s helpful to learn about the key sites. We simplify this process by providing all the necessary details for our clients. All you need is a budget-friendly flight to Jeddah. You can proceed directly to Makkah for your spiritual obligations.
                        </p>
                    </>
                }
            </div>
        </div>
    )
}
