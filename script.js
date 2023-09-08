let finals = [];
const myFun = async () => {
  try {
    const url = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const result = await url.json();
    let final = result.categories;
    finals.push(...final);
  } catch (error) {
    document.getElementById("errorsection").style = "display: block;";
    console.log("ERROR" + " " + error);
  }

  document.getElementById("sec").innerHTML = finals.map(
    (item) =>
      `
      <div class="card" id="card">
              <img src="${item.strCategoryThumb}" alt="">
              <h1 id="name">${item.strCategory}</h1>
              <p id="desc">${item.strCategoryDescription.slice(0, 150)}</p>
           </div>
      `
  );
};


const searchFun = () => {
  const searchinput = document.getElementById("search");
  const searchbtn = document.getElementById("searchbtn");
  searchbtn.addEventListener("click", () => {
    let a = finals.filter((single) => {
      return (
        single.strCategory.toUpperCase() === searchinput.value.toUpperCase()
      );
    });
    document.getElementById("sec").innerHTML = a.map(
      (item) =>
        `
        <div class="card" id="card">
                <img src="${item.strCategoryThumb}" alt="">
                <h1 id="name">${item.strCategory}</h1>
                <p id="desc">${item.strCategoryDescription.slice(0, 150)}</p>
             </div>
        `
    );

  });
};


const all = () => {
  const allbtn = document.getElementById("allbtn");
  allbtn.addEventListener('click', () => {
    document.getElementById("sec").innerHTML = finals.map(
      (item) =>
        `
        <div class="card" id="card">
                <img src="${item.strCategoryThumb}" alt="">
                <h1 id="name">${item.strCategory}</h1>
                <p id="desc">${item.strCategoryDescription.slice(0, 150)}</p>
             </div>
        `
    );
  })
}


myFun();
searchFun();
all();
