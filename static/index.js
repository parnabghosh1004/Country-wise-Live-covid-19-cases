function myMap(){
    fetch(`${window.location['href']}/static/data.json`)
    .then(response=>response.json())
    .then(data=>{
        
        let countryCases = document.getElementsByClassName('countries')
        let countries = data["ref_country_codes"]
        
        countries.forEach(e=>{
            let Text;
            for(let country of countryCases){
                if((country.firstElementChild.innerText).toLocaleLowerCase()===e.country.toLocaleLowerCase()){
                    Text = `<h2>Country : ${country.children[0].innerText}</h2><br><h3>Total cases : ${country.children[1].innerText}</h3><h3>Total deaths : ${country.children[2].innerText}</h3><h3>Total recovered : ${country.children[3].innerText}</h3><h3>Active Cases : ${country.children[4].innerText}</h3>`
                    break;
                }
            }    
            let options = {scale:0.7,color:'#E9A134'}
            
            let popup = new mapboxgl.Popup({
                offset:25}).setHTML(Text);
        
            new mapboxgl.Marker(options)
            .setLngLat([e.longitude,e.latitude]).setPopup(popup).addTo(map);


        })
    });
}

myMap();