const Part = (props) => {
    return (
        <p>
        {props.part} {props.exercises}
      </p>
    );
}

const Content = (props) => {
    const data = props.parts;
    return (
        <div>
        <Part part={data[0].name} exercises={data[0].exercises} />
        <Part part={data[1].name} exercises={data[1].exercises} />
        <Part part={data[2].name} exercises={data[2].exercises} />
      </div>
    );
}

export default Content;