---
title: Nositelji troškova
sidebar position: 6
---

Unutar tablice **nositelja troškova (Cost drivera)** možemo kodirati sve logike preraspodjele između centara.
Pogledajmo detaljno pojedinačna dostupna svojstva.

:::tip Napomena
Tablica nositelja troškova dostupna je, u *pojednostavljenoj* verziji, i za tvrtke koje nemaju aktiviran modul *kontrolinga*.
U tom slučaju — koji ovdje ne opisujemo detaljno jer je od sporednog interesa — nositelj troška sadrži samo šifru i opis, te popis odredišnih centara izraženih isključivo u postocima (koji se opcionalno mogu mijenjati po poslovnim godinama). Nakon toga, nositelj troška mora se povezati s poslovnim centrima koje treba raspodijeliti prema toj postotnoj logici, kroz postupak **Knjiženja po nositelju troška** koji se nalazi u modulu **Međugodišnja zatvaranja**. 

Primjerice, možemo definirati kriterij „kvadratura skladišta X“, koji predviđa raspodjelu 60% – 40% na dva proizvodna centra, a zatim taj nositelj povezati s centrom „Skladište X“, u kojem su objedinjeni svi pripadajući troškovi, kako bi se raspodijelili na odredišne proizvodne centre.
:::

## Opći podaci

- **Šifra** pravila koje unosimo. Unutar svakog ciklusa obrade, **FluentisERP** evaluira nositelje troškova prema redoslijedu šifri.

:::tip Napomena
Za davanje logike kodiranja preporučujemo:
    -   A: kao ATRIBUCIJE – svi zapisi s oznakom „A“ odnose se na generički centar „VRIJEDNOSTI S ATRIBUCIJOM U KONTROLINGU“, što je poslovni centar koji ima označenu opciju „KONTI ZA PONOVNU DODJELU“. Prvi korak obrade u kontrolingu je dodjela tih generičkih konta koje računovodstvo ne može precizno raspodijeliti, ili onih koji se dodjeljuju prema fleksibilnijim logikama od standardnih računovodstvenih pravila.
    -   R: za PRERASPODJELE – kada se vrijednosti jednog centra raspoređuju na druge centre.
    -   P: kao PROJEKTI – imajte na umu da se obrade vezane uz projekte logički primjenjuju na samom kraju procesa, jer se njima projektima dodjeljuju neizravni troškovi već obračunati u „industrijskoj/direkcijskoj“ dimenziji.
:::

- **OPIS** nositelja troška, koji može biti manje ili više detaljan, ovisno o tome što se s njim upravlja.

- [**PODRUČJE**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas): kod nositelja troška (Cost Drivera) *područje je uvijek obavezno*. Možemo imati specifična pravila za određena područja (primjerice za simulacije), dok će opća pravila biti vezana uz generičko područje iz skupa pravila.

- **BROJ CIKLUSA**: obrada kontrolinga u **FluentisERP-u** mora slijediti logičan redoslijed. Prvo se obračunavaju fizički pokreti u razdoblju, zatim amortizacija dugotrajne imovine, a potom slijedi primjena nositelja troška. Najprije se započinje s atribucijama označenima brojem ciklusa 1 (jer se najprije mora isprazniti generički centar za ponovnu dodjelu), zatim se nastavlja s preraspodjelama prema njihovom redoslijedu ciklusa, a na kraju, za one koji koriste dimenziju projekta ili naloga, slijede driveri zadnjeg ciklusa — prijenosi troškova s direkcijske na projektne dimenzije.

- **KONTO/PODKONTO**: ovaj parametar povezuje nositelja troška s kombinacijom podkonta i centra. U praksi, uzima se ukupni promet tog konta i pripadajućeg centra, a zatim nositelj troška određuje kamo i kako se ti iznosi redistribuiraju prema odredišnim centrima u donjoj lijevoj tablici. Konto/podkonto je obavezno polje samo za nositelje troška povezane s generičkim centrom za ponovnu dodjelu, dok je za sve ostale opcionalno.

