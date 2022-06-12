import { useState, useEffect } from "react";

function getData(key: string, defaultValue: any) {
    // getting stored value
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved == null ? "{}" : saved);
    return initial || defaultValue;
}

const UseDataHooks = (key: string, defaultValue: any) => {
    const [value, setValue] = useState(() => {
        return getData(key, defaultValue);
    });

    useEffect(() => {
        // storing input name
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

export default UseDataHooks;