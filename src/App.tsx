import { GlobalStyle } from "./styles/global";
import { Card } from "./components/Card";
import { ThankYouCard } from "./components/ThankYouCard";
import { useState } from "react";

function App() {
  const [ratings, setRatings] = useState(false);
  const [selectedInput, setSelectedInput] = useState(String);

  function handleSelectedInput(e: any) {
    setSelectedInput(e.currentTarget.value);
  }

  function handleRatingsOnSubmit() {
    setRatings(true);
  }

  return (
    <>
      <GlobalStyle />
      {ratings ? (
        <ThankYouCard selectedInput={selectedInput} />
      ) : (
        <Card
          handleRatingsOnSubmit={handleRatingsOnSubmit}
          handleSelectedInput={handleSelectedInput}
        />
      )}
    </>
  );
}

export default App;
