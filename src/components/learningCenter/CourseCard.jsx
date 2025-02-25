import PropTypes from 'prop-types';
import { Clock } from 'lucide-react';

export function CourseCard({ title, description, image, duration }) {
  return (
    <div className="group relative h-[378px] w-full transform cursor-pointer overflow-hidden rounded-[10px] border-2 border-[#6E6E6E] bg-white shadow-sm transition-colors duration-300 hover:bg-[#04284F] sm:w-[300px]">
      {/* Image Container with padding */}
      <div className="h-[187px] w-full overflow-hidden p-1 pt-2">
        {/* Image wrapper with exact dimensions */}
        <div className="mx-auto h-[176px] w-full overflow-hidden bg-[#F1F1F1] p-1 sm:w-[268px]">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="mb-2 font-inter text-[18px] font-bold leading-tight text-[#04284F] transition-colors duration-300 group-hover:text-white">
          {title}
        </h3>
        <p className="mb-4 font-inter text-sm leading-tight text-[#292929] transition-colors duration-300 group-hover:text-white">
          {description}
        </p>

        {/* Duration */}
        <div className="absolute bottom-6 left-6 flex items-center text-[#F30000]">
          <Clock className="mr-2 h-5 w-5 transition-colors duration-300 group-hover:text-white" />
          <span className="text-sm font-bold transition-colors duration-300 group-hover:text-white">
            {duration}
          </span>
        </div>
      </div>
    </div>
  );
}

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};
