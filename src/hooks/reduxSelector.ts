
import { useDispatch, useSelector } from "react-redux"
import { TypedUseSelectorHook } from "react-redux"
import type { AppDispatch, IRootState } from "../init/store/store.ts"

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
