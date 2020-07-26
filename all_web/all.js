//Reference to programming in JavaScript

//########## ch-11 Overview of Javascript ##########

// features : Imperative and structured; dynamic text; functional; prototype-based; platform-independent

// to include in HTML : <SCRIPT type="text/javascript"> code </SCRIPT>
// as external file: <SCRIPT src="url" ></SCRIPT>

//Programming fundamentals of javascript
    // lexical structure; variables; operators; control flow; popup boxes

    // Lexical Structure :
    // character set; case senstivity; white spaces and line breaks; literals; identifiers; reserved words;
        // some special characters: \t-tab; \f-formfeed; \n etc

        // js is a case sensitive lang

        // Literals: 
            // 1. numeric: 89 (base-10); 021, 045(octal base-8); 0x234f8 hexad(b-16)
            // 2. floating-point
            // 3. boolean (true; flase)
            // 4. string ""
            // 5. array:
                var emp=[34,234,234];
            // 6. regex: 
                var myregexp= new RegExp("abc");
                var myregexp=/abc/;
            // 7. object: name-value pairs
                var games = {cricket: 11, chess: 2, carom: 4};
            // 8. Identifier: 
                //must start letter, $, _
                // no number
                //case-sensitive
                //no-reserved words
    // Variables: 
        var var1, var2="value", var3=34;
        // if var not assigned then it is assigned with undefined value;
    // Operators: Logical operators : &&; ||; !;
    // Control flow :
        // if
        if(condition) { //code
        }
        else { //code
        }
        //switch
        switch(exp){
            case value1: //code
            break;
            case value2: //code
            break;
            case value3: //code
            break;
            default: //code
            break;
        }
        //while loop
        while(condition){
            //code
        }
        //do while
        do{
            //code
        }while(condition);
        //for 
        for(var i=0; i<10; i++) //for(initilization; condition; updation)
        {
            //code
            continue; //to jump to next iteration
            break; //to exit loop
        }
    //pop up boxes:
    alert("hello");
    confirm("R u sure?");
    prompt("Enter"); // used to enter some text

//########## ch-12 Javascript Functions, Events, Image Maps, and Animations ##############

// Exploring Functions
        // funcs with para and without para
            // Built-in Global Functions
            alert();
            prompt();
            confirm();
            eval(); //evalutes the string
            isFinite();
            isNaN();
            parseInt();
            parseFloat();
            Number()    // convert object to no and if boolean then 1-true 0-false;
            escape();   // Encodes a string
            unescape();
        //declaration
        function name(para1, para2){
            //code
            return value1; //then func ends and return to object or variable
        }
        //calling a func
        name(para1, para2);
        //timer function with timer
            setTimeout(name, 60);   //executes after a specified interval delaytime--no. of miiliseconds
            clearTimeout(timer);    // timer is a var i.e created using setTimeout()
            setInterval(name, 60);  //executes after interval time in milliseconds
            clearInterval(timer);   // diactivates the timer created using setInterval(); 
    
// Exploring Events
    //Events of HTML forms
        onsubmit();     onselect(); //triggers when an element is selected
        oninvalid();    oninput();
        onfocus();      oncontextmenu();    //when context menu is used
        onchange();     onblur();       //when window loses focus
        // and many more
    //Keyboard Events
        onkeydown();    onkeypress();   onkeyup();
    //Events for media elements
        onabort();      onerror();      //and many more
    //Events of browser
        onafterprint();     onblur();       onload();      //and many more

// Image maps (if req. search inet)

//####### ch-13 Javascript Objects ########

obj=new Object();   //getting direct instance of object
obj.name="ram";    //to add property to object
obj.rollnumber=32;  //prop
obj.getValue()      // calling method

function bike(speed, engine, color){    // function template to create an object
    this.speed=speed;
    this.engine=engine;
    this.color=color;
}
var mybike=new bike("120kmp", "v-6", "red");    //to create its instance or object
var engine_type=mybike.engine;      // accessing the property

//methods of an object
function compute(){
    var area=this.base*this.altitude*0.5;
    return area;
}
function triangle(b, a){
    this.base=base;
    this.altitude=altitude;
    this.area=compute;
}
var mytriangle=new triangle(20, 10);
alert("area="+mytriangle.area());

