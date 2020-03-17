var request = new XMLHttpRequest()
request.open('GET', 'https://corona.lmao.ninja/all')
var allCases = null
request.onload = function(){
    var data = JSON.parse(this.response)
    allCases = data;
    if( request.status >= 200 && request.status < 400){
        console.log(data)
    }else{
        console.log('error')
    }
    var numberCases = document.getElementById("numberCases");
    var numberRecovery = document.getElementById("numberRecovery");
    var numberDeath = document.getElementById("numberDeath");
    var getCases = data.cases;
    var getRecovery = data.recovered;
    var getDeath = data.deaths;

    numberCases.append(getCases)
    numberRecovery.append(getRecovery)
    numberDeath.append(getDeath)
}
request.send()
