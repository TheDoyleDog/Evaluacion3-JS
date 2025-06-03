//telefono debe tener exactamente 8 digitos, no es obligatoria
//contrasenia debe tener mas de 5 caracteres, es obligatoria
let usuarios = []
function validar(){
    let eTelefono = document.getElementById("telefono")
    let vTelefono = eTelefono.value
    let eErrorTelefono = document.getElementById("errorTelefono")
    let ePassword = document.getElementById("password")
    let vPassword = ePassword.value
    let eErrorPassword = document.getElementById("errorPassword")
    let valido = true

    if (vTelefono.length = 8){
        vTelefono.innerText=""
        eTelefono.style.backgroundColor="green"
        eTelefono.style.color="white"
    }else{
        vTelefono.innerHTML="<strong>Debe ingresar un numero exactamente de 8 digitos</strong>"
        eTelefono.style.backgroundColor="red"
        eTelefono.style.color="white"
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
    
}
function cargarDatos(){

}
function eliminar(){
    if usuarios.filter((p, index) =>{
        if (index != indice){
            return p
        }   
    })
    cargarDatos()
}
function actualizar(){
    let eTelefono = document.getElementById("telefono1")
    let vTelefono = eTelefono.value
    let ePassword = document.getElementById("password1")

}
