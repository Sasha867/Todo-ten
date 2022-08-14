import React, { useState } from "react";
import { UserInput } from '../../components/user-input';
import { TodoList } from '../../components/todo-list';
import { TodoFilter } from '../../components/todo-filter';
import styles from './index.module.css';

export const TodoPage = () => {
    const [todos, setTodos] = useState([]);

    const todoAdd = (todoText) => {
        const todo = {
            todoText,
            done: false,
            id: Math.random().toString()
        };
      
        setTodos((todos) => [...todos, todo]);
    };

    const todoStatusSwitch = (todoIdToChange) => {
        const changedTodos = todos.map(({id, done, ...todo}) => ({
            ...todo,
            id,
            done: id === todoIdToChange ? !done : done
        }));
        setTodos(changedTodos);
    };

    return (
    <div className={styles.wrapper}>
        <div className={styles.leftSide}>
            <UserInput onTodoAdd={todoAdd} />
        </div>
        <div className={styles.rightSide}>
            <TodoFilter/>
            <TodoList 
                todos={todos}
                onTodoStatusChange={todoStatusSwitch}
            />           
        </div>       
    </div>
    )
};