import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const ref = useRef();
    const handleClick = () => {
        console.log(ref.current);
        ref.current.focus();
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input type="email" ref={ref} className="form-control" id="email" />
            <button onClick={handleClick}>knopka</button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
