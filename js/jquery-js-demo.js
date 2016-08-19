$(document).ready(function(){
    $("#js-demo").click(function(){
        alert("Value: " + $("#js-p-demo").text());
    });
});

// Ajax Load jQuery
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").load("demo_test.txt", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
                alert("External content loaded successfully!");
            if(statusTxt == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
    });
});