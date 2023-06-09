import * as React from 'react';
import {Input} from "antd";
import styled from "styled-components";

const StyledInput = styled(Input)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 14px;
  gap: 12px;

  width: 240px;
  height: 55px;
  
  background: #F5F6F8;
  border-radius: 15px;
  
  text-overflow: ellipsis;
`

type InputTypes = Parameters<typeof Input>[0]

export function InputGipno(props: InputTypes) {
    return (
        <StyledInput{...props} />
    )
}

