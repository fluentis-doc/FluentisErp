---
title: Poduzeće
sidebar_position: 3
---


:::tip[FAst Start]
Tablica se koristi u postupku [**Fast Start**](/docs/guide/fast-start)

U slučaju ručne konfiguracije, potrebno je pratiti check listu s navedene stranice.
:::

### UVOD

Tablica, koja se smatra osnovnom i neophodnom za upravljanje bilo kojim drugim podacima, omogućuje kodiranje tvrtki povezanih s bazom podataka na koju ste povezani.

Moguće je kodirati neograničen broj tvrtki koje će uvijek biti sve istovremeno dostupne unutar iste baze podataka.  
Nakon unosa / kreiranja nove tvrtke, bit će potrebno upravljati pravima vidljivosti za korisnike putem aplikacije ARM.

:::note Napomena
Prilikom instalacije Fluentis ERP-a automatski se kreira jedno početno društvo, tako da baza nikada nije potpuno prazna.
:::

Uz pojam tvrtke (ili preciznije, poduzeća, uključujući i pravni smisao, kako su evidentirana u bazi podataka), potrebno je odmah spomenuti i pojam **DIVIZIJE**.

Za svako društvo je potrebno <u>**kodirati barem jednu diviziju**</u> (na primjer, moguće ju je nazvati "*Glavna poslovnica*" ili sličnim nazivima, ako ne postoji posebna potreba za definiranjem više divizija, pod uvjetom da su shvaćeni način upravljanja i njihove specifičnosti).

:::tip INFO
Pojam divizije može se tumačiti kao poslovni odjel ili čak poslovna jedinica, koja je dovoljno značajna da ima vlastiti aktivni i pasivni ciklus, odnosno zasebno kreira dokumente, narudžbe, račune itd.
Računovodstvo, iako jedinstveno na razini društva koje sastavlja jednu bilancu, može se jednostavno filtrirati po diviziji kako bi se izradio divizijski bilanc. Također, u raznim formama – poput pretrage knjiženja ili otvorenih stavki – moguće je filtriranje po diviziji (u nekim slučajevima je to polje filtriranja inicijalno "skriveno" unutar proširivog dijela forme).
Čak su i šifrarnici artikala odvojeni jer se odnose na različite poslovne jedinice
:::

---

### UPRAVLJANJE TABLICOM  

Maska koja se otvara prikazuje popis društava prisutnih u bazi podataka.
Radi praktičnosti, u mreži su prikazana neka polja koja se nalaze i u detaljima samog društva, kako je prikazano u nastavku.

**Za kreiranje novog poduzeća** (naknadno će biti definirana jedna ili više pripadajućih divizija) **pritisnite tipku *NOVO***.

:::note Napomena 
Nakon kreiranja novog poduzeća u ovoj tablici, potrebno je upravljati dopuštenjima vidljivosti za različite korisnike putem aplikacije ARM, te prethodno definirati i samo poduzeće unutar ARM-a (izbornik "Poduzeća")  
:::

### DETALJI OSNOVNIH PODATAKA O PODUZEĆU 

**Šifra** poduzeća (koja mora odgovarati šifri definiranoj na portalu ARM)  

**Opis**: službeni naziv poduzeća (pravna forma)  

**PDV broj (OIB)**: obično se unosi bez predfiksa države, npr. IT za Italiju  

**Porezni broj poduzeća**: može biti isti kao i PDV broj

**Šifra djelatnosti**: tj. ATECO šifra glavne djelatnosti poduzeća  

**Država poduzeća**: na temelju ovog polja Fluentis prepoznaje lokalizaciju i zadane porezne postavke koje će prikazati u sustavu

**Valuta**: valuta u kojoj se vodi službeno knjigovodstvo poduzeća.  

