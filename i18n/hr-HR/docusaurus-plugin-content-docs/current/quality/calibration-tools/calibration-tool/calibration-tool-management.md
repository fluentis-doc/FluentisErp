---
title: Kalibracija uređaja
sidebar_position: 2
---

Upravljanje se nalazi na putanji **Kvaliteta > Kalibracija uređaja > Kalibracija uređaja > Nova kalibracija uređaja** ili se može izvršiti putem **Pretraživanja kalibracije uređaja**.   


:::important ČEMU SLUŽI
U okviru upravljanja Kalibracijom uređaja moguće je zabilježiti interne kalibracije i Certifikate kalibracije.   
Ako je instrument podložan kalibraciji i kalibracija je interna, moguće je unijeti, za predviđene pozicije, izmjerene vrijednosti. Fluentis će automatski dodijeliti pozitivan ili negativan rezultat, za svaku pojedinačnu poziciju i općenito.   
Ako je instrument podložan kalibraciji i kalibracija je eksterna, moguće je priložiti Certifikat kalibracije koji je izdao vanjski entitet koji je izvršio kalibraciju. Rezultat će u ovom slučaju ručno dodijeliti operater.   
A standard sono disponibili le reportistiche di: Registro tarature strumenti raggruppati per: Rapporto, Strumento e Operatore.   

Standardno su dostupni sljedeći izvještaji:   
> **Dnevnik kalibracije instrumenta**: popis *Kalibracija instrumenata* koji se može grupirati prema: *Izvještaj*, *Instrument* i *Izvršeno od strane*.   
:::


## Tipke za naredbe


### Spremi

Pritiskom na ovu tipku spremaju se sve izmijenjene informacije o prikazanoj *Kalibraciji instrumenta*.   


## Upravljanje podacima


### Podaci zaglavlja

Upravljane informacije su:   
> **Vrsta kalibracije**: to je *Tip kalibracije* (obavezni podatak).   
> Prilikom ručnog unosa nove *kalibracije* predložen je ručni *Tip kalibracije* naveden u *Parametrima kalibracije instrumenata*.   
>
> **Godina/Broj**: to su *Godina* i *Broj kalibracije instrumenta* (oba podatka su obavezna).   
>  Prilikom unosa nove *Kalibracije instrumenta*:   
> - *Stvarni datum kalibracije* predložen je jednak trenutnom datumu;   
> - *Godina* i *Broj* predloženi su na temelju stvarnog *datuma kalibracije* i *Numeracije* pridružene *Vrsti kalibracije*.   
>
> **Kalibraciju izvršio**: expander u kojem je moguće unijeti sljedeće:   
>
>> **Interna kalibracija**: označava da *kalibraciju uređaja* obavlja osoba unutar poduzeća.   
>> **Vanjski laboratorij**: to je naziv tvrtke koja provodi vanjsku kalibraciju.   
>> **Funkcija**: to je *poslovna funkcija* unutar poduzeća koja provodi internu kalibraciju.   
>> **Zaposlenik**: to je *Zaposlenik* koji provodi internu kalibraciju.   
>
> **Planirana**: označava da je *kalibracija uređaja* planirana.   
> **Rezultat kalibracije**: to je ukupni *rezultat* kalibracije.   
> Automatski se izračunava na temelju *rezultata* iz *izmjerenih vrijednosti*, ako je riječ o *unutarnjoj kalibraciji*.
> Ručno se unosi ako je riječ o *vanjskoj kalibraciji*.   
> **Zapažanja**: slobodne bilješke na temu.   
> **Napomene**: slobodne bilješke.   
>
> **Datum predviđene kalibracije**: to je datum predviđene kalibracije.   
> Predlaže se iz opcije *Planiraj nove kalibracije* i nije ga moguće mijenjati.   
> **Datum stvarne kalibracije**: to je datum stvarne kalibracije.   
> Pri ručnom unosu nove kalibracije predlaže se današnji datum.
> Predlaže se iz opcije *Planiraj nove kalibracije* jednak *predviđenom datumu kalibracije* i kasnije se može mijenjati.   
> **Alat za mjerenje**: to je referenca na *mjerni instrument* podložan *kalibraciji*.   
>
> **Svojstva instrumenta**: expander gdje je moguće pregledati:   
>
>> **Svojstva instrumenta**: to je *Model mjernog instrumenta*.   
>> **Aktivan**: označava da je *Mjerni Instrument* još uvijek *aktivan*.   
>> **Klasifikacija**: to je *klasifikacija*; primjeri: Mehanički, Električni, Elektronički, itd.   
>> **Jedinica mjere**: to je *jedinica mjere* za vrijednosti izmjerene *mjernim instrumentom*.   
>> **Raspon mjerenja**: to je mjerljivi raspon *mjernog instrumenta*.   
>> **Preciznost**: to je minimalna *preciznost mjerenja*.   
>> **Ograničenja**: to su *ograničenja prihvatljivost* iz *mjernog uređaja* za upotrebu; primjeri: eventualna ograničenja preciznosti, okruženja u kojima se ne smije koristiti, itd.
>
> **Audit Trail**: expander samo za čitanje gdje su vidljive sljedeće informacije:   
>
>> **Datum kreiranja/Ime**: to je datum i *A.R.M. korisnik* koji je unio *korektivnu radnju*.   
>> **Datum zadnje izmjene/Ime**: to je datum i *A.R.M. korisnik* koji je napravio zadnju izmjenu *korektivne radnje*.   


