import * as React from 'react';
import {Select} from "antd";
import styled, {css} from "styled-components";

const { Option } = Select;
const StyledSelect = styled(Select)<{ name?: string }>`
 

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

export function SelectGipno(props: SelectTypes) {
    return (
        <StyledSelect{...props} options={[
    {value: 'Выбор из списка 1', label: 'Выбор из списка 1'},
    {value: 'Выбор из списка 2', label: 'Выбор из списка 2'},
    {value: 'Выбор из списка 3', label: 'Выбор из списка 3'},
    {value: 'Выбор из списка 4', label: 'Выбор из списка 4'},
    ]}
     placeholder="Выберите пункт"
        >
        </StyledSelect>

    )
}