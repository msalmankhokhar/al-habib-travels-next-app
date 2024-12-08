import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { useState } from "react"
import 'reactjs-popup/dist/index.css'
import Popup from "reactjs-popup"
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons"

export default function QueryFormNew(contactPage=false, heading=true) {

    const [loading, setLoading] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleSubmit = (event) => {
        setLoading(true)
        const submitBtn = document.getElementById('contact-query-form-submit-btn')
        event.preventDefault()
        const formData = new FormData(event.target, submitBtn)
        const data = Object.fromEntries(formData.entries());
        console.log(data);

        fetch('/api/query_form', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                Accept: 'application/json'
            }
        }).then(respnse => {
            setFormSubmitted(true)
            return respnse.json()
        }).then(json => {
            console.log('Query Form Submitted successfully');
            console.log(json);
            setLoading(false)
            setFormSubmitted(true)
        }).catch(error => {
            console.log('Failed submit the query form');
            console.log(error);
            setLoading(false)
        })
    }

    return (
        <>
        <Popup open={formSubmitted} contentStyle={{borderRadius: '10px'}} modal={true}>
            <div className="bg-white rounded-lg px-3 sm:px-5 py-10 flex flex-col gap-3">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faCheck} className="text-white font-bold text-2xl"/>
                </div>
                <h1 className="text-3xl font-bold text-teal-800 mt-3">Thanks for Contacting us!</h1>
                <p className="font-semibold brand-yellow text-sm">Your query has been recorded and our team will contact you shortly</p>
            </div>
        </Popup>
        <div className={`rounded-2xl overflow-hidden gap-10 flex flex-col text-sm`}>
            
            {/* <div className="flex flex-wrap bg-white">
                <div className='flex-1 flex items-center justify-center p-7 border-b'>
                <span className='font-semibold'>Hotels</span>
                </div>
                <div className='flex-1 flex items-center justify-center border-l p-7 border-b'>
                <span className='font-semibold'>Transfers</span>
                </div>
                <div className='flex-1 flex items-center justify-center border-l p-7 border-b'>
                <span className='font-semibold'>Flights</span>
                </div>
                <div className='flex-1 flex items-center justify-center border-l p-7 border-b'>
                <span className='font-semibold'>Meals</span>
                </div>
                <div className='flex-1 flex items-center justify-center border-l p-7 border-b'>
                <span className='font-semibold'>Guidance</span>
                </div>
                <div className='flex-1 flex items-center justify-center border-l p-7 border-b'>
                    <span className='font-semibold'>Support</span>
                    </div>
                    </div> */}
            <form onSubmit={handleSubmit} className="bg-pattern-dark p-3 xs:px-5 sm:10 md:p-16">
                {
                    heading &&
                    (<h1 className="font-bold mb-7 text-white text-xl md:text-2xl">Book your Umrah Package</h1>)
                }
                
                {/* inputs container */}

                <div className={`grid grid-flow-row gap-3 xs:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${!contactPage ? '' : ""}`}>

                    {/* Name */}
                    <div className="flex flex-col gap-2 flex-wrap">
                        <label htmlFor="nameInput" className="text-white font-semibold">Your Name</label>
                        <input disabled={formSubmitted || loading} required name="name" placeholder="Name" id="nameInput" type="text" className="text-black rounded-md p-3 outline-none bg-white border-none" />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2 flex-wrap">
                        <label htmlFor="nameInput" className="text-white font-semibold">Email</label>
                        <input disabled={formSubmitted || loading} required name="email" placeholder="Email" id="emailInput" type="email" className="text-black rounded-md p-3 outline-none bg-white border-none" />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-2 flex-wrap">
                        <label htmlFor="phoneInput" className="text-white font-semibold">Contact No.</label>
                        <input disabled={formSubmitted || loading} required name="phone" placeholder="Number" id="phoneInput" type="tel" className="text-black rounded-md p-3 outline-none bg-white border-none" />
                    </div>

                    {/* Transport */}
                    <div className="flex flex-col gap-2 flex-wrap">
                        <label htmlFor="transportInput" className="text-white font-semibold">Local Transport</label>
                        <select disabled={formSubmitted || loading} name="transport" placeholder="Yes" id="transportInput" type="text" className="text-black rounded-md p-3 outline-none bg-white border-none" >
                            <option value="Yes" selected>Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    {/* Month of Departure */}
                    <div className="flex flex-col gap-2 flex-wrap">
                        <label htmlFor="monthofdepartureInput" className="text-white font-semibold">Month of Travel</label>
                        <select disabled={formSubmitted || loading} name="month_of_departure" placeholder="October" id="monthofdepartureInput" type="text" className="text-black rounded-md p-3 outline-none bg-white border-none" >
                            <option value="January" selected>January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                    </div>

                    {/* Number of Passengers */}
                    <div className="flex flex-col gap-2 flex-wrap">
                        <label htmlFor="noofpeopleInput" className="text-white font-semibold">No. of People</label>
                        <input required disabled={formSubmitted || loading} name="no_of_people" min={1} max={7} placeholder="No. of People" id="noofpeopleInput" type="number" className="text-black rounded-md p-3 outline-none bg-white border-none" />
                    </div>

                    {/* Airport */}
                    <div className="flex flex-col gap-2 flex-wrap">
                        <label htmlFor="airportInput" className="text-white font-semibold">Departure Airport</label>
                        <select disabled={formSubmitted || loading} placeholder="London Airport" id="airportInput" type="text" className="text-black rounded-md p-3 outline-none bg-white border-none">
                            <option value="London Airtport" selected>London Airtport</option>
                            <option value="UK Airtport">UK Airtport</option>
                        </select>
                    </div>

                    {/* Duration */}
                    <div className="flex flex-col gap-2 flex-wrap">
                        <label htmlFor="durationInput" className="text-white font-semibold">Duration</label>
                        <select disabled={formSubmitted || loading} placeholder="10 days" id="durationInput" type="text" className="text-black rounded-md p-3 outline-none bg-white border-none">
                            <option value="7" selected>7 days</option>
                            <option value="10">10 days</option>
                            <option value="14">14 days</option>
                            <option value=">14">14+ days</option>
                        </select>
                    </div>

                </div>
                {/* <button type="button" className="w-full bg-teal-700 text-white font-semibold px-7 py-3 mt-5 bg-brand-yellow rounded-md">Submit</button> */}
                <button
        disabled={formSubmitted || loading}
        id="contact-query-form-submit-btn"
        type="submit"
        className="btn w-full relative m-auto flex gap-3 items-center justify-center bg-brand-yellow hover:bg-amber-500 text-white font-semibold mt-3 xs:min-w-96 transition-colors duration-300 text-sm p-4 rounded-lg"
        >
        <span className="leading-none">
          {formSubmitted ? "Submitted Successfully" : loading ? "Loading.." : "Submit"}
        </span>
        {
            formSubmitted ?
            <div className="flex items-center rounded-full justify-center w-5 h-5 bg-green-600">
            <FontAwesomeIcon icon={faCheck} className="text-white text-xs"/>
          </div> : loading
          ?
          <Image src={'/assets/spinner.gif'} width={16} height={16} alt="spinner"/>
          :
          <FontAwesomeIcon
          icon={faArrowRight}
          className="btn-arrow leading-none absolute"
          ></FontAwesomeIcon>
        }
      </button>
            </form>
        </div>
    </>
    )
}
