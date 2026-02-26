const express = require("express");
const cors = require("cors");
const { PrismaClient } = require('@prisma/client');


const app = express();
app.use(cors());
const prisma = new PrismaClient();

app.use(express.json());

/*
=================================
CREATE
=================================
*/
app.post("/api/usuarios", async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        const novoUsuario = await prisma.usuario.create({
            data:{
                nome: nome,
                email: email,
                senha: senha,
                perfil:{
                    create:{
                        perfil_nome: nome
                    }
                }
            },
            include: {
                perfil:true
            }
        });

       
        return res.status(201).json({
            mensagem: "Usuário cadastrado com sucesso",
            user: novoUsuario
        });

    } catch (error) {
        return res.status(500).json({ erro: error.message });
    }
});

/*
=================================
READ - LISTAR
=================================
*/
app.get("/api/usuarios", async (req, res) => {
    try {
        const usuarios = await prisma.usuario.findMany({
            include: {
                perfil: true
            }
        });

        return res.json({
            mensagem: "Usuários encontrados com sucesso",
            users: usuarios
        });

    } catch (error) {
        return res.status(500).json({ erro: error.message });
    }
});


app.get("/api/usuarios/:id", async (req, res) => {
    try {
       const {id} = req.params;

        const usuario = await prisma.usuario.findUnique({
            where:{
                id: Number(id)
            },
            include:{
                perfil:true
            }
        });
        if(!usuario){
            return res.status(404).json({erro: 'Usuario não encontrado'})
        }

        res.status(200).json(usuario);

    } catch (error) {
        return res.status(500).json({ erro: error.message });
    }
});


/*
=================================
UPDATE
=================================
*/
app.put("/api/usuarios/:id", async (req, res) => {
    try {
       const {id} = req.params;
       const{nome,email} = req.body;
       const userAtualizado = await prisma.usuario.update({
        where:{
            id: Number(id)
        },
        data:{
            nome: nome,
            email:email
        },
        select:{
            id: true,
            nome: true,
            email: true,
            senha: true
        }
       })
       return res.json({
            mensagem: "Usuário atualizado com sucesso",
            user: userAtualizado
        });

    } catch (error) {
        // P2025 é o código padrão do Prisma para "Registro não encontrado"
        if (error.code === 'P2025') {
            return res.status(404).json({
                mensagem: "Usuário não encontrado"
            });
        }

        // Retorna erro 500 para outras falhas (ex: tentar usar um email que já existe)
        return res.status(500).json({ erro: error.message });
    }
});

/*
=================================
DELETE
=================================
*/
app.delete("/api/usuarios/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // O Prisma executa o comando DELETE direto no banco
        await prisma.usuario.delete({
            where: {
                id: Number(id) // Novamente, garantindo que o ID seja um número
            }
        });

        // Se passar do delete sem cair no catch, é porque deu certo!
        return res.json({
            mensagem: "Usuário removido com sucesso"
        });

    } catch (error) {
        // P2025: Erro disparado quando tentamos deletar algo que não existe
        if (error.code === 'P2025') {
            return res.status(404).json({
                mensagem: "Usuário não encontrado"
            });
        }

        // Qualquer outro erro (ex: falha de conexão com o banco)
        return res.status(500).json({ erro: error.message });
    }
});

// Iniciando o servidor na porta que você definiu
app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001 🚀");
});