// ================== just FrontEnd ==================
function App() {
    const fetchData = () => {};
    
    return (
        <div>
            <button onClick={fetchData}>取得資料</button>
        </div>
    )
}

// ================== using axios ==================
import axios from 'axios';

function App() {
    const fetchData = () => {
        axios.get('https://bsb.kh.edu.tw/afterschool/opendata/afterschool_json.jsp?city=70')
            .then((res) => {
                console.log(res.data);
                setSchools(res.data.slice(0, 10));
            });
    };
    
    return (
        <div>
            <button onClick={fetchData}>取得資料</button>
        </div>
    )
}

// ================== useEffect autorun ==================
function App() {
    const [schools, setSchools] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('https://bsb.kh.edu.tw/afterschool/opendata/afterschool_json.jsp?city=70')
            .then((res) => {
                console.log(res.data);
                setSchools(res.data.slice(0, 10));
            });
    };
    
    return (
        <div>
            {/* <button onClick={fetchData}>取得資料</button> */}
            <ul>
                { schools.map(s => (
                    <li>{s['短期補習班類別']} - {s['短期補習班名稱']}</li>
                )) }
            </ul>
        </div>
    )
}

// ================== with Loading ==================

import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [schools, setSchools] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('https://bsb.kh.edu.tw/afterschool/opendata/afterschool_json.jsp?city=70')
            .then((res) => {
                console.log(res.data);
                setSchools(res.data.slice(0, 10));
            });
    };
    
    return (
        <div>
            {/* <button onClick={fetchData}>取得資料</button> */}
            <ul>
                { schools.length ? (
                    schools.map(s => (
                        <li>{s['短期補習班類別']} - {s['短期補習班名稱']}</li>
                    ))
                ) : ( <div>Loading...</div> ) }
            </ul>
        </div>
    )
}