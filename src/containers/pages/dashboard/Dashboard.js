import React, { Component } from "react";
import User from "../../components/stories/User/User";
import TopNavBar from "../../components/common/navigation/TopNavBar/TopNavBar";
import { Wrapper, PageContent } from "../../../styles/Layout.styles";
import { Users, UserWrapper } from "./Dashboard.styles";

// recentStory is how recently they updated their story in the last day (in hours)
class Dashboard extends Component {
    render() {
        return (
            <Wrapper>
                <TopNavBar />
                <PageContent>
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
                </PageContent>
            </Wrapper>
        );
    }
}

export default Dashboard;
