import React from "react";
import { Todo } from "../model";
import styles from "./styles.module.css";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

interface props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  CompletedTodos: Array<Todo>;
}

const TodoList: React.FC<props> = ({
  todos,
  setTodos,
  CompletedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className={styles.container}>
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`${styles.todos} ${
              snapshot.isDraggingOver ? `${styles.dragactive}` : ``
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className={styles.todos__heading}>Active Tasks</span>
            {todos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todos={todos}
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`${styles.todos}  ${
              snapshot.isDraggingOver
                ? `${styles.dragcomplete}`
                : `${styles.remove}`
            }`}
          >
            <span className={styles.todos__heading}>Completed Tasks</span>
            {CompletedTodos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todos={CompletedTodos}
                todo={todo}
                key={todo.id}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
