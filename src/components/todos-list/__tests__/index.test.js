import React from 'react';
import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
// import { act, create } from 'react-test-renderer';
import { store } from '~app-state/store';
import TodosList from '../index';

const { act, create } = TestRenderer;

function TestTodosList() {
    return (
        <Provider store={store}>
            <TodosList />
        </Provider>
    );
}

describe('TodosList', () => {
    test('matches snapshot', () => {
        let tree;
        act(() => {
            tree = create(<TestTodosList />);
        });
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
