---
title: Tabelas módulo risco cliente
sidebar_position: 7
---

Não estão presentes especificas do módulo em objeto, mas se avisa que vários tipos de documento de compra e venda apresentam impostações associadas com o risco cliente.

O crédito cliente retira os dados dos seguintes documentos da área de venda:

**Tipo ordem cliente**: o 'flag crédito' indica que se o documento (imprimido e confirmado) é considerado no calculo do crédito cliente ou não. O flag 'Excluir o bloco' exclui este tipo de documento pelo bloco do cliente;

**Tipo nota de entrega**: o 'flag crédito' indica que se o documento (imprimido e não valorizado na fatura) é considerado no calculo do crédito cliente ou não. O flag 'Excluir o bloco' exclui este tipo de documento pelo bloco do cliente;

**Tipos fatura**: o 'flag crédito' indica que se o documento (imprimido e não contabilizado) é considerado no calculo do crédito cliente ou não. O flag 'Excluir o bloco' exclui este tipo de documento pelo bloco do cliente;

Enfim, cada registro cliente apresenta duas impostações associadas no modulo em objeto:

**O tipo controle crédito**:

**Bloco doc. monitor crédito**: o documento da área de venda que excede o crédito vai ser bloqueado e portanto vai precisar autorizá-lo para proceder com as fases sucessivas do fluxo documental;

**Monitor crédito**: vai se efetuar simplesmente um controle do crédito com eventual mensagem ao usuário da acontecida superação;

**Bloco de grupo**: como para o primeiro, mas o cálculo é cumulativo para todas as sociedades do banco de dados que pertencem ao mesmo registro cliente;

**Monitor de grupo**: como para o segundo, mas o cálculo é cumulativo para todas as sociedades do banco de dados que pertencem ao mesmo registro cliente.

A segunda impostação é o check 'Controle exposição', que rende visível o cliente na máscara da exposição clientes.






