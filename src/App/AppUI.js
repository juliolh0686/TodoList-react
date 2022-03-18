import React from "react";
import { TodoContext } from "../TodoContext";
import {TodoCounter} from '../TodoCounter';
import { TodoSearch } from "../TodoSearch";
import {CreateTodoButton} from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { Modal } from "../Modal";

import { TodosError } from '../TodosError';
import { TodoLoading, TodosLoading } from '../TodoLoading';
import { EmptyTodos } from '../EmptyTodos';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    openModal,
    setOpenModal,
    DeleteTodo} = React.useContext(TodoContext);
    return(
        <React.Fragment>
        <div className="container">
          <h1>My to do list</h1>
        <TodoSearch/>
          <TodoList>
            {error && <TodosError error={error} /> }
            {loading && <TodoLoading />}
            {(!loading && !searchedTodos.length) && <EmptyTodos /> }
  
            { searchedTodos.map(todo => (
              <TodoItem
              key={todo.text}
              text= {todo.text}
              completed= {todo.completed}
              onComplete = { () => completeTodo(todo.text)}
              onDelete = { () => DeleteTodo(todo.text)}
              />
            )) }
            <TodoCounter/>
          </TodoList>
          {!!openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}
        <CreateTodoButton
          setOpenModal={setOpenModal}
        />
        </div>
    </React.Fragment>
    );
}

export {AppUI};