import { NextResponse } from "next/server";

export async function POST(request){
    const bike = await request.json()
    /* Mudar o URL PARA O IP DA API */
    const url = "http://localhost:8080/apiporto/webapi/site"

    let cadastroDaBike = {
        "acessorio" : {
            "nmAcessorio": bike.nmAcessorio
        },	
        "bicicleta" : {
            "cdSerie": bike.cdSerie,
            "vlBicicleta":bike.vlBicicleta,
            "tpBicicleta": bike.tpBicicleta
        },
        "cliente" : {
            "dsEmail": bike.dsEmail
        },
        "marca" : {
            "nmMarca": bike.nmMarca
        },
        "modelo" : {
            "nrModelo": bike.nrModelo,
            "nmModelo" : bike.nmModelo
        }
    }

    let mensagem = 404;

    let response = fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cadastroDaBike),
    })
    try {
    response = await response
    if (response.status === 200) {
        mensagem = 'Cadastro realizado com sucesso'
    } else if (response.status === 400) {
        mensagem = 'Erro no formulário'
    } else if (response.status === 500) {
        mensagem = 'Erro na API'
    }
    } catch (error) {
    mensagem = 'Erro no servidor'
}

    return NextResponse.json({status: response.status, body: mensagem})

}