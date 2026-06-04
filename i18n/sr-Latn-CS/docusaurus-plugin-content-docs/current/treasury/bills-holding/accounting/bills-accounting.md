---
title: Knjiženje vrijednosnih papira 
sidebar_position: 1
---

Obrazac se nalazi u Riznica > Portfelj efekata > Knjiženja > Knjiženja vrijednosnih papira.

Iz ove maske prelazi se na knjiženje vrijednosnih papira: procedura će, prema postavkama knjiženog predloška, zatvoriti stavke kupaca povezane s odabranim vrijednosnim papirima.

:::tip[Napomena]
Općenito, ovu proceduru moguće je izvesti izravno izvršavanjem ***Automatska akvizicija učinaka iz partija**
gdje, omogućujući odgovarajući flag, istovremeno se izvršava i ova procedura.

**Umjesto toga, potrebno je posebno pristupiti ovom obrascu za obnavljanje knjiženja efekata.**. 
:::

## Knjiženje vrijednosnih papira

1. Iskoristite gornji dio obrasca za filtriranje vrijednosnih papira koji se trebaju knjižiti.

2. Odaberite iz središnje mreže vrijednosne papire koje želite knjižiti.

3. Ispunite parametre za računovodstvo, kao što su **Računovodstveni predložak**, **datum knjiženja** i datum obračuna.

:::note[Napomena]
Ova sekcija može biti unaprijed definirana unutar [**parametara**](/docs/configurations/parameters/treasury/bills-portfolio-parameters) unutar modula Portfelj efekata. 

Flag **grupiranja po računima efekta** znači izvršiti jedinstveno knjiženje u kojem će biti prisutno onoliko redaka koliko ima efekata za knjiženje, ili suprotno račun povezan s tipologijom efekta (u **tablici Tipovi efekata**)..

Flag **privremenog upravljanja** generirat će privremene računovodstvene upise.

Ako računovodstveni predložak predviđa flag za otvaranje stavki, a učinak je stvoren ručno bez povezivanja stavki (ili je njegov iznos veći od iznosa povezanih stavki), tada će biti stvorena stavka kupca u dugu koja će se kasnije poravnati.

Zapamtite da neće biti moguće evidentirati efekte stvorene iz tiskanih računa kada oni još nisu evidentirani.
:::

4. Pritisnite gumb na traci izbornika **Knjiži efekte**



**Specifični gumbi**

**Traži**: Pretraži popis efekata za knjiženje. 

**Knjiženje vrijednosnih papira**: Izvršava knjiženje za odabrane stavke.

### Predhodni

S kartice *prethodni* moguće je poništiti izvršena knjiženja. 

Poništavanje će biti moguće samo ako je razdoblje još uvijek moguće mijenjati (knjiga dnevnika nije ispisana i računi nisu zatvoreni).

Dvostruki klik na odjeljak s registracijama omogućit će prikaz pripadajuće računovodstvene registracije.

Dostupan je izvještaj za pregled grešaka uočenih tijekom knjiženja.

:::tip[Napomena]
Obnova knjiženja efekata mora **nužno** biti izvršena putem ovog obrasca.

U fazi kreiranja efekta moguće je, naime, istovremeno pokrenuti njegovu knjiženje, ali NE obrnuto. 

Stoga će se prvo morati postupiti s poništavanjem knjiženja odavde, a zatim se može poništiti postupak stvaranja, vraćajući se na prethodnu situaciju (otvorena stavka kupca i stanje kupca još nije otkazano).
:::

**Specifični gumbi**

**Traži**: Pretraži popis izvršenih knjiženja. 

**Poništavanje knjiženja**: Izvršava obnovu odabranih knjiženja.

**Poništavanje registracija**: Izvodi obnovu odabrane računovodstvene evidencije vezane uz pojedinačni učinak. **PAŽNJA**: ova opcija je moguća samo ako tijekom računovodstvene obrade nije aktivirana opcija grupiranja po vrsti učinka (što generira jedinstvene evidencije za svaku vrstu učinka).





