/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    sortByAlphabet,
    sortByAlphabetReverse,
    sortByDate,
} from '~app-state/sortingTitle/sortingTitleSlice';
import { RootState } from '~app-state/store';
import { sortingText } from '~todo-context/reducer';
import './style.scss';

function Sorting() {
    const sortingTitle = useSelector((state: RootState) => state.sortingTitle);
    const dispatch = useDispatch();
    const onHeaderlickHeader = React.useCallback(() => {
        if (sortingTitle === sortingText.CREATION_DATE) {
            dispatch(sortByAlphabet());
        }
        if (sortingTitle === sortingText.ALPHABET) {
            dispatch(sortByAlphabetReverse());
        }
        if (sortingTitle === sortingText.ALPHABET_REVERSE) {
            dispatch(sortByDate());
        }
    }, [dispatch, sortingTitle]);

    const headerRef = React.useRef(null);

    const onKeyDown = React.useCallback((event: React.KeyboardEvent<HTMLHeadElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            headerRef.current.click();
        }
    }, []);

    return (
        <div className="sorting">
            <h3
                className="sorting__title"
                onClick={onHeaderlickHeader}
                tabIndex={0}
                ref={headerRef}
                onKeyDown={onKeyDown}
            >
                ✨ Sort tasks by: {sortingTitle}
            </h3>
        </div>
    );
}

// export default Sorting;
export default React.memo(Sorting);
