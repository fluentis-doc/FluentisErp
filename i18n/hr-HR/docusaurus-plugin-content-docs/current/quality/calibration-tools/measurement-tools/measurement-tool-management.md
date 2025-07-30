---
title: Mjerni instrument
sidebar_position: 2
---

Upravljanje se nalazi na putanji **Kvaliteta > Kalibracija uređaja >  Mjerni instrumenti > Novi mjerni instrument** ili se može izvršiti putem **Pretrage mjernih instrumenata**.   


:::important ČEMU SLUŽI
U ovom šifarniku pohranjuju se mjerni instrumenti koji se koriste za osiguranje prikladnosti proizvoda i pružanje ponuđenih usluga.   
Uz mjerni instrument moguće je povezati informacije o kupnji, odgovornosti, tehničkim/mehaničkim svojstvima, lokaciji i kalibraciji.   
Ako je instrument podložan kalibraciji i kalibracija se provodi interno, moguće je definirati koje aktivnosti treba provesti i koje vrijednosti zabilježiti kako bi kalibracija bila uspješna.   
Ako je instrument podložan kalibraciji, a kalibracija se provodi eksterno, moguće je definirati koja će treća strana obaviti kalibraciju.   
Ako je definirana vremenska periodičnost kalibracije, tipka "Planiraj nove kalibracije" omogućuje automatsko stvaranje planiranih kalibracija za željeno razdoblje.   
Standardno su dostupna sljedeća izvješća: Registar instrumenata grupiranih prema: Instrument, Kategorija, Dobavljač (nabave), Lokacija, Korisnik, Jamstvo datuma i Istek kalibracije, Registar instrumenata koji nisu podložni kalibraciji i Kartica mjernog instrumenta.   

Standardno su dostupna sljedeća izvješća:   
> **Registar mjernih instrumenata**: popis *mjernih instrumenata* koji se može grupirati po: *Instrument*, *Kategorija*, *Dobavljač* (nabave), *Lokacija*, *Korisnik*, *Jamstvo datuma* i *Istek kalibracije*.   
> **Registar Instrumenata koji ne podliježu umjeravanju**: popis *mjernih instrumenata* gdje nije predviđena *Kalibracija*; filter nema utjecaja na ispis ovog izvješća *Status - Nisu podložni kalibraciji: Svi, Podložno kalibraciji, Nisu podložni kalibraciji*.   
> **Kartica Alati za mjerenje**: kartica za *mjerne instrumente*.   
:::


## Upravljačke tipke


### ![](/img/neutral/common/save.png) Spremi

Pritiskom na ovu tipku pohranjuju se sve izmijenjene informacije o prikazanom *mjernom instrumentu*.   


### ![](/img/neutral/common/duplicate.png) Dupliciraj instrument

Za dupliciranje prikazanog *mjernog instrumenta* u novi *mjerni instrument* dovoljno je pritisnuti tipku **Dupliciraj**.   
Informacije koje se ne dupliciraju s izvornog instrumenta su: *Šifra*,  *Serijski broj*, *Datum kupnje*, *Datum isteka jamstva*, *Lokacija dobavljača*, *Kupac vlasnik*, *Slika* te podaci o posljednjoj obavljenoj kalibraciji: *Datum posljednje kalibracije* i *Rezultat*.   
Nakon završetka obrade prikazuje se novi *mjerni instrument*.


### Planiranje novih kalibracija  

Tipka je omogućena samo ako je *mjerni instrument* *Aktivan*, *podložan kalibraciji*, i postoji vremenski *period kalibracije* (*mjerna jedinica*: *Dani* ili *Mjeseci*). Prikazuje se zahtjev za:   
> **Planirati do**: ovo je datum završetka planiranja novih zakazanih kalibracija.   

*Metoda korištena za planiranje*:   
Kao prvi korak, uklanjaju se sve prethodno planirane, a još neizvršene *kalibracije* za *instrument*.  
Zatim, počevši od datuma posljednje *kalibracije*, kreira se onoliko *kalibracija* koliko ih je moguće kreirati u zadanom vremenskom intervalu počevši od današnjeg datuma, frekvencijom definiranom *razdobljem kalibracije*. Ako predloženi datum pada na neradni dan naveden u *Kalendaru tvornice* predloženi datum će biti pomaknut na prvi sljedeći radni dan.   
Ako za instrument nikada nije bila planirana ili izvršena *kalibracija* ili ako posljednji datum *kalibracije* pada prije
*razdoblja Kalibracije* koje se računa unatrag od današnjeg datuma, prva *kalibracija* će biti predložena za današnji datum, a sve ostale će biti planirane nakon toga.


### Nova kalibracija

