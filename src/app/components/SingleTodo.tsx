import React from "react";
import styles from "./styles.module.css";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import TodoList from "./TodoList";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function SingleTodo({ todo, todos, setTodos }: Props) {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <form className={styles.todos__single}>
      {todo.isDone ? (
        <s className={styles.todos__singleText}>{todo.todo}</s>
      ) : (
        <span className={styles.todos__singleText}>{todo.todo}</span>
      )}
      <div>
        <span className={styles.icon}>
          <AiFillEdit />
        </span>
        <span className={styles.icon} onClick={() => handleDone(todo.id)}>
          <AiFillDelete />
        </span>
        <span className={styles.icon} onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
}

export default SingleTodo;
