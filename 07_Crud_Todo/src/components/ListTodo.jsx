
const ListTodo = ({ todos, handleDelete, handleEdit }) => {

    return (
        <>

            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Task</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((t, index) => {
                        return (
                            <tr key={t.id}>
                                <td>{index + 1}</td>
                                <td>{t.Task}</td>
                                <td>{t.Description}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </>
    )

}

export default ListTodo