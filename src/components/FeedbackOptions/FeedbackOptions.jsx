export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul>
            {options.map((option, idx) => (
                <li key={idx}>
                    <button  onClick={onLeaveFeedback}>{option}</button>
                </li>
            ))}
        </ul>
    )
}