import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import ParallaxLayer from "./components/parallax/ParallaxLayer";
import ParallaxContainer from "./components/parallax/ParallaxContainer";
import Magic from "./components/magic/Magic";

var magic = [
  {
    text: `'";`,
    color: "#F6645D",
    name: "SQLI",
    description: "Escapes the SQL query",
    index: 0,
  },
  {
    text: `<lol/>`,
    color: "#1AD69C",
    name: "XSS",
    description: "Incorrect HTML element",
    index: 1,
  },
  {
    text: `../`,
    color: "#DF89DD",
    name: "Path Traversal",
    description: "Tries to access previous directory",
    index: 2,
  },
  {
    text: `--#`,
    color: "#F6645D",
    name: "SQLI",
    description: "Comments the rest of the SQL Query",
    index: 3,
  },
  {
    text: `\`ls\``,
    color: "#9BDBFE",
    name: "bash",
    description: "Runs the ls command in bash",
    index: 4,
  },
];

function App() {
  const [hover, setHover] = React.useState(-1);
  const [title, setTitle] = React.useState("magic string");
  const [subtitle, setSubTitle] = React.useState("click to copy");
  const [color, setColor] = React.useState("#FFFFFF");

  const handleHoverFor = (s) => {
    return () => {
      console.log(s.index);
      // console.log(hover);
      setHover(s.index);
      setTitle(s.name);
      setSubTitle(s.description);
      setColor(s.color);
    };
  };

  const copy = () => {
    navigator.clipboard.writeText(`'";<lol/>../--#\`ls\``);
    const d = {
      text: `'";<lol/>../--#\`ls\``,
      color: "#FFFFFF",
      name: "magic string",
      description: "click to copy",
      index: 5,
    };
    setHover(d.index);
    setTitle(d.name);
    setSubTitle(d.description);
    setColor(d.color);
  };

  return (
    <div className="App">
      <header className="App-header">
        <ParallaxContainer
          layerArray={[
            {
              layer: (
                <div>
                  <motion.div initial={{ scale: 1 }} whileTap={{ scale: 0.9 }}>
                    <Typography
                      variant="h1"
                      style={{
                        flexDirection: "row",
                        display: "flex",
                      }}
                    >
                      {magic.map((snippet, index) => (
                        <motion.span
                          key={index}
                          initial={{ scale: 1, color: "#FFFFFF" }}
                          whileHover={{ scale: 1.2, color: snippet.color }}
                          onMouseEnter={handleHoverFor(snippet)}
                          onClick={copy}
                        >
                          <code key={index}>{snippet.text}</code>
                        </motion.span>
                      ))}
                    </Typography>
                  </motion.div>
                  <div style={{ position: "relative", display: "flex" }}>
                    <Typography>
                      <AnimatePresence>
                        <motion.span
                          key={title}
                          initial={{ x: -200, opacity: 0 }}
                          animate={{ x: 0, opacity: 0.9 }}
                          exit={{ x: 200, opacity: 0 }}
                          style={{
                            position: "absolute",
                            display: "flex",
                            alignItems: "flex-start",
                            flexDirection: "column",
                          }}
                        >
                          <Typography variant="h1" style={{ color: color }}>
                            {title}
                          </Typography>
                          <Typography variant="h2">{subtitle}</Typography>
                        </motion.span>
                      </AnimatePresence>
                    </Typography>
                  </div>
                </div>
              ),
              transform: (x, y) => `translate3d(${x / -20}px,${y / -20}px,0)`,
            },
          ]}
        />
      </header>
    </div>
  );
}

export default App;
