import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Rating = ({ rating }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <BsStarFill></BsStarFill>
        ) : rating >= number ? (
          <BsStarHalf></BsStarHalf>
        ) : (
          <BsStar></BsStar>
        )}
      </span>
    );
  });
  return (
    <>
        <div className="flex gap-2">
            <span className="flex">{ratingStar}</span><span className="text-base">{rating}</span>
        </div>
    </>
  );
};

export default Rating;
