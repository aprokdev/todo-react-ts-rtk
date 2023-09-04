/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { clearLocalStorage } from '@app-state/isSavedTodos/isSavedTodosSlice';
import { RootState } from '@app-state/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@ui/button';
import './style.scss';

function ClearLocalStorage() {
    const isSavedTodos = useSelector((state: RootState) => state.isSavedTodos);
    const dispatch = useDispatch();

    return (
        <div className="clear-local-storage">
            {isSavedTodos && (
                <Button
                    type="submit"
                    onClick={() => dispatch(clearLocalStorage())}
                    disabled={false}
                    className="clear-local-storage__btn"
                    testId="clear-local-storage"
                >
                    Clear <span className="clear-local-storage__desktop">Local Storage</span>{' '}
                    <span className="clear-local-storage__mobile">LS</span>
                </Button>
            )}
        </div>
    );
}

// export default ClearLocalStorage;
export default React.memo(ClearLocalStorage);
