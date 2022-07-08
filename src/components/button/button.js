import "./button.scss"

const Button = ({ text, type, visibility }) => {
    return (
        <>
            <div className="button-container">
                <button type={type}>{text}</button>
            </div>
            
        </>
    )
}


export default Button