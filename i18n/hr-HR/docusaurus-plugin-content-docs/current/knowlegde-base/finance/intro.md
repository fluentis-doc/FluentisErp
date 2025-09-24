---
title: FAQ Administracija 
sidebar_position: 1
---


<details>

  <summary>1. Koje se elektroničke fakture spremaju u folder postavljen u tablici <b>Konfiguracija elektroničkih dokumenata?</b>?</summary>
  
Postoje dva uvjeta u kartici klijenta.   

Prvi uvjet je flag <b>Potpis dokumenta</b>, koji mora biti aktivan.                 
Drugi uvjet je flag <b>Elektroničko fakturiranje s potpisom</b>, koji je 3-state flag:   

- Kada je postavljen na 1, za klijenta se predviđa potpis, bez obzira na druge konfiguracijske opcije, pa se datoteka uvijek izvozi u mapu definiranu u konfiguraciji elektroničkih dokumenata radi potpisivanja;             

- Kada je postavljen na 0, za klijenta se ne predviđa potpis, bez obzira na druge konfiguracijske opcije, pa se datoteka ne izvozi u mapu konfiguracije elektroničkih dokumenata, čak i ako je mapa definirana;      

- Kada je Null (kao u ovom slučaju, što je zadana postavka), vrijedi postavka u ‘konfiguraciji elektroničkih dokumenata’, tj. ako postoji putanja za kreiranje datoteke, datoteka se uvijek kreira, inače se ne kreira.

</details>


<details>

  <summary>2. Za težine, tijekom kreiranja elektroničke fakture, Fluentis mi kaže da ne smiju biti veće od 9.999. Kako mogu ukloniti ovu blokadu? </summary>
  
Ova blokada je vezana uz pravila Elektroničkog fakturiranja, koje ne prihvaća TEŽINE veće od 9.999.
Da biste zaobišli ovaj problem, potrebno je skalirati jedinicu mjere (UM) ako se premaši granica od 9.999, tako da se koristi odgovarajuća jedinica mjere i dobiju željene vrijednosti.  

</details>


<details>

  <summary>3. Kako je moguće unijeti flag <b>Grupa PDV-a</b> u već kreiranu <b>Izjavu o namjeri</b>? </summary>
  
Potrebno je izvršiti sljedeći SQL update, unoseći ID predmetne izjave o namjeri:  

update CA_DichIntMain set CADM_IsVatGroup = 1 
where CADM_Id = '[id della dichiarazione di intento]'

</details>


<details>

  <summary> 4. Kako je moguće izvršiti ispis mastrina filtriranjem pokreta na temelju ekonomske kompetencije?
Naime, primjerice, prilikom postavljanja traženog perioda, u ispisa pomoćnih konta, u poljima "od datuma kompetencije" i "do datuma kompetencije", ne uzima se u obzir ekonomska kompetencija, već se čini da se čita datum kompetencije koji je u računovodstvenim knjiženjima smješten pored datuma knjiženja.</summary>

Potvrđujem da se u filtrima, kada piše "od datuma kompetencije" do "datuma kompetencije", misli na kompetenciju (tzv. "računovodstvenu") zaglavlja.
Uobičajeno se ti datumi poklapaju, ali se mogu koristiti (iako to u praksi rijetko tko radi) za knjiženje ispravki, primjerice na datum odobrenja bilance koje se odnose na 31.12., gdje je taj datum možda već blokiran za konačni ispis dnevnika i stoga ne bi prihvatio datum knjiženja.
Što se tiče datuma ekonomske kompetencije, ispis mastrina – i šire gledano, cijeli sustav – nije predviđen za rad na taj način.
Najispravnija procedura je izračunati zatvaranje računa za razdoblje (intra-godišnja zatvaranja) i pokrenuti odgovarajuća knjiženja ispravki i integracija.
Alternativno, mogu preporučiti korištenje forme za pregled konta, gdje se preko object navigatora mogu dodati svojstva From AccrualDate i To AccrualDate, što su zapravo datumi ekonomske kompetencije ("od" – "do"), te koristiti filter na prvom redu detaljne mreže (grida).
Još jedna alternativa je prilagodba izvještaja i forme za pokretanje dodavanjem filtera i polja itd...

</details>

<details>

  <summary>5. Zašto, uspoređujući zatvaranje računa unutar godine obračunato od 1.1. do 31.12. s rezultatima iz modula administracije, u zatvaranju u controlling modu nalazim razgraničenja koja u administraciji nisu izračunata?</summary>

