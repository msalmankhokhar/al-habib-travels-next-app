import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Rating({ value }) {
    const renderStars = (rating) => {
        const filledStars = Array.from({ length: rating }, (_, index) => (
          <FontAwesomeIcon key={`filled-${index}`} icon={faStar} className="text-yellow-500" />
        ));
    
        const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
          <FontAwesomeIcon key={`empty-${index}`} icon={faStar} className="text-gray-300" />
        ));
    
        return [...filledStars, ...emptyStars];
      };
    return (
        <div className="flex gap-1">
          {renderStars(value)}
        </div>
    )
}
