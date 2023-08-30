import { Button, HStack, Heading, Image, List, ListItem, Spinner } from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageURL from '../services/image-url'

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { data: genres, isLoading, error } = useGenres()
    if (error) return null
    if (isLoading) return <Spinner />
  return (
    <>
        <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
        <List>
            {genres.map(genre =>
            <ListItem key={genre.id} paddingY='5px'>
                <HStack>
                    <Image
                        boxSize='32px'
                        objectFit='cover'
                        borderRadius={8}
                        src={getCroppedImageURL(genre.image_background)}
                    />
                    <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id? 'bold' : 'normal'} fontSize='lg' variant='link' onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
                </HStack>
            </ListItem>
        
            )}
        </List>
    </>
  )
}

export default GenreList