import * as React from 'react';
import {Select} from "antd";
import styled, {css} from "styled-components";
import icon from "./Search-Icon.svg"


const { Option } = Select;
const StyledSelect = styled(Select)<{ icon?: string }>`

  .ant-select-arrow{
    color: #444656 ;
  }
  .ant-select-selector {
    
    border-radius: 15px;
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    padding: 12px 45px !important;
    text-align: left;
    
    width: 260px !important;
    height: 55px !important;

    background: #F5F6F8 !important;
  }
  
  .ant-select-selection-search {
    
    ${({ icon }) => icon && `background-image: url(${icon}) !important;`}
    background-repeat: no-repeat !important;
    background-position: 0px, 0px !important;
  }
 
`

type SelectTypes = Parameters<typeof Select>[0];

interface SelectGipnoProps extends SelectTypes {
    options: { value: string; label: string }[];
    icon?: string;
}

export function SelectGipno({ icon, options, ...props }: SelectGipnoProps) {
    return (
        <StyledSelect {...props} placeholder="Выберите пункт" icon={icon}>
            {options.map((option) => (
                <Option key={option.value} value={option.value}>
                    {option.label}
                </Option>
            ))}
        </StyledSelect>
    );
}