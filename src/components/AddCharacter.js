import { useState } from 'react';

const AddCharacter = ({ onAdd }) => {

    const [name, setName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()

        onAdd({ name })

        setName('')
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Name of Character</label>
                <input type="text" placeholder="Add Character" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <input type="submit" value="Save Character" />
        </form>
    )
}

export default AddCharacter
