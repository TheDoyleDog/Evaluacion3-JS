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
        eTelefono
    }
}