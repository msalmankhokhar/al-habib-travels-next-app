import Faq from '../Faq'

export default function Faqs({padding=true}) {
    return (
      <div className={`${padding?'py-24':null} items-center px-4 md:px-5 lg:px-10 flex flex-col gap-5`}>
      <div className="flex mb-5 flex-col gap-3">
        <h1 className="text-4xl leading-none font-extrabold brand-blue">
          Frequently Asked Questions (FAQs)
        </h1>
      </div>
      <div className="flex gap-10 lg:gap-20">
        <div className="flex flex-col gap-5">
          <Faq openState={true}/>
          <Faq/>
          <Faq/>
          <Faq/>
          <Faq/>
        </div>
      </div>
    </div>
    )
}
