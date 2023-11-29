import { FC, Suspense } from "react";
import useSWR from "swr";
import Pokemon from "./pokemon";
import { StyledGrid } from "./pokemon.styled";
import LoadingSkeleton from "./LoadingSkeleton";

const Pokedex: FC = () => {
    const { data: { results } } = useSWR('https://pokeapi.co/api/v2/pokemon?limit=150')
    return (
        <>{results.map((pokemon: { name: string }) => (
            <Suspense fallback={<StyledGrid><LoadingSkeleton /></StyledGrid>}>
                <Pokemon key={pokemon.name} pokemonName={pokemon.name} />
            </Suspense>
        ))}
        </>
    )
}

export default Pokedex;