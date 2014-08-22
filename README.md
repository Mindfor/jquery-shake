#jquery-shake#
Shakes the element, horizontally. 
##Demo:##
<http://mindfor.ru/docs/shake-demo.html>    

##Usage
* include jQuery:     
```<script src="http://code.jquery.com/jquery-￼1.11.0.min.js "></script>  ```        
* add js:  
```￼￼<script src="./jquery.shake.js"></script>  ```   
            
##Shake##
￼call the plugin, with js   
￼$.shake():
* $("#element").shake();    

##Options:##
* __￼￼￼dircection__ (default:"left")    
￼￼Type: String  
￼A value of "left" or "right" will shake the element horizontally  
* __vibration__ (default: 6)  
￼￼Type: integer     
￼Number of oscillations 
* __amplitude__ (default: 50)   
￼￼Type: integer     
￼Value of the first deviation   
* __timeFirstDeviation__ (default: 240)   
￼￼Type: integer  
￼Time of the first deviation    

##Example:    ##
￼￼Shake a input
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>shake demo</title>
    <style>
        #Demo {
            width: 100px;
            height: 20px;
            background: #111;
        }
    </style>
    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="./jquery.shake.js"></script>
</head>
<body>
    <input id="Demo">
    <script>
        $(document).click(function () {
            $("#Demo").shake();
        });
    </script>
</body>
</html>
```
