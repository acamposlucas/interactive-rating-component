import { Container } from "./style";
import iconStar from "../../assets/icon-star.svg";
import { useState } from "react";

interface CardProps {
  handleRatingsOnSubmit: () => void;
  handleSelectedInput: (e: any) => void;
}

export function Card({
  handleRatingsOnSubmit,
  handleSelectedInput,
}: CardProps) {
  const [selectedInput, setSelectedInput] = useState(String);

  return (
    <Container>
      <img src={iconStar} alt="" />
      <p className="title">How did we do?</p>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form onSubmit={handleRatingsOnSubmit}>
        <fieldset>
          <div>
            <label htmlFor="rating-1">
              1
              <input
                checked={selectedInput === "1"}
                onChange={handleSelectedInput}
                type="radio"
                name="ratings"
                id="rating-1"
                value="1"
              />
            </label>
          </div>
          <div>
            <label htmlFor="rating-2">
              2
              <input
                checked={selectedInput === "2"}
                onChange={handleSelectedInput}
                type="radio"
                name="ratings"
                id="rating-2"
                value="2"
              />
            </label>
          </div>
          <div>
            <label htmlFor="rating-3">
              3
              <input
                checked={selectedInput === "3"}
                onChange={handleSelectedInput}
                type="radio"
                name="ratings"
                id="rating-3"
                value="3"
              />
            </label>
          </div>
          <div>
            <label htmlFor="rating-4">
              4
              <input
                checked={selectedInput === "4"}
                onChange={handleSelectedInput}
                type="radio"
                name="ratings"
                id="rating-4"
                value="4"
              />
            </label>
          </div>
          <div>
            <label htmlFor="rating-5">
              5
              <input
                checked={selectedInput === "5"}
                onChange={handleSelectedInput}
                type="radio"
                name="ratings"
                id="rating-5"
                value="5"
              />
            </label>
          </div>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
}
