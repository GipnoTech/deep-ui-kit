import * as React from 'react';
import {Button, DatePicker, Space} from 'antd';
import styled from 'styled-components';
import dayjs, { Dayjs } from 'dayjs';
import icon from "./Gallery.svg";
import { DatePickerProps } from 'antd';
import locale from "antd/lib/date-picker/locale/ru_RU";


const StyledDate = styled(DatePicker)<{ icon?: string, icon1?: string }>`
  
  .ant-picker-input {
    margin-left: 30px;
  }
  .ant-picker-suffix{
    display: none;
  }
  //background-image: url(${icon}) !important;
  ${({ icon1 }) => icon1 && `background-image: url(${icon}), url(${icon1}) !important;`};
  background-position: 10px center, 208px center !important;
  background-repeat: no-repeat, no-repeat !important;
  &.dateSelected{
    ${({ icon1 }) => icon1 && `background-image: url(${icon}) !important;`};

  }
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


const customFormat: DatePickerProps['format'] = (value) =>
    `${value.format('DD.MM.YYYY')}`;

const onChange = (value: Dayjs | null, dateString: string) => {
    if (value) {
        console.log('Date: ', value);
    } else {
        console.log('Clear');
    }
};



type DateTypes = typeof DatePicker['propTypes'];


// @ts-ignore
interface DatePickerGipnoProps extends DateTypes{
    icon?: string;
    icon1?: string;
}

export function DateGipno({ icon, icon1, ...props }: DatePickerGipnoProps) {

    const [isDateSelected, setIsDateSelected] = React.useState(false);

    const onChange = (value: Dayjs | null, dateString: string) => {
        if (value) {
            console.log('Date: ', value);
            setIsDateSelected(true);
        } else {
            console.log('Clear');
            setIsDateSelected(false);
        }
    };
    return (
        <StyledDate
            format={customFormat}
            icon={icon}
            icon1={icon1}
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
            className={isDateSelected ? 'dateSelected' : ''}
            locale={locale}
            {...props}
        />
    );
}
