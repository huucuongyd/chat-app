import { Link } from "react-router-dom"
import "./Header.scss"

export default function Header() {
    return(
        <div className="Header">
            <Link to="/" className="button-link">Home</Link>
            <Link to="/chat" className="button-link">Chat</Link>
        </div>
    )
}