import React from 'react';
import VideoReviewsSwiper from '../components/VideoReviewsSwiper';

const TestimonialsPage = () => {
  const videoTestimonialsData = [
    {
      id: 1,
      thumbnailUrl: '/img/testimonials/review1.jpg',
      videoUrl: 'https://www.youtube.com/embed/actualVideoId1',
      title: 'Umrah Experience 2023',
      description: 'Our customer shares their amazing experience with Al Habib Travel'
    },
    {
      id: 2,
      thumbnailUrl: '/img/testimonials/review2.jpg',
      videoUrl: 'https://www.youtube.com/embed/actualVideoId2',
      title: 'Mecca & Madinah Tour',
      description: "A family's journey to the holy cities with our premium package"
    },
    {
      id: 3,
      thumbnailUrl: '/img/testimonials/review3.jpg',
      videoUrl: 'https://www.youtube.com/embed/actualVideoId3',
      title: 'Ramadan Umrah 2023',
      description: 'Customer testimonial about our Ramadan services'
    },
    {
      id: 4,
      thumbnailUrl: '/img/testimonials/review4.jpg',
      videoUrl: 'https://www.youtube.com/embed/actualVideoId4',
      title: 'Group Package Review',
      description: 'See what our group travelers have to say about their experience'
    },
  ];

  return (
    <div className="page-container">
      <h1 className="text-4xl font-bold text-center my-10">Customer Testimonials</h1>
      
      <VideoReviewsSwiper videos={videoTestimonialsData} />
      
      {/* Rest of your testimonials page content */}
    </div>
  );
};

export default TestimonialsPage;