### Otkrivene vrijednosti
Kartica je vidljiva samo ako je *mjerni uređaj* podložan *internom kalibriranju*
U ovom popisu moguće je navesti vrijednosti koje treba zabilježiti tijekom aktivnosti *internog kalibriranja*.  
Ako je *mjerni instrument Aktivan*, podložan *umjeravanju* i ako je podložan *internom umjeravanju* te vrijednosti se nasljeđuju iz šifarnika *mjernog instrumenta*.   
Sve informacije su onemogućene osim: *Zabilježena vrijednost*, *Iskaz*, *Napomene* i *Bilješke*.
Popis se sastoji od sljedećih informacija:   
> **Sequenza**: è la sequenza di rilevazione.   
> **Posizione**: annotazioni libere sull'argomento.   
> **Intervallo lettura**: annotazioni libere sull'argomento.   
> **Dato richiesto**: è il valore nominale richiesto.   
> **Incertezza (-)**: è il valore dell'incertezza negativa (espressa in percentuale) che verrà applicata al *Dato rilevato*.   
> **Incertezza (+)**: è il valore dell'incertezza positiva (espressa in percentuale) che verrà applicata al *Dato rilevato*.   
> **Dato rilevato**: è il valore rilevato dalla lettura dello strumento fatta nella *posizione* indicata.   
> **Scostamento**: è il valore calcolato dalla differenza tra *Dato rilevato* e *Dato richiesto*.   
Se lo scostamento è superiore al *Dato richiesto* sommato all'*Incertezza (±)* (applicazione in percentuale) l'*Esito* della rilevazione sarà negativo.   
Al primo valore negativo dell'*Esito* nell'elenco dei *Valori rilevati* anche l'*Esito* complessivo della *Taratura* sarà negativo.   
> **Osservazioni**: annotazioni libere sull'argomento.   
> **Nota**: annotazioni libere.   


### Storico Rapporti e Certificati di taratura
In questo elenco è possibile visualizzare lo storico delle *Tarature* e dei *Certificati di taratura* pienificati ed effettuati per lo *Strumento di misura* associato alla *Taratura* visualizzata.   
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
E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) per ogni *Taratura strumento*.   


### Immagine
Viene riportata l'immagine associata nella gestione dello *Strumento di misura*.   


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).   