// styling 
const layer = document.querySelector('.display');
layer.style.display = 'flex';
layer.style.justifyContent = 'center';
layer.style.alignItems = 'center';
layer.style.height = '100vh';

onload = () => {
    // deklarasi variabel
    let id = document.getElementById('app');
    let loading = document.createElement('div');

    // fill content
    loading.textContent = "Loading";
    loading.style.fontSize = '28px';
    id.appendChild(loading);

    // animation
    let animation = setInterval(() => {
        loading.textContent = loading.textContent + '.';
    }, 800);

    // clear interval loading
    setTimeout(() => {
        clearInterval(animation);
        loading.textContent = "Welcome to main page!";
        // redirect new page use =>
        // window.location.href = "";
    }, 4000)
}