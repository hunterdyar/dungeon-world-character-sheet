import { useState, useEffect } from "react";

export function getData(key: string, defaultValue: any) {
    // getting stored value
    const saved = localStorage.getItem(key);

    if(saved === "{}"){
        return defaultValue;
    }

    const initial = JSON.parse(saved == null ? "{}" : saved);
    if(initial === {}){
        return defaultValue;
    }
    return initial;
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