---
title: Obračunate provizije
sidebar_position: 2
---

Obrazac se otvara putem izbornika *Prodaja > Agenti > Likvidacije agenata > Ispisi*.  

Ispis predstavlja simulaciju izračuna provizije koju je agent ostvario, prema postavkama u njegovoj šifri i filtrima primijenjenima na izvještaj.  

**Posebno, u slučaju provizija na naplaćeni iznos, ovaj izvještaj prikazat će ostvarene podatke isključujući vrijednosti automatskih likvidacija kreiranih u sustavu** — stoga je njihovo kreiranje obavezno kako bi se dobio ispravno usklađen izvještaj.  
U slučaju provizija na fakturirani / isporučeni / naručeni iznos, pravilna primjena raspona datuma u filterima već sama po sebi omogućuje točan rezultat, neovisno o korištenju automatske procedure likvidacije provizija.  

**Ispis provizija obračunatih na dan** označava referentni datum za izračun provizija na *naplaćeni iznos*.  

Flag **Ispiši dug prema agentu na dan** aktivira unos datuma: ovom opcijom moguće je simulirati ispis provizija obračunatih na određeni dan, uključujući i one koje su likvidirane nakon tog datuma (koje bi inače bile isključene).  

Flag **Uključi provizije s nulom u osnovicu za provizije** omogućuje uključivanje stavki s iznosom provizije jednakim nuli u osnovicu za obračun provizija.  

:::tip PROVIZIJE NA NAPLAĆENI IZNOS I KOMPENZACIJE STAVKI  
Ako se provizije obračunavaju na temelju naplaćenog iznosa, a dolazi do kompenzacije stavki (npr. zbog ranije primljenih predujmova), treba obratiti pozornost na to da kompenzacija pridružuje redove zatvaranja stavki u svrhu obračuna provizija prema **datumu knjiženja** koji je najnoviji između dviju stavki koje se međusobno kompenziraju. 

U situacijama s učestalim predujmovima i storno knjiženjima, gdje se mogu pojaviti isti iznosi, posebno je važno kompenzirati predujmove i storna koja se odnose na isto razdoblje — inače bi provizija mogla biti obračunata s pogrešnim datumom.  
:::

:::tip PROVIZIJE NA NAPLAĆENI IZNOS I PRIVREMENA KNJIŽENJA
Za izračun obračunatih provizija uzimaju se u obzir **samo knjiženja u statusu “definitivno”**, stoga će svi naplati (čak i avansni) koji su evidentirani kao privremeni biti zanemareni.  
:::

:::tip PROVIZIJE NA NAPLAĆENI IZNOS I BANKARSKI EFEKTI 
Obračun provizija uvijek uzima u obzir **datum dospijeća efekta**, čak i ako je stavka kupca zatvorena zbog knjiženja izdanog bankarskog efekta (Ri.Ba.) te je efekt predan “uz dobar ishod” ili već knjižen kao odobren
:::

:::danger PAŽNJA
Posebnu pozornost potrebno je obratiti kod bankarskih efekata i upravljanja **PARAMETRIMA RIZIKA KUPCA**.

U formi Parametar rizika kupca nalaze se dva polja: **Broj dana nakon dospijeća za efekte predane uz dobar ishod** i **Broj dana nakon dospijeća za efekte predane nakon naplate**.    
Ako su ta polja popunjena, ona dodaju dodatno kašnjenje i u obračunu provizija.

Također, pri inicijalizaciji novog okruženja potrebno je osigurati da je obrazac *Parametar rizika kupca* barem jednom spremljen, kako bi se učitali zadani parametri (posebno oni koji se odnose na gore navedena polja).  
U suprotnom, datum dospijeća efekta neće biti prepoznat, pa će se provizija uvijek smatrati obračunatom tek pri zatvaranju stavke izdavanjem bankarskog efekta (Ri.Ba.).
:::