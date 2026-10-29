---
title: Nositelji troškova
sidebar_position: 6
---

U tablici **nositelja troškova (cost drivera)** moguće je definirati sve načine raspodjele troškova između centara.

Pogledajmo detaljnije pojedina dostupna svojstva.

:::tip Napomena
Tablica nositelja troškova dostupna je i u *pojednostavljenoj* verziji za tvrtke koje nemaju aktiviran *Kontroling*.

U tom slučaju, koji ovdje nećemo detaljnije opisivati jer je od manjeg značaja, nositelj troškova sadrži šifru i opis te popis odredišnih centara čije se vrijednosti određuju isključivo postotno, uz mogućnost razlikovanja postotaka po poslovnoj godini. Nositelj troškova zatim se povezuje s centrima tvrtke čije se vrijednosti trebaju raspodijeliti prema toj postotnoj logici, putem postupka **Knjiženja nositelja troškova**, dostupnog u modulu **Međurazdobna zaključivanja**.

Primjerice, možemo definirati kriterij „Kvadratni metri hale X”, prema kojem se troškovi raspodjeljuju u omjeru 60 % – 40 % na dva proizvodna centra. Zatim taj nositelj troškova povezujemo s centrom „Hala X”, koji objedinjuje sve pripadajuće troškove koje treba raspodijeliti na odredišne proizvodne centre.
:::

**## Opći podaci**

- **ŠIFRA** pravila koje unosimo. Unutar svakog ciklusa obrade **FluentisERP** obrađuje nositelje troškova prema redoslijedu šifri.

:::tip Napomena
Kao kriterij za dodjelu šifri preporučujemo sljedeći način:

- **A – Atribucije**: sve šifre A odnose se na generički centar „VRIJEDNOSTI S DODJELOM U KONTROLINGU”, odnosno centar tvrtke koji ima uključenu oznaku **Konta kojima treba ponovno dodijeliti centar**. Prvi korak obrade kontrolinga jest dodjela vrijednosti s tih generičkih konta koja računovodstvo ne može obraditi ili ih je potrebno rasporediti prema promjenjivijim pravilima od onih kojima raspolaže računovođa.
- **R – Raspodjele**: koriste se kada se vrijednosti jednog centra raspodjeljuju na druge centre.
- **P – Projekti**: obrade povezane s projektima logično se izvršavaju na kraju jer se tim pravilima projektima za određeno razdoblje dodjeljuju neizravni troškovi koji su već izračunani u industrijskoj/upravljačkoj dimenziji.
:::

- **OPIS** nositelja troškova, koji može biti manje ili više detaljan, ovisno o njegovoj namjeni.

- [**PODRUČJE**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas): za nositelje troškova područje je *uvijek obvezno*. Mogu se definirati posebna pravila za određena područja, primjerice za simulacije, dok se opća pravila definiraju u generičkom području vrste *Skup pravila*.

- **BROJ CIKLUSA**: obrada kontrolinga u sustavu **FluentisERP** mora slijediti logičan redoslijed. Najprije se obrađuju fizička kretanja za određeno razdoblje, zatim amortizacija osnovnih sredstava, a potom nositelji troškova. Njihova obrada započinje atribucijama s brojem ciklusa 1 jer je prvi korak pražnjenje *generičkog centra kojemu treba ponovno dodijeliti vrijednosti*. Nakon toga slijede raspodjele prema redoslijedu ciklusa. Na kraju se, ako je definirana dimenzija projekata/naloga, izvršavaju nositelji troškova posljednjeg ciklusa, kojima se vrijednosti iz upravljačke dimenzije dodjeljuju projektima. Ako više nositelja troškova ima isti broj ciklusa, obrađuju se prema redoslijedu šifri.

- **KONTO/PODKONTO**: omogućuje povezivanje nositelja troškova s kombinacijom podkonta i centra. Uzimaju se ukupna knjiženja za navedeni konto i centar, a nositelj troškova zatim određuje gdje će se i na koji način te vrijednosti ponovno rasporediti na odredišne centre navedene u donjoj lijevoj tablici. Konto/podkonto obvezno je polje samo za nositelje troškova povezane s generičkim centrom kojemu treba ponovno dodijeliti vrijednosti; za ostale je neobvezno.

- [**DIMENZIJA ODREDIŠNIH CENTARA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension): ovom se dimenzijom filtriraju odredišni centri za vrijednosti prikazane u donjoj lijevoj tablici. U sustavu **FluentisERP** nositelji troškova mogu premještati ili kopirati podatke iz jedne dimenzije centara u drugu. Tipičan je primjer dodjela izravnih i neizravnih troškova dimenziji analize projekata.

