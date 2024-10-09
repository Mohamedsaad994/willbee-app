import BtnStyle from './paymentButton.module.css'

type BtnProps={
    value: string
}

function PaymentButton(props: BtnProps) {

    return (
        <button className={BtnStyle.btn}>{props.value}</button>
    )
}

export default PaymentButton
