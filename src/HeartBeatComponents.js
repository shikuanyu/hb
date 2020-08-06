import React from "react";
import {ReactComponent as ReactHeart} from "./heart.svg";
import styled, {keyframes} from "styled-components";

const hugRotate = (d) => keyframes`
  0%
  {
    filter: hue-rotate(0);
  }
  10%
  {
    filter: hue-rotate((${d}/4)deg);
  }
  20%
  {
    filter: hue-rotate((2*${d}/4)deg);
  }
  40%
  {
    filter: hue-rotate((3*${d}/4)deg);
  }
  50%
  {
    filter: hue-rotate(${d}deg);
  }
  40%
  {
    filter: hue-rotate((3*${d}/4)deg);
  }
  20%
  {
    filter: hue-rotate((2*${d}/4)deg);
  }
  10%
  {
    filter: hue-rotate((${d}/4)deg);
  }
  100%
  {
    filter: hue-rotate(0deg);
  }
`
;

const beatAnimation = (a) => keyframes`
   0%
  {
    margin-left: 0%;
  }
  30%
  {
    margin-left: ${a}%;
  }
  
  50%
  {
    margin-left: 0%;
  }
  70%
  {
    margin-left: -${a}%;
  }
  100%
  {
    margin-left: 0%;
  }
`;


const StyleLogo = styled(ReactHeart)`
  height: ${props => props.height};
  width: ${props => props.width};
  fill: ${props => props.fillColor};
  display: block;
  margin: auto;
  animation: ${props => beatAnimation(props.amplitude)} infinite ${props => props.beatRate}s linear, ${props => hugRotate(props.degree)} infinite ${props => props.hueRate}s linear; 
`;

export const HeartIcon = ({beatRate, hueRate, width, height, fillColor, amplitude, degree}) => (
  <StyleLogo beatRate={beatRate} hueRate={hueRate} width={width} height={height} fillColor={fillColor}
             amplitude={amplitude} degree={degree}/>
)