- [**DIMENZIJA ODREDIŠNIH CENTARA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension); ova dimenzija služi kao filtar za odredišne centre kojima će se dodijeliti vrijednosti iz donje lijeve tablice. U **FluentisERP-u** moguće je definirati drivere koji prenose ili kopiraju podatke iz jedne dimenzije centara u drugu. Tipičan primjer je dodjela direktnih i indirektnih troškova dimenziji namijenjenoj analizi projekata.

- **DATUM POČETKA** i **DATUM ZAVRŠETKA**: u ova polja unosi se vremenski raspon tijekom kojeg vrijedi nositelj troška.
Nije dopušteno da se dva pravila iste zone, za isti centar (i konto, ako je specificiran), vremenski preklapaju.
Ako se tijekom vremena pokaže potreba za izmjenom pravila, postojeće se može zatvoriti na određeni datum, a novo primijeniti od sljedećeg razdoblja.

## TIPOVI DISTRIBUCIJE

- **TIPOVI DISTRIBUCIJE**: definira način na koji se provodi atribucija ili preraspodjela (ribaltamento).
Dostupni su kodovi od 01 do 09 za atribucije; dodaju se još 3 koda za preraspodjele između centara, kada je moguće koristiti i tarife centra; dok za dimenziju odredišta projekti/nalozi postoji 6 posebnih tipova distribucije. U nastavku su detalji:
    - Tipovi distribucije za atribucije i preraspodjele
        - **01 Postotak**: il dato di origine, periodo per periodo, sarà ripartito in base alla percentuale del singolo centro destinatario
        - **02 Ukupno potražuje**: izvorni podatak, razdoblje po razdoblje, raspodjeljuje se prema unaprijed definiranim postocima svakog odredišnog centra.
        - **03 Ukupno duguje**: isto kao prethodno, ali na temelju ukupnog duguje.
        - **04 Marže**: kao i prethodni modeli, ali se izračun temelji na razlici potražuje-duguje.
        - **05 Na odabranom podkontu**: postotak se izračunava na temelju razlike potražuje-duguje (u apsolutnim vrijednostima) odredišnih centara, ali filtrirano prema popisu podkonta u desnoj tablici.
        - **06 Na odabranom kontu**: postotak se računa kao i gore, ali filtriran prema popisu *konta* u desnoj tablici.
        - **07 Isključujući odabrane podkonte**: postotak se računa kao kod modela 05, ali isključuje navedene podkonte iz desne tablice.
        - **08 AIsključujući odabrane konte**: postotak se računa kao kod modela 06, ali isključuje navedene konte iz desne tablice.
        - **09 Na fizičkoj veličini**: postotak se računa na temelju količina (jedinice mjere navedene u odgovarajućem polju) odredišnih centara u odnosu na ukupan zbroj količina svih centara.
    - Tipovi distribucije specifični za preraspodjele između centara
        - **10 Reverzija na proizvodnju po standardnoj tarifi**: troškovi jednog centra raspoređuju se na više centara na temelju fizičkih tokova između izvornog centra (povezanog s driverom) i odredišnih centara. Broj sati izvornog centra jednak je broju sati odredišnih centara. Izvorni centar se ne prazni u potpunosti, te zadržava određenu preostalu vrijednost.
        - **11 Direktna reverzija po standardnoj tarifi**: omogućuje raspodjelu troškova centra na više centara prema standardnoj tarifi izvornog centra i fizičkim tokovima u odredišnim centrima. Dodijeljeni iznos računa se kao umnožak standardne tarife izvornog centra i vrijednosti fizičke veličine svakog odredišnog centra. Izvorni centar također zadržava preostalu vrijednost.
        - **12 RReverzija na proizvodnju po izračunatoj tarifi**: raspodjela troškova jednog centra na više centara temeljem izračunate tarife izvornog centra i fizičkih tokova. Broj sati izvornog centra jednak je broju sati odredišnih centara. Dodijeljeni iznos računa se kao izračunata tarifa izvornog centra pomnožena s fizičkom veličinom svakog odredišnog centra. Ovdje se izvorni centar potpuno prazni, te nema preostale vrijednosti.
    - Tipovi distribucije specifični za dimenziju projekata/naloga
        - **13 Reverzija na proizvodnju za projekt**
        - **14 Reverzija marži za projekt**
        - **15 Reverzija specifičnih amortizacija za projekt**
        - **16 Reverzija na prihode projekta**
        - **17 Reverzija na troškove projekta**
        - **18 Reverzija na industrijski trošak projekta**


