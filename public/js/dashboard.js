// add post button handler


const addPostButtonHandler = async (event) => {
    event.preventDefault();
    document.location.replace('/make-post');
};

// delete post button handler from 14-28 profile.js
// const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/posts/${id}`, {
//         method: 'DELETE',
//       });
//       console.log(`/api/posts/${id}`);

//       if (response.ok) {
       
//         document.location.replace('/bananas');
//       } else {
//         alert('Failed to delete post');
//       }
//     }
//   };

  document
  .querySelector('#make-post')
  .addEventListener('click', addPostButtonHandler);


// document
//     .querySelector('#delete-post-btn')
//     .addEventListener('click', delButtonHandler);