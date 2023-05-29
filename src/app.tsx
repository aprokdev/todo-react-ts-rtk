import * as React from 'react';
import { useSelector } from 'react-redux';
import CreateTodo from '~components/create-todo';
import HideChecked from '~components/hide-checked';
import Sorting from '~components/sorting';
import TodosList from '~components/todos-list';
import icon from '~img/icon.svg';
import reduxLogo from '~img/redux-logo.png';
import { RootState } from './app-state/store';
import './app.scss';

function App() {
    const listTodos = useSelector((state: RootState) => state.todos);
    const app = useSelector((state: RootState) => state);

    React.useEffect(() => {
        localStorage.setItem('listTodos', JSON.stringify(app.todos));
        localStorage.setItem('sortingTitle', JSON.stringify(app.sortingTitle));
    }, [app]);

    return (
        <div className="app">
            <div className="app__head">
                <h1 className="app__title">Todo List</h1>
                <img src={icon} alt="" className="app__head-img" />
                <img
                    src={reduxLogo}
                    alt="Redux-logo.js"
                    title="Redux"
                    className="app__head-img app__head-img--redux"
                />
            </div>
            <CreateTodo />
            {listTodos.length > 0 && <Sorting />}
            <TodosList />
            {Array.isArray(listTodos) &&
                listTodos.length > 0 &&
                listTodos.find(({ isCompleted }) => isCompleted) && <HideChecked />}
        </div>
    );
}

export default App;
