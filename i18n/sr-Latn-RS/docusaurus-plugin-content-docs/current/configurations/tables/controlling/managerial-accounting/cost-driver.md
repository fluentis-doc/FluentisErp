---
title: Nosioci troškova
sidebar_position: 6
---

U tabeli **nosioca troškova (Cost driver)** moguće je definisati sve načine raspodele troškova između centara.

Pogledajmo detaljnije pojedina dostupna svojstva.

:::tip Napomena
Tabela nosilaca troškova dostupna je i u *pojednostavljenoj* verziji za preduzeća koja nemaju aktiviran *Kontroling*.

U tom slučaju, koji ovde nećemo detaljnije opisivati jer je od manjeg značaja, nosilac troškova sadrži šifru i opis, kao i listu odredišnih centara čije se vrednosti određuju isključivo procentualno, uz mogućnost razlikovanja procenata po poslovnoj godini. Nosilac troškova zatim se povezuje sa poslovnim centrima čije vrednosti treba raspodeliti prema toj procentualnoj logici, putem postupka **Knjiženje nosilaca troškova**, dostupnog u modulu **Međuperiodna zaključivanja**.

Na primer, možemo definisati kriterijum „Kvadratni metri hale X”, prema kojem se troškovi raspodeljuju u odnosu 60 % – 40 % na dva proizvodna centra. Zatim taj nosilac troškova povezujemo sa centrom „Hala X”, koji objedinjuje sve pripadajuće troškove koje treba raspodeliti na odredišne proizvodne centre.
:::

## Opšti podaci

- **ŠIFRA** pravila koje unosimo. U okviru svakog ciklusa obrade **FluentisERP** obrađuje nosioce troškova prema redosledu šifara.

:::tip Napomena
Kao kriterijum za dodelu šifara preporučujemo sledeći način:

- **A – Atribucije**: sve šifre A odnose se na generički centar „VREDNOSTI SA DODELOM U KONTROLINGU”, odnosno poslovni centar koji ima aktiviranu oznaku **Konta kojima treba ponovo dodeliti centar**. Prvi korak obrade kontrolinga jeste dodela vrednosti sa tih generičkih konta koje računovodstvo ne može da obradi ili koje treba rasporediti prema promenljivijim pravilima od onih kojima raspolaže računovođa.
- **R – Raspodele**: koriste se kada se vrednosti jednog centra raspodeljuju na druge centre.
- **P – Projekti**: obrade povezane sa projektima logično se izvršavaju na kraju jer se tim pravilima projektima za određeni period dodeljuju indirektni troškovi koji su već obračunati u industrijskoj/upravljačkoj dimenziji.
:::

- **OPIS** nosioca troškova, koji može biti manje ili više detaljan, u zavisnosti od njegove namene.

- [**PODRUČJE**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas): za nosioce troškova područje je *uvek obavezno*. Mogu se definisati posebna pravila za određena područja, na primer za simulacije, dok se opšta pravila definišu u generičkom području tipa *Skup pravila*.

- **BROJ CIKLUSA**: obrada kontrolinga u sistemu **FluentisERP** mora da prati logičan redosled. Najpre se obrađuju fizička kretanja za određeni period, zatim amortizacija osnovnih sredstava, a potom nosioci troškova. Njihova obrada počinje atribucijama sa brojem ciklusa 1, jer je prvi korak pražnjenje *generičkog centra kojem treba ponovo dodeliti vrednosti*. Nakon toga slede raspodele prema redosledu ciklusa. Na kraju se, ako je definisana dimenzija projekata/naloga, izvršavaju nosioci troškova poslednjeg ciklusa, kojima se vrednosti iz upravljačke dimenzije dodeljuju projektima. Ako više nosilaca troškova ima isti broj ciklusa, obrađuju se prema redosledu šifara.

- **KONTO/PODKONTO**: omogućava povezivanje nosioca troškova sa kombinacijom podkonta i centra. Uzimaju se ukupna knjiženja za navedeni konto i centar, a nosilac troškova zatim određuje gde će se i na koji način te vrednosti ponovo rasporediti na odredišne centre navedene u donjoj levoj tabeli. Konto/podkonto je obavezno polje samo za nosioce troškova povezane sa generičkim centrom kojem treba ponovo dodeliti vrednosti; za ostale je opciono.

