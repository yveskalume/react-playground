import {Link} from "react-router-dom";
function Nav() {
    return (
        <nav className="main-nav">
            <ul>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/intro1">Intro 1</Link></li>
                    <li><Link to="/intro2">Intro 2</Link></li>
                    <li><Link to="/intro3">Intro 3</Link></li>
                </ul>
            </ul>
        </nav>
    );
};

export default Nav;