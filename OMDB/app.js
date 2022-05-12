function myFunc(){
    let searchKey = document.getElementById('movie').value;
    console.log(searchKey);
    const dataShow=document.getElementById('dataShow');
    let url = "http://www.omdbapi.com/?s="+searchKey+"&apikey=939ca0f7";
    let htmlData ='';
    fetch(url).then((response) => {
        // console.log(response);
        return response.json();
    }).then(data => {
        // console.log(data);
        for(const m of data.Search)
       {
         htmlData += ` <div  style="display:flex; padding:10px;">
           <img src=${m.Poster} class='image1'>
           <div style="padding:10px;" onclick="getDetail('${m.imdbID}')">${m.Title}</div>
           <div style="padding:10px;">${m.Year}</div>
           </div>`;
        // dataShow.innerHTML = htmlData;
       }
       dataShow.innerHTML = htmlData;
    }).catch(error => {
        console.log(error);   
    })
}

function getDetail(id){
    let url = "http://www.omdbapi.com/?i="+id+"&apikey=939ca0f7";
    fetch(url).then(response => response.json()).then(data => {
        const detailHtmlData = `actor name : ${data["Actors"]}  <br> 
            country name : ${data["Country"]}`;
        document.getElementById('box3').innerHTML = detailHtmlData;
    })
}