Modul controlling u nekim situacijama radi na fleksibilniji način u usporedbi s modulom administracije.
Naime, sposoban je ispraviti bilo koji trošak ili prihod (s kompatibilnim tipom konta) čak i za udjele ekonomske nadležnosti iz prošlosti. Na primjer, ako je trošak evidentiran u godini X, a nadležnost je djelomično (ili potpuno) u godini X-1, prilikom obrade zatvaranja godine X svejedno će doći do ispravke (npr. aktivno razgraničenje).
Potrebno je obratiti posebnu pažnju na **upravljanje dispravkama izvršenima u modulu administracije.**
**Preporučuje se izvršiti izračun i knjiženje ispravki te zatvaranje i ponovno otvaranje konta s ponovnim otvaranjem ispravki putem automatskih procedura, izbjegavajući ručna knjiženja**.
Automatska procedura nameće, naime, da stavke ponovnog otvaranja ispravki imaju datum jednak originalnoj stavci na koju se ispravka odnosi te da ekonomska nadležnost te stavke bude godina X-1. Na taj način se izbjegava da prilikom obrade zatvaranja razdoblja za godinu X softver izračunava dodatne ispravke, jer su one već uključene u saldo godine X (ili unutar-godišnjeg razdoblja godine X) zahvaljujući pravilnom ponovnom otvaranju prethodne ispravke.  

</details>

<details>

  <summary> 6. Zašto u maski za upravljanje ispravkama (obračun razgraničenja i vremenskih razgraničenja), iako sam siguran da sam unio odgovarajuće računovodstvene promjene, ne dolazi ni do kakvog izračuna?</summary>

Nakon što ste se uvjerili da ste zaista unijeli računovodstvene promjene s datumima ekonomske nadležnosti koji prelaze granicu poslovne godine, i da ste koristili konta troška tipa "za ispravku" (db Fast Start) ili koji u tablici tipi conto imaju označen flag Servizio, ako još uvijek ne vidite predložene obračune (ratei ili risconti), moguće je da ste nenamjerno aktivirali flag *Mjesečno zatvaranje* u općim parametrima kontabiliteta. Taj flag zapravo aktivira logiku za strane (ne-talijanske) lokalizacije.

</details>

<details>

  <summary> 7. Povezao sam vrstu poreza na dohodak s klijentom kako bih generirao elektronički račun s potrebnim oznakama, sada želim knjižiti račun, ali vidim da knjiženje nije ispravno i ne prikazuje porez na dohodak, zašto?</summary>

Unutar tablice *Tipovi odbitka poreza*, otvorite vrstu povezanu s dotičnim klijentom i provjerite je li polje *Tipovi dospjele vrijednosti* postavljeno na *Neto dospjele vrijednosti*.

</details>

<details>

  <summary> 8. Fluentis mi u novom knjiženju uvijek predlaže zadnju valutu korištenu s odabranim razlogom, zanemarujući zadanu valutu klijenta ili dobavljača, zašto? </summary>

Provjerite postavku općeg parametra u tablici PARAM_Parameter kod CA-RegCont-General_PurposeCurrencyByTemplate. Ako je parametar postavljen na 1, bit će predložena valuta zadnje korištena s razlogom, ako je postavljen na 0, neće biti predložena nijedna valuta, slijedeći osnovnu logiku valute društva, a zatim čitanje valute klijenta ili dobavljača.  

</details>

<details>

  <summary> 9. Trebam kreirati više numeracija za prodajne račune. Nije jasno trebam li kreirati onoliko prodajnih PDV registara koliko imam numeracija ili jedan prodajni registar može imati više numeracija </summary>

Veza u procesu knjiženja prodaje je Vrsta računa > Numeracija > Povezana knjižbena osnova > PDV registar povezan s osnovom. U standardnom okruženju može postojati više vrsta, ali ako su povezane s istom osnovom, koja ima isti PDV odjeljak, numeracija je ista (zajednička, tako da će račun br. 1 za vrstu A, a zatim za vrstu B biti br. 2). U slučaju različitih vrsta računa s različitim konkurentnim numeracijama preporučljivo je razlikovati PDV odjeljke i povezati im različite osnove, inače će doći do sukoba u PDV protokoliranju. To je zato što je u osnovama obično aktivirana opcija koja predlaže PDV protokol jednako kao i broj dokumenta (kako se ne bi moralo paziti na knjiženje računa po redoslijedu brojeva). Inače je potrebno deaktivirati tu opciju

