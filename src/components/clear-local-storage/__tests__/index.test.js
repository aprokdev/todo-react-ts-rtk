import { setupStore } from '@app-state/store';
import React from 'react';
import { Provider } from 'react-redux';
import { act, create } from 'react-test-renderer';
import ClearLocalStorage from '../index';

const store = setupStore();

function Test() {
    return (
        <Provider store={store}>
            <ClearLocalStorage />
        </Provider>
    );
}

describe('Sorting', () => {
    test('matches snapshot', () => {
        let tree;
        act(() => {
            tree = create(<Test />);
        });
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
