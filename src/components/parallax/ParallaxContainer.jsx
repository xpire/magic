import React from 'react';
import { useSpring, animated } from 'react-spring';
import './ParallaxContainer.css';

const calc = (x,y) => [x - window.innerWidth/2, y - window.innerHeight/2];
// const trans1 = (x, y) => `translate3d(${x / -10}px,${y / -10}px,0)`

const defaultConfig = { xy: [0,0], config: { mass: 10, tension: 550, friction: 140}}

const ParallaxContainer = ({layerArray, config}) => {
    const [props, set] = useSpring(() => ({...defaultConfig, ...config}));
    console.log({layerArray})
    return (
        <div className="container" 
        onMouseMove={({clientX: x, clientY: y}) => {set({ xy: calc(x,y)})}}
        onMouseLeave={() => {set({xy: [0,0]})}}>
            {layerArray.map((layer, index) => {
                return (
                    <animated.div className="layer" key={index} style={{transform: props.xy.interpolate(layer.transform)}}>{layer.layer}</animated.div>
                )
            })}
        </div>
    )

}

export default ParallaxContainer;