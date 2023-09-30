import React from "react";
import styles from "./styles.module.css";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
// import React from "react";

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className={styles.container}>
      <div className={styles.todos}>
        <span className={styles.todos__heading}>Active Tasks</span>
        {todos.map((todo) => (
          <SingleTodo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
      <div className={`${styles.todos} ${styles.remove}`}>
        <span className={styles.todos__heading}>Completed Tasks</span>

        {todos.map((todo) => (
          <SingleTodo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
