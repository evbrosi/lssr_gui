var firstClick = true;


$(document).ready(function() {
    $("#add").click(function() {

        // if this is the first time doing all this- we are going to actually populate most of what they need...
        if (firstClick == true) {
            firstTime();
        } else {

        var intId = $("#buildyourform div").length;

        //$("buildyourform div").remove(intId);
        $("buildyourform div").remove(intId);

        //This pushes everything down. So we don't have values on top of each other. pretty clever.
        //var intId = $("#buildyourform div").length;
        //This makes it so that the values can be identified.
        var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/>");

        // this is a menu i haven't made... yet
        var menuOptions = ["date", "hours", "tail", "manu", "model", "s/n", "name", "company", "cert", "textbox"];

        //This provides the menu for the type of submission your creating.
        // It has the option value (from the menu) then the Label.
        var fType = $("<select class=\"fieldtype\"><option value=\"textarea\">Other</option><option value=\"checkbox\">Cert</option><option value=\"date\">Date</option><option value=\"hours\">Hours</option><option value=\"tail\">Tail</option><option value=\"manu\">Manufacturer</option><option value=\"model\">Model</option><option value=\"s/n\">S/N</option><option value=\"name\">Name</option><option value=\"company\">Company</option></select>");
        

        // if (menuSelector == 0) {var fType= $("<select class=\"fieldtype\"><option value=\"date\">Date</option></select>");}

        // This is the text field next to the menu option...
        var fName = $("<input type=\"text\" class=\"fieldname\" placeholder=\"Add your own value...\" id1=\"fieldname\" >");

        //This removes a field.
        var removeButton = $("<input type=\"button\" class=\"remove\" value=\"-\" />");
        removeButton.click(function() {
            $(this).parent().remove();
        });

        //and this creates all the big stuff!
        fieldWrapper.append(fName);
        fieldWrapper.append(fType);
        fieldWrapper.append(removeButton);
        $("#buildyourform").append(fieldWrapper);
    }
    });
});

//I do this so that I can call the function when I first create.
$("#preview").click(function(){
    buildIt();
}); 

var n = function() {
  return $("div.col-xs-2").length;
    //$("body").append(fieldSet);
};

//This big boy creates the form.
var buildIt= function(){
        //this deletes the previous form... So that you aren't just generating a bunch of forms...
        // maybe I want this though
        $("#yourform").remove();
         $("#baby").empty();


        $(this).parent($("buildyourform").length).remove;

        //This prints the fun little title section. I reuse this variable so that this won't keep printing.
        var fieldSet = $("<fieldset class='col-xs-3'></fieldset>");
        
        //originally my idea was to throw all the stuff into an array but it's just not workkkkkking.
        var printableObjects =[""];
        //So here's what actually builds the thing.
        $("#buildyourform div").each(function() {

            //we replace field with ID so we can identify things based on where they're at everything would fall apart without it.
            var id = "input" + $(this).attr("id").replace("field","");

            
            // I declare the label variable- don't need to but maybe I missed something below.
            var label = $("<label for=\"" + id + "\">" + $(this).find("input.fieldname").first().val() + "</label>"); 

            // Basically this is where I say, Okay, this is the Name and this is the data placed next to each.
            switch ($(this).find("select.fieldtype").first().val()) {
                case "date":
                    label= $("<label for=\"" + id + "\" >" + "Date:   " + $(this).find("input.fieldname").first().val() +"</label>");
                    break;
                case "hours":
                    label= $("<label for=\"" + id + "\">" + "Hours:   " + $(this).find("input.fieldname").first().val() +"</label>");
                    break;
                case "tail":
                    label= $("<label for=\"" + id + "\">" + "Tail:   " + $(this).find("input.fieldname").first().val() + "</label>");
                    break;
                case "manu":
                    label= $("<label for=\"" + id + "\">" + "Manufacturer:   " + $(this).find("input.fieldname").first().val() + "</label>");
                    break;
                case "model":
                    label= $("<label for=\"" + id + "\">" + "Model:   " + $(this).find("input.fieldname").first().val() + "</label>");
                    break;
                case "s/n":
                    label= $("<label for=\"" + id + "\">" + "S/N:    " + $(this).find("input.fieldname").first().val() + "</label>");
                    break;
                case "name":
                    label= $("<label for=\"" + id + "\">" + "Name:    " + $(this).find("input.fieldname").first().val() + "</label>");
                    break;
                case "company":
                    label= $("<label for=\"" + id + "\">" + "Company:   " + $(this).find("input.fieldname").first().val() + "</label>");
                    break;
                }




                //this saves each instance.
            fieldSet.append(label);

            printableObjects.push(fieldSet);

            
            //$("form").append(fieldSet);
              //$("#baby").append(fieldSet);
              //document.getElementById('baby').append(fieldSet);

                //return "<a>" + label + "</a>";

            $("#baby").append(fieldSet);


        });

        //($(document.body.appendChild('<div col-xs-3>' fieldSet '</div>'));
    //return $("div.col-xs-2").length;
    //this prints out all the instances...

    };


// So on the first click it's going to generate a bunch of stuff for you. Just for you! Isn't that great?

