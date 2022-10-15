import './App.scss'
import { useEffect, useState } from 'react'
import Card from './components/card/Card'

const App = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('./data.json')
                const responseData = await response.json()
                setData(responseData)
            } catch (e) {
                console.error(e)
            }
        }
        fetchData()
    })

    return (
        <div className='layout'>
            {data.map((item, index) => (
                <Card key={index} data={item} />
            ))}
        </div>
    )
}

export default App
