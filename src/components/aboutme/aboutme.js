import React, { Component } from "react"
import Profile from "../../images/imgone.jpg"

class AboutMe extends Component {
    render() {
        return (
            <div>
                <h2 id="aboutMe">About Me</h2>

                <img className="crtThis" alt="profile photo" id="profileImg" src={Profile} />

                <p> I'm a coder, attorney, and dad to two children.  I work primarily on financial issues as an attorney.  I'm competent with front-end and back-end coding.  I have included a few select projects on the portfolio page. This site is, of course, a WIP. </p>
            </div >
        )
    }
}

export default AboutMe;
