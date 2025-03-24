import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import Image from "next/image"

export default function QueryForm() {

  const [ loading, setLoading ] = useState(false)
  const [ formSubmitted, setFormSubmitted ] = useState(false)

  const handleSubmit = (event)=>{
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
    }).then(respnse=>{
      setFormSubmitted(true)
      return respnse.json()
    }).then(json=>{
      console.log('Query Form Submitted successfully');
      console.log(json);
      setLoading(false)
      setFormSubmitted(true)
    }).catch(error=>{
      console.log('Failed submit the query form');
      console.log(error);
      setLoading(false)
    })
  }

  

  return (
    <form onSubmit={handleSubmit} id="contact-query-form" className="bg-white text-xs sm:text-sm relative px-5 sm:px-10 py-10 rounded-xl border-[1.4px] border-amber-400 w-full max-w-xl 2xl:max-w-3xl flex flex-col gap-3">
      <h1 className="font-bold brand-yellow text-4xl text-center">We are here to assist you!</h1>
      <p className="font-semibold text-base text-center">Here is a form you need to fill out. We will get back to you when it works best for us.</p>
      <div className="flex flex-col w-full gap-1">
        <label htmlFor="name-input" className="text-sm">
          Your Full Name*
        </label>
        <input
          id="name-input"
          type="text"
          className="p-3 outline-none rounded-full border-[1.5px] border-gray-400 text-sm transition-all duration-300"
          placeholder="Your Name"
          name="name"
          required
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="name-input" className="text-sm">
          Email*
        </label>
        <input
          type="email"
          className="p-3 outline-none rounded-full w-full border-[1.5px] border-gray-400 text-sm transition-all duration-300"
          placeholder="Email"
          name="email"
          required
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="name-input" className="text-sm">
          Phone Number*
        </label>
        <input
          type="tel"
          className="p-3 outline-none rounded-full w-full border-[1.5px] border-gray-400 text-sm transition-all duration-300"
          placeholder="Phone"
          name="phone"
          required
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="name-input" className="text-sm">
          Number of People*
        </label>
        <input
          type="number"
          className="p-3 outline-none rounded-full w-full border-[1.5px] border-gray-400 text-sm transition-all duration-300"
          placeholder="No. of People"
          name="number_of_people"
          required
        />
      </div>
      <div className="w-full flex flex-col sm:flex-row gap-3">
        <div className="flex flex-col w-full">
          <label htmlFor="name-input" className="text-sm">
            Month of Departure
          </label>
          <select
            className="p-3 outline-none rounded-full w-full border-[1.5px] border-gray-400 text-sm transition-all duration-300"
            placeholder="Departure Month"
            name="month_of_departure"
          >
            <option value="" selected>
              Select Month
            </option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="name-input" className="text-sm">
            Departure Airport
          </label>
          <select
            className="p-3 outline-none rounded-full w-full border-[1.5px] border-gray-400 text-sm transition-all duration-300"
            placeholder="Departure Month"
            name="departure_airport"
          >
            <option value="" selected>
              Select Airport
            </option>
            <option value="London International Airport">London International Airport</option>
            <option value="UK Airport">UK Airport</option>
          </select>
        </div>
      </div>
      <button
        disabled={formSubmitted || loading}
        id="contact-query-form-submit-btn"
        type="submit"
        className="btn w-full relative m-auto flex gap-3 items-center justify-center bg-brand-blue hover:bg-teal-800 text-white font-semibold mt-3 xs:min-w-96 transition-colors duration-300 text-sm p-4 rounded-full"
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
  )
}
