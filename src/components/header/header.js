import React, { Component } from "react"
import "./header.css"

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="hbox0">
                    <h2 id="llame">Brad Bader, Esq.</h2>
                    <div class="headerWrapper">

                        
                            <ul>
                                <li><a href="/portfolio">Projects</a></li>
                                <li><a href="/">About</a></li>
                                {/* <li><a href="/contact">Contact</a></li> */}
                          
                            </ul>
                      

                    </div>
                </div>

            </div >
        )
    }
}

export default Header;