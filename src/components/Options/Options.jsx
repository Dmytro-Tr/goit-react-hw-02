import s from "./Options.module.css";

const Options = ({ setFeedback }) => {
  // const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const updateFeedback = (feedbackType) => {
    // Тут використовуй сеттер, щоб оновити стан
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  return (
    <div>
      <button
        className={s.btn}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={s.btn}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={s.btn}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
    </div>
  );
};

export default Options;
