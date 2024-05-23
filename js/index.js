function logout() {
  localStorage.removeItem('loggetUser');
  location.href = '/login.html'
}
const logoutBtn = document.querySelector('#logoutBtn')
logoutBtn.addEventListener('click',logout);