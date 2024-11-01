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
        </div>
    )
}
