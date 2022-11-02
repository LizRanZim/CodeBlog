const addPostButtonHandler = async (event) => {
    event.preventDefault();
    document.location.replace('/make-post');
};

document
    .querySelector('#make-post')
    .addEventListener('click', addPostButtonHandler);
