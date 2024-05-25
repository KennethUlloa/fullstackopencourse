const Stat = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}


const Statistics = ({good, neutral, bad, all, average, positive}) => {
    if (all === 0) {
        return (
            <div>
                <h2>Statistics</h2>
                <p>No feedback given</p>
            </div>
        )
    }
    return (
        <div>
            <h2>Statistics</h2>
            <table>
                <tbody>
                    <Stat text="good" value={good}/>
                    <Stat text="neutral" value={neutral}/>
                    <Stat text="bad" value={bad}/>
                    <Stat text="all" value={all}/>
                    <Stat text="average" value={average}/>
                    <Stat text="positive" value={`${positive} %`}/>
                </tbody>
            </table>
        </div>
    )
}



export default Statistics;