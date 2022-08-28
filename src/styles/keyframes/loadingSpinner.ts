import { keyframes } from "@emotion/react";

export const containerKeyframes = keyframes`
  100% {
    transform: rotate(360deg)
  }
`;

export const spinningDotKeyframes = keyframes`
    80%, 100% {
       transform: rotate(360deg); 
  } 
`;
export const beforeKeyframes = keyframes`
 50% {
    transform: scale(0.4); 
  } 100%, 0% {
    transform: scale(1.0); 
  } 
`;
