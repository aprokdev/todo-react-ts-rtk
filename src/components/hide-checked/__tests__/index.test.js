import React from 'react';
import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
// import { act, create } from 'react-test-renderer';
import { store } from '~app-state/store';
import HideChecked from '../index';

const { act, create } = TestRenderer;

function Test() {
    return (
        <Provider store={store}>
            <HideChecked />
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
