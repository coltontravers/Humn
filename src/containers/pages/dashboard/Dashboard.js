import React, { Component } from "react";
import User from "../../components/stories/User/User";
import { Wrapper } from "../../../styles/layout.styles";
import { Users, UserWrapper } from "./Dashboard.styles";

// recentStory is how recently they updated their story in the last day (in hours)
class Dashboard extends Component {
    render() {
        return (
            <Wrapper>
                <h1>Dashbaord</h1>
                <Users>
                    <UserWrapper>
                        <User recentStory={2.5} progress={25} />
                    </UserWrapper>
                    <UserWrapper>
                        <User recentStory={2.5} progress={50} />
                    </UserWrapper>
                    <UserWrapper>
                        <User recentStory={2.5} progress={75} />
                    </UserWrapper>
                    <UserWrapper>
                        <User recentStory={2.5} progress={100} />
                    </UserWrapper>
                </Users>
            </Wrapper>
        );
    }
}

export default Dashboard;