- [**JEDINICA MJERE**](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units): ovo se polje aktivira za tipove distribucije 09 - 10 - 11 - 12 i služi za odabir jedinice mjere koja će se koristiti u analizi fizičkih kretanja.

## DRUGA POLJA

- **POGREŠKA U OBRADI**: u ovom polju određujemo kako će se sustav ponašati u slučajevima kada ne postoje potrebni podaci za primjenu pravila. Opcije su:
    - *BLOKIRAJ*: proces obrade se zaustavlja ako nema potrebnih podataka za primjenu nositelja troška.
    - *OSTATAK VRIJEDNOSTI*: ova opcija nije dostupna za atribucije, već samo za preraspodjele, jer u izvornom centru ostavlja dio vrijednosti koji nije mogao biti raspodijeljen na odredišne centre. Generički centar uvijek mora biti prazan, pa se ova opcija ne koristi kod atribucija.
    - *PROSJEK POSTOJEĆIH VRIJEDNOSTI*, kada u određenom razdoblju nema vrijednosti, sustav raspodjeljuje podatke na temelju prosjeka iz drugih razdoblja u tekućoj godini obrade.

:::tip Napomena
Ova opcija može biti korisna za sprječavanje prekida obrade u mjesecima poput kolovoza, kada količine ili vrijednosti za primjenu nositelja troška mogu biti nula zbog kolektivnog godišnjeg odmora.
:::

- **VRIJEDNOSTI ZA UPOTREBU**: određuje koje podatke treba uzeti u obzir za odredišne centre. Dostupne opcije:
    - SVE – čitaju se svi dodijeljeni pokreti (do ciklusa koji se trenutno obrađuje).
    - SAMO IZVORNI REDOVI – uzimaju se samo podaci iz početnih atribucija.

:::tip Napomena
Kod preraspodjela ovo polje određuje treba li u obzir uzeti i vrijednosti koje su odredišni centri primili kroz preraspodjele iz drugih centara. Dakle, ovo se odnosi samo na tipove distribucije od 02 do 08, dok je za tipove temeljene na tarifama ova postavka nebitna.
:::

- **OZNAKA STORNA**: definira hoće li se podaci iz izvorne dimenzije zadržati ili u potpunosti *premjestiti* u dimenziju odredišta.

:::tip Napomena
Ako je nositelj troška povezan s dimenzijom projekata/naloga, vrijednost se mora zadržati i u izvornoj (direkcijskoj) dimenziji. U suprotnom, moglo bi doći do nedostataka u iskazivanju troškova te netočnosti u izvještajima.
:::

- **PO DIVIZIJI**: omogućuje filtriranje podataka za raspodjelu prema diviziji specificiranoj u sljedećem polju.

:::tip Napomena
Ako poduzeće posluje u više divizija i aktiviran je *opći parametar za upravljanje centrima po divizijama*, moguće je definirati drivere koji omogućuju prijenos troškova ili prihoda iz jedne divizije u drugu.
:::

## POSEBNOSTI ZA DIMENZIJU PROJEKT/NALOG

Sada prelazimo na polja povezana s driverima za projekte/naloge. Prvo objašnjavamo posljednja tri polja u tablici.

- **TIP MJERENJA**: u ovom polju postavlja se indeks troška (tarifa) koji će se koristiti za vrednovanje centra povezanog s nositeljem troška. Dostupne su sljedeće opcije:
    - *UM1*: koristi se indeks povezan s prvom jedinicom mjere centra
    - *UM2*: koristi se indeks povezan s drugom jedinicom mjere centra
    - *%*: koristi se postotni indeks centra

