import React, { Component } from "react";
import "./profileprojects.css"



class ProfileProject extends Component {

    render() {
        return (
            <div className="portfolioBox">

                <img alt={this.props.name} src={this.props.image} key={this.props.id} href={this.props.link} />
                {/* <span className="card-title">{this.props.alt}</span> */}
                <a className="projA projBanner" href={this.props.link}>{this.props.alt}</a>

            </div>


        );
    }
}

export default ProfileProject;
