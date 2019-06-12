import React, { Component } from "react";
import Temp from "../../placeholder.json"
import ProfileProjects from "../profileprojects/profileprojects"
import "./portfolio.css"


class Portfolio extends Component {

    state = {
        projects: Temp
    }

    render() {
        return (
            <div>
                <h2 id="aboutMe">Portfolio</h2>
                <div className="projectGrid">
                    {
                        this.state.projects.map(projects => (
                            <ProfileProjects
                                key={projects.id}
                                id={projects.id}
                                alt={projects.name}
                                image={projects.image}
                                link={projects.link}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Portfolio;