const Character = ({ character, onDelete }) => {
    return (
        <div>
            <h3>
                {character.name}
            </h3>
            <button onClick={() => onDelete(character.id)}>Delete</button>
        </div>
    )
}

export default Character