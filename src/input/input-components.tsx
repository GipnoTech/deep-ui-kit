import * as React from 'react';
import {Input} from "antd";
import styled, {css} from "styled-components";

const StyledInput = styled(Input)<{ status?: string }>`
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

  ${(props) =>
          props.status === 'error' &&
          css`
            color: #ff4d4f;
            ::placeholder {color: #ff4d4f}
          `}
  ${(props) =>
          props.status === 'warning' &&
          css`
            color: #faad14;
            ::placeholder {color: #faad14}
          `}
`

type InputTypes = Parameters<typeof Input>[0]

export function InputGipno(props: InputTypes) {
    return (
        <StyledInput{...props} />
    )
}

