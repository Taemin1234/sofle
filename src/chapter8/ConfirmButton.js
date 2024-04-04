import React, { useState } from "react";

function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        // 이전 상태값을 참조하여 반전시킨다.
        // prevIsConfirmed은 isConfirmed값과 같다
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
            <button onClick={handleConfirm} disabled={isConfirmed}>
                {isConfirmed ? '확인됨' : '확인하기'}
            </button>
    )
}

export default ConfirmButton;