</details>

<details>

  <summary> 10. Come posso gestire una nota di accredito semplificata di sola iva TD08 per il recupero, ad esempio, dell'iva di un cliente fallito? </summary>

1. U tablici Administracija > **Vrste dokumenata** provjerite postoji li (i po potrebi dodajte) odgovarajuća vrsta dokumenta. Polje Šifra / Opis može se slobodno imenovati, na primjer *Pojednostavljeni dobropis za povrat PDV-a*, ili *Dobropis samo za PDV* itd...; flag **Odobrenje** mora biti **aktivan** a polje **Kod za elektronski oblik dokumenta** mora sadržavati *TD08*
2. U tablici Prodaja > **Vrste računa** provjerite postoji li (i po potrebi dodajte) odgovarajuća vrsta računa. Polje Šifra / Opis može se slobodno imenovati, na primjer *Pojednostavljeni dobropis za povrat PDV-a*, ili *Dobropis samo za PDV* itd... ; u polju **Vrsta računa** MORA biti odabrana opcija ***Dobropis samo za PDV***; polje **Vrsta dokumenta** treba sadržavati vrstu definiranu u točki 1., a polje **Predložak** (knjigovodstven) treba sadržavati odgovarajuću osnovu (koju je potrebno kreirati ili odabrati u tablici Administracija > Knjigovodstvene osnove), tako da knjiženje odgovara situaciji (na primjer, osnova koja upravlja dobropisima s odgovarajućim kontnim šemama).  
3. Kreirajte novi dokument u modulu Prodaja > Prodajni računi koristeći vrstu računa definiranu u točki 2.   
    - Posebna vrsta postavljena u polju Vrsta računa iz točke 2. omogućava unos u tablicu Artikala dokumenta samo redaka tipa *Napomena* gdje možete unijeti kratki opis izvršene ispravke, na primjer: "Dokument izdan prema članku 26, stavak 3 bis, D.P.R. br. 633/1972, isključivo za povrat PDV-a".  
    - Proširivanjem sekcije *Vrsta reference* u *Zaglavlju* dokumenta moguće je, osim polja Vrsta reference, unijeti i detalje prethodnog računa koji se ispravlja.  
    - U ovoj posebnoj vrsti dobropisa upravljanje vrijednostima ograničeno je isključivo na sekciju **Sažetak** točnije u tablicu *Sažetak PDV-a* gdje se direktno obrađuje polje **Porezi** (u negativnom iznosu) uz polje (šifra) PDV-a (npr. 22%), dok je osnovica nula (radi se o dobropisu samo za PDV).  
4. Generirajte XML datoteku i pošaljite elektronički račun kao i obično (prema uputama u online vodiču).  
5. Knjigovodstveno evidentirajte dobropis kao i obično. Povezujući odgovarajuću knjigovodstvenu osnovu tipičnu za dobropise u Italiji (npr. onu iz Fast Start okruženja), knjiženje će se izvršiti ispravno, obrađujući u PDV sekciji samo porez, a ne osnovicu, te u kontnom dijelu knjižeći iznos PDV-a koji se odbija s računa PDV prodaje (dužna strana) protiv potraživanja prema kupcu (potražna strana).  
</details>

<details>

  <summary> 11. Kako mogu upravljati "Obavijesti" TD29 za prijavu izostavljene ili nepravilne fakturacije od strane dobavljača? </summary>

1. U tablici Administracija > **Vrste Računa** provjerite postoji li (i po potrebi dodajte) odgovarajuću vrstu dokumenta. Polje Šifra / Opis može biti slobodno imenovano, na primjer *Obavijest o nepravilnoj fakturaciji*, flag **Samoobračun** mora biti **aktivan**, a polje **Kod za elektronski oblik dokumenta** mora sadržavati vrijednost *TD29*  
2. U tablici Prodaja > **Tipovi računa** provjerite postoji li (i po potrebi dodajte) odgovarajuća tipologija. Polje Šifra / Opis može biti slobodno imenovano, na primjer *Obavijest o nepravilnoj fakturaciji*; u polju **Priroda računa** mora biti odabrana opcija ***Račun***; polje **Vrsta dokumenta** sadržavat će tip iz točke 1.; u polju **Predložak** (knjigovodstveni) nije nužno povezivati vrijednost, budući da se ovdje radi samo o obavijesti o propuštenoj fakturaciji od strane dobavljača, bez značaja za PDV.  
3. Kreirati novi dokument u modulu Prodaja > Računi prodaje koristeći tipologiju računa kreiranu u točki 2.  
   - Proširivanjem sekcije *Vrsta reference* u *Zaglavlju* dokumenta moguće je, ako je potrebno, osim polja Vrsta reference, popuniti i detalje prethodnog računa koji se ispravlja.  
   - U polje Izdavatelj, u zaglavlju dokumenta, unijeti podatke Dobavljača, dok u polje Klijent unijeti šifru naše tvrtke posebno kreirane za samoobračune.  
   - U sekciji Artikli dokumenta unijeti jedan red s opisom robe koja nije fakturirana i pripadajućim iznosima, ili ako se radi o ispravku nepravilnog ili pogrešnog računa, iznos ispravka.
