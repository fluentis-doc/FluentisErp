---
title: Konto kartica  
sidebar_position: 3
---

Ovo je osnovno izvješće za dobivanje pojedinosti o računovodstvenim kretanjima svakog podkonta, bez obzira na vrstu (aktiva, pasiva, trošak, prihod): uz standardno izvješće za svaki podkonto bit će novi list za ispis.  

Ovaj ispis odgovara onome što se u računovodstvenoj terminologiji naziva "glavna knjiga".  

**GLAVNI FILTRI**:

- Podaci koji se odnose na knjiženje  

   - **Konto**: Referentni podkonto (npr. za pregled kretanja i rezultirajućeg stanja određenog dobavljača za određeni raspon datuma ili za pregled prihoda koji se odnose na određeni podkonto kontnog plana);  

   - Datum knjiženja  

   - Datum **obračuna**

   - Broj knjiženja  

   - Vrsta / datum / broj dokumenta, ako postoji - datum i broj dokumenta možda neće biti prisutni za unose u dnevnik

   - Tip konta 

- PDV podaci 

   - Registar

   - Protokol (otvoriti proširivi izbornik)

- Vrsta knjiženja (privremena i/ili konačna)

 

**OSTALI KARAKTERISTIČNI ELEMENTI IZVJEŠĆA**:

- filtri **Agent** i **Banka**: moguće je zatražiti npr. izvode računa svih kupaca označenih nekim agentom ili svih dobavljača plaćenih preko određenog bankovnog računa.  

- filter **Projekti**: moguće je filtrirati podkonta vezana uz određeni projekt

- **Prikaži iznose u valuti**: uz aktivan flag bit će prikazani i iznosi u valuti (uz iznose u eurima, bez ikakvog grupiranja) bez ove zastavice bit će prikazani samo podaci o dugovanju/potraživanju u valuti poduzeća,, 

- **Prikaži povezana knjiženja**: aktivan flag prikazuje povezana knjiženja koji se odnose na kretanja odabranog podkonta (vodoravni A4 format)

- **Broj redova**: U ovom polju, koje postaje aktivno ako je prethodno navedena oznaka uključena, navodi se koliko redaka protustavke unesenih u odjeljak **[Zapis glavne knjige](/docs/finance-area/ledger-records/records/ledger-record)** će biti prikazano u izvatku računa. Na primjer, ako postoji više konta prihoda koji se odnose na zapis izdanog računa, vrijednost se može povećati ako knjiženje ne uključuje sva suprotna konta kako su upisana u knjiženju.  

- **Bilješke**: ovo polje omogućuje unos alfanumeričkih podataka koji će biti prikazani u ispisu. Može biti korisno za umetanje brze bilješke koja ostaje važeća samo za ispis koji se u tom trenutku obrađuje, polje se resetira zatvaranjem obrasca.  

Mogućnost pregleda kretanja izraženih u određenoj valuti putem:  

- **Pregledajte E/C u valuti**: flag koji također aktivira izbornik za odabir valute i deaktivira oznake ‘Prikaži iznose u valuti’
permette inoltre di raggruppare i movimenti per ogni singola valuta e di totalizzarli

- **Valuta**: omogućuje odabir referentne valute za filtriranje prikaza vrijednosti. Bit će prikazane samo vrijednosti denominirane u odabranoj valuti za odabrani podkonto.    

Zapise je moguće sortirati prema datumu knjiženja ili prema datumu obračuna. Opcija postaje posebno zanimljiva u slučaju da se zatvaranje/ponovno otvaranje konta provodi s drugim datumom knjiženja, kako bi se imao progresivni saldo;

**Zadnji datum otvaranja konta**:Za razliku od **[prikaza računa](/docs/finance-area/ledger-records/records/view-accounts)**,  u kojem su sva kretanja svakog podkonta uvijek vidljiva, ispis izvješća je proces u kojem je važno ograničiti broj zapisa koji se prikazuju kako ne bi utjecali na zauzimanje resursa računala.  

U tom smislu aplikacija će ispisivati zapise uzimajući u obzir početno stanje počevši od zadnjeg datuma otvaranja konta koji je predložen kao najviši datum prije početnih filtera izvješća.  

Primjer: ako korisnik filtrira kretanja od 01.09.2017. do 31.12.2017. (i kao datum knjiženja i kao datum obračuna), postupak predlaže zadnje otvaranje računa s datumom 01.01.2017., rezultat će biti: početno stanje izračunato od 01.01.2017. do 31.08.2017., detalji kretanja povezanih s knjiženjima s datumima unutar raspona 01.09.-31.12.2017. (dakle, samo podkontakoja imaju barem jedno kretanje između zadnjeg datuma otvaranja konta i datuma konačnog filtra). Međutim, ako korisnik izbriše zadnji datum otvaranja konta, rezultat će biti identičan onom prikazanom u prikazu konta.  

**Više podataka na 1 stranici**: ovo je sažetak izvješća koji predstavlja popis svih podkonta bez ikakvih skokova na stranice. Preporuča se korištenje ovog izvješća za ispis knjiga koje će se priložiti završnim ispisima obračunske godine.  



| Funkcija | Značenje |
| --- | --- |
| Prethodni pregled | Tipka za pregled ispisa konta kartice |
| Ispiši | Tipka za fizički ispis dokumenta konta kartice |


:::important VIDI TAKOĐER 
[**VIDEO TUTORIJALI O RAČUNOVODSTVENIM ISPISIMA**](/docs/video/finance/intro)
:::