async function load() {
    let url = 'https://script.google.com/macros/s/AKfycbz0YWFeW1Q2DQVC3NANaRkgaQLZ4Kthr37trO8duKWpbvBnz2NDiARB_zTUkSkBzCr2/exec';
    let obj = await (await fetch(url)).json();

    document.querySelector('.list').innerHTML = `
    ${obj.user.map(function (data) {
        return `
            <div class="card">
                <div class="card-top">
                    <a href="${data.post_url}"><img src="${data.image_url}" alt=""></a>
                </div>
                <div class="card-bottom">
                    <p class="label">Jan 12, 2021</p>
                    <span class="title"><a href="${data.post_url}">${data.title}</a></span>
                    <p class="desc">${data.desc}</p>
                </div>
            </div>
        `
    }).join('')}
    `;

}

load();