- **DATUM POČETKA** i **DATUM ZAVRŠETKA**: određuju razdoblje valjanosti nositelja troškova. Nije dopušteno preklapanje razdoblja valjanosti dvaju pravila unutar istog područja za isti centar i, ako je naveden, isti konto. Ako se s vremenom pokaže da je potrebno izmijeniti pravilo, moguće ga je zaključiti na određeni datum, a zatim od sljedećeg razdoblja primijeniti novo pravilo.

**## VRSTE RASPODJELE**

- **VRSTA RASPODJELE**: određuje način provedbe dodjele ili raspodjele troškova. Za dodjele su dostupne šifre od 01 do 09. Za raspodjele između centara dostupne su još tri vrste, koje omogućuju korištenje stopa centra. Za odredišnu dimenziju projekata/naloga dostupno je šest posebnih vrsta raspodjele. Detaljan pregled:

  - vrste raspodjele za dodjele i raspodjele između centara:
    - **01 Postotak**: izvorni podatak raspodjeljuje se za svako razdoblje prema postotku pojedinog odredišnog centra.
    - **02 Ukupno duguje**: za svako se razdoblje izračunava postotak na temelju dugovnog prometa pojedinog odredišnog centra u odnosu na ukupni dugovni promet svih odredišnih centara.
    - **03 Ukupno potražuje**: kao prethodna mogućnost, ali uzima se u obzir ukupni potražni promet.
    - **04 Marže**: kao prethodna mogućnost, ali uzima se u obzir razlika između dugovnog i potražnog prometa (apsolutna vrijednost).
    - **05 Na odabranom podkontu**: postotak se izračunava na temelju razlike između dugovnog i potražnog prometa (apsolutna vrijednost) odredišnih centara, uz filtriranje prema popisu *podkonta* u desnoj tablici.
    - **06 Na odabranom kontu**: postotak se izračunava na temelju razlike između dugovnog i potražnog prometa (apsolutna vrijednost) odredišnih centara, uz filtriranje prema popisu *konta* u desnoj tablici.
    - **07 Isključujući odabrane podkonte**: postotak se izračunava na temelju razlike između dugovnog i potražnog prometa (apsolutna vrijednost) odredišnih centara, uz isključivanje podkonta navedenih u desnoj tablici.
    - **08 Isključujući odabrane konte**: postotak se izračunava na temelju razlike između dugovnog i potražnog prometa (apsolutna vrijednost) odredišnih centara, uz isključivanje konta navedenih u desnoj tablici.
    - **09 Na temelju fizičke veličine**: postotak se izračunava na temelju količina odredišnih centara za odabranu mjernu jedinicu, u odnosu na ukupnu količinu svih odredišnih centara.

  - posebne vrste raspodjele između centara:
    - **10 Prijenos prema proizvodnji po standardnoj stopi**: vrijednosti se raspodjeljuju s jednog centra na više centara na temelju toka fizičkih kretanja između izvornog centra (centra povezanog s nositeljem troškova) i odredišnih centara. Sati izvornog centra stoga će biti jednaki satima odredišnih centara. Izvorni centar neće se potpuno isprazniti pa će na njemu ostati preostala vrijednost različita od nule.
    - **11 Izravni prijenos po standardnoj stopi**: omogućuje raspodjelu vrijednosti s jednog centra na više centara na temelju standardne stope izvornog centra (centra nositelja troškova) i toka fizičkih kretanja odredišnih centara. Iznos dodijeljen odredišnim centrima izračunava se kao umnožak standardne stope izvornog centra i vrijednosti fizičke veličine svakog odredišnog centra. Ni u ovom slučaju izvorni se centar neće potpuno isprazniti pa će na njemu ostati preostala vrijednost različita od nule.
    - **12 Prijenos prema proizvodnji po izračunanoj stopi**: omogućuje raspodjelu vrijednosti s jednog centra na više centara na temelju izračunane stope izvornog centra i toka fizičkih kretanja između izvornog i odredišnih centara. Sati izvornog centra stoga će biti jednaki satima odredišnih centara. Iznos dodijeljen odredišnim centrima izračunava se kao umnožak izračunane stope izvornog centra i vrijednosti fizičke veličine svakog odredišnog centra. Izvorni će se centar potpuno isprazniti pa će njegova preostala vrijednost biti nula.

  - posebne vrste raspodjele za dimenziju projekata/naloga (detaljnije opisane u nastavku):
    - **13 Prijenos prema proizvodnji po projektu**
    - **14 Prijenos marži po projektu**
    - **15 Prijenos specifične amortizacije po projektu**
    - **16 Prijenos prema prihodima projekta**
    - **17 Prijenos prema troškovima projekta**
    - **18 Prijenos prema industrijskom trošku projekta**

