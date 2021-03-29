import data from './1999.json';

function App() {
    return (
        <div>
            <ul>
                { data.map(d => <li>{d.ZipName_} - {d.StatusName_}</li>) }
            </ul>
        </div>
    )
}

export default App;