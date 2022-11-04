// .

const video = "http://127.0.0.1:8080/a.mp4";

const xhr = new XMLHttpRequest();
xhr.open('GET', video);
xhr.send();

xhr.addEventListener('progress', function (e) {

    const p = document.querySelector('p');
    p.textContent = `${e.type}: ${formatBytes(e.loaded)}  From ${formatBytes(e.total)}`;

});

function formatBytes(bytes, decimals = 2) {
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}


