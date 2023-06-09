import * as React from 'react';
import {Button} from "antd";
import styled, {css} from "styled-components";
import icon from "./svg/icon1.svg";
import icon2 from "./svg/icon2.svg";
import icon3 from "./svg/icon3.svg";
import icon4 from "./svg/icon4.svg";
import icon5 from "./svg/icon5.svg";
import icon6 from "./svg/icon6.svg";
import icon7 from "./svg/icon7.svg";


const StyledButtonIcon = styled(Button)<{ name?: string }>`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  gap: 8px;

  width: 47px;
  height: 47px;
  
  background: #4B51EA;
  border-radius: 15px;
  
  color: white;
  
  
  ${(props) =>
          props.name === 'copy' &&
          css`
          background-color: #9747FF;  
          background-image: url(${icon});
          background-position: center;
          background-repeat: no-repeat;
            
         &:hover {
           background-image: url(${icon2});
           background-position: center;
           background-repeat: no-repeat;
          }
         
    `}
  ${(props) =>
          props.name === 'edit' &&
          css`
          background-color: #9747FF;  
          background-image: url(${icon5});
          background-position: center;
          background-repeat: no-repeat;
            
         &:hover {
           background-image: url(${icon6});
           background-position: center;
           background-repeat: no-repeat;
          }
         
    `}
  ${(props) =>
          props.name === 'plus' &&
          css`
          background-color: #444656;  
          background-image: url(${icon7});
          background-position: center;
          background-repeat: no-repeat;
            
         &:hover {
           background-color: #4B51EA;
           background-position: center;
           background-repeat: no-repeat;
          }
         
    `}
    ${(props) =>
          props.name === 'profile' &&
          css`
          background-image: url(${icon3});
          background-position: center;
          background-repeat: no-repeat;
            
         &:hover {
           background-image: url(${icon4});
           background-position: center;
           background-repeat: no-repeat;
          }
         
    `}
`

type ButtonIconTypes = Parameters<typeof Button>[0]

export function ButtonIconGipno(props: ButtonIconTypes) {
    return (
        <StyledButtonIcon{...props} >
        </StyledButtonIcon>
    )
}