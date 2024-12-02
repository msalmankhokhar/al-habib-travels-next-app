export default function QueryFormNew() {
    return (
        <div className='rounded-2xl overflow-hidden flex flex-col border text-sm'>
            <div className="flex flex-wrap bg-white">
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
            </div>
            <form action="" className="bg-pattern-dark py-5 px-3 xs:px-5">
                {/* inputs container */}
                <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 xs:gap-5">
                    <div className="flex flex-col gap-2 flex-wrap">
                        <label htmlFor="nameInput" className="text-white font-semibold">Your Name</label>
                        <input placeholder="Name" id="nameInput" type="text" className="text-black rounded-md p-3 outline-none bg-white border-none" />
                    </div>
                    <div className="flex flex-col gap-2 flex-wrap">
                        <label htmlFor="nameInput" className="text-white font-semibold">Email</label>
                        <input placeholder="Email" id="emailInput" type="email" className="text-black rounded-md p-3 outline-none bg-white border-none" />
                    </div>
                    <div className="flex flex-col gap-2 flex-wrap">
                        <label htmlFor="phoneInput" className="text-white font-semibold">Contact No.</label>
                        <input placeholder="Number" id="phoneInput" type="tel" className="text-black rounded-md p-3 outline-none bg-white border-none" />
                    </div>
                    <div className="flex flex-col gap-2 flex-wrap">
                        <label htmlFor="transportInput" className="text-white font-semibold">Transportation</label>
                        <input placeholder="Yes" id="transportInput" type="text" className="text-black rounded-md p-3 outline-none bg-white border-none" />
                    </div>

                    <div className="flex flex-col gap-2 flex-wrap">
                        <label htmlFor="nameInput" className="text-white font-semibold">Your Name</label>
                        <input placeholder="Name" id="nameInput" type="text" className="text-black rounded-md p-3 outline-none bg-white border-none" />
                    </div>
                    <div className="flex flex-col gap-2 flex-wrap">
                        <label htmlFor="nameInput" className="text-white font-semibold">Email</label>
                        <input placeholder="Email" id="emailInput" type="email" className="text-black rounded-md p-3 outline-none bg-white border-none" />
                    </div>
                    <div className="flex flex-col gap-2 flex-wrap">
                        <label htmlFor="phoneInput" className="text-white font-semibold">Contact No.</label>
                        <input placeholder="Number" id="phoneInput" type="tel" className="text-black rounded-md p-3 outline-none bg-white border-none" />
                    </div>
                    <div className="flex flex-col gap-2 flex-wrap">
                        <label htmlFor="transportInput" className="text-white font-semibold">Transportation</label>
                        <input placeholder="Yes" id="transportInput" type="text" className="text-black rounded-md p-3 outline-none bg-white border-none" />
                    </div>
                </div>
                <button type="button" className="w-full bg-teal-700 text-white font-semibold px-7 py-3 mt-5 bg-brand-yellow rounded-md">Submit</button>
            </form>
        </div>
    )
}
