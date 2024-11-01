import { useState } from "react"

const defaultProps = {
    q: "Do you offer Umrah packages that include single rooms?",
    ans: "Sure thing! If you decide to go with Al Habib Travel for your trip and prefer staying in a room during your stay, at one of our partner hotels. No problem at all! Check out the hotels we work with to see what suits your needs. In order to complete your customized Umrah package, we are ready to assist you in reserving a single room at your preferred hotel. If there happens to be a room that suits your needs and preferences perfectly. We'll make sure to include it in your Umrah package without any hassle."
}

export default function Faq({q=defaultProps.q, ans=defaultProps.ans, openState=false}) {

    const [open, setOpen] = useState(openState);

    const toggleFaq = ()=>{
        setOpen(!open)
    }

    return (
        <div className="flex flex-col gap-3 border p-3 sm:p-5 rounded-lg">
            <div className="flex gap-5 items-center">
                <h2 className="font-semibold text-base">{q}</h2>
                <button onClick={toggleFaq} type="button" className="bg-teal-900 transition-colors flex items-center justify-center min-w-[1.7rem] h-7 duration-300 text-lg rounded-full text-white">{open ? '-' : '+'}</button>
            </div>
            <p className={`${!open ? 'hidden' : ''} text-base font-light max-w-2xl`}>
                {ans}
            </p>
        </div>
    )
}
