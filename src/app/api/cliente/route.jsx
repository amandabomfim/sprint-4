import { NextResponse } from "next/server";

export async function POST(request){
    const user = await request.json()
    /* Mudar o URL PARA O IP DA API */
    const url = "http://localhost:8081/apiporto/webapi/cliente"

    let mensagem = 404;

    let response = fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    try {
    response = await response
    if (response.status === 200) {
        mensagem = 'Cadastro realizado com sucesso'
    } else if (response.status === 400) {
        mensagem = 'Email no formulário (Pode ser que o email já esteja cadastrado)'
    } else if (response.status === 500) {
        mensagem = 'Erro na API'
    }
    } catch (error) {
    mensagem = 'Erro no servidor'
}

    return NextResponse.json({status: response.status, body: mensagem})

}