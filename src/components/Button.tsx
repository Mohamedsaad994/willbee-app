import './button.css'
type buttonProps={
    text: string
}

function Button(props: buttonProps) {

    return (
        <button className="submitBtn">{props.text}</button>
    )
}

export default Button