4. Kreirati XML datoteku i poslati je prema uobičajenim procedurama.  
</details>

<details>
  <summary> 12. Kako mogu otključati periodičnu PDV likvidaciju koja je ispisana kao konačna? </summary>

1. U tablici Administracija > IZJAVE > **Uplate PDV-a**, gdje su prikazani svi periodi za koje postoji konačna likvidacija, odabrati period (ili više njih) koji želite otključati i pritisnuti tipku ***Izbriši PDV likvidacije***.
2. Ako je prilikom zaključavanja likvidacije bila aktivirana opcija za automatske knjiženja prijenosa (giroconto), prikazat će se poruka koja potvrđuje automatsko brisanje tih prijenosa. Također će se prikazati poruka koja podsjeća da je potrebno ručno izbrisati zapis (za odgovarajući period) iz forme **Periodična PDV prijava** koji je bio automatski kreiran prilikom pokretanja zaključavanja likvidacije.  
3. Come riportato al punto precedente cancellare manualmente il record presente nella form **Dichiarazione iva periodica** per il periodo corrispondente a quello sbloccato. Ricordiamo che in questa tabella vengono memorizzati i dati per la gestione dei campi manuali della liquidazione (riporto credito, compensazione ecc...)
4. Riportare indietro il contatore delle pagine e la data i ultima stampa per il sezionale IVA sul quale vengono stampate le liquidazioni periodiche (generalmente codice RIE in database FastStart). Accedere alla tabella Registri IVA, localizzare il sezionale da ripristinare (es. *RIE*) e manualmente correggere, per l'anno corrente nella griglia inferiore di dettaglio, i campi **Ultima pagina stampata**, **Data ultima stampa**.
5. Se le liquidazioni periodiche vengono stampate accodandole ad un sezionale iva ordinario (ad esempio alle vendite o agli acquisti), ed in tutti i casi in cui si necessiti di modificare movimenti iva per i quali, oltre alla liquidazione in definitivo, sono stati stampati in definitivo anche i sezionali, dalla tabella **Registri IVA** premere il pulsante nella ribbon bar **Annulla stampe definitive**. Verrà mostrato un popup dove selezionare e confermare il periodo da sbloccare ed il sezionale iva da sbloccare. Nel caso di sblocco di più periodi per un determinato sezionale, si consiglia di procedere in modo consecutivo e sbloccando tutti gli eventuali periodi intermedi, procedendo dal più recente al più vecchio. Procedere quindi al ripristino manuale dei dati di *ultima pagina stampata, ultima data stampa, ed ultimo protocollo IVA*.

</details>

<details>

  <summary> 13. Come procedo per sbloccare la stampa in definitivo del LIbro Giornale? </summary>

