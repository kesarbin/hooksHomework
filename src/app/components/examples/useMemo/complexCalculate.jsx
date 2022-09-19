import React, { useState, useEffect, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    console.log("render factorial " + n);
    return n ? n * factorial(n - 1) : 1;
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(10);
    const [otherState, setOtherState] = useState(false);
    const buttonColor = otherState ? "primary" : "secondary";
    useEffect(() => {
        console.log("render");
    });

    const fact = useMemo(() => factorial(value), [value]);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value: {value}</p>
                <p>Result: {fact}</p>
                <button onClick={() => setValue((prevState) => prevState + 1)}>
                    +
                </button>
                <button onClick={() => setValue((prevState) => prevState - 1)}>
                    -
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={"btn btn-" + buttonColor}
                    onClick={() => {
                        setOtherState((prevState) => !prevState);
                    }}
                >
                    flip
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
