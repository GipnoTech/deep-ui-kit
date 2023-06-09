import * as React from 'react';
import {Cascader, Input, Select, Space} from "antd";
import {SearchOutlined} from "@ant-design/icons"
import styled, {css} from "styled-components";
import icon from "./Search-Icon.svg"

const StyledInputSearch = styled(Input)<{ name?: string }>`
   display: flex;
   flex-direction: row;
   align-items: center;
   padding: 12px 0px 12px 14px;
   gap: 12px;

   width: 440px;
   height: 47px;

  ${(props) =>
          props.name === 'search' &&
          css`
          background-color: #444656;
            
            
         &:hover {
           background-color: #4B51EA;
           background-position: center;
           background-repeat: no-repeat;
          }
         
    `}
`

const { Option } = Select;
const selectAfter = (
    <Select defaultValue="Выберите пункт" style={{backgroundColor: "#F5F6F8"}}>
        <Option value=".com">.com</Option>
        <Option value=".jp">.jp</Option>
        <Option value=".cn">.cn</Option>
        <Option value=".org">.org</Option>
    </Select>
);
const selectBefore = (
    <img src={icon} style={{backgroundColor: "#F5F6F8"}}/>
);
type InputSearchTypes = Parameters<typeof Input>[0]

export function InputSearchGipno(props: InputSearchTypes) {
    return (

        <StyledInputSearch {...props} placeholder="Введите запрос" addonBefore={selectBefore} addonAfter={selectAfter} />
    )
}