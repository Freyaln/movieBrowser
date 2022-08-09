import React, {useState} from 'react';
import './Welcome.scss';
import {Link} from "react-router-dom";
import Button from "../../components/atoms/Button/Button";
import Typo, {TextType} from "../../components/atoms/Typo/Typo";

function Welcome() {
    const [hovering, setHovering] = useState<boolean>(false)
    const hoveringBtn = {
      onMouseEnter: () => setHovering(true),
      onMouseLeave: () => setHovering(false),
    };

    return (
      <div className="__welcome-page">
        <Link to="browse" {...hoveringBtn}>
          {hovering ? (
            <Button className="__welcome-button">
              <Typo type={TextType.TEXT} className="__button-text">
                  Enter & enjoy :)
              </Typo>
            </Button>
          ) : (
            <Button className="__welcome-button">
              <Typo type={TextType.TEXT} className="__button-text">
                  Hello ! Welcome to The Storage
              </Typo>
            </Button>
          )}
        </Link>
      </div>
    );
}

export default Welcome;
