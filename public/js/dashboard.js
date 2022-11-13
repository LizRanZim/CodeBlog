// add post button handler


const addPostButtonHandler = async (event) => {
  event.preventDefault();
  document.location.replace('/make-post');
};


// delete post button handler from 14-28 profile.js
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });
    console.log(`/api/posts/${id}`);

    if (response.ok) {

      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};

// Idea is to hide the edit post functionality until someone clicks the edit post button and then they can edit and save the post from here. But this probably needs to move to the dashboard instead from the post handlebars



// event handler for edit post
const editPostButtonHandler = async (event) => {
  event.preventDefault();
    // remove the class that hides the element
    document.querySelector('#edit-post-option')
    // ***getting an error here
    .classList.remove('display-none');

  
  document.location.replace('/dashboard');
  };

// delete button event listener

document
  .querySelector('#delete-post-btn')
  .addEventListener('click', delButtonHandler);


 // add button event listener

document
  .querySelector('#make-post')
  .addEventListener('click', addPostButtonHandler);

  // edit button event listener
document
.querySelector('#edit-post-btn')
.addEventListener('click', editPostButtonHandler);