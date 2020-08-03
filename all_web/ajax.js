// ajax - Asynchronous javascript and xml

// ch-34 asynchronous javascript data transfer with xml http request

// synchronous data transfer: user can't do anything while the data is send and received
// asynchronous data transfer: user can

// creating XMLHttpRequest Object

function getReq() {
    if ( window.XMLHttpRequest){    // for normal browsers
        xmlRequest = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {    // for IE
        try{
            xmlRequest = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch(e) {
            try{
                xmlRequest = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch(e){
                xmlRequest=false;
            }
        }
    }
    return xmlRequest;
}

// synchronous request:
    // 1. creates XMLHttpRequest object
    var xmlRequest = new XMLHttpRequest();
    // 2. Creates a request
    xmlRequest.open('GET', 'address.xml', false);
    // 3. sends request
    xmlRequest.send(null);
    // 4. check receive and then obtain data
    if(xmlRequest.readyState==4 && xmlRequest.status==200){
        var xmlRequest=xmlRequest.responseXML;
    }

// asynchronous request:
    var xmlRequest=new XMLHttpRequest();
    // 2. set readystatechange event to trigger a specific function that checks the readystate property for the data
    xmlRequest.onreadystatechange=asyncHandler();
    function asyncHandler(){
        if(xmlRequest.readyState==4)
        var objXML=xmlRequest.responseXML;
    }
    // then open and send the request
    xmlRequest.open('GET', 'address.xml', true);
    xmlRequest.send(null);

// XMLHTTPRequest properties
    xmlRequest.onreadystatechange;   // the functions that runs at every state change
    xmlRequest.readyState;       // defines current state: (0-not initialized/ open() has to be called; 1-send() to be called;
        // 2-waiting for status and headers; 3-not all data received; 4-final data received)
    xmlRequest.responseText;    // response in str
    xmlRequest.responseXML;     // returns xml object 
    xmlRequest.status;      // represents the HTTP status code: (200-text OK; 404-NOT Found; 100-505)
    xmlRequest.statusText;      // staus in str
    
//  XMLHTTPRequest Methods
    xmlRequest.abort()  // cancel request and resets object to uninitialized state
    xmlRequest.open('DOMString', 'DomStringUri', booleanAsync, 'username', 'password');  // represents how request should be sent
    //  DomString:(GET; POST; PUT; DELETE; HEAD); booleanAsync-true for asynchronous; username & password (optional parameters);
    xmlRequest.send()   // sends http request to sever; request is sent when readystate==1 else exception is raised;
    xmlRequest.setRequestHeader(name, value);  // adds custom HTTP header
    xmlRequest.getResponseHeader(name);  // returns specified header
    xmlRequest.getAllResponseHeaders(); // returns complete set of http headers as string; returns null if readystate!==3 or 4;
     