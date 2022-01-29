const adminLoginBTN = document.getElementById('admin-login-btn');
const authDiv = document.getElementById('auth');
const mainDashboard = document.getElementById('main-dashboard');
adminLoginBTN.addEventListener('click', function (e) {
    let adminId = document.getElementById('admin-id').value;
    let adminPass = document.getElementById('admin-pass').value;

    if (adminId == 'admin' && adminPass == 'admin') {
        authDiv.style.display = 'none';
        mainDashboard.style.display = 'block';

    } else {        
        alert('Invalid credentials');
    }
    e.preventDefault();
});