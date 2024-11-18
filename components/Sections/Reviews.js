import Testemonial from '../Testemonial'

export default function Reviews({padding=true}) {
    return (
        <div className={`${padding?'py-24':null} px-4 md:px-5 lg:px-10 flex flex-col gap-5`}>
          <div className="flex flex-col gap-3">
            <h1 className="text-center text-4xl leading-none font-extrabold brand-blue">
              Customer Reviews
            </h1>
            <p className="text-base mb-5 text-center">
              See what people say about us
            </p>
          </div>
          {/* Reviews container */}
          <div className="flex gap-5 justify-center flex-wrap items-center">
            <Testemonial 
              name={"Seibar Wakefield"}
              msg={"Assalam o Alaikum, Brother and sisters it is highly recommended company.We have dealt with them regarding some queries they have provided us very good services and in professional way.They are real gentlemans."}
              rating={5}
            />
            <Testemonial 
              name={"Seibar Wakefield"}
              msg={"Ali Raza is really helpful in finding us the right package and the cheapest price. Even helped with a last minute date change as well and he sorted out our transport on the spot. Al Habib Travel is highly recommended company. will see you next year and also will refer your company to friends and family."}
              rating={5}
            />
            <Testemonial 
              name={"Aisha Saddique"}
              msg={"Al Habib travel is the best and trusted travel agency in London I search Umrah booking and then find them in You tube I talk to them and they gave me good advice for booking and provided furthur convenience in the procedure."}
              rating={5}
            />
          </div>

          <div className="flex gap-5 flex-wrap items-center justify-center">
            <iframe width="450" className='aspect-video overflow-hidden rounded-lg' src="https://www.youtube.com/embed/kbM21fHGPfM?si=e182MMKsB-tVWEki" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <iframe width="450" className='aspect-video overflow-hidden rounded-lg' src="https://www.youtube.com/embed/ds3dasE-_1s?si=lqzNyuweJIKOWNbm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
    )
}
