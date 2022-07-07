import "./input.scss"

const Input = ({ label, placeholder, id, type }) => {
    return (
        <>
            <div className="input-container">
                <label htmlFor={id}>{label}</label>
                <input id={id} placeholder={placeholder} type={type}></input>
            </div>
        </>
    )
}


export default Input