- [**MJERNA JEDINICA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units): ovo se polje aktivira za vrste raspodjele *09, 10, 11 i 12* te služi za odabir mjerne jedinice prema kojoj će se pretraživati fizička kretanja.

**## OSTALA POLJA**

- **POGREŠKA PRI OBRADI**: ovim se poljem određuje način obrade slučajeva u kojima nisu dostupni podaci potrebni za primjenu pravila.

  - *BLOKIRAJ*: obrada se prekida ako nema potrebnih podataka za primjenu nositelja troškova.
  - *PREOSTALA VRIJEDNOST*: ova se mogućnost ne može koristiti za dodjele, već samo za raspodjele, jer se na izvornom centru ostavlja preostala vrijednost koja nije uspjela biti dodijeljena odredišnim centrima. Generički centar uvijek mora biti prazan pa se ovaj način obrade pogrešaka ne može koristiti za dodjele.
  - *PROSJEK POSTOJEĆIH VRIJEDNOSTI*: ako vrijednost ne postoji u trenutačnom razdoblju, raspodjela se provodi na temelju prosjeka postojećih vrijednosti iz drugih razdoblja godine koja se obrađuje.

:::tip Napomena
Ova mogućnost može, primjerice, spriječiti prekid obrade u razdobljima poput kolovoza, kada količine ili vrijednosti potrebne za primjenu nositelja troškova mogu biti jednake nuli zbog kolektivnog godišnjeg odmora.
:::

- **VRIJEDNOSTI KOJE TREBA KORISTITI**: određuje koji se podaci uzimaju u obzir za odredišne centre. Dostupne su sljedeće mogućnosti:
  - **SVE**: uzimaju se u obzir sva knjiženja dodijeljena do trenutačno obrađivanog ciklusa.
  - **SAMO IZVORNI RETCI**: uzimaju se u obzir samo podaci dobiveni početnim dodjelama.

:::tip Napomena
Kod raspodjele se ovim poljem određuje hoće li se za odredišne centre uzeti u obzir i vrijednosti primljene raspodjelom iz drugih centara. Stoga je ovo polje relevantno samo za vrste raspodjele od 02 do 08, dok ne utječe na ostale vrste koje se temelje na stopama.
:::

- **OZNAKA STORNIRANJA**: određuje trebaju li se podaci izvorne dimenzije zadržati ili *premjestiti* u odredišnu dimenziju.

:::tip Napomena
Kada je nositelj troškova povezan s dimenzijom projekata/naloga, vrijednost se svakako mora zadržati i u izvornoj, upravljačkoj dimenziji. U suprotnom bi nedostajali troškovi, a eventualni računi dobiti i gubitka bili bi netočni.
:::

- **PO DIVIZIJI**: omogućuje filtriranje izvornih podataka za raspodjelu prema diviziji definiranoj u sljedećem polju.

:::tip Napomena
U vezi s divizijama valja napomenuti da je moguće definirati nositelje troškova koji preraspodjeljuju troškove/prihode iz jedne divizije u drugu. Za to je potrebno da tvrtka posluje s više divizija i da je aktiviran *opći parametar* za *upravljanje centrima po divizijama*.
:::

**## POSEBNOSTI ZA DIMENZIJU PROJEKTA/NALOGA**

Sada ćemo razmotriti polja povezana s nositeljima troškova za projekte/naloge. Najprije ćemo pogledati posljednja tri polja u tablici.

- **VRSTA MJERENJA**: ovdje se određuje koji će se troškovni pokazatelj (stopa) koristiti za vrednovanje centra povezanog s nositeljem troškova. Dostupne su sljedeće mogućnosti:
  - *MJ1*: koristi se pokazatelj povezan s prvom mjernom jedinicom centra.
  - *MJ2*: koristi se pokazatelj povezan s drugom mjernom jedinicom centra.
  - *%*: koristi se postotni pokazatelj centra.

- **PODRUČJE ZA POKAZATELJ**: ovim se poljem određuje u kojem se *području* traži prethodno navedeni troškovni pokazatelj. Za dimenziju projekata moguće je odrediti posebno područje iz kojeg se dohvaćaju pokazatelji, neovisno o području odabranom za *obradu ostvarenih vrijednosti projekta*.

