import { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const lazyWithSuspense = (factory: () => Promise<any>) => {
	const LazyComponent = lazy(factory);
	return (
		<Suspense fallback={<CircularProgress />}>
			<LazyComponent />
		</Suspense>
	);
};
