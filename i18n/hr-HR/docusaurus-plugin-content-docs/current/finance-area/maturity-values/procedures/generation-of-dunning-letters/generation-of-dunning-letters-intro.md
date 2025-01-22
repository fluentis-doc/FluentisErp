---
title: Izrada opomena
sidebar_position: 1
---


S ovom procedurom se također može postaviti određena razina podsjetnika koja će ići izvan nekog logičkog reda prioriteta. Također je moguće ručno odabrati dospijeća za traženje nakon što se filtriraju, čime se ima veća kontrola nad operacijom.


U donjem dijelu obrasca dodijeli se datum izrade opomena i odabere vrsta opomene (prethodno kodiranu u tablici *Vrste opomena*). Međutim, dodjela određene razine opomena nije obavezna kako bi se stvaranje prisililo izvan logičkog reda prioriteta. Zapravo, obično će stavke koje nikada nisu zatražene imati podsjetnik prioriteta 1, a one koje su već zatražene premjestit će se na novi podsjetnik prioriteta 2 i tako dalje za sljedeće.

Datum opomene utječe na kreiranje jer mora poštivati parametre prisutne u vrsti opomene i broju opomene kao što su dani kašnjenja i *dani* koji određuju istek svake prethodne opomene. Ako je datum opomene nevažeći s obzirom na parametre za odabranu seriju, naredba za stvaranje neće izvršiti podsjetnike.

POLJA FILTRA:

**Konto/podkonto:** odnosi se na odabir klijenta kao kupca/dobavljača

**Agent:** služi za filtriranje agenta koji je u šifrarniku kupaca

**Agent (dospijeća s opomenama):** filtrira dospijeća s agentom umetnutim u to dospijeće. 

POLJA VEZANA UZ SERIJE ZA PRETRAŽIVANJE:
Broj dokumenta/Status dospijeća plaćanja, Od/Do Datum dokumenta, Od/Do datum dospijeća, godina dospjele vrijednosti, broj ... Vrsta dokumenta, Administrativna kategorija (u bazi podataka korisnika), Način plaćanja.

POLJA VEZANA UZ PRETHODNO TRAŽENE REFERENCE NA DOSPIJEĆA:  
Vrsta opomene, OD / DO datum opomene, Broj opomene, Referentni broj.

TIP DOSPJELE VRIJEDNOSTI:   
Oznaka za izdvajanje ne samo klasičnih aktivnih podudaranja kupaca, već i onih koja se odnose na primjerice dobavljače itd....