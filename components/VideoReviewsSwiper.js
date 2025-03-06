import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPlay } from '@fortawesome/free-solid-svg-icons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const VideoReviewsSwiper = ({ videos = [] }) => {
  const [activeVideo, setActiveVideo] = useState(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [videoData, setVideoData] = useState([]);
  
  // This function extracts YouTube video ID from various YouTube URL formats
  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    
    // Handle different YouTube URL formats
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11) ? match[2] : null;
  };

  // This function generates a thumbnail URL from a video URL
  const getVideoThumbnail = (videoUrl) => {
    // For YouTube videos
    const youtubeId = getYouTubeVideoId(videoUrl);
    if (youtubeId) {
      // Return high-quality YouTube thumbnail
      return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
    }
    
    // For local MP4 files, we'll use the first frame as a placeholder
    // The actual thumbnail generation will happen with HTML5 video element
    if (videoUrl.endsWith('.mp4')) {
      return null; // We'll handle local videos separately
    }
    
    // Default placeholder if we can't determine the source
    return '/img/testimonials/placeholder-thumb.jpg';
  };

  // Process the videos to add thumbnails and prepare for display
  useEffect(() => {
    if (!videos || videos.length === 0) return;
    
    const processedVideos = videos.map(video => {
      // If there's already a thumbnail, use it
      if (video.thumbnailUrl) {
        return video;
      }
      
      // Generate a thumbnail URL based on the video source
      const thumbnailUrl = getVideoThumbnail(video.videoUrl);
      return { ...video, thumbnailUrl };
    });
    
    setVideoData(processedVideos);
  }, [videos]);

  const openVideo = (videoUrl) => {
    // For YouTube videos, modify the URL to enable autoplay when opened in modal
    if (getYouTubeVideoId(videoUrl)) {
      const youtubeId = getYouTubeVideoId(videoUrl);
      setActiveVideo(`https://www.youtube.com/embed/${youtubeId}?autoplay=1`);
    } else {
      // For local videos or other sources
      setActiveVideo(videoUrl);
    }
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  // Component to generate thumbnail for local videos
  const LocalVideoThumbnail = ({ src, onThumbLoaded }) => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [thumbnail, setThumbnail] = useState(null);

    useEffect(() => {
      if (videoRef.current && canvasRef.current) {
        const video = videoRef.current;
        const canvas = canvasRef.current;

        video.addEventListener('loadeddata', () => {
          // Seek to 1 second or 25% of the video, whichever is less
          const seekTime = Math.min(1, video.duration * 0.25);
          video.currentTime = seekTime;
        });

        video.addEventListener('seeked', () => {
          // Draw the video frame on the canvas
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

          // Convert canvas to data URL
          const dataUrl = canvas.toDataURL('image/jpeg');
          setThumbnail(dataUrl);
          if (onThumbLoaded) onThumbLoaded(dataUrl);
        });
      }
    }, [src, onThumbLoaded]);

    return (
      <>
        <video
          ref={videoRef}
          src={src}
          style={{ display: 'none' }}
          crossOrigin="anonymous"
          muted
        />
        <canvas ref={canvasRef} style={{ display: 'none' }} />
        {thumbnail && (
          <img 
            src={thumbnail} 
            alt="Video thumbnail" 
            className="w-full h-full object-cover"
          />
        )}
      </>
    );
  };

  // If no videos are available, show default message or empty component
  if (!videoData.length) {
    return (
      <div className="py-10 px-4 text-center">
        <p>No video reviews available</p>
      </div>
    );
  }

  return (
    <div className="video-reviews-container relative py-10 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-teal-800">Customer Video Reviews</h2>
        
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.swiper-pagination' }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            className="py-8"
          >
            {videoData.map((video) => (
              <SwiperSlide key={video.id}>
                <div className="video-review-card bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                  <div 
                    className="video-thumbnail relative cursor-pointer h-48 overflow-hidden"
                    onClick={() => openVideo(video.videoUrl)}
                  >
                    {/* Video thumbnail */}
                    {video.thumbnailUrl ? (
                      <img 
                        src={video.thumbnailUrl} 
                        alt={video.title} 
                        className="w-full h-full object-cover"
                      />
                    ) : video.videoUrl.endsWith('.mp4') ? (
                      <LocalVideoThumbnail 
                        src={video.videoUrl} 
                        onThumbLoaded={(thumbUrl) => {
                          // Update the video data with the generated thumbnail
                          setVideoData(prevData => 
                            prevData.map(v => v.id === video.id ? {...v, thumbnailUrl: thumbUrl} : v)
                          );
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span>Loading thumbnail...</span>
                      </div>
                    )}
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-200 hover:bg-opacity-30">
                      <div className="w-14 h-14 rounded-full bg-teal-600 flex items-center justify-center">
                        <FontAwesomeIcon icon={faPlay} className="text-white text-xl" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-teal-800">{video.title}</h3>
                    <p className="text-gray-600 mt-2">{video.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom navigation buttons */}
          <button
            ref={navigationPrevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-4 bg-white text-teal-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-teal-50 focus:outline-none"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            ref={navigationNextRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-4 bg-white text-teal-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-teal-50 focus:outline-none"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          
          {/* Custom pagination */}
          <div className="swiper-pagination flex justify-center mt-8"></div>
        </div>
      </div>
      
      {/* Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={closeVideo}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              &times;
            </button>
            <div className="aspect-video">
              {activeVideo.endsWith('.mp4') ? (
                <video 
                  src={activeVideo} 
                  controls 
                  autoPlay
                  className="w-full h-full"
                />
              ) : (
                <iframe
                  src={activeVideo}
                  title="Video review"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoReviewsSwiper;
