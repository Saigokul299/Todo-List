import "./App.css";
import { Box, Button, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

function App() {
  const [s, setS] = useState([]);
  const [p, setP] = useState(null);
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        height: "1000px",
        position: "relative",
      }}
    >
      <div style={{ paddingTop: "100px" }}></div>
      <div className="ss">
        <Box>
          <div style={{ paddingTop: "20px" }}>
            <Typography
              sx={{
                bgcolor: "violet",
                fontSize: "25px",
                textAlign: "center",
                paddingTop: "10px",
              }}
            >
              ToDo List
            </Typography>
          </div>
          <div style={{ paddingTop: "20px" }}>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                if (!(s.includes(p) || p == "")) {
                  setS([...s, p]);
                }
              }}
            >
              <input
                className="int"
                placeholder="Add an item"
                onChange={(event) => setP(event.target.value)}
              ></input>
              <Button
                sx={{ fontSize: "30px", marginLeft: "50px" }}
                onClick={() => {
                  if (!(s.includes(p) || p == "")) {
                    setS([...s, p]);
                  }
                }}
              >
                <AddCircleIcon
                  sx={{ fontSize: "xx-large", color: "violet" }}
                ></AddCircleIcon>
              </Button>
            </form>
            <div className="sp">
              {s.map((i, index) => (
                <div className="spm">
                  <Typography
                    sx={{
                      fontSize: "20px",
                      width: "250px",
                      marginLeft: "20px",
                    }}
                  >
                    {i}
                  </Typography>
                  <Button
                    onClick={() => setS(s.filter((ip) => ip !== i))}
                    sx={{ marginLeft: "100px" }}
                  >
                    <CloseIcon></CloseIcon>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default App;
