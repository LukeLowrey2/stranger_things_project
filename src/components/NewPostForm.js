import React, {useState} from 'react';

const NewPostForm = (props) => {

    const BASE_URL = 'https://strangers-things.herokuapp.com/api/2008-USD-RM-WEB-PT/posts';

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${locallySourcedToken}`
            },
            body: JSON.stringify({
                    post: {
                        title: title,
                        description: description,
                        price: price,
                    }
                })
            }
        )
        const data = await response.json();
    }
        

    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)}></input>

                <textarea type="text" placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>

                <input type="text" placeholder="Price" value={price} onChange={(event) => setPrice(event.target.value)}></input>

                <button type="submit">Create New Post</button>
            </form>
        </div>
    )

}

export default NewPostForm;