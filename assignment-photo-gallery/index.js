function getImages() {
    const authorization = 'e0bZWZtweXpE9chiv69yDvzFjYBjG4PrsQsouaAGAuvz84jcur6ud8l8';
    let input = document.getElementById("query-input").value;
    let url =`https://api.pexels.com/v1/search?query=${input}&per_page=60`;

    fetch(url, {
        headers: {
            'Authorization': authorization
        }
    })
        .then(response => response.json())
        .then(body => {
            const imgList = body.photos.map((item) => (
                `<img src="${item.src.small}"/>`
            ))
            console.log(body)
            return imgList
        })
        .then(list => {
            document.getElementById("img-list").innerHTML = list.join('')
        })
        .catch(error => console.log(error));

    console.log(url);
}