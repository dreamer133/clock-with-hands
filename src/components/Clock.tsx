import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';


const ContainerDiv = styled.div`
    display: block; 
    position: relative; 
    width: 800px; 
    height: 400px; 
    border: #c2c2c2 2px solid;
    background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c); 
    border-radius: 150px;        
`;

const Digit = styled.div`
    display: 'block'; 
    position: absolute;     
    font-weight: bold; 
    font-size:28px; 
    color: #010c03;    
`;

const Digit12 = styled(Digit)`
    top: 0; 
    left: 400px; 
`;

const Digit3 = styled(Digit)`
    top: 180px; 
    right: 0px; 
`;

const Digit6 = styled(Digit)`
    bottom: 0; 
    left: 400px; 
`;

const Digit9 = styled(Digit)`
    top: 180px; 
    left: 0px; 
`;

const Hand = styled.div`
    position: absolute; 
    top: 0px; 
    left: 400px;     
    height: 400px;    
`;

const HalfHand = styled.div`
    display: block;
    width: 100%; 
    height: 50%; 
    background: red;
`;

export default function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => tick(), 1000);
    }, [])

    function tick() {
        setDate(new Date());
    }

    const hourAngle = parseInt((360 / (12 * 60) * (date.getHours() * 60 + date.getMinutes())).toString());
    const minuteAngle = parseInt((360 / 60 * date.getMinutes()).toString());
    const secondAngle = parseInt((360 / 60 * date.getSeconds()).toString());

    return (
        <div>
            <h1>{date.toLocaleTimeString()}</h1>
            <ContainerDiv>
                <Digit12>12</Digit12>
                <Digit3>3</Digit3>
                <Digit6>6</Digit6>
                <Digit9>9</Digit9>

                <Hand style={{ transform: 'rotate(' + hourAngle + 'deg)' }}>
                    <HalfHand style={{ width: '6px', background: 'purple',  }} />
                    {/* , borderTop: 'magenta 30px solid', borderRadius: '3px' */}
                </Hand>
                <Hand style={{ transform: 'rotate(' + minuteAngle + 'deg)' }}>
                    <HalfHand style={{ width: '3px', background: 'green' }} />
                </Hand>
                <Hand style={{ transform: 'rotate(' + secondAngle + 'deg)' }}>
                    <HalfHand style={{ width: '1px', background: 'red' }} />
                </Hand>
            </ContainerDiv>
        </div>
    );
};
