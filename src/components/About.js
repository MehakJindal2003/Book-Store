import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <>
    <h1 style={{color:'#232F3D',textAlign:'center',marginTop:'20px',fontSize:'50px',textDecoration:'underline'}}>OUR SPECIALITY</h1>
    <div style={{display:'flex',flexDirection:'row',marginTop:'40px'}}>
      <div style={{width:'100%'}}>
      <img src="https://i.insider.com/5720d775dd0895167d8b468b?width=700" style={{display: 'block',marginLeft: 'auto',marginRight: 'auto',marginTop:'30px',width:"90%"}}  height="90%"></img>
      </div>
      <div style={{width:'1200px',marginTop:'40px',marginRight:'20px'}}>
      <p style={{fontSize:'20px'}}>This comprehensive application leverages the power of the MERN stack, a robust technology stack that includes MongoDB for efficient data storage, Express.js for streamlined server-side development, React for dynamic and responsive user interfaces, and Node.js for scalable backend architecture.</p><br></br><p style={{fontSize:'20px'}}> The acronym CRUD stands for the four fundamental operations—Create, Read, Update, and Delete—enabling seamless management and interaction with data.

The application boasts a user-friendly interface designed with React, providing an intuitive experience for users to navigate through various functionalities. </p><br></br><p style={{fontSize:'20px'}}>Users can effortlessly add new entries to the system, retrieve information with ease, update existing records, and remove unnecessary data—all orchestrated through a well-structured and efficient backend powered by Node.js and Express.js.

</p><br></br><p style={{fontSize:'20px'}}>MongoDB, a NoSQL database, plays a crucial role in storing and managing data, ensuring flexibility and scalability. </p><br></br><p style={{fontSize:'20px'}}>The use of asynchronous JavaScript, supported by Node.js, enables handling multiple concurrent requests efficiently, enhancing the application's overall performance.

With a focus on modern development practices, this MERN stack CRUD application showcases the synergy between frontend and backend technologies, offering a seamless experience for users interacting with dynamic and real-time data.</p>
</div>
    </div>
    </>
  );
};

export default About;