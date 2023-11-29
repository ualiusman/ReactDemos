import { FC, Suspense } from "react";
import Pokedex from "./pokedex";

const PokeContainer: FC = () => {
    return (
        <Suspense fallback={<h2>Loading....</h2>}>
            <Pokedex />
        </Suspense>
    )
}

export default PokeContainer;