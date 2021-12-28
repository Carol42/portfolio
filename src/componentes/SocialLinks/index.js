import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faCodepen, faGithub, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const StyledDiv = styled.div`
    font-size: 24px;
    display: flex;
    justify-content: space-around;
`

const StyledIcon = styled(FontAwesomeIcon)`
    color: #222;
`

export default function SocialLinks() {
    return (
        <StyledDiv>
            <a target="_blank" rel="noreferrer noopener" href="http://github.com/Carol42">
                <StyledIcon icon={faGithub} />
            </a>
            <a target="_blank" rel="noreferrer noopener" href="https://codepen.io/Carol42" >
                <StyledIcon icon={faCodepen} />
            </a>
            <a target="_blank" rel="noreferrer noopener" href="https://linkedin.com/in/carol42">
                <StyledIcon icon={faLinkedin} />
            </a>
            <a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/carol_helloo/">
                <StyledIcon icon={faInstagram} />
            </a>
            <a target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/profile.php?id=100070464602637">
                <StyledIcon icon={faFacebook} />
            </a>
            <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/carol_heloo/">
                <StyledIcon icon={faTwitter} />
            </a>
            <a target="_blank" rel="noreferrer noopener" href="https://t.me/carol_helo">
                <StyledIcon icon={faTelegram} />
            </a>
            <a href="mailto:carol42.helo@gmail.com">
                <StyledIcon icon={faEnvelope} />
            </a>
        </StyledDiv>
    )
}