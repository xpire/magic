import React from 'react';
import { useSpring, animated } from 'react-spring';

const ParallaxLayer = ({layer, transform}) => {
    return {layer: layer, transform: transform}
}

export default ParallaxLayer;