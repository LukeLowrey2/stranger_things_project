const BASE_URL = 'https://strangers-things.herokuapp.com/api/2008-USD-RM-WEB-PT';

export const fetchPosts = async () => {

    const response = await fetch(`${BASE_URL}/posts`);
    const data = await response.json();
    return data

}

export const fetchMessages = async () => {
    const locallySourcedToken = localStorage.getItem("token");

    const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${locallySourcedToken}`,
          }
    });



    const data = await response.json();
    return data

}