Tipka je omogućena samo ako se iz pregleda rezultata odabere jedan *mjerni instrument* koji je *aktivan* i *podložan kalibraciji*.
Kako bi se kreirala nova *neplanirana kalibracija* za prikazani *mjerni instrument*, potrebno je pritisnuti tipku *Nova kalibracija*. 
Nakon potvrde zahtjeva kreira se nova *kalibracija*; predlaže se *vrsta kalibracije* (interna ili eksterna), navedena u *Parametrima umjeravanja instrumenata*, zajedno s referencama na *mjerni instrument* i njegova svojstva.   
Po završetku obrade prikazuje se *nova kalibracija*.    


## Upravljanje podacima


### Podaci zaglavlja

Upravljane informacije uključuju:   
> **Kategorija**: Kategorija *mjernog instrumenta* (obvezan podatak).   
> **Šifra**: šifra *mjernog instrumenta* (obvezan podatak).   
> **Serijski broj**: serijski broj *mjernog instrumenta*; slobodna opisna informacija.   
> **Model**: model *mjernog instrumenta*; slobodna opisna informacija.   
>
> **Podaci o kupnji**: proširivi odjeljak u kojem je moguće unijeti:   
>
>> **Dobavljač**: naziv *dobavljača* pri kupnji.    
>> **Proizvođač**: Kontakt **proizvođača* instrumenta.   
>> **Datum kupnje**: datum kupnje/nabave.   
>> **Datum isteka jamstva**: datum isteka jamstva pri kupnji.   
>> **Dobavljač održavanja/servisa**: naziv uobičajenog *dobavljača* za održavanje/servis.   
>
> **Odgovorna funkcija**: proširivi odjeljak u kojem je moguće unijeti:   
>
>> **Funkcija**: *poslovna funkcija* u poduuzeću odgovorna za instrument.   
>> **Zaposlenik**: odgovorni *zaposlenik*.   
>
> **Svojstva kalibracije**: proširivi odjeljak u kojem je moguće unijeti:   
>
>> **Nije podložno kalibraciji**: označava da *mjerni instrument* nije podložan kalibraciji.   
>> U tom slučaju sve ostale informacije u ovom odjeljku su onemogućene.   
>> **Interna kalibracija**: označava da *mjerni instrument* kalibrira osoba unutar tvrtke.   
>> **Period kalibracije:**: razdoblje (izraženo u povezanoj *mjernoj jedinici*) kalibracije mjernog instrumenta.    
>> **Mjerna jedinica**: *mjerna jedinica* za razdoblje kalibracije.   
>> **Posljednja kalibracija**: datum posljednje provedene *kalibracije*; vrijednost se automatski postavlja prilikom dodjeljivanja *rezultata* posljednje *provedene kalibracije*, ali može se unijeti i ručno.   
>> **Rezultat**: *rezultat* posljednje provedene *kalibracije*; vrijednost se automatski postavlja prilikom dodjeljivanja *rezultata* posljednje *kalibracije*, ali može se unijeti i ručno.   
>> **Datum sljedeće kalibracije**: datum sljedeće *kalibracije*; vrijednost se automatski postavlja prilikom dodjeljivanja *rezultata* posljednje *kalibracije*, ali može se unijeti i ručno.    
>> **Dobavljač kalibracije**: naziv *dobavljača* koji provodi vanjsku kalibraciju.   
>
> **Klasifikacija**: *klasifikacija*; primjeri: Mehanički, Električni, Elektronički, itd.    
> **Articolo**: *artikl* povezan s *mjernim instrumentom*; *artikl*, kako bi bio odabran, mora biti tipa *Oprema* ili *Alat*.    
>
> **Proprietà dello strumento**: expander dove è possibile inserire:   
>
>> **Unità di misura**: è l'*Unità di misura* dei valori rilevati dallo *Strumento di misura*.   
>> **Intervallo di misura**: è il range misurabile dallo *Strumento di misura*.   
>> **Precisione**: è la *Precisione di misura* minima.   
>> **Limiti**: sono i *Limiti di accettabilitò* dello *Strumento di misura* per poterlo utilizzare; esempi: eventuali limiti di precisione, ambienti dove non utilizzarlo, ecc.   
>> **Ubicazione fornitore**: è la ragione sociale del *Fornitore* dove è ubicato lo *Strumento di misura*.   
>> **E' uno Strumento primario**: indica che lo *Strumento di misura* visualizzato viene utilizzato per la taratura di altri strumenti.   
>> **Strumento primario**: è lo *Strumento di misura* che viene utilizzato per effettuare la taratura dello strumento visualizzato.   
>
> **Funzione di utilizzo**: expander dove è possibile inserire:   
>
>> **Funzione**: è la *Funzione aziendale* che utilizza abitualmente lo *Strumento di misura*.   
>> **Dipendente**: è il *Dipendente* che utilizza abitualmente lo *Strumento di misura*.   
>
> **Classe strumento**: è la *Classe strumento*; è abitualmente utilizzata per definire diversi livelli di declassamento dello *Strumento di misura*.   
> **Magazzino/Ubicazione**: è il *Magazzino/Ubicazione* dove è ubicato lo *Strumento di misura*.   
> **Cliente proprietario**: è la ragione sociale del *Cliente* proprietario.   
> **Attivo**: indica che lo *Strumento di misura* è ancora *attivo*.   
> **Non attivo dal**: indica la data dalla quale lo *Strumento di misura* non è più *attivo*.   
> **Annotazioni**: annotazioni libere.   


