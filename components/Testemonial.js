import Rating from "@/components/Rating";
import Image from "next/image";

export default function Testemonial({name, rating, msg, img}) {
    return (
        <div>
            <div className="p-5 rounded-lg bg-brand-blue flex flex-col gap-4 items-center max-w-[22rem]">
                {/* <div className="relative bg-white w-28 h-28 rounded-full overflow-hidden">
                    <Image src={img || '/img/reviews/dummy.jpg'} alt="profile picture" fill objectFit="cover" objectPosition="center" />
                    </div> */}
                <Rating value={rating || 5} />
                <p className="text-sm font-light text-white text-center">
                    {msg || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ducimus, placeat dolores culpa commodi cumque quasi earum possimus officiis, quia doloribus aliquid quas. Nesciunt corporis exercitationem saepe eveniet inventore? Incidunt, natus reiciendis!'}
                </p>
                <h2 className="mt-2 text-white text-center leading-none font-semibold">{name || 'Iqra Zafar'}</h2>
            </div>
        </div>
    )
}