- [**DIMENZIJA ODREDIŠNIH CENTARA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension): ovom dimenzijom filtriraju se odredišni centri za vrednosti prikazane u donjoj levoj tabeli. U sistemu **FluentisERP** nosioci troškova mogu da premeštaju ili kopiraju podatke iz jedne dimenzije centara u drugu. Tipičan primer je dodela direktnih i indirektnih troškova dimenziji za analizu projekata.

- **DATUM POČETKA** i **DATUM ZAVRŠETKA**: određuju period važenja nosioca troškova. Nije dozvoljeno preklapanje perioda važenja dva pravila unutar istog područja za isti centar i, ako je naveden, isti konto. Ako se vremenom pokaže da je potrebno izmeniti pravilo, moguće ga je zaključiti na određeni datum, a zatim od sledećeg perioda primeniti novo pravilo.

## VRSTE RASPODELE

- **VRSTA RASPODELE**: određuje način sprovođenja dodele ili raspodele troškova. Za dodele su dostupne šifre od 01 do 09. Za raspodele između centara dostupne su još tri vrste koje omogućavaju korišćenje stopa centra. Za odredišnu dimenziju projekata/naloga dostupno je šest posebnih vrsta raspodele. Detaljan pregled:

  - vrste raspodele za dodele i raspodele između centara:
    - **01 Procenat**: izvorni podatak raspodeljuje se za svaki period prema procentu pojedinačnog odredišnog centra.
    - **02 Ukupno duguje**: za svaki period izračunava se procenat na osnovu dugovnog prometa pojedinačnog odredišnog centra u odnosu na ukupan dugovni promet svih odredišnih centara.
    - **03 Ukupno potražuje**: kao prethodna opcija, ali se uzima u obzir ukupan potražni promet.
    - **04 Marže**: kao prethodna opcija, ali se uzima u obzir razlika između dugovnog i potražnog prometa (apsolutna vrednost).
    - **05 Na izabranom podkontu**: procenat se izračunava na osnovu razlike između dugovnog i potražnog prometa (apsolutna vrednost) odredišnih centara, uz filtriranje prema listi *podkonta* u desnoj tabeli.
    - **06 Na izabranom kontu**: procenat se izračunava na osnovu razlike između dugovnog i potražnog prometa (apsolutna vrednost) odredišnih centara, uz filtriranje prema listi *konta* u desnoj tabeli.
    - **07 Isključujući izabrane podkonte**: procenat se izračunava na osnovu razlike između dugovnog i potražnog prometa (apsolutna vrednost) odredišnih centara, uz isključivanje podkonta navedenih u desnoj tabeli.
    - **08 Isključujući izabrane konte**: procenat se izračunava na osnovu razlike između dugovnog i potražnog prometa (apsolutna vrednost) odredišnih centara, uz isključivanje konta navedenih u desnoj tabeli.
    - **09 Na osnovu fizičke veličine**: procenat se izračunava na osnovu količina odredišnih centara za izabranu mernu jedinicu, u odnosu na ukupnu količinu svih odredišnih centara.

  - posebne vrste raspodele između centara:
    - **10 Prenos prema proizvodnji po standardnoj stopi**: vrednosti se raspodeljuju sa jednog centra na više centara na osnovu toka fizičkih kretanja između izvornog centra (centra povezanog sa nosiocem troškova) i odredišnih centara. Sati izvornog centra zato će biti jednaki satima odredišnih centara. Izvorni centar neće se potpuno isprazniti, pa će na njemu ostati preostala vrednost različita od nule.
    - **11 Direktan prenos po standardnoj stopi**: omogućava raspodelu vrednosti sa jednog centra na više centara na osnovu standardne stope izvornog centra (centra nosioca troškova) i toka fizičkih kretanja odredišnih centara. Iznos dodeljen odredišnim centrima izračunava se kao proizvod standardne stope izvornog centra i vrednosti fizičke veličine svakog odredišnog centra. Ni u ovom slučaju izvorni centar neće se potpuno isprazniti, pa će na njemu ostati preostala vrednost različita od nule.
    - **12 Prenos prema proizvodnji po izračunatoj stopi**: omogućava raspodelu vrednosti sa jednog centra na više centara na osnovu izračunate stope izvornog centra i toka fizičkih kretanja između izvornog i odredišnih centara. Sati izvornog centra zato će biti jednaki satima odredišnih centara. Iznos dodeljen odredišnim centrima izračunava se kao proizvod izračunate stope izvornog centra i vrednosti fizičke veličine svakog odredišnog centra. Izvorni centar će se potpuno isprazniti, pa će njegova preostala vrednost biti nula.

  - posebne vrste raspodele za dimenziju projekata/naloga (detaljnije opisane u nastavku):
    - **13 Prenos prema proizvodnji po projektu**
    - **14 Prenos marži po projektu**
    - **15 Prenos specifične amortizacije po projektu**
    - **16 Prenos prema prihodima projekta**
    - **17 Prenos prema troškovima projekta**
    - **18 Prenos prema industrijskom trošku projekta**

