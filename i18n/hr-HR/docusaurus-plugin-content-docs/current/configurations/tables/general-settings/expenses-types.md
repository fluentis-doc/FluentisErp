---
title: Tipi spese
sidebar_position: 11
---

In questa tabella vengono definite delle tipologie di spesa finale da aggiungere ai documenti (in particolare del ciclo attivo) per l'addebito automatico.

Possono essere aggiunte poi direttamente nel documento , oppure nell'anagrafica del cliente per l'automazione dell'inserimento della spesa.

**Tipo / Descrizione:** Codice e descrizione della spesa per richiamarla

**Classe / Codice / Descrizione articolo:** campo per effettuare l'associazione tra il tipo spesa ed un codice articolo di riferimento

**Conto / Sottoconto / Descrizione:** necessario per associare un conto contabile sul quale contabilizzare automaticamente il riaddebito della spesa in oggetto

**IVA / Descrizione:** necessario per specificare il codice iva (aliquota o codice di esenzione) al quale sarà fatturato il riaddebito della spesa

**Tipo IVA:** Tipo iva per gestire il riaddebito (Salvo casi o regimi iva particolari indicare Generico)

**Varie:** identifica una spesa varia ad addebito semplice, senza particolari logiche

**Incasso:** apponendo questo flag la spesa sarà calcolata in automatico una per ogni rata di ricevuta bancaria definita nelle condizioni di pagamento (funziona pertanto soltanto con questa tipologia di pagamento)

**Trasporto:** apponendo questo flag la spesa sarà calcolata in fattura una per ogni ddt che ha contribuito a generare la fattura

**Imballo:**

**Spedizione:**

**Viaggio:**

**Bollo / Valore Bollo:** utilizzando questa tipologia con il relativo valore indicato nel campo adiacente si attiva la logica del bollo in fattura nel caso di esenzione iva e documento superiore ai 77euro (vedere norme attualmente in vigore per dettagli), oltre alla valorizzazione del tag corrispondente nella fattura elettronica.

**Val. stat. intra:** con questa logica la spesa finale inserita in fattura sarà ripartita sulle righe del documento ai fini della creazione dei modelli intrastat dalla procedura di creazione automatica (dalle fatture)

**Ripartito:**

**RAEE:**

**IVA obbl.**

**Categoria merceologica:**

**Codici / Descrizione Paghe:** opzione utile nel modulo Progetti e Dipendenti; nell’ esportazione delle ore dei dipendenti dalle attività inserite (viene esportato un file Xml per la gestione paghe di Zucchetti), le ore viaggio e i rimborsi spese (che arrivano dagli interventi) hanno necessità di essere codificate per inserirle nelle paghe. Quindi viene associata la tabella spese, che si usa nelle attività, ai codici paghe del modulo Dipendenti

**Cassa previdenza / Soggetto Ritenuta / Codice P.A.:** campi per consentire di gestire nel file xml delle fatture elettroniche di vendita la *Cassa previdenza* che si può applicare nella fattura di un professionista.

Se l'anagrafica cliente della fattura ha il flag [**ritenuta d’acconto**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) attivo, infatti, un percipiente che utilizza Fluentis potrebbe creare una fattura di vendita e spedirla allo Sdi: se ha un riaddebito spesa Cassa previdenza (il 4% tipicamente) codifica questo tipo spesa nella presente tabella, poi imposta se è soggetta a ritenuta o meno (con il secondo flag) e inserisce nel terzo campo il codice che lo Sdi prevede:


:::note Esempio di codifica

TC01	Cassa nazionale previdenza e assistenza avvocati e procuratori legali 

TC02	Cassa previdenza dottori commercialisti

TC03	Cassa previdenza e assistenza geometri

TC04	Cassa nazionale previdenza e assistenza ingegneri e architetti liberi professionisti

TC05	Cassa nazionale del notariato

TC06	Cassa nazionale previdenza e assistenza ragionieri e periti commerciali

TC07	Ente nazionale assistenza agenti e rappresentanti di commercio (ENASARCO)

TC08	Ente nazionale previdenza e assistenza consulenti del lavoro (ENPACL)

TC09	Ente nazionale previdenza e assistenza medici (ENPAM)

TC10	Ente nazionale previdenza e assistenza farmacisti (ENPAF)

TC11	Ente nazionale previdenza e assistenza veterinari (ENPAV)

TC12	Ente nazionale previdenza e assistenza impiegati dell'agricoltura (ENPAIA)

TC13	Fondo previdenza impiegati imprese di spedizione e agenzie marittime

TC14	Istituto nazionale previdenza giornalisti italiani (INPGI)

TC15	Opera nazionale assistenza orfani sanitari italiani (ONAOSI)

TC16	Cassa autonoma assistenza integrativa giornalisti italiani (CASAGIT)

TC17	Ente previdenza periti industriali e periti industriali laureati (EPPI)

TC18	Ente previdenza e assistenza pluricategoriale (EPAP)

TC19	Ente nazionale previdenza e assistenza biologi (ENPAB)

TC20	Ente nazionale previdenza e assistenza professione infermieristica (ENPAPI)

TC21	Ente nazionale previdenza e assistenza psicologi (ENPAP)

TC22	INPS

:::

---

**Lingue**

Per ogni tipo di pagamento selezionato nella griglia superiore, è possibile definire delle descrizioni in lingua: utilizzabile per stampe personalizzate.
