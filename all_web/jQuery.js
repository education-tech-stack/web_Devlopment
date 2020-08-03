// jQuery(JS Framework) reference
// jQuery; released January 2006; BarCamp NYC by John Resig;
// Simplifies creation of animation, communication b/w web-client and w-server, doc-traversing and event handling;

//##### ch-39 Working with jQuery #####

    // arg var  ; special var always avilable inside jquery function;
        function mymethod(x){
            console.log(typeof x, arguments.length);
        }
        mymethod();             // undefined 0;
        mymethod(1);            // number 1;
        mymethod('1','1','4');  // string 3;
        function mymethod2(){
            return arguments.callee;    // provides ref of the current function;
        }
        mymethod2();
    // DOM ; provides various selectors to select DOM ele from DOM doc
        // ex. of selectors
        // :contain(); selector selects all ele that contain given text;
        // :file();    selector selects all ele that are of file type;
        // methods to access DOM ele, follows:
            // .get();      returns DOM-ele that matched with specified jquery obj;
            // .index();    Searches specified ele within a list of matched ele;
            // .size();     returns no. of DOM ele that matched with specified jquery;
            // .toArray();  returns DOM-ele that matched with jquery obj as array ele;

    // Loading and Using
        // Download: http://jquery.com/ 
        // to include; <script type="text/javascript" language="javascript" src="jquery-1.5.js"></script>
        // OR; to include Content Distribution Network (CDN) source in script-ele;
        // Ms-CDN http://ajax.microsoft.com/ajax/jquery/jquery-1.5.min.js ;
        // Google-ajax-api: http://ajax.googleapis.com/ajax/libs/jquery/1.5.0/jquery.min.js ;

    // using jquery library file
        // jquery reads or manipulates a DOM doc by ready event of doc;
        $(document).ready(function(){
            $("a").click(function(event){   // handle the click event of A ele;
                alert("Hello World!");      // However! !work as specified; use the event handler;
                event.preventDefault();     // prevents the occurrence of default event and raises a new event;
            })
        })

    // Callback Functions
        // user-defined func; used to invoke custom code at specified time;
        $(selector).hide(speed, call_back);     // call_back-func para executes after the hide-func is executed;
        $.get('page1.html', dummyCallback);     // without args;
        $.get('page1.html', dummyCallback(para1, para2));   // with args;

    // jquery selectors
        // it supports the CSS-selector style; ex:
            $("p"); // all p ele;
            $("p.summary");
            $("p#jquery");
            $("[href]");        // all ele with href attr;
            $("[herf='#']");    // attr href value #;
            $("[href!='#']");
            $("[href$='.jpg']");// attr ends with .jpg;
        // to select css property;
            $("p").css("background-color", "green");
        // and many more types of selectors;
    // jquery to access HTML attr  
        $("p").attr("title");           // attr(); to set or get-value;
        $("p").removeAttr('title');     // removeAttr(); to remove attr;
        $("p").addClass("demo");
        $("p").removeClass("demo");
        $("p").html();                  // get content of first matched ele; (val) sets the content;
        $("p").text();                  // get combined text of all matched ele; (val) sets the content of all;
        $("li").eq(2).addClass("selected"); // match 2nd li ele; locate ele on basis of matched index value;
        $("selector").filter("selector");   // filter ele on basis of specified selector;
        $("selector").is("selector");       // checks if it has specified selector; and filters on that basis;
        $("selector").not("selector");      // checks if !has specified selector; and filters on that basis;
        $("selector").children();   // or; .next(); .nextAll(); .parent(); .siblings(); and many more;
    // jquery Manipulators (modify or manipulate the content of HTML)
        $("p").html("AbcLimited");      // set the content of p elements;
        $("p").append("AbcLimited");    // appends content at the end of the existing content;
        // after(); before(); clone(); detach(); empty(); hasClass(); prepend(); remove(); replaceAll(); text();
        // css codes
            $("this").css("background-color");      // retrives the value;
            $("this").css("background-color","red");// sets the value;
            $("this").css({"background-color":"red", "font-size":"50%"});   // multiples values;
            // mehods to manipulate css prop: css(); height(); position(); scrollLeft(); scrollTop(); width();
    
    // jquery Events
        $("this").blur(function(event){})    // binds a function to the blur event of selected ele;
        // bind();  adds one or more event handlers to elements;
        // change(); click(); dbclick(); die(); error(); focus(); hover(); keydown(); load(); mouseenter(); scroll(); submit();

    // jquey Effects
        // to produce an animation
        $(document).ready(function(){
            $(".clickme").click(function(event){
                $(".target").toggle('slow', function(){  // toggle() to reveal state of an ele b/w revealed and hiddent;
                    $(".log").text('Transtion Complete');
                })
            })
        })
        // methods to create effects
        // animate(); delay(); fadeIn(); fadeOut(); fadeTo(); hide(); show(); stop(); toggle();

    // jquery with ajax
        // load(); loads static or dynamic data using jquery;
        $("#stage").load("result.html");
        // methods: ajax()- creates an ajax request; ajaxCompleted()- executes if completed; 
        // ajaxError(); ajaxSend(); ajaxSetup(); ajaxStart(); get(); getJSON(); param(); post();
        
// HTML5 Black Book jquery reference completed