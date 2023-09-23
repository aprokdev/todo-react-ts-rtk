/* eslint-disable jsx-a11y/no-autofocus */
import { checkTodo, deleteTodo, editTodo } from '@app-state/todos/todosSlice';
import PropTypes from 'prop-types';
import React, { MouseEvent } from 'react';
import { useInView } from 'react-intersection-observer';
import 'react-intersection-observer/test-utils';
import { ITodo } from '@src/app-state/todos/todosSlice';
import Checkbox from '@ui/checkbox';
import Label from '@ui/label';
import TextareaAutosize from '@ui/textarea-autosize';
import './style.scss';
import { ITodoProps } from './types';

function TodoItem({ todo, dispatch, testId }: ITodoProps): JSX.Element {
    const { id, label, isCompleted, created }: ITodo = todo;
    const [editing, setEditing] = React.useState(false);
    const [value, setValue] = React.useState(label);

    const { ref, inView } = useInView({
        threshold: 0.005,
    });
    const flagRef = React.useRef<boolean>(false);
    let changableClasses = 'todo-item--invisible';
    // if (inView || flagRef.current) {
    //     changableClasses = 'todo-item--visible';
    //     flagRef.current = true;
    // }
    if (inView) {
        changableClasses = 'todo-item--visible';
        flagRef.current = true;
    }

    const onBlurInput = React.useCallback(() => {
        // dispatch({ type: actionTypes.EDIT_TODO, text: value, id });
        dispatch(editTodo({ id, text: value }));
        setEditing(false);
    }, [id, value, setEditing, dispatch]);

    const date = React.useMemo(() => {
        const date = new Date(created);
        return date.toLocaleDateString('en-EN', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
    }, [created]);

    const onEditClick = React.useCallback(
        (event: MouseEvent): void => {
            event.preventDefault();
            setEditing(true);
        },
        [setEditing]
    );

    return (
        <div className={`todo-item ${changableClasses}`} data-testid={testId} ref={ref}>
            <div className="todo-item__check-group">
                <Checkbox
                    checked={isCompleted}
                    onChange={({ target }) => dispatch(checkTodo({ id, checked: target.checked }))}
                    id={String(id)}
                    testId={`${label}-cb`}
                />
                {editing ? (
                    <TextareaAutosize
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onBlur={onBlurInput}
                        id={String(id)}
                        className="todo-item__input"
                        autoFocus
                        data-testid={`${label}-edit-field`}
                    />
                ) : (
                    <Label htmlFor={String(id)} testId={`${label}-label`}>
                        {label}
                    </Label>
                )}
            </div>
            <span className="todo-item__created">{date}</span>
            <button
                type="button"
                onClick={onEditClick}
                disabled={false}
                className="todo-item__action-btn"
                data-testid={`${label}-edit`}
            >
                Edit
            </button>
            <span className="todo-item__separator">/</span>
            <button
                type="button"
                onClick={() => dispatch(deleteTodo({ id }))}
                disabled={false}
                className="todo-item__action-btn"
                data-testid={`${label}-delete`}
            >
                Delete
            </button>
        </div>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        isCompleted: PropTypes.bool,
        created: PropTypes.number,
    }),
    dispatch: PropTypes.func,
    testId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

// export default TodoItem;
export default React.memo(TodoItem);
