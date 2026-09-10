# E-commerce de Impressões 3D

Projeto desenvolvido para a disciplina de Desenvolvimento de Aplicações Corporativas, do curso de **Análise e Desenvolvimento de Sistemas do IFPB – Campus Monteiro**.

## Descrição

O projeto consiste no desenvolvimento de uma plataforma de e-commerce destinada à comercialização de produtos confeccionados por impressão 3D.

A plataforma permitirá que clientes realizem cadastro e login, consultem o catálogo, visualizem informações detalhadas dos produtos, realizem pedidos e acompanhem o andamento da fabricação e da entrega.

O sistema também disponibilizará funcionalidades administrativas para o gerenciamento de produtos, materiais, pedidos e da fila de produção.

## Tecnologias utilizadas

### FrontFrontendFrontendFrontend

* React
* Vite
* JavaScript
* HTML
* CSS

### Backend

* Java
* Spring Boot
* API REST

### Banco de dados

* MySQL

## Funcionalidades principais

### Cliente

* Criar conta e realizar login;
* Consultar o catálogo de produtos;
* Visualizar detalhes dos produtos;
* Realizar pedidos;
* Acompanhar o status dos pedidos.

### Administrador

* Gerenciar produtos;
* Gerenciar materiais de fabricação;
* Consultar e administrar pedidos;
* Atualizar o status dos pedidos;
* Organizar e acompanhar a fila de produção.

## Status dos pedidos

Os pedidos poderão possuir os seguintes estados:

* `RECEBIDO`
* `EM_PRODUCAO`
* `PRONTO`
* `ENVIADO`
* `CONCLUIDO`
* `CANCELADO`

## Arquitetura

O frontend e o backend serão desenvolvidos separadamente e se comunicarão por meio de uma API REST. O backend utilizará uma arquitetura em camadas para separar as regras de negócio, o acesso aos dados e a comunicação com o frontend.

## Documentação da primeira release

A primeira release contém:

* Descrição do projeto;
* Requisitos funcionais;
* Requisitos não funcionais;
* Diagrama de casos de uso;
* Modelo lógico do banco de dados.

## Equipe

* Kaléu Victor
* Adson Ruan
* Kaio Bezerra

## Instituição

Instituto Federal de Educação, Ciência e Tecnologia da Paraíba — IFPB
Campus Monteiro
Curso de Análise e Desenvolvimento de Sistemas