:::note Napomena
Država i valuta poduzeća su već unaprijed postavljene jer su obavezni podaci definirani prilikom instalacije Fluentis sustava.
To su ključni podaci koji utječu na čitav niz drugih administrativnih i poreznih postavki.
Valuta, posebno, označava onu u kojoj se vodi naše službeno knjigovodstvo.  
:::

**Jezik**: ovo polje nije obavezno, ali je vrlo važno – u njemu se definira službeni jezik poduzeća.
Koristi se kao zadani jezik za ispis dokumenata, kao i za automatsko popunjavanje opisnih nizova u računovodstvu.  

**Povezana evidencija**: ovo je opcionalno polje koje služi za dvije vrste korištenja: prvo, u slučaju da je tvrtka samostalni poduzetnik, ovo je poveznica na karton koji nam omogućuje preuzimanje podataka fizičke osobe za porezne prijave.  
Drugo korištenje: u slučaju dvije tvrtke koje pripadaju grupi i imaju međusobne odnose, a time i međusobne dokumente, služi za prijenos podataka iz jedne tvrtke u drugu; na primjer, kako bi račun za prodaju prve tvrtke automatski postao račun za kupnju za drugu tvrtku: da bi se to postiglo, druga tvrtka mora znati u kojem kartonu potražiti dobavljača kako bi ispravno naslovila dokument.
Postavka se također koristi za proceduru modula Kontroling  > Zatvaranja > Međugodišnji > Konsolidacija gdje sustav neutralizira troškove i prihode, potraživanja i dugove između dviju društava koja su dio grupe, dok se troškovi i prihodi, potraživanja i dugovi "vanjski" agregiraju kako bi se dobio konsolidirani bilans.

**Polja adrese**: adresa sjedišta poduzeća

**Porezni ured (PDV)**: u ovo se polje unosi grad u kojem se nalazi nadležni porezni ured za PDV poduzeća

**REA ured / Broj REA upisa**: šifra županije i broj upisa u registar poduzeća (potrebno za e-račune)

**Upisani/ uplaćeni temeljni kapital**: podaci o stanju temeljnog kapitala poduzeća (također obavezni za e-račune)

Potrebno je unijeti i podatke o **Članovima** te **Status** poduzeća, npr. je li u likvidaciji – što je također obavezno za potrebe elektroničkog fakturiranja.

**Pravni oblik**: u ovom polju se navodi kod koji identificira vrstu tvrtke. Tablica je fiksna i unaprijed definirana.

**Porezni režim**: u ovom polju se označava pod kojim poreznim režimom se posluje. Tablica je fiksna i unaprijed definirana.

:::tip GRUPA PDV-a
U popis mogućih poreznih režima dodan je kod 61 – GRUPA PDV-a. Ako se odabere ova opcija (u slučaju da poduzeće koje se trenutno uređuje pripada grupi PDV-a, te stoga koristi svoj porezni broj (OIB), ali PDV broj matičnog poduzeća), prilikom izvoza XML datoteke za izlazni e-račun, bit će uključeni i PDV broj i porezni broj (OIB).

To je zato što sustav SDI (Sistema di Interscambio) provjerava oba podatka – ne samo PDV broj – u slučaju kada poduzeće izjavljuje da pripada grupi PDV-a.
:::

**Numero decimali per i campi qtà**: che indica quanti decimali riportare nelle stampe per i campi quantità dei documenti
Il flag **Mosta simbolo valuta** con il quale si indica se visualizzare o meno il simbolo della valuta (e i campi uguali a zero) nelle maschere di visualizzazione dei movimenti contabili

Flag **Gestione controlling** che abilita le procedure "avanzate" (set completo delle funzioni) dell’ area controlling per la società che stiamo modificando

**Società Capogruppo**: campo gestito nella procedura del modulo controlling *Consolidamento master*. Questa opera uno specifico consolidamento dati sulla società capogruppo.

