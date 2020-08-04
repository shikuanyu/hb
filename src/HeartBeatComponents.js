import React from "react";
import {ReactComponent as ReactHeart} from "./heart.svg";
import styled, {keyframes} from "styled-components";

const hugRotate = keyframes`
  0%
  {
    filter: hue-rotate(0);
  }
  25%
  {
    filter: hue-rotate(45deg);
  }
  50%
  {
    filter: hue-rotate(90deg);
  }
  75%
  {
    filter: hue-rotate(45deg);
  }
  100%
  {
    filter: hue-rotate(0deg);
  }
`
;

const beatAnimation = keyframes`
   0%
  {
    transform: scale( .75 );
  }
  20%
  {
    transform: scale( 0.8 );
  }
  40%
  {
    transform: scale( .0.9 );
  }
  60%
  {
    transform: scale( 1 );
  }
  80%
  {
    transform: scale( .75 );
  }
  100%
  {
    transform: scale( .75 );
  }
`;

const StyleLogo = styled(ReactHeart)`
  height: ${props => props.height};
  width: ${props => props.width};
  fill: ${props => props.fillColor};
  display: block;
  margin: auto;
  animation: ${beatAnimation} infinite ${props => props.beatRate}s linear, ${hugRotate} infinite ${props => props.hueRate}s linear; 
`;

export const HeartIcon = ({beatRate, hueRate, width, height, fillColor}) => (
  <StyleLogo beatRate={beatRate} hueRate={hueRate} width={width} height={height} fillColor={fillColor}/>
)