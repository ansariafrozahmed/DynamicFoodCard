const myFun = async () => {
    try {
        const url = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    const result = await url.json()
    const final = result.categories
    document.getElementById('sec').innerHTML = final
    .map((item) => 
        `
        <div class="card" id="card">
                <img src="${item.strCategoryThumb}" alt="">
                <h1 id="name">${item.strCategory}</h1>
                <p id="desc">${item.strCategoryDescription.slice(1, 150)}</p>
             </div>
        `
    )
    } catch (error) {
        document.getElementById('errorsection').style = 'display: block;'
        console.log('ERROR' +' '+ error);

    }
}

myFun();