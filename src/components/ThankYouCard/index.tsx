import { Container } from "./style";
import thankYouImg from "../../assets/illustration-thank-you.svg";

interface ThankYouCardProps {
  selectedInput: string;
}

export function ThankYouCard({ selectedInput }: ThankYouCardProps) {
  return (
    <Container>
      <img src={thankYouImg} alt="Thank you" />
      <div className="rating-output">
        <p>
          You selected <span>{selectedInput}</span> out of 5
        </p>
      </div>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </Container>
  );
}
