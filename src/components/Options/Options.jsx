import s from "./Options.module.css";

const Options = ({ updateFeedback }) => {
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
      <button
        className={s.btn}
        onClick={() => updateFeedback("reset")}
      >
        Reset
      </button>
    </div>
  );
};

export default Options;
