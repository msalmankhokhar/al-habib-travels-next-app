import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="bg-white px-5 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div className="flex gap-4 items-center">
                <div className="flex items-center justify-center h-8 w-8 rounded-full text-slate-100 bg-teal-800 hover:bg-gray-200 hover:text-teal-800 transition-colors duration-300">
                    <FontAwesomeIcon icon={faFacebook} className="leading-none text-sm" />
                </div>
                <div className="flex items-center justify-center h-8 w-8 rounded-full text-slate-100 bg-teal-800 hover:bg-gray-200 hover:text-teal-800 transition-colors duration-300">
                    <FontAwesomeIcon icon={faInstagram} className="leading-none text-sm" />
                </div>
                <div className="flex items-center justify-center h-8 w-8 rounded-full text-slate-100 bg-teal-800 hover:bg-gray-200 hover:text-teal-800 transition-colors duration-300">
                    <FontAwesomeIcon icon={faYoutube} className="leading-none text-sm" />
                </div>
            </div>
            <div className="text-teal-800 text-xs">
                Copyright &copy; 2024 | alhabibtravel.co.uk
            </div>
        </footer>
    )
}