Inserendo la società capogruppo, viene reso visibile all’interno del piano dei conti della società selezionata anche il campo per la corrispondenza con il piano dei conti della master.
Dunque in fase di consolidamento il movimento contabile della società controllata verrà ribaltato sul conto indicato relativo alla società master.
Il dato che viene gestito in questa elaborazione, in ogni caso, è quello gestito nel modulo controlling e già elaborato dai cost driver relativi, non il dato di contabilità generale.
Solo la parte di dato di natura contabile verrà transcodificato, mentre il movimento di centro di costo (centro aziendale) sarà riportato senza modifiche ed il prerequisito per il riporto è, infatti, quello che il codice del centro aziendale sia uguale sia nella società master sia nella società controllata.

#### Sezione inferiore

Nella parte bassa della finestra troviamo tre sezioni espandibili con ulteriori dati inseribili, in questo caso si tratta di dati di tipo opzionale che possono anche non essere presenti, quantomeno in fase iniziale:

All’interno della sezione **EDI** (Electronic Data Interchange) si possono indicare alcuni valori societari utilizzati in questi file telematici

Nella sezione **Spese bollo**, invece, si indica il valore delle spese bollo ed il valore che fa scattare l’obbligo della sua applicazione in fattura, il numero di autorizzazione al bollo virtuale e la provincia dell’intendenza di finanza. Ricordo che nella tabella società si inserisce il valore minimo delle operazioni esenti IVA che fanno scattare l’aggiunta del bollo in fattura, ma questa spesa bollo deve essere codificata anche nella tabella Tipi spese e deve essere inserita nell’anagrafica del cliente. Solo in questo modo, se l’importo in fattura è esente IVA, la spesa bollo verrà aggiunta.

**Expander Ri.Ba.** : trovano posto i dati identificativi della società per il sistema telematico bancario: il codice SIA (5 caratteri alfanumerici) e il codice CUC (8 caratteri) per il Sepa.


### Griglia delle divisioni, Banca d'appoggio di default e Logo

Nella colonna di destra della maschera abbiamo tre griglie.

Nella prima sono visibili le divisioni definite per la società. E’ bene ricordarsi sempre che per ogni società deve esistere all’interno del software almeno una divisione, anche se questa, come avviene in molti casi, corrisponde all’unica sede. Infatti viene spesso rinominata in divisione 1 o, ancora meglio, semplicemente sede. Su ogni divisione è possibile definire se il controllo di gestione avviene con cadenza settimanale o mensile.

Nella seconda possiamo indicare le 

L’ ultima parte riguarda il logo aziendale, per il quale quello di default (impostato attraverso il pulsante ***Cambia logo di default*** della ribbon bar) viene utilizzato automaticamente all’ interno dei documenti del ciclo attivo/passivo.

Occorre previamente importare una o più immagini da utilizzare come logo tramite il bottone ***Importazione immagini***.

---

### PULSANTE IMPOSTAZIONI GENERALI (PER IL LANCIO DELLA PROCEDURA DI FAST START)

Questo pulsante crea, in un database appena installato, oppure in una azienda aggiunta alla base dati tutta una serie di dati di base di default; ad esempio, un piano dei conti ed impostazioni di base di registri iva, causali contabili, tipi documenti quali ordini, bolle e fatture  ecc.

Si tratta di una funzionalità molto utile in fase di definizione della strategia per l’ avvio di una nuova società e per la relativa impostazione del software, inquanto, in certi casi, potrebbe essere più conveniente, al fine di rendere il software completamente operativo in tempi contenuti, partire da una situazione di default, facendo poi delle modifiche per adattare ad esempio il piano dei conti, le causali contabili e le altre tabelle di default alla situazione concreta, piuttosto che partire da zero creando queste tabelle ed impostazioni. 

:::tip[Più Info]
per maggiori informazioni di dettaglio vedere [**qui**](/docs/guide/fast-start)
:::

### DATI NECESSARI PER LA FATTURAZIONE ELETTRONICA

:::tip ATTENZIONE

