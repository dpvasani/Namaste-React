import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="about-page">
            <h1>About</h1>
            <p>This is the about page of our application.</p>
            <User name={"Darshan Vasani From Function"}/>
            <UserClass name={"Darshan Vasani From Class"}/>
        </div>
    );
}

// Export the About component
export default About;