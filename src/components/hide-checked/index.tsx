import { setHideCompleted } from '@app-state/hideCompleted/hideCompletedSlice';
import { RootState } from '@app-state/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '@ui/checkbox';
import Label from '@ui/label';
import './style.scss';
import { IHideCheckedProps } from './types';

function HideChecked({ disabled }: IHideCheckedProps) {
    const isCompletedHidden = useSelector((state: RootState) => state.hideCompleted);
    const dispatch = useDispatch();
    return (
        <div className="hide-checked">
            <Checkbox
                checked={isCompletedHidden}
                onChange={(e) => dispatch(setHideCompleted({ checked: e.target.checked }))}
                id="#sort-checked"
                testId="sort-checked"
                disabled={disabled}
            />
            <Label htmlFor="#sort-checked" disabled={disabled}>
                Hide completed
            </Label>
        </div>
    );
}

// export default HideChecked;
export default React.memo(HideChecked);
