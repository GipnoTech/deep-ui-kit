import * as React from 'react';
import {Checkbox} from "antd";
import styled, {css} from "styled-components";

const StyledCheckbox = styled(Checkbox)<{ name?: string }>`
  
`

type CheckboxTypes = Parameters<typeof Checkbox>[0];

export function CheckboxGipno(props: CheckboxTypes) {
    return (
        <StyledCheckbox{...props} />
    )
}