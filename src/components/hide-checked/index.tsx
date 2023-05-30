import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHideCompleted } from '~app-state/hideCompleted/hideCompletedSlice';
import { RootState } from '~app-state/store';
import Checkbox from '~ui/checkbox';
import Label from '~ui/label';
import './style.scss';

function HideChecked() {
    const isCompletedHidden = useSelector((state: RootState) => state.hideCompleted);
    const dispatch = useDispatch();
    return (
        <div className="hide-checked">
            <Checkbox
                checked={isCompletedHidden}
                onChange={(e) => dispatch(setHideCompleted({ checked: e.target.checked }))}
                id="#sort-checked"
                testId="sort-checked"
            />
            <Label htmlFor="#sort-checked">Hide completed</Label>
        </div>
    );
}

// export default HideChecked;
export default React.memo(HideChecked);
