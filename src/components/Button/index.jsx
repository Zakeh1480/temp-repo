import './styles.css';

export const Button = ( { text, onClick, disabled } ) => {

    return (
        <button className="btn" onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
}