import React, { Component } from 'react';
import {Container, Row, Col, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import park from '../assets/park.JPG';
import book from '../assets/baseline-library_books-24px.svg';
import flower from '../assets/baseline-spa-24px.svg';
import sport from '../assets/baseline-fitness_center-24px.svg';


class Landing extends Component {

    state = {
        isOpen: false
      };

    render() {
        return (
            <React.Fragment>
            <main>
                <Container className='mt-5'>
                    <Row>
                        <Col className='mt-4' sm={{ size: 'auto', offset: 1 }}>
                            <h1>Студенческий парк<br /> ДГТУ</h1>
                            <p className='mt-3'>Обширная зеленая зона для отдыха<br /> 
                            в центре города Ростова-на-Дону.</p>
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} exact to="/map"><Button className='mt-3' color="info">Найти на карте</Button></NavLink>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 1 }}><img alt='' className='rounded  border border-info' src={park} height='270px' width='400px'/></Col>
                    </Row>
                    <Row className='mt-5'>
                        <Col className='mt-5 py-3 text-center bg-light'>
                            <img alt='' className='mx-auto d-block' src={book}/>
                            <p>На территории парка расположены учебные корпуса университета, студенческие общежития, спортивные площадки и манеж.<br />
                            Центральные аллеи заасфальтированы<br />
                            и в ночное время освещены.<br />
                            Прогуливаясь по парку можно увидеть много голубей, воробьев и других "городских" птиц около специально оборудованных кормушек. На деревьях также можно увидеть пушистых белок.
                            </p>
                        </Col>
                        <Col className='mt-5 py-3 text-center'>
                            <img alt='' className='mx-auto d-block' src={flower}/>
                            <p>Парк не имеет четких границ и неогорожен,<br />
                                но зато достаточно ухожен:<br />
                                вдоль центральных аллей установлены урны и скамеечки,
                                деревья и кустарники подстрижены. Около учебных корпусов можно увидеть красивые клумбы с элементами ландшафтного дизайна.<br />
                                Средний возраст деревьев составляет около 35 лет, поэтому в летнюю городскую жару можно укрыться в тени парка.<br />
                                А для малышей есть детская площадка с турниками и шведской стенкой.</p>
                        </Col>
                        <Col className='mt-5 py-3 text-center bg-light'>
                            <img alt='' className='mx-auto d-block' src={sport}/>
                            <p>На территории парка расположено большое футбольное поле с земляным покрытием и маленькая хорошо оборудованная спортплощадка университета.<br />
                                В теплое время года в парке со студентами проводятся занятия по физкультуре и геодезии.</p>
                        </Col>
                    </Row>
                </Container>
            </main>
            </React.Fragment>
        )
    }
}

export default Landing;