const Total = (props) => {
    const total = props.total.reduce((sum, part) => sum + part.exercises, 0);
    return (
        <footer>Number of exercises {total}</footer>
    )
}


export default Total;