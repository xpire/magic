import React from "react";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

import ParallaxLayer from "./components/parallax/ParallaxLayer";
import ParallaxContainer from "./components/parallax/ParallaxContainer";

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
      description: "copied to clipboard📋!",
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
                  <div
                    className="appbar"
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                      right: "0px",
                      padding: "10px",
                    }}
                  >
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="flex-start"
                    >
                      <Grid item xs={6}>
                        <Typography
                          variant="overline"
                          style={{ color: "white" }}
                          align="center"
                        >
                          <Link
                            href="https://justinor.dev"
                            target="__blank"
                            rel="noopener"
                            color="inherit"
                          >
                            My Website
                          </Link>
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography
                          variant="overline"
                          style={{ color: "white" }}
                          align="center"
                        >
                          <Link
                            href="https://github.com/xpire/magic"
                            target="__blank"
                            rel="noopener"
                            color="inherit"
                          >
                            Source
                          </Link>
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>

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
                          style={{
                            fontSize:
                              // "144px",
                              "calc(24px + (128 - 24) * ((100vw - 300px) / (1600 - 300)))",
                          }}
                        >
                          <code key={index}>{snippet.text}</code>
                        </motion.span>
                      ))}
                    </Typography>
                  </motion.div>
                  <div style={{ position: "relative", display: "flex" }}>
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
                          fontSize: "10px",
                        }}
                      >
                        <Typography variant="h2" style={{ color: color }}>
                          {title}
                        </Typography>
                        <Typography variant="h3">{subtitle}</Typography>
                      </motion.span>
                    </AnimatePresence>
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
