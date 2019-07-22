import React, { Component } from "react";
import PropTypes from "prop-types";
import { getUserStoryColor } from "../../../../utilities/user";
import RadialProgressBar from "../../common/RadialProgressBar/RadialProgressBar";
import { DefaultUser } from "../../../../styles/User.styles";
// import { User } from "./User.styles";

class StoryUser extends Component {
    render() {
        const { recentStory, progress } = this.props;

        console.log("User props:", this.props);

        return (
            <RadialProgressBar
                progress={progress}
                width={4}
                color={getUserStoryColor(recentStory)}
            >
                <DefaultUser />
            </RadialProgressBar>
        );
    }
}

StoryUser.defaultProps = {
    recentStory: null,
    progress: 0
};

StoryUser.propTypes = {
    recentStory: PropTypes.number,
    progress: PropTypes.number
};

export default StoryUser;
