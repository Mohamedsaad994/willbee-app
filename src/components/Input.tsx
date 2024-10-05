
import './input.css'

type inputProps = {
    label: string
    for: string
    type: string
    togglePasswordVisibility: ()=>void
}

function Input(props: inputProps) {

    return (
        <div className="input">
            <label htmlFor={props.for}>{props.label}<span style={{ color: '#f04437' }}>*</span></label>
            <input type={props.type} id={props.for} placeholder={props.label} />
        </div>
    )
}

export default Input
