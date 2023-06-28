import * as React from 'react';
import {Button, DatePicker} from 'antd';
import styled from 'styled-components';
import dayjs, { Dayjs } from 'dayjs';
import icon from "./Gallery.svg";
import { DatePickerProps } from 'antd';

const StyledDate = styled(DatePicker)<{ name?: string }>`
  
  .ant-picker-input {
    margin-left: 30px;
  }
  .ant-picker-suffix{
    display: none;
  }
  background-image: url(${icon}) !important;
  background-position: 10px, 10px !important;
  background-repeat: no-repeat !important;
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
`;

const onChange = (value: Dayjs | null, dateString: string) => {
    if (value) {
        console.log('Date: ', value);
    } else {
        console.log('Clear');
    }
};

type DateGipnoProps = DatePickerProps;

export function DateGipno( props: DateGipnoProps) {
    return (
        <StyledDate
            showToday={false}
            presets={[
                {label: 'Позавчера', value: dayjs().add(-2, 'd') as Dayjs},
                {label: 'Вчера', value: dayjs().add(-1, 'd') as Dayjs},
                {label: 'Сегодня', value: dayjs().add(0, 'd') as Dayjs},
                {label: 'Завтра', value: dayjs().add(1, 'd') as Dayjs},
                {label: 'Послезавтра', value: dayjs().add(2, 'd') as Dayjs},
            ]}
            onChange={onChange}
            placeholder="Выберите дату"
        />
    );
}