//Built-in/Standard Javascipt objects
    //String object
    var str=new String("str");      // or var str="str";   
        //prop
        str.constructor;    str.length;     str.prototype;
        //meth
        str.charAt(0);      // similary there are many more
        //wrapper meth
        str.bold();     //and many more
    //RegExp Object
    var regex=new RegExp("pattern", "flag");
    var regex=/pattern/flag;
        //flags : (g-globally; i-ignore case; m-multiline matching);    see the meth and prop
    //Boolean
    var bool=true;
    var bool=Boolean(false);
    //Number
    var num=new Number(value);
    var num=12.23;
    //Array
    var myarray=new Array(size);
    var myarray=new Array(12,123,23,34);
    var myarray=[23,34,546];
    //Math
        //used to perform opertions; no declaration; use, see prop and meth 
    //Date
        var date1=new Date();   // ((milliseconds); (yyyy,mm,dd[,hr,min,sec,millisec]); (mm dd,yyyy); (mm dd,yyyy hr:min:sec))
        // see meth and prop 

//##### ch-14 Working with Browser Objects #####

// Window Object- it provides access to the associated variables and functions; it basically open a window;
// window: (Navigator; Document; History; Screen; Location)
// window object properties
    window.closed;      // boolean; whether window has been closed or not;
    window.frames;      // array of all the forms in current window;
    window.innerHeight; // window's content area inner height;
    window.innerWidth;  // window's content area inner width;
    window.length;      // no. of frames contained in a window;
    window.outerHeight;
    window.parent;
    window.screenLeft;  // x coordinate of the window relative to user's monitor screen; (screenTop; screenX; screenY;)
    window.self;
    window.top;         // reference of the topmost browser window;
    // and many more

// window Object Methods
    window.alert('str');
    window.blur();      // removes focus from current window;
    window.close();     // closes the current window
    window.confirm();
    window.prompt();    // prompts for stdin
    // and many more

// Navigator Object ( used to provide info about the version and type of the browser );
    // Navigator Object Collections
        navigator.plugins;    // []; returns reference to all the embedded obj in doc;
        navigator.mimeTypes;    // []; returns collection of MIME(Multipart Internet Mail Extension) types supported by client browser;
    // Navigator Object Properties
        navigator.appCodeName;  // code name browser;
        navigator.appName;      // name browser;
        navigator.appVersion;   // version browser;
        navigator.cookieEnabled;
        navigator.platform;     // machine type;
        navigator.userAgent;    // str of user-agent header sent by client to the server in http protocol;
    // Navigator Object Methods
        navigator.javaEnabled();

// History Object (array of URL's, which are visited by user);
    // histroy property
        history.next;       // equivalent to Forward page;
        history.previous;   // eq to back;
        history.current;    // url of current entry in the object;
    //  history methods
        history.back();     // loads previous URL;
        history.forward();
        history.go();       // loads a specific URL from history list;

// Screen Object (properties of display screen of browser)
    // Screen Properties
        screen.availHeight;     // excluding window taskbar;
        screen.availWidth;
        screen.height;          // total height of screen;
        screen.width;

// Location Object (child obj of win; store info of current URL)
    window.location="http://www.google.com";
    // location properties    protocol//host[:port]/pathname[hash][search]
    // (href; protocol; host; hostname; port; pathname; search; hash)

    // location methods
        window.location.assign();
        window.location.reload();
        window.location.replace();     // replaces the current doc with specified one; you can't navigate to back;

//##### ch-15 Working with Document Object #####

// provides access to all HTML ele of a doc; usage; 
    window.document;
    document;
// Document Object Collections
    document.anchors;   // [];  returns all the anchor objects;
    document.forms;     // [];  returns all the form   objects;
    document.images;    // [];  returns all the image  objects;
    document.links;     // [];  returns all the links  objects;
// Document Object Properties
    document.cookie;    // report contains all the visible and unexpected cookies;
    document.readyState;// loading status;
// Document Object Methods
    document.open(mimeTypes, replace);  // opens HTML doc to display output
    document.close();
    document.write(exp1, exp2);         // write HTML exp into HTMLdoc; disad: it removes all the present struc;
    document.getElementById(id);
    document.getElementsByName(name);
    document.getElementsByTagName(tag);
