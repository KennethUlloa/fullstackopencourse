const Part = (props) => {
    return (
        <p>
        {props.part} {props.exercises}
      </p>
    );
}

const Content = (props) => {
    const data = props.data;
    return (
        <div>
        <Part part={data[0].part} exercises={data[0].exercises} />
        <Part part={data[1].part} exercises={data[1].exercises} />
        <Part part={data[2].part} exercises={data[2].exercises} />
      </div>
    );
}

export default Content;