- [**MERNA JEDINICA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units): ovo polje aktivira se za vrste raspodele *09, 10, 11 i 12* i služi za izbor merne jedinice prema kojoj će se pretraživati fizička kretanja.

## OSTALA POLJA

- **GREŠKA PRI OBRADI**: ovim poljem određuje se način obrade slučajeva u kojima nisu dostupni podaci potrebni za primenu pravila.

  - *BLOKIRAJ*: obrada se prekida ako nema potrebnih podataka za primenu nosioca troškova.
  - *PREOSTALA VREDNOST*: ova opcija ne može se koristiti za dodele, već samo za raspodele, jer se na izvornom centru ostavlja preostala vrednost koja nije mogla biti dodeljena odredišnim centrima. Generički centar uvek mora biti prazan, pa se ovaj način obrade grešaka ne može koristiti za dodele.
  - *PROSEK POSTOJEĆIH VREDNOSTI*: ako vrednost ne postoji u tekućem periodu, raspodela se sprovodi na osnovu proseka postojećih vrednosti iz drugih perioda godine koja se obrađuje.

:::tip Napomena
Ova opcija može, na primer, sprečiti prekid obrade u periodima kao što je avgust, kada količine ili vrednosti potrebne za primenu nosioca troškova mogu biti jednake nuli zbog kolektivnog godišnjeg odmora.
:::

- **VREDNOSTI KOJE TREBA KORISTITI**: određuje koji se podaci uzimaju u obzir za odredišne centre. Dostupne su sledeće opcije:
  - **SVE**: uzimaju se u obzir sva knjiženja dodeljena do trenutno obrađivanog ciklusa.
  - **SAMO IZVORNI REDOVI**: uzimaju se u obzir samo podaci dobijeni početnim dodelama.

:::tip Napomena
Kod raspodele se ovim poljem određuje da li će se za odredišne centre uzeti u obzir i vrednosti primljene raspodelom iz drugih centara. Zato je ovo polje relevantno samo za vrste raspodele od 02 do 08, dok ne utiče na ostale vrste koje se zasnivaju na stopama.
:::

- **OZNAKA STORNIRANJA**: određuje da li podatke izvorne dimenzije treba zadržati ili *premestiti* u odredišnu dimenziju.

:::tip Napomena
Kada je nosilac troškova povezan sa dimenzijom projekata/naloga, vrednost se svakako mora zadržati i u izvornoj, upravljačkoj dimenziji. U suprotnom bi nedostajali troškovi, a eventualni računi dobiti i gubitka bili bi netačni.
:::

- **PO DIVIZIJI**: omogućava filtriranje izvornih podataka za raspodelu prema diviziji definisanoj u sledećem polju.

:::tip Napomena
U vezi sa divizijama treba napomenuti da je moguće definisati nosioce troškova koji preraspodeljuju troškove/prihode iz jedne divizije u drugu. Za to je potrebno da preduzeće posluje sa više divizija i da je aktiviran *opšti parametar* za *upravljanje centrima po divizijama*.
:::

## POSEBNOSTI ZA DIMENZIJU PROJEKTA/NALOGA

Sada ćemo razmotriti polja povezana sa nosiocima troškova za projekte/naloge. Najpre ćemo pogledati poslednja tri polja u tabeli.

- **VRSTA MERENJA**: ovde se određuje koji će se pokazatelj troškova (stopa) koristiti za vrednovanje centra povezanog sa nosiocem troškova. Dostupne su sledeće opcije:
  - *MJ1*: koristi se pokazatelj povezan sa prvom mernom jedinicom centra.
  - *MJ2*: koristi se pokazatelj povezan sa drugom mernom jedinicom centra.
  - *%*: koristi se procentualni pokazatelj centra.

- **PODRUČJE ZA POKAZATELJ**: ovim poljem određuje se u kom se *području* traži prethodno navedeni pokazatelj troškova. Za dimenziju projekata moguće je odrediti posebno područje iz kojeg se preuzimaju pokazatelji, nezavisno od područja izabranog za *obradu ostvarenih vrednosti projekta*.

