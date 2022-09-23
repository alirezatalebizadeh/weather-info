let $ = document;


let citiesData = [

    { city: "Tehran", temp: 22, description: "cloudy", Humidity: "60%", windSpeed: "7.9km" },
    { city: "Tabriz", temp: 35, description: "windy", Humidity: "35%", windSpeed: "4.1km" },
    { city: "Ahvaz", temp: 42, description: "rainy", Humidity: "25%", windSpeed: "6.2km" },
    { city: "Gilan", temp: 17, description: "rainy", Humidity: "80%", windSpeed: "5.9km" },
    { city: 'Mashhad', temp: 16, weather: 'snowy', humidity: 7, windSpeed: 24 },
    { city: 'Esfahan', temp: 23, weather: 'Sunny', humidity: 15, windSpeed: 18 },
]

let searchBtn = $.getElementById("btn-Search");
let searchBar = $.querySelector(".search-bar");



searchBtn.addEventListener("click", function () {
    // console.log(searchBar.value);
    let searchBarValue = searchBar.value;
    // let mainCityDatas = citiesData[searchBarValue];

    let mainCityDatas = citiesData.find(function (item) {
        return item.city === searchBarValue;
    })


    if (mainCityDatas) {
        $.querySelector(".city").innerHTML = mainCityDatas.city;
        $.querySelector(".temp").innerHTML = mainCityDatas.temp + " c";
        $.querySelector(".description").innerHTML = mainCityDatas.description;
        $.querySelector(".humidity").innerHTML = "Humidity: " + mainCityDatas.Humidity;
        $.querySelector(".wind").innerHTML = mainCityDatas.windSpeed + " km/h";
        $.querySelector(".weather").classList.remove("loading");
    } else {
        alert("شهر مورد نظر پیدا نشد");
    }
})


let imgData = [
    { img: "/img/IMG_20220904_202829_739.jpg" },
    { img: "/img/IMG_20220904_202839_708.jpg" },
    { img: "/img/IMG_20220904_202855_789.jpg" },
    { img: "/img/IMG_20220904_203031_580.jpg" },
    { img: "/img/IMG_20220904_203107_022.jpg" },

]



window.addEventListener("load", function () {
    let randomImg = Math.floor(Math.random() * imgData.length);
    let targetImg = imgData[randomImg].img;
    imgData.forEach(function () {
        $.body.style.backgroundImage = 'url(' + targetImg + ')'
    })
    // alert("juy");
    console.log(targetImg);
})