1. Quando è stata creata la stampa in definitivo, nella form di stampa **Libro Giornale**  avevamo lanciato la stampa attivando il flag *Definitiva*. In quel momento, ricordiamo, veniva eseguito anche un controllo con relativo messaggio di avviso, se erano presenti movimenti contabili precedenti alle date selezionate nel filtro per la stampa, che non erano ancora state stampate in definitivo. Era comunque possibile ignorare l'avviso. Il period stampato in definitivo veniva bloccato da possibili modifiche alle registrazioni contabili.
2. **Per sbloccare** un periodo stampato in definitivo accedere alla form Configurazione > Parametri > Amministrazione > **Parametri di contabilità**  per l'anno corrente o quello da sbloccare ed utilizzare il pulsante **Annulla stampe definitive**. Apparirà un popup dove specificare il periodo (da data a data) per il quale eseguire lo sblocco. Lo sblocco consiste, tecnicamente, nel porre le registrazioni interessate nel periodo in stato non definitivo (campo visibile solo nel database oppure trascinando la proprietà IsPrintedInJournal - Stampato in libro giornale, in una form che punta all'oggetto FSPosting quale ad esempio la form *Registrazioni contabili* accessibile dal menu Amministrazione > Registrazioni > Registrazioni), pertanto si consiglia di agire in modo ordinato e consecutivo evitando di lasciare periodi non in definitivo, i quali saranno comunque segnalati dall'avviso di cui al punto precedente.
3. Dopo lo sblocco occorre ripristinare manualmente i dati memorizzati nella form dei Parametri di contabilità in fase di stampa definitiva:
    - Data ultima stampa libro giornale: riportandola indietro all'ultima data registrazione non sbloccata
    - Ultima pagina / riga: riportandola all'ultima non sbloccata
    - Saldo Dare / Avere: cancellando i valori che poi saranno ricreati automaticamente con la nuova stampa definitiva.
</details>

<details>

  <summary> 14. Come posso chiudere forzatamente una partita aperta? </summary>

Lo stato di una partita, (aperta, chiusa, parzialmente aperta) è calcolato dal sistema e non può essere forzato agendo direttamente sul campo dello Stato partita, verrebbe immediatamente ricalcolato.
La partita è *chiusa* (e viene rilevato questo stato) solo se esiste un pagamento per quella partita (ad essa agganciato ed avente lo stesso numero).

Pertanto il modo corretto per la chiusura di una partita creata extra-contabilmente, oppure rimasta aperta inquanto una registrazione contabile di pagamento non ha generato anche il pagamento a livello di partite, consiste nell'utilizzare la seguente procedura.

1. Accedere alla form Amministrazione > Partite > **Pagamenti**
2. Creare un nuovo pagamento con il tasto **Nuovo** 
3. Subito dopo l'apertura della form con i dati del nuovo pagamento, anzichè compilare manualmente, utilizzare il comando **Crea da partite / Pagamenti** che fa comparire un popup per la ricerca e selezione della partita aperta che si vuole chiudere. Nel popup sono presenti i consueti campi di ricerca delle partite, è sufficiente selezionare con il mouse la partita da chiudere e premere il bottone **Seleziona**. Verranno creati automaticamente i collegamenti tra partita e pagamento in modo corretto. Lo stato della partita verrà automaticamente ricalcolato come *Chiusa*.

</details>

<details>

  <summary> 15. Come posso ripristinare una ricevuta bancaria già presentata o accreditata? </summary>

La procedura di emissione di una ricevuta bancaria e la sua successiva contabilizzazione e presentazione la salvo buon fine prevede una serie di passaggi tra loro sequenziali. Pertanto nel caso in cui si tenti di eseguire il ripristino (rollback) ad esempio della,creazione di una ricevuta bancaria che è già stata presentata in banca o accreditata, il software impedirà questa operazione restituendo un messaggio di avviso.

Tutte le fasi della creazione e presentazione con successivo accredito, nonchè le operazioni di contabilizzazione, possono essere ripristinate, ma occorre agire nell'ordine logico corretto, partendo dalle operazioni eseguite successivamente fino ad arrivare alle prime fasi.

Se, pertanto, la sequenza delle operazioni compiute per la creazione è la seguente:

- Contabilizzazione della fattura di vendita con apertura partita
- Creazione automatica delle Ricevuta bancaria dalle partite aperte
- Contabilizzazione dell'emissione della ricevuta bancaria (spesso eseguita contestualmente al punto precedente - wizard)
- Creazione distinta di presentazione e inserimento degli effetti (ricevute bancarie) nella distinta
- Contabilizzazione della presentazione distinta
- Contabilizzazione Accredito Ricevute bancarie

Il rollback dovrà seguire questo ordine

- Ripristino contabilizzazione accredito
- Ripristino contabilizzazione distinta
- Rimozione dell'effetto (ricevuta bancaria) dalla distinta (che potrebbe non essere cancellabile contenendo anche altri effetti) selezionandolo da dentro la distinta e premendo il tasto CANC
- Ripristino della contabilizzazione effetti (PRIMA DEL PUNTO SUCCESSIVO)
- Ripristino della creazione automatica effetti dalle partite
 
Ricordiamo che le procedure di ripristino sono accessibili dalle stesse form dove è avvenuta la creazione, nell'apposito tab successivo, sempre presente.

</details>