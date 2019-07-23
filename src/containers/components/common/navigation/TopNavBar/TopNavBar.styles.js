import styled from "styled-components";
import UserImg from "../../../../../assets/img/profile_user.jpg";

export const NavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3%;
    background: #f3f3f3;
    box-shadow: 0 4px 2px -4px #ababab, 0 4px 2px -1px #ececec;
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    align-self: stretch;
`;

export const UserProfile = styled.div`
    border-radius: 50%;
    background: url(${UserImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 3.5vw;
    width: 3.5vw;
    box-shadow: 0px 0px 0px 1px white, 0px 0px 2px 2px grey;
`;

export const IconButtons = styled.div`
    display: flex;
    align-self: stretch;
    align-items: center;

    > div {
        margin: 0 1em;
    }
`;
