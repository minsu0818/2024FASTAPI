let MovieObject = {

  
   
    getall: function(){
        
        $.ajax({
            type: "GET",
            url: "http://localhost:8000/all/"

        }).done( function(response){
            console.log(response.result)
            movielist = response.result
            console.log(movielist[0].title)

            // topdiv = document.createElement("div")
            // topdiv.style = 'column-count:5'
            // document.body.appendChild(topdiv)
            topdiv = document.getElementById("alldiv")
            movielist.forEach(movie=> {
                cmovie = document.createElement('div')
                cmovie.className = "card"
    
                mimg = document.createElement("img")
                mimg.className = "card-img-top"
                mimg.src = movie.poster_path
                mimg.onclick = function(){
                    window.location.href = movie.url
                }
                mimg.onmouseover = function(){
                    mimg.style.cursor = "pointer"
                }
                mimg.addEventListener("mouseover", function() {
                    mimg.style.cursor = "pointer";
                });
                
    
                cmovie.appendChild(mimg)
                topdiv.appendChild(cmovie)
            });




        }).fail();

    },
    
    getgenres: function(){
        selectedGenre = document.getElementById("sgenre").value; 
           $.ajax({
            type: "GET",
            url: "http://localhost:8000/genres/" +selectedGenre.toLowerCase(),

        }).done( function(response){
            console.log(response.result)
            movielist = response.result
            console.log(movielist[0].title)

            
            // topdiv = document.createElement("div")
            // topdiv.style = 'column-count:5'
            // document.body.appendChild(topdiv)
            topdiv = document.getElementById("genrediv")
            // topdiv.innerHTML=""
            while(topdiv.firstChild){
                topdiv.removeChild(topdiv.firstChild);
            }
            movielist.forEach(movie=> {
                
                cmovie = document.createElement('div')
                cmovie.className = "card"
    
                mimg = document.createElement("img")
                mimg.className = "card-img-top"
                mimg.src = movie.poster_path
                mimg.onclick = function(){
                    window.location.href = movie.url
                }
                mimg.onmouseover = function(){
                    mimg.style.cursor = "pointer"
                }
                mimg.addEventListener("mouseover", function() {
                    mimg.style.cursor = "pointer";
                });
               
    
                cmovie.appendChild(mimg)
                topdiv.appendChild(cmovie)

            });
            
            
        }).fail()

    },

    
 
    getitems: function(){
        // selectedItem = document.getElementById("itemdiv").value; 
        $.ajax({
            type: "GET",
            url: "http://localhost:8000/item-based/" + "160",

        }).done( function(response){
            console.log(response.result)
            movielist = response.result
            console.log(movielist[0].title)
            
            topdiv = document.getElementById("itemdiv")

            while(topdiv.firstChild){
                topdiv.removeChild(topdiv.firstChild);
            }

            // topdiv = document.createElement("div")
            // topdiv.style = 'column-count:5'
            // document.body.appendChild(topdiv)
           
            movielist.forEach(movie=> {
                cmovie = document.createElement('div')
                cmovie.className = "card"
    
                mimg = document.createElement("img")
                mimg.className = "card-img-top"
                mimg.src = movie.poster_path
                mimg.onclick = function(){
                    window.location.href = movie.url
                }
                mimg.onmouseover = function(){
                    mimg.style.cursor = "pointer"
                }
                mimg.addEventListener("mouseover", function() {
                    mimg.style.cursor = "pointer";
                });
                
    
                cmovie.appendChild(mimg)
                topdiv.appendChild(cmovie)
            });




        }).fail();
    }

}


MovieObject.getall()