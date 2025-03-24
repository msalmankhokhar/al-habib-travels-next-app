import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import Testemonial from '../Testemonial';
import VideoReviewsSwiper from '../VideoReviewsSwiper';

export default function Reviews({ padding = true }) {
  // Define the videos data with just the videoUrl - thumbnails will be auto-generated
  const videoTestimonialsData = [
    {
      id: 1,
      videoUrl: '/vid/video-reviews/1.mp4',
      title: 'Umrah Experience 2023',
      description: 'Our customer shares their amazing experience with Al Habib Travel'
    },
    {
      id: 2,
      videoUrl: '/vid/video-reviews/2.mp4',
      title: 'Mecca & Madinah Tour',
      description: "A family's journey to the holy cities with our premium package"
    },
    {
      id: 3,
      videoUrl: '/vid/video-reviews/3.mp4',
      title: 'Ramadan Umrah 2023',
      description: 'Customer testimonial about our Ramadan services'
    },
    {
      id: 4,
      videoUrl: '/vid/video-reviews/4.mp4',
      title: 'Group Package Review',
      description: 'See what our group travelers have to say about their experience'
    },
  ];

  return (
    <div className={`${padding ? 'py-24' : null} px-4 md:px-5 lg:px-10 flex flex-col gap-5 max-w-full overflow-x-auto`}>
      <div className="flex flex-col gap-3">
        <h1 className="text-center text-4xl leading-none font-extrabold brand-blue">
          Customer Reviews
        </h1>
        <p className="text-base mb-5 text-center">
          See what people say about us
        </p>
      </div>
      
      {/* Video Reviews Swiper with auto-thumbnails */}
      <VideoReviewsSwiper videos={videoTestimonialsData} />
      
      {/* You can remove or hide this section since it's now part of the swiper */}
      {/* <div className="flex gap-5 flex-wrap items-center justify-center">
        <iframe width="450" className='aspect-video overflow-hidden rounded-lg' src="https://www.youtube.com/embed/kbM21fHGPfM?si=e182MMKsB-tVWEki" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="450" className='aspect-video overflow-hidden rounded-lg' src="https://www.youtube.com/embed/ds3dasE-_1s?si=lqzNyuweJIKOWNbm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div> */}
    </div>
  )
}
