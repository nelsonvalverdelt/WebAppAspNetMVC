
    // Mostramos en una tabla la lista de personas registradas
    GetPersonas();

    // GET: Boton Para buscar un dato por ID
    $("#btnBuscarPersona").click(function () {
        var idPersona = $("#idPersona").val();
        $.ajax({
            url: "http://localhost:3774/api/Personas/" + idPersona,
            type: "GET",
            dataType: "json",
            success: function (dato) {
                $("#mostrarDatos").show(); //Mostramos dato de Persona
                EscribirPersona(dato);
                $("#mensaje").hide(); //Ocultamos el mensaje de error
            },
            
            error: function (dato) {
                console.log(dato.nombre);
            }
        }).fail(function (jqXHR, textStatus, errorThrown) {
            // Ocultamos el div persona ya que no tiene datos
            $("#mostrarDatos").hide();
            // Mostramos el mensaje de error
            $("#mensaje").show();
            $("#mensaje").html("<div class='alert alert-danger'>No existe esta Persona</div>");

        });

    });

    // GET: Permite obtener todos los datos
    function GetPersonas() {
    $.ajax({
        url: "http://localhost:3774/api/Personas",
        type: "GET",
        dataType: "json",
        success: function (personas) {
            LeerDatos(personas);
        },
        error: function (personas) {
            $("#respuesta").html("<div class='alert alert-danger'>Error al listar</div>");
        }
    });

}

    // POST: permite registrar datos
    $("#btnRegistrar").click(function () {
        var persona = {
            nombre: $("#nombre").val(),
            apellido: $("#apellido").val(),
            edad: $("#edad").val(),
            estatura: $("#estatura").val(),
            sexo: $("#sexo").val()
        };

        $.ajax({
            url: "http://localhost:3774/api/Personas",
            type: "POST",
            data: JSON.stringify(persona),
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (response) {
                $("#resultado").html("<div class='alert alert-success'>Se registro correctamente!</div>");
            },
            error: function (response) {
                $("#resultado").html("<div class='alert alert-danger'>Error al registrar!</div>");
            }
        });

    });

    //DELETE: Permite Actualizar los datos
    $("#btnEliminarPersona").click(function () {

        var idPersona = $("#idPersona").val();
        $.ajax({
            url: "http://localhost:3774/api/Personas/" + idPersona,
            type: "DELETE",
            dataType: "json",
            success: function (dato) {
                EscribirPersona(dato);
                $("#mostrarDatos").show();
                $("#mensaje").hide();
            }
        }).fail(function (jqXHR, textStatus, errorThrown) {
            $("#mostrarDatos").hide();
            $("#mensaje").show();
            $("#mensaje").html("<div class='alert alert-danger'>Error al eliminar</div>");

        });
    });
        

    // Permite visualizar en una tabla los datos obtenidos
    // mediante una iteración
    function LeerDatos(personas) {
        var resultado = "<thead>"
                    + "<th>Nombre</th>"
                    + "<th>Apelido</th>"
                    + "<th>Edad</th>"
                    + "<th>Estatura</th>"
                    + "<th>Sexo</th>"
                    + "</thead>";

        $.each(personas, function (index, persona) {
            resultado += "<tbody><tr>"
                             + "<td>" + persona.nombre + "</td>"
                             + "<td>" + persona.apellido + "</td>"
                             + "<td>" + persona.edad + "</td>"
                             + "<td>" + persona.estatura + "</td>"
                             + "<td>" + persona.sexo + "</td>"
                          + "</tr></tbody>";

        });

        $("#table").addClass("table").html(resultado);
    
}

    //Permite utilizar el dato obtenido y devolverlo en una tabla
    function EscribirPersona(persona) {

    var resultado = "<thead>"
                + "<th>Nombre</th>"
                + "<th>Apelido</th>"
                + "<th>Edad</th>"
                + "<th>Estatura</th>"
                + "<th>Sexo</th>"
                + "</thead>"
                + "<tbody><tr>"
                         + "<td>" + persona.nombre + "</td>"
                         + "<td>" + persona.apellido + "</td>"
                         + "<td>" + persona.edad + "</td>"
                         + "<td>" + persona.estatura + "</td>"
                         + "<td>" + persona.sexo + "</td>"
                      + "</tr></tbody>";

    $("#mostrarDatos").addClass("table").html(resultado);

    }
