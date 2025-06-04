//telefono debe tener exactamente 8 digitos, no es obligatoria
//contrasenia debe tener mas de 5 caracteres, es obligatoria
let usuarios = []
let usuarioAActualizar = null;
function validar(){
    let eTelefono = document.getElementById("telefono")
    let vTelefono = eTelefono.value
    let eErrorTelefono = document.getElementById("errorTelefono")
    let ePassword = document.getElementById("password")
    let vPassword = ePassword.value
    let eErrorPassword = document.getElementById("errorPassword")
    let valido = true

    
    if (vTelefono === "" || vTelefono.length === 8) {
        eErrorTelefono.innerText = ""
        eTelefono.style.backgroundColor = "green"
        eTelefono.style.color = "white"
    } else {
        eErrorTelefono.innerHTML = "<strong>Debe ingresar un número exactamente de 8 caracteres</strong>"
        eTelefono.style.backgroundColor = "red"
        eTelefono.style.color = "white"
        valido = false
    }

    if (vPassword.length > 5){
        vPassword.innerText=""
        ePassword.style.backgroundColor="green"
        ePassword.style.color="white"
    }else{
        vPassword.innerHTML="<strong>Debe ingresar una contraseña de mas de 5 caracteres</strong>"
        ePassword.style.backgroundColor="red"
        ePassword.style.color="white"
        valido=false
    }

    if (valido) {
        let usuario = {
            telefono: vTelefono,
            password: vPassword
        }
        usuarios.push(usuario)
        cargarDatos()
    }
}
function cargarDatos(){
    let eTabla = document.getElementById("cuerpoTabla")
    eTabla.innerHTML = ""
    for (let i = 0; i < usuarios.length; i++) {
        let usuario = usuarios[i]
        let fila = document.createElement("tr")
        let celdaTelefono = document.createElement("td")
        celdaTelefono.innerText = usuario.telefono
        let celdaPassword = document.createElement("td")
        celdaPassword.innerText = usuario.password
        let celdaAcciones = document.createElement("td")
        
        let btnEliminar = document.createElement("button")
        btnEliminar.innerText = "Eliminar"
        btnEliminar.onclick = function() {
            if (window.confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
                eliminar(i)
            }
        }
        
        let btnActualizar = document.createElement("button")
        btnActualizar.innerText = "Actualizar"
        btnActualizar.onclick = function() {
            mostrarFormularioActualizar(i)
        }
        
        celdaAcciones.appendChild(btnEliminar)
        celdaAcciones.appendChild(btnActualizar)
        
        fila.appendChild(celdaTelefono)
        fila.appendChild(celdaPassword)
        fila.appendChild(celdaAcciones)
        
        eTabla.appendChild(fila)
    }
}
function eliminar(index){
    usuarios.splice(index, 1)   
    cargarDatos()
}
function mostrarFormularioActualizar(index){
    let eFormulario = document.getElementById("formularioActualizar");
    let eTelefono = document.getElementById("telefono1");
    let ePassword = document.getElementById("password1");
    eTelefono.value = usuarios[index].telefono;
    ePassword.value = usuarios[index].password;
    usuarioAActualizar = index;
    eFormulario.style.display = "block";
}
function actualizar() {
    if (usuarioAActualizar !== null) {
        let eTelefono = document.getElementById("telefono1");
        let vTelefono = eTelefono.value;
        let ePassword = document.getElementById("password1");
        let vPassword = ePassword.value;
        usuarios[usuarioAActualizar].telefono = vTelefono;
        usuarios[usuarioAActualizar].password = vPassword;
        cargarDatos();
        document.getElementById("formularioActualizar").style.display = "none";
        usuarioAActualizar = null;
    }
}
