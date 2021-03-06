const logOutHandler = async () => {
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('logout failed');
    }
};

document.querySelector('#logout').addEventListener('click', logOutHandler);
