import { useEffect, useState } from 'react';
const getNowDate = (timeNow) => {
    const hours = `0${timeNow.getHours()}`.slice(-2);
    const minutes = `0${timeNow.getMinutes()}`.slice(-2);
    const seconds = `0${timeNow.getSeconds()}`.slice(-2);
    return `${hours}:${minutes}:${seconds}` 
}

function useClock(props) {
    const [timeString, setTimeString] = useState();
    useEffect(() => {
        console.log("text");
        const setTimeInterval = setInterval(() => {
            const now = new Date();
            const getTime = getNowDate(now); 
            setTimeString(getTime);
        }, 1000);
        return (()=>{
            clearInterval(setTimeInterval);
        })
    },[])
    // useEffect(() => {
    //     console.log('mounted');
    // });
    return {timeString};
}

export default useClock;