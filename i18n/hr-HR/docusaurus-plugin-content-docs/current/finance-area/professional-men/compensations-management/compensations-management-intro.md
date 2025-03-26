---
title: Upravljanje naknadama
sidebar_position: 1
---

### **POVEZNICA NA KARTICE NA DNU OBRASCA**:

** [Ukupni porez po odbitku](/docs/finance-area/professional-men/compensations-management/total-withholding-tax) **

** [Lista plaćanja](/docs/finance-area/professional-men/compensations-management/total-withholding-tax) **

** [Plaćanja po odbitku](/docs/finance-area/professional-men/compensations-management/withholding-tax-paying-in) **

** [Sažeci PDV-a](/docs/finance-area/professional-men/compensations-management/vat-summaries) **

** [Centri troškova/profita](/docs/finance-area/professional-men/compensations-management/cost-profit-centres) **

** [INPS](/docs/finance-area/professional-men/compensations-management/national-insurance) **

 

 

Iz ovog obrasca nastavljate s učitavanjem/izmjenom dokumenta primljenog od stručnjaka ili agenta, **u slučaju privremene notule i konačne fakture: razlika između toga dvoje, zapravo, odnosit će se samo na trenutno ili naknadno umetanje (dakle ulazak u izmjene već zabilježenog privremenog dokumenta) polja koja se odnose na broj i datum konačnog dokumenta.**

![](/img/it-it/finance-area/professional-men/compensations-management/compensations-management/image01.png)

 

### **POLJA ZAGLAVLJA**:

**Primatelj**: odnosi se na unos nositelja podračuna naknade: u ovo polje mogu se unijeti samo podračuni s vrstom računa agenta ili dobavljača koji imaju oznaku poreza po odbitku postavljenu u šifarniku.

Sljedeći statusni flagovi (otvoriti expander) su: 

**Uračunato**: njime automatski upravlja aplikacija u trenutku obračuna naknade. Nakon što je ova zastavica postavljena, kompenzacija se više ne može mijenjati.  **Plaćeno zadržavanje**: primijenit će se na naknadu ručno ili kroz postupak  **[Plaćanja po odbitku](/docs/finance-area/professional-men/search-compensations/withholding-tax-paying-in)** koji se može izvesti iz maske za pretraživanje naknade. 

**Certifikat**: automatski ga postavlja program kada se zadržani certifikati definitivno ispisuju.

![](/img/it-it/finance-area/professional-men/compensations-management/compensations-management/image02.png)

 

Povezano s podračunom agenta ili dobavljača, može se unaprijed definirati **vrsta poreza** po odbitku koji će se predložiti prilikom učitavanja naknade (veza se definira u registru agenta ili dobavljača).

Sljedeće polje za **bilješke** omogućuje vam da zapišete referentni tekst naknade: to je bilješka koja će se zatim prijaviti u detaljnim bilješkama svih računovodstvenih kretanja povezanih s ovom kompenzacijom. 

**Opis kretanja**: koristit će se u obračunu kompenzacije za istoimeno polje u računovodstvenom unosu.

 

Na desnoj strani: 

**Šifra plaćanja**: ovo polje, predloženo automatski (podsjećajući na primjenjivu vrstu poreza po odbitku za naknadu) ako je polje istog naziva ispunjeno u obrascu za [Upravljanje vrstom poreza](/docs/configurations/tables/finance/withholding-tax-types) po odbitku, odnosi se na šifru koja se odnosi na predložak plaćanja koji treba navesti u jedinstvenoj ovjeri primatelja (vidi upute ministarstva).

Primjer: šifra A = samozaposleni rad koji se obavlja uobičajeno; Q = provizije plaćene agentu ili prodajnom predstavniku jedne tvrtke; R = provizije plaćene agentu za više tvrtki ili prodajnom predstavniku; U = provizije plaćene poslovnom agentu......

 

**Referentni broj i godina naknade**: ovo je automatska interna numeracija programa koja mora biti jedinstvena za tvrtku.

**Datum dokumenta**: predložen je kao trenutni datum, ali se može postaviti kao datum primljene privremene obavijesti.

**Datum i broj završnog dokumenta**: oni se odnose na reference na konačni račun: ovo su obavezna polja za nastavak obračuna naknade, čak i ako referentni predložak nije predložak PDV-a. Ova dva polja će biti jedina koja se mogu mijenjati ako je plaćanje već evidentirano u računovodstvu.

**Datum primitka**: polje za bilježenje datuma primitka završnog računa (nije obavezno za računovodstvo).

 

