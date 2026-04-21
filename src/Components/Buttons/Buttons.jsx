

function Button({ textInput, disabled }) {
    return (
        <button
            type="button" onClick={() => console.log(textInput)} disabled={disabled}>{textInput}</button>
    );
}

export default Button;