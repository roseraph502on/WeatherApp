import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const WeatherButton = () => {
  return (
    <div className="btncon">
    <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="me-2" aria-label="First group">
            <Button variant="light">현재 위치</Button>
        </ButtonGroup>
        <ButtonGroup className="me-2" aria-label="Second group">
                <Button variant="light">부산</Button>
                <Button variant="light">뉴욕</Button>
                <Button variant="light">런던</Button>
                <Button variant="light">시드니</Button>
        </ButtonGroup>      
    </ButtonToolbar>
    </div>
  );
}

export default WeatherButton
