import React, { useEffect } from 'react';
import { useState } from 'react';
import './Clock.css';

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
            <div className="container">
                <div className="digit digit-12">12</div>
                <div className="digit digit-3">3</div>
                <div className="digit digit-6">6</div>
                <div className="digit digit-9">9</div>

                <div className="hand" style={{ transform: 'rotate(' + hourAngle + 'deg)' }}>
                    <div className="half-hand hour-hand" />
                </div>
                <div className="hand" style={{ transform: 'rotate(' + minuteAngle + 'deg)' }}>
                    <div className="half-hand minute-hand" />
                </div>
                <div className="hand" style={{ transform: 'rotate(' + secondAngle + 'deg)' }}>
                    <div className="half-hand second-hand" />
                </div>
            </div>
        </div>
    );
};
