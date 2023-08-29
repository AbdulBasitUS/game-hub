import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'
import { Genre } from '../hooks/useGenres'

interface Props {
    selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
    const { data: games, error, isLoading } = useGames(selectedGenre)
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <>
        { error && <Text>{error}</Text>}
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding='10px' spacing={3}>
            {isLoading && 
            skeletons.map(skeleton => <GameCardContainer key={skeleton}><GameCardSkeleton key={skeleton}/></GameCardContainer>)
            }
            {games.map(game => 
            <GameCardContainer key={game.id}>
                <GameCard key={game.id} game={game}/>
            </GameCardContainer>
            )}
        </SimpleGrid>
    </>
  )
}

export default GameGrid