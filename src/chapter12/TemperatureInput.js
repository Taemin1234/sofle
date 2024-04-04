const scaleNames = {
    c: '섭씨',
    f: '화씨'
};

function TemperatureInput(props) {
    const handleChange = (e) => {
        // 3. 변경된 값이 onTemperatureChange 함수를 통해 상위 컴포넌트로 전달된다.
        props.onTemperatureChange(e.target.value);
    };

    return (
        <fieldset>
            <legend>
                온도를 입력해 주세요(단위:{scaleNames[props.scale]})
            </legend>
            {/* 1. 온도를 입력하면 handleChange함수로 전달한다. */}
            {/* 2. 현재 값을 temperature에 전달한다. */}
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    );
}


export default TemperatureInput;

