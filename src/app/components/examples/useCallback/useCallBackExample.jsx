import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const WOCallback = useRef(0);
    const WCallback = useRef(0);
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const validateWOCallback = (data) => {
        console.log(data);
    };
    const validateWCallback = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        validateWOCallback(data);
        validateWCallback(data);
    }, [data]);
    useEffect(() => {
        WOCallback.current++;
    }, [validateWOCallback]);
    useEffect(() => {
        WCallback.current++;
    }, [validateWCallback]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render: {WOCallback.current}</p>
            <p>Render: {WCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                name="email"
                value={data.email || ""}
                className="form-control"
                id="email"
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
