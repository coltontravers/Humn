import styled from "styled-components";
import ProfileImg from "../assets/img/profile_user.jpg";

export const DefaultUser = styled.div`
    height: 95%;
    width: 100%;
    border-radius: 50%;
    background: url(${ProfileImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
