function getPosition()  
{  
    try  
    {  
          
        if (navigator.geolocation !== null)  
        {  
            navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);  
        }   
        else   
        {  
            errorMessage("HTML5 geolocation no esta soportado.");  
        }  
    }   
    catch(e)   
    {  
        errorMessage("exception (getPosition): " + e);  
    }  
}  
function geolocationSuccess(position)   
{  
    try  
    {  
        var coordinates = position.coords;  
        displayLocationInfo(coordinates);  
    }   
    catch(e)   
    {  
        errorMessage("exception (geolocationSuccess): " + e);  
    }  
}  
function geolocationError(posError)  
{  
    try  
    {  
        if (posError)  
        {  
            switch(posError.code)  
            {  
                case posError.TIMEOUT:  
                    errorMessage("TIMEOUT: " + posError.message);  
                    break;  
                case posError.PERMISSION_DENIED:  
                    errorMessage("PERMISSION DENIED: " + posError.message);  
                    break;  
                case posError.POSITION_UNAVAILABLE:  
                    errorMessage("POSITION UNAVAILABLE: " + posError.message);  
                    break;  
                default:  
                    errorMessage("UNHANDLED MESSAGE CODE (" + posError.code + "): " + posError.message);  
                    break;  
            }  
        }  
    }   
    catch(e)   
    {  
        errorMessage("exception (geolocationError): " + e);  
    }  
}        

//Y la funcion donde utilizaremos esos datos obtenidos y visualizaremos la direccion formateada es la siguiente.

//definimos una variable map e inicializamos el mapa , al inicializarse se centra en una posicion predefinica
var map;

function displayLocationInfo(coordinates)  
{  
    try  
    {  
        var lat = coordinates.latitude;  
        var lon = coordinates.longitude; 
		console.log(lat)
		console.log(lon)


        // definimos las opciones

        var mapOptions = {
        zoom: 16,
        center: new google.maps.LatLng(lat, lon),
		disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
		zoomControl:true,
		scaleControl:true
        }
        //inicializamos el mapa
        var map = new google.maps.Map(document.getElementById("map_canvas_ruta"), mapOptions);

						
        var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lon),
		//icon:iconomarker,
		animation:'DROP',
        title:"Usted esta aqui."
        });
		
        //cargamos el marcador
        marker.setMap(map);

		var info = google.maps.InfoWindow({
			
			content:"Usted esta aqui"
			
			});
			
			google.maps.event.addListener(sevilla, 'click', function() {
			
			info.open(map,info);
			
			});

        //Utilizamos la api de google geocode para decodificar la longitud y la latitud pasandole las 2 variables, 
        //esto nos devuelve un json que obtenemos con la funcion de jquery $.getJSON(url,callback); despues de obtenerla 
        //lo escribimos en el div formato 
/*
    var url="http://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lon+"&sensor=true";
    $.getJSON(url, function(data) {
    console.log(data);
    //el resultado esta en un json en la primera posicion esta la direccion mas precisa
    $("#formato").html(data.results[0].formatted_address);

    });
*/
/*
        var locationInfo = "";  
        locationInfo += "<b>Latitud:</b> " + coordinates.latitude + "<br>";  
        locationInfo += "<b>Longitud:</b> " + coordinates.longitude + "<br>";  

        
        displayOutput("<p>" + locationInfo + "</p>");
        */

    }

    catch(e)   
    {  
       console.log(e);
    } 
	
	
}
