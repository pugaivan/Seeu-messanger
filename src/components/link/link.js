import "./link.scss"

const Link = ({ text, onClick, type }) => {
    return (
        <>
            <div className="link-container">{text}<button onClick={onClick}>{type}</button></div>
        </>
    )
}


export default Link