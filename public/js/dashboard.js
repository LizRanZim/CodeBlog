// add post button handler


const addPostButtonHandler = async (event) => {
  event.preventDefault();
  document.location.replace('/make-post');
};


// delete post button handler from 14-28 profile.js
const delButtonHandler = async (event) => {
  console.log('******')
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    console.log(`/api/posts/${id}`);

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });
    console.log(`/api/posts/${id}`);

    if (response.ok) {

      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  } else
 {
console.log('******')
 }
};

// Idea is to hide the edit post functionality until someone clicks the edit post button and then they can edit and save the post from here. But this probably needs to move to the dashboard instead from the post handlebars



// event handler for edit post to unhide the edit area
const editPostButtonHandler = async (event) => {
  event.preventDefault();
    // remove the class that hides the element
    document.querySelector('.edit-post-option')
    .classList.remove('display-none');
  };


// event handler to save edited post button
const saveEditedPostFormHandler = async (event) => {
    event.preventDefault();

    const post_id = event.target.getAttribute('data-id');
    const post_name = document.querySelector('#post-name').value.trim();

    const post_description = document.querySelector('#post-description').value.trim();


    // if post-text exists
    if (post_name && post_description) {
        const postBody = {
            post_name: post_name,
            post_description: post_description,
            post_id: post_id
        }

        const response = await fetch('../api/posts', {
            method: 'POST',
            body: JSON.stringify(postBody),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response)

        if (response.ok) {
            console.log(response);
            document.location.replace('/dashboard');
        } else {
            alert('Failed to edit post');
        }
    }
};



// save edited post event listener

document
    .querySelector('#save-post-btn')
    .addEventListener('click', saveEditedPostFormHandler);


// delete button event listener

document
  .querySelector('.delete-post-btn')
  .addEventListener('click', delButtonHandler);


 // add button event listener

document
  .querySelector('#make-post')
  .addEventListener('click', addPostButtonHandler);

  // edit post button event listener
document
.querySelector('#edit-post-btn')
.addEventListener('click', editPostButtonHandler);