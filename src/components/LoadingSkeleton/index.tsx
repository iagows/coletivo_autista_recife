import { Grid2, Skeleton } from "@mui/material";
import { clone } from "../../util/clone";
import { gridSizeCss } from "../../util/constants";

type Props = {
	w?: number;
	h: number;
	amount: number;
};
const LoadingSkeleton = ({ amount, h, w }: Props) => (
	<>
		{clone(amount, (i) => (
			<Grid2 size={gridSizeCss} key={i}>
				<Skeleton width={w} height={h} animation="wave" variant="rectangular" />
			</Grid2>
		))}
	</>
);

export default LoadingSkeleton;
