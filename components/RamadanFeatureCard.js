import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons"
import { icon } from "@fortawesome/fontawesome-svg-core"

const defaultProps = {
    title: "Tailored to your travel needs",
    desc: "It works if you are solo, a family, or an agency traveling. Want a certain itinerary, to go from a particular airport, find non-resistant flights? No problem! Whatever tickles your fancy – luxury or budget-friendly hotels; we are here to offer everything including 3-star and 5-star outlets.",
    icon: faPlaneDeparture
}

export default function RamadanFeatureCard({title=defaultProps.title, desc=defaultProps.desc, icon=defaultProps.icon}) {
    return (
        <div className="rounded-lg bg-white border flex flex-col gap-5 max-w-[340px] p-5 shadow-lg">
            <FontAwesomeIcon icon={icon} className="brand-yellow self-start text-4xl" />
            <h2 className="font-bold text-base">{title}</h2>
            <p className="text-sm">
                {desc}
            </p>
        </div>
    )
}
