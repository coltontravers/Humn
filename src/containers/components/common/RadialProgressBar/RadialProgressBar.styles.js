import styled from "styled-components";
import React from "react";

export const Wrapper = styled.div`
    position: relative;
`;

// export const Svg = styled.svg`
//     width: ${props => props.width}px;
//     height: ${props => props.height}px;
//     transform: rotate(180deg);
//     overflow: hidden;
// `;

export const Svg = props => {
    // const filteredProps = doFilteringToProps;
    const { height, width, viewBox } = props;
    return (
        <svg
            height={height}
            width={width}
            viewBox={viewBox}
            style={{ overflow: "hidden" }}
        />
    );
};

export const Circle = styled.circle`
    stroke: ${props => props.color};
    stroke-width: ${props => props.width};
    stroke-dashoffset: ${props => {
        const c = Math.PI * ("50%" * 2);
        const pct = ((100 - props.progress) / 100) * c;

        console.log("pct:", pct);
        return pct;
    }};
    fill: transparent;
    r: 50%;
    cx: 50%;
    cy: 50%;
`;

export const ChildrenWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
`;
