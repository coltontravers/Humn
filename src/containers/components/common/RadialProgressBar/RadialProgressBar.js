import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    Wrapper,
    Svg,
    Circle,
    ChildrenWrapper
} from "./RadialProgressBar.styles";

/* eslint-disable */
class RadialProgressBar extends Component {
    render() {
        const { color, width, progress, strokeWidth } = this.props;

        // const c = Math.PI * (r * 2);
        // const pct = ((100 - progress) / 100) * c;

        // console.log("Stroke offset:", pct);

        // Size of the enclosing square
        const sqSize = this.props.sqSize;
        // SVG centers the stroke width on the radius, subtract out so circle fits in square
        const radius = this.props.sqSize / 2;
        // Enclose cicle in a circumscribing square
        const viewBox = `0 0 ${sqSize} ${sqSize}`;
        // Arc length at 100% coverage is the circle circumference
        const dashArray = radius * Math.PI * 2;
        // Scale 100% coverage overlay with the actual percent
        const dashOffset = dashArray - (dashArray * this.props.progress) / 100;
        return (
            <Wrapper>
                {/* Have to declare svg here rather than a styled component because of viewBox */}
                <svg
                    width={this.props.sqSize}
                    height={this.props.sqSize}
                    viewBox={viewBox}
                    style={{ overflow: "visible", transform: "rotate(270deg)" }}
                >
                    <circle
                        className="circle-background"
                        cx={this.props.sqSize / 2}
                        cy={this.props.sqSize / 2}
                        r={radius}
                        stroke="#f1f1f1"
                        strokeWidth={`${this.props.strokeWidth}px`}
                    />
                    <circle
                        className="circle-progress"
                        cx={this.props.sqSize / 2}
                        cy={this.props.sqSize / 2}
                        r={radius}
                        strokeWidth={`${this.props.strokeWidth}px`}
                        stroke={color}
                        // Start progress marker at 12 O'Clock
                        transform={`rotate(-90 ${this.props.sqSize / 2} ${this
                            .props.sqSize / 2})`}
                        style={{
                            strokeDasharray: dashArray,
                            strokeDashoffset: dashOffset
                        }}
                    />
                </svg>
                <ChildrenWrapper>{this.props.children}</ChildrenWrapper>
            </Wrapper>
        );
    }
}

RadialProgressBar.defaultProps = {
    color: "black",
    width: 4,
    progress: 0,
    sqSize: 68,
    percentage: 25,
    strokeWidth: 5
};

RadialProgressBar.propTypes = {
    color: PropTypes.string,
    width: PropTypes.number,
    progress: PropTypes.number
};

export default RadialProgressBar;
