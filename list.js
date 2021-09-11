async function load() {
    let url = 'https://script.google.com/macros/s/AKfycbz0YWFeW1Q2DQVC3NANaRkgaQLZ4Kthr37trO8duKWpbvBnz2NDiARB_zTUkSkBzCr2/exec';
    let obj = await (await fetch(url)).json();

    document.querySelector('.list').innerHTML = `
    ${obj.user.map(function (data) {
        return `
            <div class="card">
                <div class="card-top">
                    <img src="${data.image_url}" alt="">
                </div>
                <div class="card-bottom">
                    <span class="title">${data.title}</span>
                    <p class="desc">${data.desc}</p>
                </div>
                <button class="read"><a href="${data.title}">Read</a></button>
            </div>
        `
    }).join('')}
    `;

}

load();