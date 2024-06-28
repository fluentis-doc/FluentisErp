---
title: Parametri Pagamenti Fornitore
sidebar_position: 3
---

I parametri del modulo **Pagamenti fornitore** si trovano in **Parametri > Tesoreria**.

Nei parametri del modulo Pagamenti fornitore si possono pre-impostare gli elementi di default da proporre nelle procedure del modulo. 

> **Percorso di creazione dei tracciati Riba**: impostazione della  directory standard di creazione del tracciato telematico per i bonifici Italia. Si consiglia di creare una directory condivisa di rete all'interno di un server, per poter accedere da tutte le postazioni della procedura.ATTENZIONE: il campo è obbligatorio ma, Fluentis 2015 utilizza il sistema della gestione documentale integrato per memorizzare il file .xml del tracciato telematico per le distinte di pagamento. Il file sarà dunque prelevabile direttamente dalla form della distinta di pagamento.  
> **Standard ABI**: impostazione del formato del file telematico secondo lo standard ABI (raccomandato).  
> **ABI Centro Applicativo**: impostazione di un codice ABI dell'eventuale centro applicativo che procederà a veicolare le comunicazioni (normalmente è un campo non necessario).  
> **Imponi la banca d'appoggio presente in anagrafica del fornitore**: con il flag attivo verrà imposto l'utilizzo della banca d'appoggio inserita nell'anagrafica del fornitore (Griglia Banca d'appoggio) rispetto alla banca d'appoggio definita nella registrazione contabile, e collegata alla partita aperta, tramite la griglia Tipi Pagamento nell'anagrafica. Il parametro è visibile (e nuovamente disattivabile di volta in volta) nella procedura Creazione Automatica Pagamenti Fornitori. Non è visibile, invece, se si crea una nuova distinta di pagamento (Pagamenti Fornitori > Crea Pagamento Fornitore) e pertanto in questo caso va gestito da qui.  
> **Gestione rif. Iban**: impostazione dell'obbligo di gestione dei codici IBAN: in questo caso il tracciato non sarà creato in caso manchino gli Iban di alcuni pagamenti in distinta. 