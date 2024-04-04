import React, { useState } from 'react';
import TemperatureInput from './TemperatureInput';

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>;
}

function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

// 6-2. 내가 입력한 곳의 기준과 다른 곳일 때 값을 변환해주어야한다.
// 
function tryConvert(temperature, convert) {
    //문자를 실수로 변환
    const input = parseFloat(temperature);
    //숫자가 아님
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    // 소수점 세자리까지 반올림 (1000을 곱해 나머지 소수점자리는 반올림하고 다시 1000을 곱해준다.)
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator(props) {
    // 이 부분을 temperatureInput.js로 shared state 사용
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c');

    // 5-1. onTemperatureChange를 타고온 입력된 온도가 temperature로 업데이트 되고 scale을 설정해준다.
    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale('c');
    };

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale('f');
    };

    // 6-1. 5-1에서 설정한 scale과 비교하여 각 상황에 맞게 변환하거나 그대로 값을 보여준다.
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            {/* 4. scale을 주어 섭씨화씨를 구분지어준다. */}
            {/* 5. onTemperatureChange에서 받은 현재 온도를 handleCelsius/FahrenheitChange의 매개변수에 넣어준다. */}
            {/* 6. 현재 값을 temperature에 받아 인자로 넣어준다. */}
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
            {/* 7. celsius 값을 실수로 변환해 100도씨인지 확인 */}
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

export default Calculator;