var firstTime = function() {
        
    var menuSelector;

    // i'm not really using this for anything other than length but it's helpful for what I'm thinking about...
    var menuOptions = ["date", "hours", "tail", "manu", "model", "s/n", "name", "company", "cert", "textbox"];

    for (menuSelector =0; menuSelector < 10; menuSelector++ ){

        var intId = $("#buildyourform div").length;
    
        var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/>");

        // this is the little message to the side of the form.
        var fName = $("<input type=\"text\" class=\"fieldname\" placeholder=\"Input data here.\" id1=\"fieldname\" />");


        switch (menuSelector){
            case 0:
                var fType = $("<select class=\"fieldtype\"><option value=\"date\">Date</option><option value=\"hours\">Hours</option><option value=\"tail\">Tail</option><option value=\"manu\">Manufacturer</option><option value=\"model\">Model</option><option value=\"s/n\">S/N</option><option value=\"name\">Name</option><option value=\"company\">Company</option><option value=\"textbox\">Other</option><option value=\"checkbox\">Cert</option>menuOptions</select>");
            break;
            case 1:
                var fType = $("<select class=\"fieldtype\"><option value=\"hours\">Hours</option><option value=\"tail\">Tail</option><option value=\"manu\">Manufacturer</option><option value=\"model\">Model</option><option value=\"s/n\">S/N</option><option value=\"date\">Date</option><option value=\"name\">Name</option><option value=\"company\">Company</option><option value=\"textbox\">Other</option><option value=\"checkbox\">Cert</option>menuOptions</select>");
            break;
            case 2:
                var fType = $("<select class=\"fieldtype\"><option value=\"tail\">Tail</option><option value=\"hours\">Hours</option><option value=\"manu\">Manufacturer</option><option value=\"model\">Model</option><option value=\"s/n\">S/N</option><option value=\"date\">Date</option><option value=\"name\">Name</option><option value=\"company\">Company</option><option value=\"textbox\">Other</option><option value=\"checkbox\">Cert</option>menuOptions</select>");
            break;
            case 3:
                var fType = $("<select class=\"fieldtype\"><option value=\"manu\">Manufacturer</option><option value=\"tail\">Tail</option><option value=\"hours\">Hours</option><option value=\"model\">Model</option><option value=\"s/n\">S/N</option><option value=\"date\">Date</option><option value=\"name\">Name</option><option value=\"company\">Company</option><option value=\"textbox\">Other</option><option value=\"checkbox\">Cert</option>menuOptions</select>");
            break;
            case 4:
                var fType = $("<select class=\"fieldtype\"><option value=\"model\">Model</option><option value=\"manu\">Manufacturer</option><option value=\"tail\">Tail</option><option value=\"hours\">Hours</option><option value=\"s/n\">S/N</option><option value=\"date\">Date</option><option value=\"name\">Name</option><option value=\"company\">Company</option><option value=\"textbox\">Other</option><option value=\"checkbox\">Cert</option>menuOptions</select>");
            break;
            case 5:
                var fType = $("<select class=\"fieldtype\"><option value=\"s/n\">S/N</option><option value=\"model\">Model</option><option value=\"manu\">Manufacturer</option><option value=\"tail\">Tail</option><option value=\"hours\">Hours</option><option value=\"date\">Date</option><option value=\"name\">Name</option><option value=\"company\">Company</option><option value=\"textbox\">Other</option><option value=\"checkbox\">Cert</option>menuOptions</select>");
            break;
            case 6:
                var fType = $("<select class=\"fieldtype\"><option value=\"name\">Name</option><option value=\"s/n\">S/N</option><option value=\"model\">Model</option><option value=\"manu\">Manufacturer</option><option value=\"tail\">Tail</option><option value=\"hours\">Hours</option><option value=\"date\">Date</option><option value=\"company\">Company</option><option value=\"textbox\">Other</option><option value=\"checkbox\">Cert</option>menuOptions</select>");
            break;
            case 7:
                var fType = $("<select class=\"fieldtype\"><option value=\"company\">Company</option><option value=\"name\">Name</option><option value=\"s/n\">S/N</option><option value=\"model\">Model</option><option value=\"manu\">Manufacturer</option><option value=\"tail\">Tail</option><option value=\"hours\">Hours</option><option value=\"date\">Date</option><option value=\"textbox\">Other</option><option value=\"checkbox\">Cert</option>menuOptions</select>");
            break;
            case 8:
                var fType = $("<select class=\"fieldtype\"><option value=\"textarea\">Other</option><option value=\"company\">Company</option><option value=\"name\">Name</option><option value=\"s/n\">S/N</option><option value=\"model\">Model</option><option value=\"manu\">Manufacturer</option><option value=\"tail\">Tail</option><option value=\"hours\">Hours</option><option value=\"date\">Date</option><option value=\"checkbox\">Cert</option>menuOptions</select>");
                var fName = $("<input type=\"text\" class=\"fieldname hours\" placeholder=\"Write your own certification statement here.\" id1=\"fieldname\" />");
            break;
        }


           // case "textbox":
             //   var fName = $("<input type=\"text\" class=\"fieldname\" placeholder=\"Create your own label here\" id1=\"fieldname\" />");
        

       // = $("<input type=\"text\" class=\"fieldname\" id1=\"fieldname\" />");


        var removeButton = $("<input type=\"button\" class=\"remove\" value=\"-\" />");
        removeButton.click(function() {
            $(this).parent().remove();
        });

        //and this creates all the big stuff!
        fieldWrapper.append(fName);
        fieldWrapper.append(fType);
        fieldWrapper.append(removeButton);
        $("#buildyourform").append(fieldWrapper);

        }
        buildIt();
    firstClick = false;
}

// This sets it all up as a thing. 

