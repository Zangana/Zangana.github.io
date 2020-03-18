var request = new XMLHttpRequest()
request.open('GET', 'https://coronavirus-19-api.herokuapp.com/countries')
request.onload = function(){
    var data = JSON.parse(this.response)
    allCases = data;
    if( request.status >= 200 && request.status < 400){
        console.log(data)
    }else{
        console.log('error')
    }
    
    var container = document.getElementById("row-container");
    var content="";
    data.forEach(function(result,i){
        if(result == [] || result == null){
            container.innerHTML = '<p>چاوەروانی ئاماری تازە... تکایە دوای کەمێکی تر سەردانمان بکەوە</p>'
        }
        if(i == 0){
            content += '<div class="row">'
        }
        if(i!=0 && i%5 ==0){
            content += '</div><div class="row">'
        }
        content += 
            '<div class="col">'+
                '<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">'+
                    '<div class="card-header font-weight-bold text-center" id='+result.country.toUpperCase()+'>'+result.country.toUpperCase()+'</div>'+
                        '<div class="card-body">'
                            +'<h4 class="card-title border px-2 text-right">ژ.تووشبوو: '+result.cases+'</h4>'
                            +'<h4 class="card-text border px-2 text-right">'
                            +'ژ.گیان لە دەستدان: '+result.deaths 
                            +'<br>'
                            +'ژ.چاک بوو: '+result.recovered
                            +'<br>'
                            +'ژ.تووشبووی ئەمرۆ: '+result.todayCases
                            +'<br>'
                            +'ژ.گ.ئەمرۆ: '+result.todayDeaths
                            +'</h4>'
                        +'</div>'
                +'</div>'
            +'</div>'
    });
    content += '</div>'
    
    container.innerHTML += content;
    
}
request.send()
function searchFun(){
    var searchValue = document.getElementById("searchBox").value.toUpperCase();
    var search = document.getElementById("searchBox");
    search.addEventListener("keyup",function(event){
        if (event.keyCode === 13){
            event.preventDefault();
            document.getElementById("btnSearch").click();
        }
    })
   // alert(document.getElementById(search));
   document.getElementById(searchValue).scrollIntoView({
       behavior: 'smooth'

   });
}
