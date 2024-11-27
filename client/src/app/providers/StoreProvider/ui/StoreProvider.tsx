import {ReactNode} from "react";

import {Provider} from "react-redux";

import {store} from "../config/store.ts";

interface StoreProviderProps {
    children: ReactNode
}

export const StoreProvider = (props: StoreProviderProps) =>
    <Provider store={store}>{props.children}</Provider>