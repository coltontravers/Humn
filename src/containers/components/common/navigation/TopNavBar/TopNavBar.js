import React, { Component } from "react";
import { FaComment } from "react-icons/fa";
import Search from "./Search/Search";
import {
    NavBar,
    UserProfile,
    LogoWrapper,
    IconButtons
} from "./TopNavBar.styles";

export default class TopNavBar extends Component {
    render() {
        return (
            <NavBar>
                <LogoWrapper>
                    <h1>Logo</h1>
                </LogoWrapper>
                <Search />
                <IconButtons>
                    <div>
                        <FaComment />
                    </div>
                    <UserProfile />
                </IconButtons>
            </NavBar>
        );
    }
}
