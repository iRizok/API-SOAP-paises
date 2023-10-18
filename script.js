function getCountryInfo() {
    const inputBox = document.getElementById("countryInput").value.toUpperCase();
    const xmlBody = `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
            <m:FullCountryInfo xmlns:m="http://www.oorsprong.org/websamples.countryinfo">
                <m:sCountryISOCode>${inputBox}</m:sCountryISOCode>
            </m:FullCountryInfo>
        </soap:Body>
    </soap:Envelope>`;

    const proxyUrl = "http://localhost:8080/"; // Cambia esto a la URL de tu propio servidor proxy CORS
    const apiUrl = "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL";

    fetch(proxyUrl + apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "text/xml; charset=utf-8"
        },
        body: xmlBody
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);// Mostrar la respuesta XML tal cual en el elemento <pre>
        const responseElement = document.getElementById("responseXML");
        responseElement.textContent = data;
    })
    .catch(error => {
        console.error("Error:", error);
    });
}
