import * as React from 'react';
import { useSelector } from 'react-redux';
import ClearLocalStorage from '@components/clear-local-storage';
import CreateTodo from '@components/create-todo';
import HideChecked from '@components/hide-checked';
import Sorting from '@components/sorting';
import TodosList from '@components/todos-list';
import icon from '@img/icon.svg';
import reduxLogo from '@img/redux.svg';
import { RootState } from './app-state/store';
import './app.scss';

function App() {
    const listTodos = useSelector((state: RootState) => state.todos);

    return (
        <div className="app">
            <div className="app__head">
                <h1 className="app__title">Todo List</h1>
                <a
                    href="https://www.typescriptlang.org/"
                    className="app__link"
                    target="__blank"
                    rel="noreferer noopener"
                >
                    <img src={icon} alt="" className="app__head-img" />
                </a>
                <a
                    href="https://redux-toolkit.js.org/"
                    className="app__link"
                    target="__blank"
                    rel="noreferer noopener"
                >
                    <img src={reduxLogo} alt="" className="app__head-img" />
                </a>
            </div>
            <CreateTodo />
            {listTodos.length > 0 && <Sorting />}
            <TodosList />
            <div className="app__bottom">
                {Array.isArray(listTodos) &&
                    listTodos.length > 0 &&
                    listTodos.find(({ isCompleted }) => isCompleted) && <HideChecked />}
                <ClearLocalStorage />
            </div>
        </div>
    );
}

export default App;
