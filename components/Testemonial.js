import Rating from "@/components/Rating";
import Image from "next/image";

export default function Testemonial() {
    return (
        <div className="p-5 rounded-lg bg-brand-blue flex flex-col gap-4 max-w-[22rem]">
            <div className="relative bg-white w-28 h-28 rounded-full overflow-hidden">
                <Image src={'/img/reviews/dummy.jpg'} alt="Iqra Zafar profile picture" fill objectFit="cover" objectPosition="center" />
            </div>
            <h2 className="text-white leading-none font-bold">Iqra Zafar</h2>
            <Rating value={5} />
            <p className="text-sm font-light text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ducimus, placeat dolores culpa commodi cumque quasi earum possimus officiis, quia doloribus aliquid quas. Nesciunt corporis exercitationem saepe eveniet inventore? Incidunt, natus reiciendis!
            </p>
        </div>
    )
}