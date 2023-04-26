type TasksType = {
    taskId: number
    title: string
    isDone: boolean
}

type TasksPropsType = {
    title: string
    tasks: Array<TasksType>
    students: string[]
}

export const Tasks = (props: TasksPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <ul>
                <li>
                    <input type="checkbox"/>
                    <span>{props.tasks[0].title}</span>
                </li>
                <li>
                    <input type="checkbox"/>
                    <span>{props.tasks[1].title}</span>
                </li>
            </ul>
            <div>
                {props.students}
            </div>
        </div>
    )

}