import "./link.scss"

const Link = ({text, link, type}) => {
    return (
        <>
           <div className="link-container">{text}<a href={link}><span>{type}</span></a></div>
        </>
    )
}


export default Link