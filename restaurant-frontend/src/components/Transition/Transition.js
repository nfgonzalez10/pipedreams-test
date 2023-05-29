import React, { useEffect, useState } from "react";
import ArrowLeftCircleIcon from "@atlaskit/icon/glyph/arrow-left-circle";
import ArrowRightCircleIcon from "@atlaskit/icon/glyph/arrow-right-circle";
import Proptypes from "prop-types";

const TransitionComponent = ({
  maxNumberTransition,
  sendCurrentValue,
  children,
}) => {
  const minNumberTransitions = maxNumberTransition - maxNumberTransition;
  const [currentTransition, setCurrentState] = useState(minNumberTransitions);

  useEffect(() => {
    sendCurrentValue(currentTransition);
  }, []);

  const direcctionButtons = () => {
    let content = "space-between";
    if (currentTransition === minNumberTransitions) {
      content = "flex-end";
    } else if (currentTransition === maxNumberTransition) {
      content = "flex-start";
    }
    return content;
  };
  const handleTransition = (direction) => {
    console.log(
      "🚀 ~ file: Transition.js:28 ~ handleTransition ~ direction:",
      direction
    );
    let currentDay = currentTransition;
    if (direction === "left") {
      currentDay = currentTransition - 1;
      setCurrentState(currentDay);
    } else if (direction === "right") {
      currentDay = currentTransition + 1;
      setCurrentState(currentDay);
    }
    sendCurrentValue(currentDay);
  };

  return (
    <div className="transition">
      {children}
      <div className="transition__buttons">
        {minNumberTransitions !== currentTransition && (
          <button
            onClick={() => handleTransition("left")}
            className="buttons buttons--left"
          >
            <ArrowLeftCircleIcon size="xlarge" />
          </button>
        )}
        {maxNumberTransition !== currentTransition && (
          <button
            onClick={() => handleTransition("right")}
            className="buttons buttons--right"
          >
            <ArrowRightCircleIcon size="xlarge" />
          </button>
        )}
      </div>
      <style jsx="true">{`
        .transition {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .transition__buttons {
          display: flex;
          justify-content: ${direcctionButtons()};
        }
        .buttons {
          cursor: pointer;
          border: none;
          background: transparent;
        }
        .buttons--right {
          align-self: flex-end;
        }
        .buttons--left {
          align-self: flex-start;
        }
      `}</style>
    </div>
  );
};

TransitionComponent.propTypes = {
  children: Proptypes.node.isRequired,
  maxNumberTransition: Proptypes.number.isRequired,
  sendCurrentValue: Proptypes.func.isRequired,
};

export default TransitionComponent;
