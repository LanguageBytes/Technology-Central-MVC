const deletePostHandler = async (event) => {
    event.preventDefault();
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete post')
    }
};

document.querySelector('#delete-btn').addEventListener('click', deletePostHandler);