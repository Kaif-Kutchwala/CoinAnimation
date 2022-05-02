import "./coin.css";
import { useSpring, animated } from "react-spring";
import { useState } from "react";

export const Coin = () => {
  const [toggle, setToggle] = useState(true);
  const styles = useSpring({
    transform: toggle ? "rotateY(0deg)" : "rotateY(180deg)",
  });

  return (
    <>
      <animated.div
        className="coin"
        onClick={() => setToggle(!toggle)}
        style={styles}
      >
        <div className="heads"></div>
        <div className="tails"></div>
      </animated.div>
    </>
  );
};
