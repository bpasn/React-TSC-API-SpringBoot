import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, AppDispatch2, RootState, } from './store';
import { Dispatch } from 'redux';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppDispatch2 = () => useDispatch<Dispatch<{ type: "SHOW" | "HIDE", payload: IError }>>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;



