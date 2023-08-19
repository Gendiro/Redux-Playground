import { useSelector } from "react-redux";
import type { AppDispatch } from "../store";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { RootState } from "../store/reducers";

export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
