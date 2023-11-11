import styled, { keyframes } from "styled-components";

const fadeInAnimation = keyframes`
0% { opacity: 0}
30% { opacity: 0.3 }
40% { opacity: 0.6; }
100% { opacity: 1; }`


export const StyledGameOverDisplay = styled.div`
width: 250px;
height: 40px;
text-align: center;
color: white;
font-size: 25px
animation-name: ${fadeInAnimation};
animation-duration: 3s;
animation-iteration-count: 1;
`;