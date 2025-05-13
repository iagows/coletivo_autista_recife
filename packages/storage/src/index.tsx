import type { PropsWithChildren, ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./stores/index";
import { EnvVar } from "./util";

type Props = {
	loading: ReactNode;
};
export const ColetivoStore = ({
	children,
	loading,
}: PropsWithChildren<Props>) => (
	<Provider store={store}>
		<PersistGate loading={loading} persistor={persistor}>
			{children}
		</PersistGate>
	</Provider>
);