Si consiglia di compilare in maniera compiuta tutti i dati gestiti dall’ anagrafica societaria, cogliamo tuttavia l’ occasione per evidenziare i campi che sono necessari per la creazione della fatturazione elettronica. 

-	Primo fra tutti la partita IVA e il codice fiscale 
-	Il codice destinatario e la PEC invece sono campi non obbligatori utili unicamente per memorizzare i propri dati
-	Per quanto riguarda il telefono e fax, se si desidera compilarli, si consiglia di non usare la barra per separare il prefisso per evitare possibili problemi nei controlli formali del sistema di interscambio, a fronte di caratteri non riconosciuti.
-	I campi relativi all’ ufficio REA, il primo accoglie la sigla della provincia ed il secondo il numero
-	Necessario pure il campo Soci e lo Stato, se in liquidazione o meno
-	Si dovrà anche, a tale scopo, completare con il capitale sottoscritto e versato, avendo cura di non mettere il puntino delle migliaia e di separare i due decimali con il punto anziché la virgola, sempre per via dei controlli formali dello SdI, 
-	la natura giuridica ed il regime fiscale.
:::


### IMPOSTAZIONE PER SOCIETA' APPARTENENTI AD UN GRUPPO IVA

:::tip Info: il gruppo iva
Con l’introduzione di tale norma, è stata prevista la possibilità, per le imprese collegate da interessi finanziari, economici ed organizzativi, di creare un gruppo unico, considerato come un solo contribuente (ai soli fini Iva) nei confronti del fisco. Esso sarà, pertanto, dotato di un unico numero di Partita Iva. Le imprese che fanno parte del gruppo fattureranno le operazioni verso terzi con una partita Iva comune, la partita Iva di gruppo. Invece le cessioni di beni e le prestazioni di servizi scambiati tra le aziende interne al gruppo non rileveranno ai fini dell’imponibile Iva. In conseguenza di ciò, tutte le operazioni effettuate da uno dei soggetti del gruppo sono considerate come effettuate dall’intero gruppo. La fattura e gli altri documenti sono emessi dal rappresentante del Gruppo o dai partecipanti indicando sugli stessi oltre al numero di partita Iva del Gruppo anche il codice fiscale del soggetto partecipante che ha realizzato l’operazione.
:::

Nel caso in cui una o più società esistenti nella base dati siano parte di un gruppo IVA all’interno della presente tabella è necessario  valorizzare i campi **PARTITA IVA** (con la PI del gruppo) e il **CODICE FISCALE** (specifico per la società facente parte del gruppo)
È importante andare ad impostare anche la **NATURA GIURIDICA** che dovrà essere ’61- Gruppo iva’ 


### **NUOVO TAB IVA DI GRUPPO**

In questo tab vengono inserite le configurazioni del gruppo iva costituito da una o più delle società presenti nel db.

Periodo / Anno inizio e Periodo / Anno Fine: per definire la validità dell'impostazione e sussistenza dello stato di gruppo iva

E' società capogruppo: da attivare se la società in uso è la capogruppo ovvero quella che impone la sua partita iva alle altre.

Combo box soc. Capogruppo: serve per agganciare la società in uso alla società capogruppo già presente all'interno dello stesso db.

Anagrafica Capogruppo: serve per selezionare una capogruppo esterna, dunque non presente all'interno dello stesso db come società (ad esempio perchè gestita con altro software e pertanto occorre inserirla come semplice anagrafica di contatto dalla quale leggere i dati quali la partita iva ecc.).


**NOTA: All'interno dell'elaborazione della LiPe (comunicazione trimestrale liquidazioni iva) è prese te un flag per abilitare la modalità gruppo iva per il dichiarativo stesso.**

---

### VIDEO TUTORIALS

:::important Vedi Anche
[**VIDEO TUTORIALS SULLE TABELLE GENERALI**](/docs/video/finance/intro)
:::