import { NextResponse } from "next/server";

export async function POST(request) {
    const vistoria = await request.json();
    const data = {
        form: vistoria.form,
        bike: {
            cdSerie: vistoria.bike.cdSerie,
            nmMarca: vistoria.bike.nmMarca,
            nmModelo: vistoria.bike.nmModelo,
        },
    };

    const url = "http://127.0.0.1:8000/vistoria";

    let mensagem = 404;

    let response = fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    try {
        response = await response;
        if (response.status === 200) {
            mensagem = "Cadastro realizado com sucesso";
        } else if (response.status === 400) {
            mensagem = "Erro no formulário";
        } else if (response.status === 500) {
            mensagem = "Erro na API";
        }
    } catch (error) {
        mensagem = "Erro no servidor";
    }


    return NextResponse.json({ status: response.status, body: mensagem });
}