- **PODRUČJE ZA INDEKS**: ovdje definiramo iz kojeg područja treba preuzeti prethodno navedeni indeks troška. Drugim riječima, za dimenziju projekata možemo odabrati specifično područje iz kojeg će se čitati indeksi, neovisno o području odabranom za *obračun stvarnih podataka projekta*.

- **TIP IZRAČUNA INDEKSA**: određuje kako će se izračunati indeks, s dostupnim opcijama:
    - *Mjesec*: koristi se indeks za pojedini mjesec
    - *Do razdoblja*: koristi se indeks izračunat na temelju kumulativnih podataka od početka godine koja se obrađuje
    - *Tekuća godina*: koristi se indeks izračunat na temelju kumulativnih podataka iz 12 mjeseci koji prethode razdoblju obrade
    - *Godina*: koristi se indeks izračunat na temelju kumulativnih podataka iz svih dostupnih mjeseci u godini
    - *Standardna tarifa*: koristi se standardna tarifa centra, važeća za obrađivano razdoblje

- **TIPOVI DISTRIBUCIJE** Prvo, driver uvijek predviđa odredišne centre, ali za dimenziju projekata imamo ne samo ove „projektne“ centre već i specifični projekt povezan s njima. Odnosi se na mogućnost da postoji jedini projektni centar (putem opcije Centar zadan za projekte), koji će stoga biti jedini upisan kao odredište drivera, umjesto korištenja tablice Povezivanje centara/naloga putem koje se može povezati lista kodova centara ovisno o određenim karakteristikama projekata. Ova posljednja mogućnost potencijalno omogućuje različite drivere za različite vrste projekata (jer, na primjer, postoje različite strukture troškova ovisno o tipu projekta). U detalje, tipovi distribucije su:

    - **13 Preraspodjela na proizvodnju po projektu**: pročitat će se indeks troška (prema UM1 ili UM2, području i odabranom tipu izračuna) centra drivera i primijeniti ga na odrađene sate centra na projektima/nalozima povezanima s centrima u donjoj lijevoj tablici.
    - **14 Preraspodjela marži po projektu**: pročitat će se postotni indeks troška centra drivera i primijeniti ga na marže projekata/naloga povezanih s centrima u donjoj lijevoj tablici.
    - **15 Preraspodjela specifičnih amortizacija po projektu**: tražit će se jedinični troškovi tehničkih amortizacija u kontrolingu pojedinog sredstva i množiti ih s količinama koje je sredstvo proizvelo za pojedini projekt/nalog povezan s centrima u donjoj lijevoj tablici.
    - **16 Preraspodjela na prihode projekta**: pročitat će se postotni indeks troška centra drivera i primijeniti ga na prihode projekata/naloga povezanih s centrima u donjoj lijevoj tablici, uz mogućnost filtriranja podataka po kontima navedenima u desnoj tablici.
    - **17 Preraspodjela na troškove projekta**: pročitat će se postotni indeks troška centra drivera i primijeniti ga na troškove projekata/naloga povezanih s centrima u donjoj lijevoj tablici, uz mogućnost filtriranja podataka po kontima navedenima u desnoj tablici.
    - **18 Preraspodjela na industrijski trošak projekta**: u ovom slučaju postotni indeks primijenit će se na izračunati industrijski trošak, projekt po projekt, koristeći tipove *izvora podataka* konfigurirane u desnoj tablici. Moguće je odabrati *Materijale*, *Unutarnje obrade*, *Vanjske obrade* i eventualno iznose određenih podkonta preuzetih iz izvora *Računovodstvo*.

:::tip Napomena
Ako trebamo vrednovati centar strojne obrade, koji je proizvodni centar, na projektima u obradi u određenom razdoblju, morat ćemo imati driver koji uzima taj trošak i preraspodjeljuje ga, primjerice, kroz *Preraspodjelu na proizvodnju po projektu*: tada ćemo čitati podatke iz proizvodnje, projekt po projekt, koliko je radno vrijeme odrađeno u tom centru, na temelju tipa mjerenja centra (UM1 ili UM2 za proizvodne centre). Postotni indeks se, s druge strane, obično koristi kada je kriterij distribucije vezan uz troškove/prihode/marže projekta.
:::


