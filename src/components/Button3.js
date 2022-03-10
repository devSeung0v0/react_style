import React from 'react';
import styled from 'styled-components';

const ButtonBox = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  color: #666;
  cursor: pointer;
  padding: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  background: 'skyblue';
  &:hover{
    background: 'steelblue'
  };
  color: ${props => props.color || '#000'};
`

const Button3 = ({chlidren,...rest}) => {
  
  return <ButtonBox {...rest}>{ chlidren }</ButtonBox>

};

export default Button3;