### Valori da rilevare
In questo elenco è possibile definire i tipi di rilevazione e i valori da rilevare durante le attività di *Taratura interna*.   
Se lo *Strumento di misura* è *Attivo*, è *Soggetto a taratura* e se è di *Taratura interna* questi valori vengono riportati nelle *Tarature interne*.   
L'elenco si compone delle seguenti informazioni:   
> **Sequenza**: è la sequenza di rilevazione.   
> **Posizione**: annotazioni libere sull'argomento.   
> **Intervallo lettura**: annotazioni libere sull'argomento.   
> **Dato richiesto**: è il valore nominale richiesto.   
> **Incertezza (-)**: è il valore dell'incertezza negativa (espressa in percentuale) che verrà applicata al *Dato richiesto*.   
> **Incertezza (+)**: è il valore dell'incertezza positiva (espressa in percentuale) che verrà applicata al *Dato richiesto*.   
> **Nota**: annotazioni libere.   


### Articoli associati
In questo elenco è possibile associare gli *Articoli* misurabili con lo *Strumento di misura*.   
Con la versione attuale di Fluentis non ci sono controlli standard che verificano l'utilizzo dello strumento per rilevare valori dagli *Articoli* presenti in questo elenco.   
L'elenco si compone delle seguenti informazioni:   
> **Classe**: è la *Classe articolo*.   
> **Codice**: è il codice dell'*Articolo*.   
> **Descrizione articolo**: è la descrizione dell'*Articolo*.   
> **Note**: annotazioni libere.   


### Storico Rapporti e Certificati di taratura
In questo elenco è possibile visualizzare lo storico delle *Tarature* e dei *Certificati di taratura* pianificati ed effettuati per lo *Strumento di misura*.   
Tramite un doppio click del mouse sulla riga desiderata è possibile eseguire la gestione della *Taratura* selezionata.   
L'elenco si compone delle seguenti informazioni:   
> **Tipo taratura**: è il codice del *Tipo taratura*.   
> **Descrizione tipo taratura**: è la descrizione del *Tipo taratura*.   
> **Anno**: è l'*Anno* del documento.   
> **Numero**: è il *Numero* del documento.   
> **Taratura interna**: indica se è stato emesso una *Taratura interna*.   
> **Schedulata**: indica se il documento è stato schedulato (pianificato).   
> **Data prevista**: è la data di prevista taratura.   
> **Data taratura**: è la data di effettiva taratura.   
> **Esito**: è il codice dell'*Esito* della taratura.   
> **Descrizione esito**: è la descrizione dell'*Esito* della taratura.   
> **Categoria**: è il codice della *Categoria strumento*.   
> **Descrizione categoria**: è la descrizione della *Categoria strumento*.   
> **Codice**: è il codice dello *Strumento di misura*.   
> **Matricola**: è la matricola dello *Strumento di misura*.   
> **Modello**: è il modello dello *Strumento di misura*.   
> **Laboratorio esterno**: è la ragione sociale del *Fornitore* che effettua la taratura esterna.   
> **Funzione**: è il codice della *Funziona aziendale* che effettua la taratura interna.   
> **Descrizione funzione**: è la descrizione della *Funziona aziendale* che effettua la taratura interna.   
> **Codice**: è il codice del *Dipendente* che effettua la taratura interna.   
> **Cognome**: è il cognome del *Dipendente* che effettua la taratura interna.   
> **Nome**: è il nome del *Dipendente* che effettua la taratura interna.   


### Extra data
E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) per ogni *Strumento di misura*.   


### Documenti collegati
In questo elenco è possibile inserire e consultare eventuali allegati; è possibile visualizzare l'anteprima.   


### Immagine
E' possibile allegare un'immagine dello *Strumento di misura* tramite l'utilizzo del drag&drop; viene visualizzata l'anteprima.   
Questo allegato non viene incluso nel Documentale di Fluentis.   


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).