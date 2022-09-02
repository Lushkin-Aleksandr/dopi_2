import React, {useEffect, useState} from 'react';
import './App.css';
import Button from "./universalComponents/Button";

type DataType = {
    body: string
    id: number
    title: string
    userId: number
}

function App() {

    const [data, setData] = useState<DataType[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])

    const getMeData = () => {
        setData([])
        console.log('Cleaned')
    }

    const posts = data.map(p => {
        return <li key={p.id}>{p.title}</li>
    })

    return (
        <div className="App">
            <Button name={'Clean data'} callback={getMeData}/>
            <ul>
                {posts}
            </ul>

        </div>
    )
}

export default App;
