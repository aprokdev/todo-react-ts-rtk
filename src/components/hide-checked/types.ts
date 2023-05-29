import { IAction } from '~src/todo-context/types';

export interface IHideCheckedProps {
    isCompletedHidden: boolean;
    dispatch: React.Dispatch<IAction>;
}
