const btnSubmit = document.getElementById("submit-form")

const url = 'https://covid-193.p.rapidapi.com/statistics';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a9db1bdf19msh6ecae0f62812779p14f836jsnbebb64fb4aca',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
};

async function getData(datas) {
    let activeCase = document.getElementById('active-case')
    let newCase = document.getElementById('new-case')
    let recoveredCase = document.getElementById('recovered-case')
    let totalCase = document.getElementById('total-case')
    let totalDeath = document.getElementById('total-death')
    let totalTest = document.getElementById('total-test')

    

    let data = await fetch(url, options);
    let result = await data.json();
    result.response.filter((item) => {
        let isNull = item.cases.new
        if (item.country === datas) {
            activeCase.innerHTML = item.cases.active
            if (isNull === null) {
                newCase.innerHTML = "0"
            } else {
                newCase.innerHTML = item.cases.new
            }
            recoveredCase.innerHTML = item.cases.recovered
            totalCase.innerHTML = item.cases.total
            totalDeath.innerHTML = item.deaths.total
            totalTest.innerHTML = item.tests.total
            console.log(item)
        }
    })
}


btnSubmit.addEventListener("click", function (event) {
    let InputData = document.getElementById("input").value
    event.preventDefault();
    getData(InputData)


})

