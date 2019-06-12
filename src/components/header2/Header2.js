import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginButton from "../LoginButton";

class Header2 extends Component {
    render() {

        const sectionStyle = {
            padding: "0px",
            margin: "0px auto",
            width: "fit-content",
            height: "80px",
            // backgroundColor: "#294F52",
            zIndex: "2",
            // position: "absolute",

            // border: "black solid 1px"
        }
        return (
            <div>
                <div style={sectionStyle}>
                    <div className="wrapper">

                        <nav className="flex-nav" style={{ backgroundColor: "transparent" }}>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/characters">Character Search</a></li>
                                <li><a href="/shop">eBay Search</a></li>
                                {this.props.userID ? <li><a className="waves-effect" href="/profile"><center>Profile</center></a></li> : null}
                                {this.props.userID ? <li><a className="waves-effect" href="/statueinput"><center>Add Collectible</center></a></li> : null}
                                {/* <li><a href="#">Profile</a></li>
                                <li><a href="#">Add Collectible</a></li> */}
                                <li><a href="#">PO List</a></li>
                                <li><center><LoginButton loggedIn={this.props.loggedIn} logout={this.props.logout} userID={this.props.userID} email={this.props.email} responseGoogle={this.props.responseGoogle} /></center></li>
                                <li id="sideNavOption"><a onClick={this.props.handleSideNav}><i className="material-icons gray dark-1" >menu</i></a></li>
                            </ul>
                        </nav>

                    </div>
                </div>
            </div>
        )
    }
}


export default Header2;
