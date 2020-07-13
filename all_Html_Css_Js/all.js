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
