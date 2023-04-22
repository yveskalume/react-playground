import {useNameContext} from "../App";

function Intro1() {

    const { name } = useNameContext();
    return (
        <div className="blog-post-intro">
            <h2>I've become a React developer!</h2>
            <div>
                <p>{name} completed the React Basics course and I'm happy to announce that I'm now a Junior React Developer!</p>
                <p className="link">Read more...</p>
            </div>
        </div>
    );
};

export default Intro1;