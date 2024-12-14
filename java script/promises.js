function createCard(title, cName, views, monthsold, duration, thumbnail) {
    let viewstr
    if (views <1000000) {
        viewstr = views/1000 + "k";
    }else if(views > 1000000){
        viewstr = views/1000000 + "M";
    }else{
        viewstr = views/1000 + "k";
    }
    let html = ` <div class="card">
    <div class="img">
      <img src="${thumbnail}">
      <div class="capsule">
        ${duration}
      </div>
    </div>
    <div class="text">
      <h1>${title} </h1>
      <p>${cName} . ${viewstr} views . ${monthsold} months ago</p>
    </div>
  </div>`
  document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}
createCard("This is a video its number  also other things are" , "CodeWithHarry",800000,7, "31:22","photo-1529259622517-4dec6d053319.jpeg" )