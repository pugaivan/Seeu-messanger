import "./input.scss"

const Input = ({ label, placeholder, id, type , onChange}) => {
    return (
        <>
            <div className="input-container">
                <label htmlFor={id}>{label}</label>
                <input  id={id} placeholder={placeholder} type={type} onChange={onChange}></input>
            </div>
        </>
    )
}


export default Input