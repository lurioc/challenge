function encriptar() {
    let texto = document.getElementById("texto").value;
    if (texto === "") {
        mostrarMensaje(true);
        return;
    }

    let textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");

    mostrarResultado(textoEncriptado);
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    if (texto === "") {
        mostrarMensaje(true);
        return;
    }

    let textoDesencriptado = texto.replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ai/g, "a")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");

    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(mensaje) {
    let resultado = document.getElementById("resultado");
    let mensajePorDefecto = document.getElementById("mensaje");

    mensajePorDefecto.style.display = "none";
    resultado.style.display = "block";
    resultado.value = mensaje;
    document.getElementById("copiarBtn").style.display = "inline";
}

function mostrarMensaje(esPorDefecto) {
    let resultado = document.getElementById("resultado");
    let mensajePorDefecto = document.getElementById("mensaje");

    if (esPorDefecto) {
        mensajePorDefecto.style.display = "flex";
        resultado.style.display = "none";
        document.getElementById("copiarBtn").style.display = "none";
    }
}

function copiar() {
    let texto = document.getElementById("resultado").value;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado al portapapeles");
    });
}
