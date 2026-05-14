import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar, FaStar } from "react-icons/fa6";

const Rating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        if (rating >= star) {
          return (
            <FaStar
              key={star}
              className="text-yellow-400"
            />
          );
        } else if (rating >= star - 0.5) {
          return (
            <FaStarHalfAlt
              key={star}
              className="text-yellow-400"
            />
          );
        } else {
          return (
            <FaRegStar
              key={star}
              className="text-gray-300"
            />
          );
        }
      })}

      <span className="ml-2 text-sm">
        {rating}
      </span>
    </div>
  );
};

export default Rating;