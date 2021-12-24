import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faCodepen, faGithub, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import './style.css';

export default function SocialLinks() {
    return (
        <div className="socialLinks-container">
            <a className="socialLink" target="_blank" rel="noreferrer noopener" href="http://github.com/Carol42">
                <FontAwesomeIcon icon={faGithub} className="socialIcon" />
            </a>
            <a className="socialLink" target="_blank" rel="noreferrer noopener" href="https://codepen.io/Carol42" >
                <FontAwesomeIcon icon={faCodepen} className="socialIcon" />
            </a>
            <a className="socialLink" target="_blank" rel="noreferrer noopener" href="https://linkedin.com/in/carol42">
                <FontAwesomeIcon icon={faLinkedin} className="socialIcon" />
            </a>
            <a className="socialLink" target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/carol_helloo/">
                <FontAwesomeIcon icon={faInstagram} className="socialIcon" />
            </a>
            <a className="socialLink" target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/profile.php?id=100070464602637">
                <FontAwesomeIcon icon={faFacebook} className="socialIcon" />
            </a>
            <a className="socialLink" target="_blank" rel="noreferrer noopener" href="https://twitter.com/carol_heloo/">
                <FontAwesomeIcon icon={faTwitter} className="socialIcon" />
            </a>
            <a className="socialLink" target="_blank" rel="noreferrer noopener" href="https://t.me/carol_helo">
                <FontAwesomeIcon icon={faTelegram} className="socialIcon" />
            </a>
            <a className="socialLink" href="mailto:carol42.helo@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className="socialIcon" />
            </a>
        </div>
    )
}