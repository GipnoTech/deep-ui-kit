import * as React from 'react';
import {Select} from "antd";
import styled, {css} from "styled-components";

const { Option } = Select;
const StyledSelect = styled(Select)<{ name?: string }>`

  .ant-select-arrow{
    color: #444656 ;
  }
  .ant-select-selector {
    background: #F5F6F8 !important;
    border-radius: 15px;
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    padding: 12px 10px !important;
    text-align: left;
    
    width: 260px !important;
    height: 55px !important;
  }
`

type SelectTypes = Parameters<typeof Select>[0];

interface SelectGipnoProps extends SelectTypes {
    options: { value: string; label: string }[];
}

export function SelectGipno({ options, ...props }: SelectGipnoProps) {
    return (
        <StyledSelect {...props} placeholder="Выберите пункт">
            {options.map((option) => (
                <Option key={option.value} value={option.value}>
                    {option.label}
                </Option>
            ))}
        </StyledSelect>
    );
}