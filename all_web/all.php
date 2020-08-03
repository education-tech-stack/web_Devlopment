<?php
    # to embedde in HTML <?php and ? > 
    # file extensions .php .php3 .phtml .ph3 .ph4 .php5 .ph5
    echo "Hello World!";
    # variables (starts with $)
    $mystring="String object";
    # String Methods Built-in
    $mystring.trim(); // or
    trim($mystring);
    substr($mystring, 0, strlen($mystring));
    strpos($mystring, "o");
    ucfirst($mystring);     // capitalizes the first letter 
    substr_replace($mystring, "to replace");
    strtoupper($mystring);  // convert to upper case

    # Arrays
    $arr=array(10,20,40);
    echo $arr[0];
    
    # comment
    // comment
    /* comment multi-line */

    # Control Structure
        $d=date("D");
        if ($d=="Fri")
            echo "Friday";
        else
            echo "Good day!";
        
        switch ($num){
            case 1:
                print "First";
            break;
            case 2:
                print "Second";
            break;
            default:
            print "Try again.. ";
        }
        for ($cnt=10; $cnt<=500; $cnt+=10){
            echo "<tr> <td>";
            echo $cnt;
            echo "</td></td>";
            echo $brush_price * $cnt;
            echo "</td> </tr>";
        }
        # similary for; while; do-while;
        foreach ($arr as &$value){      # itterate through array automatically;
            $value=$value*2;
        }
        unset($value);
    # Methods
    function mySignatures($firstname, $lastname){
        echo "Hello".$firstname." ".$lastname."</br />";
    }
    mySignatures("Charu", "Verma");
?>