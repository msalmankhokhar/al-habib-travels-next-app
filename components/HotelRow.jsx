import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import Rating from "./Rating"

export default function HotelRow({name="Anjum Makkah", rating=4, distance=450}) {
    return (
        <tr className="font-semibold">
            <td className="px-5 py-2 text-center">{name}</td>
            <td className="px-5 py-2 text-center"><Rating value={rating} /></td>
            <td className="px-5 py-2 text-center">{distance} meters</td>
            <td className="px-5 py-2 text-center">
                <a href="tel:02035042344" className="bg-teal-800 mx-auto text-xs flex items-center rounded-full p-1 w-fit">
                    <div className="flex rounded-full bg-white items-center justify-center border border-white w-7 h-7">
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <span className="text-white px-2">Call Now</span>
                </a>
            </td>
        </tr>
    )
}
