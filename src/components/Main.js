import React, { Component } from 'react';


import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Slider from './Slider';

const Repair = styled.div`
	color:  #fff;
	font-size: 40px;
	font-weight: 700;
	line-height: 50px;

	span{
		font-size: 24px;
		display: block;
		line-height: 30px;
	}
`
const LineText = styled.div`
	color:  #ffffff;
	font-size: 18px;
	font-weight: 300;
	line-height: 28px;
	margin-top: 54px;
`

const CallBtn = styled.button`
	border-radius: 32px;
	background-color: #ffa14b;
	width: 245px;
	height: 64px;
	color:  #ffffff;
	font-size: 18px;
	font-weight: 400;
	line-height: 24px;
	margin-top: 32px;
`
class Main extends React.Component{

	render(){
		return (
			<Row>
				<Col lg={5}>
					<Repair>
						Качественный ремонт
						<span>iphone за 35 минут и гарантия 1 год</span>
					</Repair>
					<LineText>
						Оставьте заявку на бесплатную диагностику без очереди,
						и получите защитное стекло, стоимостью 1000 рублей,
						с установкой в подарок!
					</LineText>
					<CallBtn>Отправить заявку!</CallBtn>
				</Col>
				<Col lg={6} lgOffset={1}>
					<Slider />
				</Col>
			</Row>
			)
	}
}

export default Main;