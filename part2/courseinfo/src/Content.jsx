const Part = (props) => {
    return (
        <p>
        {props.part} {props.exercises}
      </p>
    );
}

const Content = ({ parts }) => {
    return (
        <div>
          {
            parts.map((part) => {
              return <Part key={part.id} part={part.name} exercises={part.exercises} />
          })
        }
      </div>
    );
}

export default Content;