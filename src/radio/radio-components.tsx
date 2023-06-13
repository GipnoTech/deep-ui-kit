import * as React from 'react';
import {Radio} from "antd";
import styled from "styled-components";

const StyledRadio = styled(Radio)`
  .ant-radio-checked .ant-radio-inner {
    background-color: #444656;
    border-color: #444656;
    
  }
  
`

type RadioTypes = Parameters<typeof Radio>[0]

export function RadioGipno(props: RadioTypes) {
    return (
        <StyledRadio {...props}/>
)
}