import React from "react";
import { useSpring, animated } from "react-spring";
import "./ParallaxLayer.css";

const ParallaxLayer = ({ layer, transform }) => {
  return { layer: layer, transform: transform };
};

export default ParallaxLayer;
