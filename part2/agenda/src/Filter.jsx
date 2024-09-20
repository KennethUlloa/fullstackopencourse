const Filter = ({ filter, setFilter }) => {
    function handleFilterChange(event) {
        console.log("filter ", event.target.value);
        setFilter(event.target.value);
    }
    
    return (
        <div>
        filter shown with <input value={filter} onChange={handleFilterChange} />
        </div>
    );
}

export default Filter;