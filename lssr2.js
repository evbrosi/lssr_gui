$( "select" ).change(function () {

    $( "select option:selected" ).each(function() {
      
    
      switch ($(this).text()) {
        case "Name":
              field = $('<input type="textbox" class="field1" style="width:80px" value=@lssrRecord.CertificateNumber \>');
        break;
        case "Chocolate":
        str = $("<label for=\"" + id + "\" >" + "Date:   " + $(this).find("input.fieldname").first().val() + "</label>");
            break;
            case "Caramel":
              str = $( this ).text();
              field = $('<input type="textbox" class="field1" style="width:80px" value=@lssrRecord.CertificateNumber \>');
            break;

      };
      

  //    field = $('<input type="textbox" class="field1" style="width:75px" placeholder=@lssrRecord.FormDate id1=\"field1 \>');
    });
    
 //       $( "print" ).append(field); 
    //$( "print" ).text( str );
    $( "print").append(field);


  })
  .change();