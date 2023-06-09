import * as React from 'react';
import {Cascader, Input, Select, Space} from "antd";
import styled, {css} from "styled-components";
import icon from "./Search-Icon.svg"

const StyledColor = styled(Input)<{ name?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;

  width: 280px;
  height: 64px;
  
  border-radius: 15px;
  
  
  ${(props) =>
    props.name === '#444656' &&
    css`
      background-color: #444656;
      color: white;
      text-align: center;
    `}
  ${(props) =>
          props.name === '#F5F6F8' &&
          css`
      background-color: #F5F6F8;
      color: black;
      text-align: center;
    `}
  ${(props) =>
          props.name === '#EBECF0' &&
          css`
      background-color: #EBECF0;
      color: black;
      text-align: center;
    `}
  
  ${(props) =>
          props.name === '#BCBFC6' &&
          css`
      background-color: #BCBFC6;
      color: black;
      text-align: center;
    `}
  ${(props) =>
          props.name === '#84879B' &&
          css`
      background-color: #84879B;
      color: white;
      text-align: center;
    `}
  ${(props) =>
          props.name === '#F9D450' &&
          css`
      background-color: #F9D450;
      color: black;
      text-align: center;
    `}
  ${(props) =>
          props.name === '#E74646' &&
          css`
      background-color: #E74646;
      color: white;
      text-align: center;
    `}
  ${(props) =>
          props.name === '#4B51EA' &&
          css`
      background-color: #4B51EA;
      color: white;
      text-align: center;
    `}
  ${(props) =>
          props.name === '#73C46C' &&
          css`
      background-color: #73C46C;
      color: white;
      text-align: center;
    `}
  ${(props) =>
          props.name === '#F3A575' &&
          css`
      background-color: #F3A575;
      color: white;
      text-align: center;
    `}
  ${(props) =>
          props.name === '#0D1C32' &&
          css`
      background-color: #0D1C32;
      color: white;
      text-align: center;
    `}
  ${(props) =>
          props.name === '#9747FF' &&
          css`
      background-color: #9747FF;
      color: white;
      text-align: center;
    `}
`

type ColorTypes = Parameters<typeof Input>[0]

export function ColorGipno(props: ColorTypes) {
    return (

        <StyledColor {...props}  />
    )
}