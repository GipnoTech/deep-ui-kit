import React from 'react';
import styled, { keyframes } from 'styled-components';

interface SpinnerProps {
    width?: number;
    height?: number;
    color?: string;
  }

const rotateAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div<{width: number; height: number; color: string}>`
    width: ${props => props.width + 'px'};
    height: ${props => props.width + 'px'};
    border: ${props => props.height + 'px'} solid #f1f1f1;
    border-top: ${props => props.height + 'px'} solid ${props => props.color};
    border-radius: 50%;
    animation: ${rotateAnimation} 1s linear infinite;
`;

export function SpinnerGipno (props: SpinnerProps) {
    let {width = 40, height = 4, color = "#4B51EA"} = props;

    return (
        <Spinner width={width} height={height} color={color}/>
    );
}