import { Provider as ReduxProvider } from "react-redux";
import store from "../../init/store/store";
import { ReactNode } from "react";

export default function HasReduxStore({ children }: { children: ReactNode }) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>
}