**Projekt** (bivši radni nalog): služi za povezivanje naknade s projektom (prodajni radni nalog): to može biti slučaj procjene na gradilištu kojim se upravlja na temelju radnog naloga. Ako **[računovodstveni predložak](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** koji se koristi u računovodstvu za kompenzaciju ima aktivnu oznaku projekti (ex narudžbe), tada će troškovi uneseni u ovu kompenzaciju biti dodijeljeni projektu (narudžbi) umetnutom u ovo polje.

**Mjenjačnica / Datum valute / Valuta**: povezano s upravljanjem valutom i pripadajućim podacima o mjenjaču preuzetim iz mjenjačke tablice (valuta se postavlja iz registra agenta/dobavljača).

 

### RIGHE DI DETTAGLIO

 

**Tipo riga**: dato fonadamentale che permette di gestire automaticamente l'applicazione della ritenuta d'acconto sulla quota di costo del servizio e la sua disapplicazione sulla quota relativa lla cassa previdenziale del percipiente. Può essere di tre tipologie:



**Costo del servizio**: per inserire la quota soggetta a ritenuta per la quale Fluentis proporrà la percentuale di imponibile e l'aliquota della ritenuta letti dal tipo ritenuta, il sottoconto di costo sarà riportato dal costo di contropartita dell'agente/fornitore, il costo in valuta e in euro, l'aliquota IVA da applicare (proposta anche questa sulla base dell'anagrafica), la percentuale di cassa previdenza da calcolare sulla riga (proposta dal tipo ritenuta) e le date di competenza economica di riferimento. Queste sono gestite, per l'utente connesso, secondo i parametri di inserimento (che si possono impostare con il pulsante presente nella ribbon bar): le righe successive alla prima proporranno automaticamente il range impostato nella riga precedente.

**Cassa previdenza**: Fluentis proporrà Imponibile ritenuta 0% e il valore imponibile iva calcolato automaticamente sulla base della percentuale presente nella riga del costo del servizio precedentemente caricata.

**Altro**: viene gestito come importo soggetto a ritenuta (ma l'utente può forzare tale impostazione): si tratta normalmente dei rimborsi spese a piè di lista inseriti nel compenso, che possono essere o meno soggetti a ritenuta e normalmente sono non imponibili di IVA.

Al salvataggio del compenso saranno eseguiti messaggi di controllo nel caso in cui il valore delle partita non sia corrispondente con il totale a pagare, così come del mancato bilanciamento dei dati a centro di costo/profitto.

Una volta che è stata eseguita la contabilizzazione compensi non sarà più consentito di modificare i dati del compenso: nel caso in cui sia stato eseguita la contab. pagamenti o Enasarco, invece, saranno modificabili i riferimenti al numero/data documento definitivo, la descrizione movimento e il sottoconto inserito nella griglia dei dettagli.

 Nel caso in cui il compenso sia salvato e abbia data e numero documento definitivo, sarà possibile procedere alla contabilizzazione attraverso il pulsante **Contabilizza e chiudi** nella ribbon bar: si aprirà una maschera nella quale le date proposte saranno quelle ultime valide per il registro iva associato alla causale collegata al tipo ritenuta utilizzato.

Sono disponibili alcune stampe che possono essere eseguite con i comandi posti nella ribbon bar.

![](/img/it-it/finance-area/professional-men/compensations-management/compensations-management/image03.png)


*Pulsanti specifici*:  
> **Parametri inserimento**: nei parametri utente è possibile definire se il nuovo compenso deve riproporre lo stesso sottoconto dell'attuale, lo stesso tipo ritenuta, come gestire la nuova data documento e infine come gestire il range di date competenza economica (fine esercizio – cioè la data finale sarà uguale alla fine esercizio, giornaliera – cioè data finale uguale a data iniziale, nessuna data per tipo conto servizi – cioè richiederà obbligatoriamente l'inserimento di entrambe le date se il tipo del sottoconto inserito è impostato come 'Servizio');  
> **Contabilizza e chiudi**: attivo quando sono stati inseriti data e numero documento definitivi, consente di eseguire la contabilizzazione del compenso;  
> **Nuovo dettaglio**: attiva il cursore nell'inserimento di una nuova riga di dettaglio del compenso;  
> **Cancella dettaglio**: cancella le righe di dettaglio selezionate nel compenso;  
> **Calcola valori**: esegue un ricalcolo dei valori relativi alle ritenute sulla base dei dati inseriti nelle righe di dettaglio.  

---
### **VIDEO TUTORIALS**

<iframe width="560" height="315" src="https://www.youtube.com/embed/k7abmzqf6Bk" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/8sdFGMDVIFc" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/DVXhUdwqBS4" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>