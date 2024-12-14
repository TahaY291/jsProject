function name(stname, ndname, id , place , housename,img ) {
    let html = `        
    <div class="box">${stname}</div>
    <div class="box">${ndname}</div>
    <div>His student id is${id}</div>
    <div>He is living in ${place}</div>
    <div>His house name is${housename}</div>
    <img src="photo-1529259622517-4dec6d053319.jpeg" alt="">`
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}
name("Maham", "Talha", 23, "Lahore", " Aman House ")