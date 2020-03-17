var request = new XMLHttpRequest()
request.open('GET', 'https://corona.lmao.ninja/countries')
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
        if(i == 0){
            content += '<div class="row">'
        }
        content += 
            '<div class="col">'+
                '<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">'+
                    '<div class="card-header font-weight-bold text-center">'+result.country.toUpperCase()+'</div>'+
                        '<div class="card-body">'
                            +'<h5 class="card-title border text-right">ژ.تووشبوو: '+result.cases+'</h5>'
                            +'<p class="card-text border text-right">'
                            +'ژ.گیان لە دەستدان: '+result.deaths 
                            +'<br>'
                            +'ژ.چاک بوو: '+result.recovered
                            +'<br>'
                            +'ژ.تووشبووی امرۆ: '+result.todayCases
                            +'<br>'
                            +'ژ.گ.امرۆ: '+result.todayDeaths
                            +'</p>'
                        +'</div>'
                +'</div>'
            +'</div>'
        if(i!=0 && i%5 ==0){
            content += '</div><div class="row">'
        }
    });
    content += '</div>'
    
    container.innerHTML += content;

}
request.send()
