import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from '../../global/constants.js'
import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

// const app = {
//     color: 'red'
// }

//async + await: packed Promise
async function fetchData(setData) {
    const res = await fetch(API_GET_DATA)
    const { data } = await res.json()
    setData(data)
}

async function fetchSetData(data) {
    await fetch(API_GET_DATA, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ data })
    })
}

const Home = () => {
    //    return <div style={app}>
    // let a = 11;
    // const [a, setA] = useState(11);
    // function plus() {
    //     console.log('test');
    //     // a = a + 11;
    //     setA(function (prev) {
    //         return prev + 11;
    //     });
    // }
    const [data, setData] = useState([]);
    const submittingStatus = useRef(false);

    useEffect(() => {
        if (!submittingStatus.current) {
            return
        }
        fetchSetData(data).then(data => submittingStatus.current = false)
    }, [data])

    useEffect(() => {
        fetchData(setData)
    }, [])

    return (
        <div className="app">
            {/* {a}
        <button onClick={plus}>加法</button> */}
            <Edit add={setData} submittingStatus={submittingStatus} />
            <List listData={data} del={setData} submittingStatus={submittingStatus} />
        </div>
    );
};

export default Home;
