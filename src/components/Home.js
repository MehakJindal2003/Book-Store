import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 style={{color:'#232F3D',textAlign:'center',marginTop:'20px',fontSize:'50px',textDecoration:'underline'}}>BOOKSTORE</h1>
      <img src="https://img.freepik.com/premium-photo/girl-reading-book-by-river_14117-18094.jpg" style={{display: 'block',marginLeft: 'auto',marginRight: 'auto',marginTop:'30px'}} width="70%" height="40%"></img>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 5, background: "#232F3D" }}
          variant="contained"
        >
          <Typography variant="h3">View All products</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;