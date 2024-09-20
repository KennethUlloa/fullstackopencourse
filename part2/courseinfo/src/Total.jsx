const Total = ({ parts }) => {
    const totalCourses = parts.reduce((sum, part) => sum + part.exercises, 0);
    return (
        <div><strong>Total of {totalCourses} exercises</strong></div>
    )
}


export default Total;