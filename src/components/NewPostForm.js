import React, {useState} from 'react';

const NewPostForm = (props) => {

    const BASE_URL = 'https://strangers-things.herokuapp.com/api/2008-USD-RM-WEB-PT/posts';

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const locallySourcedToken = localStorage.getItem('token');

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
        <div className='new-post'>
            <form onSubmit = {handleSubmit}>
                <h2>New Post Form</h2>
                
                <input type="text" placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)}></input>
                <br></br>
                <textarea type="text" placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
                <br></br>
                <input type="text" placeholder="Price" value={price} onChange={(event) => setPrice(event.target.value)}></input>
                <br></br>
                <button type="submit">Create New Post</button>
            </form>
        </div>
    )

}

export default NewPostForm;