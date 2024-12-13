import React, { useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  return (
    <div>
      <Description />
      <Options setFeedback={setFeedback} />
      <Feedback feedback={feedback} />
    </div>
  );
};

export default App;
