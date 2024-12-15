import s from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  // const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div>
      <ul className={s.list}>
        <li>Good: {feedback.good} </li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
