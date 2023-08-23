import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import MyNavbar from './Navbar';
import MyCards from './Cards';
import MyImage from './mainimage';
import styled from 'styled-components';


// const CenteredContainer = styled.div`
//   text-align: center; /* Center the text horizontally */
// `;

const StyledParagraph = styled.p`
  font-size: 22px;
  margin-bottom: 10px;
  color: #000000;
  max-block-size: 70%;  
`;

function App() {
    return (
        <div className="App">
            <MyNavbar />
            <div className="text-center mt-3">
                <h1>Welcome to MidDay Tea </h1>
                <br/>
            </div>
            <MyImage/>
            <br/><br/>
            <div className="text-center mt-3">
                <StyledParagraph>Mid Day Tea is an emerging company committed to provide Premium Quality Tea.
                    We procure tea from various gardens in India and blend them in ideal
                    proportion for required colour, flavour and taste.This helps us to cater
                    better to the various needs of the consumers. We adhere to strict quality
                    control regime with highly specialized skills following scientific and
                    thorough quality control system in the whole process.This leads to steady
                    quality and unique style of our tea which is a symbol of quality and value.
                    Over the time we have accumulated rich experience and established stable and
                    faithful business relationship with our associates.With high quality standard,
                    satisfied delivery and reasonable price our Company has recieved outstanding
                    reputation in a very short span opening our path to lead this business line.
                </StyledParagraph>
            </div>

            <div className="text-center mt-3">
                <br/> <br/> <br/>
                <h1> Our Products </h1>
                <br/>

            </div>

            <MyCards />

            <div >
                <br/> <br/> <br/>
                <h2> Contact </h2>
                <br/>

            </div>

        </div>
    );
}

export default App;