- **VRSTA IZRAČUNAVANJA POKAZATELJA**: određuje način izračunavanja pokazatelja. Dostupne su sledeće opcije:
  - *Mesec*: koristi se pokazatelj za pojedinačni mesec.
  - *Do perioda*: koristi se pokazatelj izračunat na osnovu kumulativnih podataka od početka godine koja se obrađuje.
  - *Klizna godina*: koristi se pokazatelj izračunat na osnovu kumulativnih podataka za 12 meseci koji prethode pojedinačnom obrađivanom periodu.
  - *Godina*: koristi se pokazatelj izračunat na osnovu kumulativnih podataka svih dostupnih meseci godine koja se obrađuje.
  - *Standardna stopa*: koristi se standardna stopa centra koja važi za pojedinačni obrađivani period.

- **VRSTE RASPODELE** specifične za projekte/naloge: nosilac troškova uvek uključuje odredišne centre, ali kod dimenzije projekata postoje ne samo ti „projektni” centri već i konkretni projekti povezani sa njima.

  To omogućava korišćenje jednog *centra projekta* (putem oznake *Podrazumevani centar za projekte*), koji će tada biti jedini odredišni centar nosioca troškova, ili korišćenje tabele *Povezivanje centara i projekata/naloga*, kojom se povezuje lista šifara centara na osnovu određenih karakteristika projekata.

  Ova druga mogućnost omogućava definisanje različitih nosilaca troškova za različite vrste projekata, na primer kada se struktura troškova razlikuje u zavisnosti od vrste projekta.

  Dostupne su sledeće vrste raspodele:

  - **13 Prenos prema proizvodnji po projektu**: preuzima se pokazatelj troškova centra nosioca troškova (prema izabranoj mernoj jedinici MJ1 ili MJ2, području i vrsti izračunavanja) i primenjuje na sate rada koje je taj centar ostvario na projektima/nalozima povezanim sa centrima troška navedenim u donjoj levoj tabeli.

  - **14 Prenos marži po projektu**: preuzima se procentualni pokazatelj troškova centra nosioca troškova i primenjuje na marže projekata/naloga povezanih sa centrima troška navedenim u donjoj levoj tabeli.

  - **15 Prenos specifične amortizacije po projektu**: preuzimaju se jedinični troškovi tehničke amortizacije pojedinačnog osnovnog sredstva iz kontrolinga, a zatim se množe sa količinama koje je to osnovno sredstvo proizvelo na pojedinačnim projektima/nalozima povezanim sa centrima troška navedenim u donjoj levoj tabeli.

  - **16 Prenos prema prihodima projekta**: preuzima se procentualni pokazatelj troškova centra nosioca troškova i primenjuje na prihode projekata/naloga povezanih sa centrima troška navedenim u donjoj levoj tabeli. Podaci se po potrebi mogu filtrirati prema kontima navedenim u desnoj tabeli.

  - **17 Prenos prema troškovima projekta**: preuzima se procentualni pokazatelj troškova centra nosioca troškova i primenjuje na troškove projekata/naloga povezanih sa centrima troška navedenim u donjoj levoj tabeli. Podaci se po potrebi mogu filtrirati prema kontima navedenim u desnoj tabeli.

  - **18 Prenos prema industrijskom trošku projekta**: procentualni pokazatelj primenjuje se na izračunati industrijski trošak svakog pojedinačnog projekta, prema vrstama *izvora podataka* konfigurisanima u desnoj tabeli. Moguće je izabrati *Materijale*, *Internu obradu*, *Usluge spoljne obrade* i iznose određenih podkonta preuzete iz računovodstvenog izvora.

:::tip Napomena
Ako želimo da vrednujemo centar za obradu metala, koji je proizvodni centar, na projektima koji se obrađuju u određenom periodu, na primer, potrebno je definisati nosioca troškova koji će te troškove raspodeliti pomoću vrste *Prenos prema proizvodnji po projektu*.

Pritom se preuzimaju podaci iz proizvodnje za svaki projekat zasebno kako bi se utvrdilo koliko je rada taj centar obavio, na osnovu vrste merenja centra, odnosno merne jedinice MJ1 ili MJ2 za proizvodne centre.

Procentualni pokazatelj obično se koristi kada se kriterijum raspodele zasniva na troškovima, prihodima ili maržama projekta.
:::