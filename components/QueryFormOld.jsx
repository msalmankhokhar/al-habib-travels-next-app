import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function QueryForm() {
    return (
        <div id="query-form-section" className="pt-16 px-3 flex flex-col justify-center items-center gap-5">      
          <h1 className="font-bold brand-blue text-3xl">Package Customization Form</h1>
          <p className="text-gray-500">Fill your travel requirements below. Our team will get back to you</p>
          <form className="bg-pattern bg-[#a98625] relative px-5 sm:px-10 py-10 rounded-xl border mt-5 w-full max-w-screen-lg flex flex-col gap-3">
            <div className="w-full flex flex-col sm:flex-row gap-3">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name-input" className="text-sm text-white">Your Full Name*</label>
                <input id="name-input" type="text" className="p-3 focus:outline-none rounded-full border text-sm transition-all duration-300" placeholder="Your Name" />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name-input" className="text-sm text-white">Email*</label>
                <input type="email" className="p-3 focus:outline-none rounded-full w-full border text-sm transition-all duration-300" placeholder="Email" />
              </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row gap-3">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name-input" className="text-sm text-white">Phone Number</label>
                <input type="tel" className="p-3 focus:outline-none rounded-full w-full border text-sm transition-all duration-300" placeholder="Phone" />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name-input" className="text-sm text-white">Number of People*</label>
                <input type="number" className="p-3 focus:outline-none rounded-full w-full border text-sm transition-all duration-300" placeholder="No. of People" />
              </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row gap-3">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name-input" className="text-sm text-white">Month of Departure*</label>
                <select className="p-3 focus:outline-none rounded-full w-full border text-sm transition-all duration-300" placeholder="Departure Month" >
                  <option value="" selected>Select Month</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name-input" className="text-sm text-white">Departure Airport</label>
                <select className="p-3 focus:outline-none rounded-full w-full border text-sm transition-all duration-300" placeholder="Departure Month" >
                  <option value="" selected>Select Airport</option>
                  <option value="January">London International Airport</option>
                  <option value="February">UK Airport</option>
                </select>
              </div>
            </div>
            <button type="button" className="btn relative flex justify-center bg-white text-teal-800 hover:text-teal-700 font-semibold mt-3 min-w-36 hover:bg-gray-50 transition-colors duration-300 text-sm p-4 rounded-full">
              <span className="leading-none">Submit Now</span>
              <FontAwesomeIcon icon={faArrowRight} className="btn-arrow leading-none absolute"></FontAwesomeIcon>
            </button>
          </form>
        </div>
    )
}
