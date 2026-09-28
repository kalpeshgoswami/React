const ListTodo = ({ todos, handleDelete, handleEdit }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Task</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {todos.map((t, index) => (
                    <tr key={t.id}>
                        <td>{index + 1}</td>
                        <td>{t.Task}</td>
                        <td>{t.Description}</td>

                        <td>
                            <button onClick={() => handleEdit(t.id)}>
                                Edit
                            </button>

                            <button onClick={() => handleDelete(t.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ListTodo;