- **VRSTA IZRAČUNA POKAZATELJA**: određuje način izračuna pokazatelja. Dostupne su sljedeće mogućnosti:
  - *Mjesec*: koristi se pokazatelj za pojedini mjesec.
  - *Do razdoblja*: koristi se pokazatelj izračunan na temelju kumulativnih podataka od početka godine koja se obrađuje.
  - *Klizna godina*: koristi se pokazatelj izračunan na temelju kumulativnih podataka za 12 mjeseci koji prethode pojedinom obrađivanom razdoblju.
  - *Godina*: koristi se pokazatelj izračunan na temelju kumulativnih podataka svih dostupnih mjeseci godine koja se obrađuje.
  - *Standardna stopa*: koristi se standardna stopa centra koja vrijedi za pojedino obrađivano razdoblje.

- **VRSTE RASPODJELE** specifične za projekte/naloge: nositelj troškova uvijek uključuje odredišne centre, ali kod dimenzije projekata postoje ne samo ti „projektni” centri nego i konkretni projekti povezani s njima.

  To omogućuje korištenje jednog *centra projekta* (putem oznake *Zadani centar za projekte*), koji će tada biti jedini odredišni centar nositelja troškova, ili korištenje tablice *Povezivanje centara i projekata/naloga*, kojom se povezuje popis šifri centara na temelju određenih obilježja projekata.

  Potonja mogućnost omogućuje definiranje različitih nositelja troškova za različite vrste projekata, primjerice kada se struktura troškova razlikuje ovisno o vrsti projekta.

  Dostupne su sljedeće vrste raspodjele:

  - **13 Prijenos prema proizvodnji po projektu**: dohvaća se troškovni pokazatelj centra nositelja troškova (prema odabranoj mjernoj jedinici MJ1 ili MJ2, području i vrsti izračuna) i primjenjuje na sate rada koje je taj centar ostvario na projektima/nalozima povezanim s centrima troška navedenima u donjoj lijevoj tablici.

  - **14 Prijenos marži po projektu**: dohvaća se postotni troškovni pokazatelj centra nositelja troškova i primjenjuje na marže projekata/naloga povezanih s centrima troška navedenima u donjoj lijevoj tablici.

  - **15 Prijenos specifične amortizacije po projektu**: dohvaćaju se jedinični troškovi tehničke amortizacije pojedinog osnovnog sredstva iz kontrolinga te se množe s količinama koje je to osnovno sredstvo proizvelo na pojedinim projektima/nalozima povezanima s centrima troška navedenima u donjoj lijevoj tablici.

  - **16 Prijenos prema prihodima projekta**: dohvaća se postotni troškovni pokazatelj centra nositelja troškova i primjenjuje na prihode projekata/naloga povezanih s centrima troška navedenima u donjoj lijevoj tablici. Podaci se po potrebi mogu filtrirati prema kontima navedenima u desnoj tablici.

  - **17 Prijenos prema troškovima projekta**: dohvaća se postotni troškovni pokazatelj centra nositelja troškova i primjenjuje na troškove projekata/naloga povezanih s centrima troška navedenima u donjoj lijevoj tablici. Podaci se po potrebi mogu filtrirati prema kontima navedenima u desnoj tablici.

  - **18 Prijenos prema industrijskom trošku projekta**: postotni pokazatelj primjenjuje se na izračunani industrijski trošak svakog pojedinog projekta, prema vrstama *izvora podataka* konfiguriranima u desnoj tablici. Moguće je odabrati *Materijale*, *Internu obradu*, *Vanjske usluge obrade* te iznose određenih podkonta preuzete iz računovodstvenog izvora.

:::tip Napomena
Ako želimo vrednovati centar za obradu metala, koji je proizvodni centar, na projektima koji se obrađuju u određenom razdoblju, primjerice, potrebno je definirati nositelja troškova koji će te troškove raspodijeliti putem vrste *Prijenos prema proizvodnji po projektu*.

Pritom se dohvaćaju podaci iz proizvodnje za svaki projekt zasebno kako bi se utvrdilo koliko je rada taj centar obavio, na temelju vrste mjerenja centra, odnosno mjerne jedinice MJ1 ili MJ2 za proizvodne centre.

Postotni pokazatelj obično se koristi kada se kriterij raspodjele temelji na troškovima, prihodima ili maržama projekta.
:::