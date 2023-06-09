/* eslint-disable no-extra-boolean-cast */
import { addTodo } from '@app-state/todos/todosSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@ui/button';
import Input from '@ui/input';
import './style.scss';

function CreateTodo() {
    const dispatch = useDispatch();
    const [text, updateText] = React.useState<string>('');

    const createTodo = React.useCallback(
        (event: React.MouseEvent<HTMLInputElement>) => {
            event.preventDefault();
            if (text) {
                dispatch(addTodo({ text }));
            }
            updateText('');
        },
        [text, dispatch]
    );

    const onChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            updateText(event.target.value);
        },
        [updateText]
    );

    return (
        <form className="create-todo">
            <Input
                placeholder="Write new task here..."
                value={text}
                onChange={onChange}
                id="new-todo-input"
                testId="todo-input"
            />
            <Button type="submit" onClick={createTodo} disabled={!text} testId="todo-create-btn">
                Add
            </Button>
        </form>
    );
}

// export default CreateTodo;
export default React.memo(CreateTodo);