// Cookies  (name; expires-date in UTC; domain-to which a cookie is sent; path;
// secure-restricts browser from sending cookies over unsecured net, default=0, 1-allow cookie to be sent over secure HTTP connection);
    function setCookie(cname, value, exdays){
        var datadate=new Date();
        datadate.setDate(datadate.getDate()+exdays);    // expiry date
        var vvalue=escape(value)+( (exdays == null) ? "" : "; expires=" + datadate.toUTCString() );
        document.cookie=cname+"="+vvalue;   // cname=value; expires=dateinUTC
    }
    function getCookie(cname){
        var i,x,y, cookies_arr=document.cookie.split(";");
        for (i=0; i<cookies_arr.length; i++){
            x= cookies_arr[i].substr(0, cookies_arr[i].indexOf("="));   // extract attribute name
            y= cookies_arr[i].substr(cookies_arr[i].indexOf("=")+1);    // extract attrubute value
            x=x.replace(/^\s+|\s+$/g,"");
            if (x==cname){
                return unescape(y);
            }
        }
    }

//##### ch-16 Document Object Model #####

// the Node Interface
var var_name= document.getElementById("node_name");
    // Properties of Node Interface
        var_name.nodeType;      // returns int value that represents node type;
        var_name.nodeName;      // returns name of node;
        var_name.nodeValue;     // returns value of node;
        var_name.attributes;    // [];
        var_name.parentNode;    // if !exists return null;
        var_name.childNodes;    // [];
        var_name.firstChild;    var_name.lastChild;    var_name.nextSibling;    var_name.previousSibling;
    // Methods of Node Interface
        var_name.appendChild(); // adds new child at end of list of child nodes;
        var_name.cloneNode();   // create duplicate of current node;
        var_name.hasAttributes();   // boolean;
        var_name.hasChildNodes();   // boolean;
        var_name.insertBefore();    // new child before current child node;
        var_name.removeChild();     // from the list of child nodes;
        var_name.replaceChild();    // existing with new node;

// The Document Interface
    document.getElementById("id");
    document.getElementsByTagName("tag");       // []; tag name matches; *-all ele;
    document.getElementsByTagNameNS("name");    // []; name attr value matches;

// The Element Interface
    var_name.tagName;       // property; displays name of ele in upercase;
    var_name.hasAttribute();    // boolean;
    var_name.getAttribute("attr");    // str; null-if no attr; if empty returns first attr;
    var_name.setAttribut("border","2");
    var_name.removeAttribute("attr");
    
//##### ch-17 Validation, Errors, Debugging, Exception Hangling and Security #####

// Form Validation 
    // form can be validated using: 
    // server-side validation: using CGI scripts, Servlet, Java Server Pages(JSP), php and Active Server Pages(ASP);
    // Client-side validation: uses js or vbscript
    function validateReqFields(thisform){
        return true;
    }
    // in HTML- <form action="submit.html" onsubmit="return validateReqFields(this)" method="Post" >

// Errors in js
    // Syntax; Runtime; Logic;
    // Handling Exceptions
        // using try-catch
            try{
                // code that can cause error
            }
            catch(err){
                // if it does then what to do
            }
            finally{
                // optional; always runs;
            }
        // using onerror event
            window.onerror=function(errmessage, url, line){
                alert(errmessage);
            }
    // Security (same-origin; signed-script)
            // same-origin
                // if the URL of the new Web page has the same origin as the previous web-p, 
                // then only the properties and methods can be accessed else an error;
                // some results:
                // http://www.example.com/default.jsp;          Success
                // http://www.example.com/products/info.html;   Success
                // https://www.example.com/clients.html;        Failure; as different protocol(https);
                // http://www.example.com:80/index.jsp;         Failure; as different port(80);
                // http://company.example.com/index.jsp;        Failure; as different host(compant);
            // Signed-script policy
                // you create a policy and apply the policy to a specific list of web sites;
                // in policy define a list of trusted sites willing to grant certain extended privileges;

// HTML Black Book JavaScript Reference Completed;