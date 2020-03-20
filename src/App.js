import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./styles.css";
import List from "./List";

export default function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Header</Typography>
        </Toolbar>
      </AppBar>
      <div
        style={{
          position: "sticky",
          top: "-1px",
          zIndex: 100,
          background: "rgb(255, 243, 224)",
          padding: 16
        }}
      >
        search bar area
      </div>
      <List />
      <div
        style={{
          position: "fixed",
          background: "rgb(96, 125, 139)",
          padding: 16,
          bottom: 0,
          width: "100%"
        }}
      >
        Footer
      </div>
    </div>
  );
}
