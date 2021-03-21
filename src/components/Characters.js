import Character from './Character'

const Characters = ({ characters, onDelete }) => {
    return (
        <>
            {characters.map((character, index) => (
                <Character key={index} character={character} onDelete={onDelete} />
            ))}
        </>
    )
}

export default Characters;