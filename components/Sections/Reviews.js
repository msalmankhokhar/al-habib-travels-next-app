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
            <Testemonial />
            <Testemonial />
            <Testemonial />
          </div>

          <div className="flex gap-5 flex-wrap items-center justify-center">
            <iframe width="450" className='aspect-video overflow-hidden rounded-lg' src="https://www.youtube.com/embed/kbM21fHGPfM?si=e182MMKsB-tVWEki" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="450" className='aspect-video overflow-hidden rounded-lg' src="https://www.youtube.com/embed/ds3dasE-_1s?si=lqzNyuweJIKOWNbm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
    )
}
