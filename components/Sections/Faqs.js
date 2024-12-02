import Faq from '../Faq'

const questionsDefault = [
  {
    q: `What is the baggage allowance for my flight?`,
    a: `The first checked baggage is included in all our packages. You're allowed 28kg per person, which includes 20kg for your main luggage and 8kg for your hand carry. This ensures you can comfortably pack everything you need for your journey.`
  },
  {
    q: `What is your refund policy in case of cancellation?`,
    a: `Our refund policy is designed to be as fair and straightforward as possible. If you need to cancel, the amount refunded will depend on how close the cancellation is to your travel date, as airline tickets and hotel reservations have specific terms. We'll guide you through the process and do our best to minimize any inconvenience. Feel free to contact us for detailed terms when booking.`
  },
  {
    q: `Will you provide assistance if I face any issues during my trip?`,
    a: `Absolutely, we're here to support you every step of the way. We provide free assistance throughout your journey and will stay in touch until your trip concludes. If needed, we can even offer in-person assistance to ensure a smooth and worry-free experience for you.`
  },
  {
    q: `Will I be traveling with a group, or is it an individual package?`,
    a: `We offer both options! You can choose a private package if you prefer a personalized experience or join a group package, which is a great way to connect with other pilgrims. Group packages depend on availability, so let us know your preference, and we'll arrange accordingly.`
  },
  {
    q: `Are there any discounts for families or groups?`,
    a: `Yes, we're pleased to offer special discounted rates for families and groups. This makes it more affordable to share this spiritual journey with your loved ones. Let us know the number of people traveling, and we'll provide a customized package for you.`
  },
  {
    q: `Can you assist with wheelchair services or other accessibility needs?`,
    a: `Of course! We understand the importance of accessibility. We’ll arrange wheelchair services for your flights and during your stay in both Makkah and Madinah. Please let us know your specific requirements, and we'll ensure they're taken care of.`
  },
  {
    q: `Do you offer installment plans or flexible payment options?`,
    a: `Yes, we provide flexible installment plans to make it easier for you to manage the cost of your trip. You can secure your package with an initial deposit, and the remaining balance can be paid in installments. Let us know what works best for you, and we'll guide you through the process.`
  },
  {
    q: `What type of transport will be provided (e.g., private car, group bus)?`,
    a: `We offer comfortable private transport tailored to your group size. For smaller groups of 2-3 people, we provide private cars. For 4-5 people, we arrange H-1 vans. Larger groups of 6-8 people will have a Hiace, and for groups of more than 9, we offer a spacious minibus. You can trust us to make your journey comfortable and hassle-free.`
  }
]

export default function Faqs({padding=true, questions=questionsDefault}) {
    return (
      <div className={`${padding?'py-24':null} items-center px-4 md:px-5 lg:px-10 flex flex-col gap-5`}>
      <div className="flex mb-5 flex-col gap-3">
        <h1 className="text-4xl leading-none font-extrabold brand-blue">
          Frequently Asked Questions (FAQs)
        </h1>
      </div>
      <div className="flex gap-10 lg:gap-20">
        <div className="flex flex-col gap-5">
          {

            questions.map(question => {
              return (<Faq key={question.q} q={question.q} ans={question.a}/>)
            })

          }
        </div>
      </div>
    </div>
    )
}
