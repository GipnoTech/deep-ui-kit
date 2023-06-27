import * as React from 'react';
import {Button} from "antd";
import styled, {css} from "styled-components";
import icon7 from "../button-icon/svg/icon7.svg";

const StyledButton = styled(Button)<{ name?: string }>`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 220px;
  height: 47px;

  //border: 2px solid #444656;
  border-radius: 15px;
  background-color: #444656;
  color: white;
  border: none;
 
  
  ${(props) =>
          props.name === 'primary' &&
          css`
            background-color: #444656;
            color: white !important;

            &:hover {
              background-color: #4B51EA;
              color: white;
              border: none;
            }

          `}
  ${(props) =>
          props.name === 'default' &&
          css`
            background-color: white;
            color: #444656;
            border: 2px solid #444656;
            &:hover {
              background-color: white;
              border-color: #4B51EA !important;
              color: #4B51EA !important;
            }
              
          `}
  ${(props) =>
          props.name === 'disabled-default' &&
          css`
            background-color: white !important;
            color: #444656;
            border: 2px solid #444656;
              
          `}
  ${(props) =>
          props.name === 'disabled-primary' &&
          css`
            color: #444656;
            border: none !important;
              
          `}
`

type ButtonTypes = Parameters<typeof Button>[0];

export function ButtonGipno(props: ButtonTypes) {
    return (
        <StyledButton{...props} />
    )
}