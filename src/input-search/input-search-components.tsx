import * as React from 'react';
import {Cascader, Input, Select, Space} from "antd";
import {SearchOutlined} from "@ant-design/icons"
import styled, {css} from "styled-components";
import icon from "./Search-Icon.svg"

const StyledSpaceSearch = styled(Space)<{ name?: string}>`
   display: flex;
   flex-direction: row;
   align-items: center;
   padding: 12px 0px 8px 40px;
   gap: 12px;

   width: 400px;
   height: 30px;

  background: #F5F6F8;
  border-radius: 15px;

  text-overflow: ellipsis;

  background-image: url(${icon});
  background-repeat: no-repeat !important;
  background-position: 10px, 10px !important;
  
  .ant-select-selector{
    background-color: #F5F6F8 !important;
    border: none !important;
    padding-right: 25px !important;
  }
  .ant-select-arrow{
    color: #444656;
  }
  .ant-input{
    padding-right: 45px;
  }
   
  .ant-input:focus{
    box-shadow: none !important;
  }
  
  .ant-select-selection-search-input{
    display: none;
  }
`

type InputSearchTypes = Parameters<typeof Space>[0]

interface InputSearchGipnoProps extends InputSearchTypes {
    options: { value: string; label: string }[];
}

export function InputSearchGipno({ options, ...props }: InputSearchGipnoProps) {
    return (

        <StyledSpaceSearch {...props}  placeholder="Введите запрос">
            <Input
                style={{backgroundColor: '#F5F6F8', border: 'none'}}
                placeholder="Введите запрос"
            />
            <svg height="50" width="5">
                <line x1="0" y1="0" x2="0" y2="50" style={{stroke:"#BCBFC6",}} />
            </svg>
            <Select
                placeholder="Выберите пункт"
                style={{minWidth: '160px'}}
                options={options}
            />
        </StyledSpaceSearch>
    )
}