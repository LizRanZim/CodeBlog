const addPostButtonHandler = async (event) => {
    event.preventDefault();
    document.location.replace('/posts/all');
};

document
    .querySelector('#make-post')
    .addEventListener('click', addPostButtonHandler);
