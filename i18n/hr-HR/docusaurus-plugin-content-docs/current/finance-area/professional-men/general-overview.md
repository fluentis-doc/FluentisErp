---
title: Uvod 
sidebar_position: 1
---

Modul Vanjski suradnik u Fluentis ERP upravlja aktivnostima vezanim za naknade koje se isplaćuju vanjskim profesionalcima i agentima, osiguravajući kontrolu nad zadržavanjima i povezanim poreznim obvezama, kao što je ispunjavanje obrasca F24. Ovaj modul omogućuje registraciju naknada, knjiženje uplata i generiranje poreznih potvrda. Modul može primati podatke od agenata iz istoimernog modula u području **Prodaje**.  
Iz ovog modula bilježe se dugovi za različite poreze koje treba platiti (porez po odbitku, Enasarco, INPS).

**Glavne funkcionalnosti**

- **Pretraživanje i upravljanje naknadama:** Omogućuje unos, izmjenu i pregled naknada, s mogućnošću brisanja pogrešnih i masovnog upravljanja uplatom zadržavanja, čime se izbjegavaju ručne izmjene na pojedinačnim naknadama​.

- **Knjiženje naknada:** Naknade se mogu knjižiti izravno, kako za porezni dio (zadržavanja, INPS, ENASARCO), tako i za upravljanje centrima troška i profita tvrtke. Konačne naknade se zatim unose u računovodstvo​.

- **Obrazac F24:** Modul upravlja izračunom i ispunjavanjem obrasca F24 za uplatu zadržavanja i drugih poreza, s mogućnošću automatskog predlaganja potrebnih podataka zahvaljujući informacijama unesenim u naknade​.

**Dostupni ispisi**

- **Ispis potvrde o zadržavanjima:** Generira potvrdu o periodičnim zadržavanjima na temelju unaprijed​.

- **Situacija zadržavanja:** Pruža pregled zadržavanja koja su uplaćena ili koja treba uplatiti, korisno za internu kontrolu i ispunjavanje Jedinstvene potvrde​.

- **Ispis provizija:** Podržava upravljanje provizijama koje ostvaruju agenti, s filtrima za datum i agenta, omogućujući obradu cjelovitih lista​.

**Glavne Procedure**

- **Upravljanje naknadama i uplatom zadržavanja:** Omogućuje učitavanje, izmjenu i povezivanje poreznih dokumenata vezanih uz naknade, te ručno ili masovno upravljanje podacima uplata​.

- **Izračun provizija:** Automatizira izračun provizija za agente, s mogućnošću povezivanja naknada sa specifičnim projektima ili poslovima​.

**Prednosti korištenja modula**: Ovaj modul komunicira s modulom **Prodaje** za čitanje izračunatih provizija agenata i njihovu pretvorbu u Račun agenta, osiguravajući izračun kako zadržavanja, tako i doprinosa za mirovinsko osiguranje Enasarco. Također, povezan je s modulom Porezne izjave, omogućujući upravljanje svim poreznim obvezama, do CU (jedinstvena potvrda o zadržavanjima) samostalno, bez potrebe za vanjskim savjetima. Obrada CU također omogućuje export telematickog praćenja za slanje Agenciji za prihode. Posebna pažnja posvećena je logici upravljanja naknadama i stvarnosti u Italiji, s mogućnošću unosa najave za račun (u biti proforma račun) i nastavkom na uplatu, s nastankom duga za porezne uplate, prije knjiženja primljenog računa.

**Tablice i parametri potrebni za korištenje modula**

Da biste koristili modul Percipienti u Fluentis ERP, potrebno je upravljati nekim ključnim tablicama kako biste osigurali ispravno funkcioniranje sustava i usklađenost računovodstvenih i poreznih operacija. Među glavnim tablicama koje treba konfigurirati su:

- **Tipovi konta** i **TTipovi odbitka poreza**: Osnovno za definiranje vrste zadržavanja koja se primjenjuje na različite primatelje.
- **Kategorije agenata:** Temeljna tablica za agente gdje se definiraju doprinosi za mirovinsko osiguranje i drugi doprinosi na koje su podložni.
- **Šifra poreza:** Nužan za upravljanje zadržavanjima i porezima povezanim s naknadama.
- **Način uplate:** Za definiranje načina plaćanja poreza.
- **Plan računa:** Potreban za povezivanje računovodstvenih evidencija s ispravnim računima.
- **Stopa PDV-a:** Za ispravnu primjenu poreza na naknade.
- **Predlošci općeg računovodstva i Predlošci doprinosa:** Koriste se za ispravno klasificiranje računovodstvenih operacija povezanih s naknadama primatelja.
- **Centri troška/profita/odgovornosti:** Za dodjeljivanje troškova i prihoda različitim poslovnim centrima.
- **Fiksni tečajevi eura i tečajevi valuta:** Važni za upravljanje transakcijama u različitim valutama.

**Zaključci**

Modul Vanjski suradnik u Fluentis ERP napredan je alat za upravljanje naknadama profesionalcima i agentima, osiguravajući ispravnost poreznih uplata i olakšavajući obradu službenih dokumenata kao što su obrazac F24 i potvrde o zadržavanjima.

<iframe width="560" height="315" src="https://www.youtube.com/embed/k7abmzqf6Bk" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/8sdFGMDVIFc" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/DVXhUdwqBS4" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>