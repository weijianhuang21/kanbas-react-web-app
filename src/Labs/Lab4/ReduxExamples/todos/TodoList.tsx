import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
    const todos = useSelector((state: any) => state.todosReducer.todos);

    return (
        <div id="wd-todo-list-redux">
            <h2>Todo List</h2>
            <ul className="list-group">
                <TodoForm />
                {todos.map((qwe: any) => (
                    <TodoItem key={qwe.id} todo={qwe} />
                ))}
            </ul>
            <hr />
        </div>
    );
}
  