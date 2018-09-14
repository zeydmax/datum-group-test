import React from 'react';
import {Container, Row, Col, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import park from '../assets/park.JPG';

const info = [
    {
        "class": "mt-5 py-3 text-center bg-light",
        "imgSrc": "https://material.io/tools/icons/static/icons/baseline-library_books-24px.svg",
        "text": "На территории парка расположены учебные корпуса университета, студенческие общежития, спортивные площадки и манеж. Центральные аллеи заасфальтированы и в ночное время освещены. Прогуливаясь по парку можно увидеть много голубей, воробьев и других 'городских' птиц около специально оборудованных кормушек. На деревьях также можно увидеть пушистых белок.",
        "id": 1
    },
    {
        "class": "mt-5 py-3 text-center",
        "imgSrc": "https://material.io/tools/icons/static/icons/baseline-spa-24px.svg",
        "text": "Парк не имеет четких границ и неогорожен, но зато достаточно ухожен: вдоль центральных аллей установлены урны и скамеечки, деревья и кустарники подстрижены. Около учебных корпусов можно увидеть красивые клумбы с элементами ландшафтного дизайна. Средний возраст деревьев составляет около 35 лет, поэтому в летнюю городскую жару можно укрыться в тени парка. А для малышей есть детская площадка с турниками и шведской стенкой.",
        "id": 2
    },
    {
        "class": "mt-5 py-3 text-center bg-light",
        "imgSrc": "https://material.io/tools/icons/static/icons/baseline-fitness_center-24px.svg",
        "text": "На территории парка расположено большое футбольное поле с земляным покрытием и маленькая хорошо оборудованная спортплощадка университета. В теплое время года в парке со студентами проводятся занятия по физкультуре и геодезии.",
        "id": 3
    }];


const Landing = () => {

    const topRow = 
    <Row>
        <Col className='mt-4' sm={{ size: 'auto', offset: 1 }}>
            <h1>Студенческий парк<br /> ДГТУ</h1>
            <p className='mt-3'>
            Обширная зеленая зона для отдыха<br /> 
            в центре города Ростова-на-Дону.
            </p>
            <NavLink 
            style={{ 
                textDecoration: 'none',
                color: 'white' }} 
            exact to="/map">
                <Button className='mt-3' color="info">Найти на карте</Button>
            </NavLink>
        </Col>
        <Col 
        sm={{ 
            size: 'auto', 
            offset: 1 }}>
            <img 
                alt='' 
                className='rounded border border-info img-thumbnail' 
                src={park} 
                height='270px' 
                width='400px'/>
        </Col>
    </Row>;

    const botCols = info.map(column => (
        <Col key={column.id} className={column.class}>
            <img alt='' className='mx-auto d-block' src={column.imgSrc}/>
            {column.text}
        </Col>
    ))
    
    
        return (
            <React.Fragment>
            <main>
                <Container className='mt-5'>
                    {topRow}
                    <Row className='mt-5'>
                        {botCols}
                    </Row>
                </Container>
            </main>
            </React.Fragment>
        )
}

export default Landing;