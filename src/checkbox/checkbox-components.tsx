import * as React from 'react';
import {Checkbox} from "antd";
import styled, {css} from "styled-components";

const StyledCheckbox = styled(Checkbox)<{ name?: string }>`
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #444656; 
    border-color: #444656 !important; 
    
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #444656 !important;
    border-color: #444656 !important;
  }

  .ant-checkbox-wrapper:hover .ant-checkbox-inner {
    background-color: #444656;
    border-color: #444656 !important;
  }
  .ant-checkbox-checked:after {
    border: none;
  }
`

type CheckboxTypes = Parameters<typeof Checkbox>[0];

export function CheckboxGipno(props: CheckboxTypes) {
    return (
        <StyledCheckbox{...props} />
    )
}