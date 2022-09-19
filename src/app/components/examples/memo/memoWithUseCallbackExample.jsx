import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });

    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            knopka
        </button>
    );
};
LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};
const Memoized = React.memo(LogOutButton);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);
    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                rerender
            </button>
            <Memoized onLogOut={handleLogOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;
