import { FC } from "react";
import Skeleton from "react-loading-skeleton";

const LoadingSkeleton: FC = () => {
    return (
        <div>
            <Skeleton height={200} width={200} />
        </div>
    )
}

export default LoadingSkeleton;