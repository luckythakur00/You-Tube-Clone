import { createContext, useEffect, useState } from "react";
import { fetchData } from "../Utils/Api";

export const GlobalContext = createContext(null);

export default function GloableState({ children }) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [value, setValue] = useState('New');
    const [sideBar, setSideBar] = useState(true);

    useEffect(() => {
        fetchAllData(value)
    }, [value])

    const fetchAllData = (query) => {
        setLoading(true)
        fetchData(`search/?q=${query}`).then((res) => {
            setData(res.contents);
            setLoading(false)
        })
    }

    // This one is for converting views and likes in form of K and M
    const viewCount = (view) => {
        if (view > 1000000) {
            return (view / 1000000).toFixed(1) + 'M'
        } else if (view > 1000) {
            return (view / 1000).toFixed(1) + 'K'
        } else {
            return view
        }
    }

    // This one is for converting time from seconds to min & hours.
    const convertTime = (time) => {
        const hours = Math.floor(time / 3600);
        const min = Math.floor((time % 3600) / 60);
        const sec = time % 60;

        const newhours = hours < 10 ? `0${hours}` : hours;
        const newmin = min < 10 ? `0${min}` : min;
        const newsec = sec < 10 ? `0${sec}` : sec;

        if (newhours > 0) {
            return (`${newhours}:${newmin}:${newsec}`);
        } else if (newmin > 0) {
            return (`${newmin}:${newsec}`);
        } else if (newsec == 0) {
            return (`00:${newsec}`);
        }

    }

    return <GlobalContext.Provider value={{
        loading, setLoading,
        data, setData,
        value, setValue,
        viewCount,
        sideBar, setSideBar,
        convertTime,
    }} >
        {children}
    </GlobalContext.Provider>
}