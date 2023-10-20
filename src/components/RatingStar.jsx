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
    <wrapper>
        <div className="flex">
            {ratingStar}
        </div>
    </wrapper>
  );
};

export default Rating;
