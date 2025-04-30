import type { PropsWithChildren, ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./stores/index";

type Props = {
	loading: ReactNode;
};
export const ColetivoStore = ({
	children,
	loading,
}: PropsWithChildren<Props>) => {
	return (
		<Provider store={store}>
			<PersistGate loading={loading} persistor={persistor}>
				{children}
			</PersistGate>
		</Provider>
	);
};
