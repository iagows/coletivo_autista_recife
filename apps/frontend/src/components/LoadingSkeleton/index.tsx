import { Grid, Skeleton } from "@mui/material";
import { clone } from "../../util/clone";
import { gridSizeCss } from "../../util/constants";

type Props = {
	w?: number;
	h?: number;
	amount?: number;
};
const LoadingSkeleton = ({ amount = 1, h, w }: Props) => (
	<>
		{clone(amount, (i) => (
			<Grid size={gridSizeCss} key={i}>
				<Skeleton width={w} height={h} animation="wave" variant="rectangular" />
			</Grid>
		))}
	</>
);

export default LoadingSkeleton;
