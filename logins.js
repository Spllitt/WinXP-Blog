const form = document.getElementById('form')
const usernameInput = document.getElementById('username-input')
const errorMessage = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const username = usernameInput.value.trim()

    if (username === '') {
        errorMessage.innerText = 'Username is required'
        usernameInput.parentElement.classList.add('incorrect')
        return
    }
    localStorage.setItem('username', username)
    window.location.href = 'home.html'
})