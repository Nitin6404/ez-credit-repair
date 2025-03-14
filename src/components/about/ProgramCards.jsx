import PropTypes from 'prop-types';

export function ProgramCard({ number, title, image, description, nestedImage, isActive, onClick }) {
  return (
    <div className="cursor-pointer hover:shadow-lg" onClick={onClick}>
      {/* Header */}
      <div className="h-[56px] w-full max-w-[430px] bg-[#46CC02] text-white">
        <div className="flex items-center">
          <div className="my-1.5 ml-2 mr-3 flex h-11 w-11 items-center justify-center rounded-lg bg-white font-montserrat text-[25px] font-bold leading-[30px] text-[#15549A]">
            {number.padStart(2, '0')}
          </div>
          <h3 className="font-montserrat text-[21px] font-bold leading-[30px]">{title}</h3>
        </div>
      </div>

      {/* Content */}
      <div
        className={`flex h-[100px] items-center justify-center rounded-b-lg px-3 transition-colors ${
          isActive ? 'bg-[#15549A] text-white' : 'bg-[#ECF6FF] text-[#9A9A9A]'
        }`}
      >
        <div className="relative mr-[20px] inline-block">
          <img src={image} alt={`${title} Icon`} className="inline-block" />
          {nestedImage && (
            <img
              src={nestedImage}
              alt="Nested Icon"
              className="absolute left-[3px] top-[20px] ml-[10px] h-[40px] w-[40px]"
            />
          )}
        </div>
        <p className="font-montserrat text-lg font-extrabold leading-[25px]">{description}</p>
      </div>
    </div>
  );
}

ProgramCard.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  nestedImage: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

ProgramCard.defaultProps = {
  nestedImage: null,
};
