// built-ins
import { useDispatch, useSelector } from 'react-redux';

// types
import type { Dispatch } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import type { StateType } from './index';
import type { RootActionType } from './rootActions';

export type DispatchType = Dispatch<RootActionType>;
export type SelectorType = TypedUseSelectorHook<StateType>;

export const useAppDispatch = () => useDispatch<DispatchType>();
export const useAppSelector = useSelector as SelectorType;
