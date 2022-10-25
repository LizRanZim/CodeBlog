const addPostButtonHandler = async (event) => {
    event.preventDefault();
    document.location.replace('/all/posts');
};

document
    .querySelector('#make-post')
    .addEventListener('click', addPostButtonHandler);
