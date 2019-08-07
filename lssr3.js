$( "select" ).select(function () {

    $( "select option:selected" ).each(function() {


    	var id = document.getElementById('select');
    	//right now we are just using print we need to set that to an attribute.
    	//we empty out the last value!!!!
    	//$("print").empty();

    	switch ($(this).text()) {
    		case "Name":
            	field = $('<input type="textbox" class="field1" style="width:80px" value=@lssrRecord.FormCreator \>');
            	//document.getElementById(".menu1").style="width:85px";
    		break;
    		case "Company":
    		  	field = $('<input type="textbox" class="field1" style="width:300px" value=@lssrRecord.CertificateNumber \>');
            break;
            case "Model":
            	field = $('<input type="textbox" class="field1" style="width:130px" value=@lssrRecord.CertificateNumber \>');
            break;
            case "S/N":
            	field = $('<input type="textbox" class="field1" style="width:80px" value=@lssrRecord.CertificateNumber \>');
            break;
            case "Tail":
            	field = $('<input type="textbox" class="field1" style="width:80px" value=@lssrRecord.CertificateNumber \>');
            break;
            case "Hours":
            	field = $('<input type="textbox" class="field1" style="width:80px" value=@lssrRecord.CertificateNumber \>');
            break;
            case "Date":
            	field = $('<input type="textbox" class="field1" style="width:80px" value=@lssrRecord.CertificateNumber \>');
            break;
            case "Cert":
            	field = $('<input type="textbox" class="field1" style="width:80px" value=@lssrRecord.CertificateNumber \>');
            break;
            case "Manufacturer":
            	field = $('<input type="textbox" class="field1" style="width:80px" value=@lssrRecord.CertificateNumber \>');
            break;
    	};
    	
        $( "print" ).append( field );
    	//$( "print" ).text( field );

  //  	field = $('<input type="textbox" class="field1" style="width:75px" placeholder=@lssrRecord.FormDate id1=\"field1 \>');
    });
    
 //       $( "print" ).append(field); 



  })
 .change();


menu1.addEventListener("change", () => {
    $( "menu1 option:selected" ).each(function() {
        $( ".menu_1").empty();
            switch ($(this).text()) {
                case "Name":
                field = $('<input type="textbox" class="field1" style="width:80px" value=@lssrRecord.FormCreator \>');
                //document.getElementById(".menu1").style="width:85px";
            break;
            case "Company":
                field = $('<input type="textbox" class="field1" style="width:300px" value=2 \>');
            break;
            case "Model":
                field = $('<input type="textbox" class="field1" style="width:130px" value=3 \>');
            break;
            case "S/N":
                field = $('<input type="textbox" class="field1" style="width:80px" value=@lssrRecord.CertificateNumber \>');
            break;
            case "Tail":
                field = $('<input type="textbox" class="field1" style="width:80px" value=@lssrRecord.CertificateNumber \>');
            break;
            case "Hours":
                field = $('<input type="textbox" class="field1" style="width:80px" value=@lssrRecord.CertificateNumber \>');
            break;
            case "Date":
                field = $('<input type="textbox" class="field1" style="width:80px" value=@lssrRecord.CertificateNumber \>');
            break;
            case "Cert":
                field = $('<input type="textbox" class="field1" style="width:40px" value=@lssrRecord.CertificateNumber \>');
            break;
            case "Manufacturer":
                field = $('<input type="textbox" class="field1" style="width:280px" value=@lssrRecord.CertificateNumber \>');
            break;
        };

    $( ".menu_1").append( field );
});

})//.change();
