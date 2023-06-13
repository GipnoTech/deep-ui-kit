import React from 'react';
import './App.css';
import {InputGipno} from "./input";
import {ButtonGipno} from "./button";
import {ButtonIconGipno} from "./button-icon";
import {RadioGipno} from "./radio";
import {InputSearchGipno} from "./input-search";
import {ColorGipno} from "./color";
import {CheckboxGipno} from "./checkbox";
import {SelectGipno} from "./select";

function App() {
    return (
        <div className="App">
            <div>Кнопки</div>
            <div className="button">
                <div id="primary-button">
                    <ButtonGipno name={"primary"} >Primary Button</ButtonGipno>
                    <ButtonGipno name={"default"} >Primary Button</ButtonGipno>
                </div>
                <div id="disabled-button">
                    <ButtonGipno disabled style={{border: "none"}}>Button / Disabled</ButtonGipno>
                    <ButtonGipno disabled style={{background: "none"}}>Button / Disabled</ButtonGipno>
                </div>
                <div id="icon-button-user">
                    <ButtonIconGipno name={'profile'}/>
                </div>
                <div id="icon-button-document">
                    <ButtonIconGipno name={'copy'}/>
                </div>
                <div id="icon-button-edit">
                    <ButtonIconGipno name={'edit'}/>
                </div>
                <div id="icon-button-plus">
                    <ButtonIconGipno name={'plus'}/>
                </div>
            </div>
            <div>Гиперссылки</div>
            <div className="radio">
                <div id="square">
                    <RadioGipno />
                </div>
            </div>
            <div className="checkbox">
                <CheckboxGipno></CheckboxGipno>
            </div>
            <div className="input-search">
                <div id="input-search-default">
                    <InputSearchGipno />
                </div>
            </div>
            <div className="input">
                <InputGipno placeholder={'Введите что-нибудь'}/>
                <InputGipno placeholder={'Введите что-нибудь'} status={"error"}/>
                <InputGipno placeholder={'Введите что-нибудь'} status={"warning"}/>
                <SelectGipno/>
            </div>

            <div >Цветовая палитра</div>
            <div className="palitra">
                <ColorGipno name={"#444656"} defaultValue={"#444656"}/>
                <ColorGipno name={"#F5F6F8"} defaultValue={"#F5F6F8"}/>
                <ColorGipno name={"#EBECF0"} defaultValue={"#EBECF0"}/>
                <ColorGipno name={"#BCBFC6"} defaultValue={"#BCBFC6"}/>
                <ColorGipno name={"#84879B"} defaultValue={"#84879B"}/>
                <ColorGipno name={"#F9D450"} defaultValue={"#F9D450"}/>
                <ColorGipno name={"#E74646"} defaultValue={"#E74646"}/>
                <ColorGipno name={"#4B51EA"} defaultValue={"#4B51EA"}/>
                <ColorGipno name={"#73C46C"} defaultValue={"#73C46C"}/>
                <ColorGipno name={"#F3A575"} defaultValue={"#F3A575"}/>
                <ColorGipno name={"#0D1C32"} defaultValue={"#0D1C32"}/>
                <ColorGipno name={"#9747FF"} defaultValue={"#9747FF"}/>
            </div>

        </div>
    );
}

export default App;
