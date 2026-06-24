---
title: Uvod
sidebar_position: 0
---

:::important **Identifikacija proizvoda i pripadajućih delova**

Identifikacija proizvoda i njihovih sastavnih delova
Svako proizvodno preduzeće prodaje fizičke proizvode koji se uobičajeno nazivaju gotovim proizvodima.
Za njihovu izradu potrebne su sirovine i komponente dostupne na tržištu.
Očigledno je da svako proizvodno preduzeće mora, kao minimum, identifikovati ulaznu i izlaznu robu kako bi moglo upravljati procesima nabavke, prodaje i pripadajućim računovodstvenim procesima.
Svaki proizvod se jedinstveno identifikuje putem šifre artikla, najčešće alfanumeričke, prema pravilima kodiranja specifičnim za pojedino preduzeće.
Teoretski je stoga uvek moguće opisati strukturu gotovog proizvoda jednostavnom sastavnicom (BOM) na jednom nivou, koja sadrži sve sirovine i/ili nabavne komponente.
Međutim, takav prikaz je često previše pojednostavljen i nedovoljno efikasan, pa je potrebno definisati i poluproizvode.

Postavlja se pitanje:
Koju logiku treba primeniti kako bi se utvrdilo kada je potrebno kreirati šifru artikla za poluproizvod?  
Koliko je poluproizvoda potrebno definisati kako bi se opisala struktura gotovog proizvoda?
Sa projektantskog odnosno inženjerskog stanovišta moguće je prepoznati veliki broj delova unutar gotovog proizvoda, ali iz proizvodne perspektive potreba za njihovim šifriranjem može biti znatno drugačija.
Uopšteno, ako se određena logička komponenta nakon proizvodnje uvek odmah koristi u sledećoj fazi procesa, nije preporučljivo za nju kreirati zasebnu šifru artikla (uz neke izuzetke koji će biti objašnjeni kasnije).
Ako trenutak proizvodnje i trenutak korišćenja nisu vremenski podudarni, nastaje potreba za skladištenjem te komponente. U tom slučaju potrebno je definisati šifru artikla kako bi se mogli upravljati povezanim procesima i evidentirati vrednosti u godišnjim računovodstvenim obračunima.
Dakle, potreba za skladištenjem dovoljan je razlog za otvaranje zasebne šifre artikla.
Najčešći razlozi zbog kojih je potrebno skladištiti određenu komponentu su:

- proizvodnja komponente zahteva značajne troškove pripreme mašine, pa se definišu minimalne proizvodne serije kako bi se smanjio broj priprema i povećao odnos stvarnog proizvodnog vremena u odnosu na raspoloživo radno vreme. Zbog toga su proizvodne serije često veće od trenutnih potreba, pa se deo proizvedene količine skladišti za buduću potrošnju;
- određene komponente potrebno je proizvesti unapred kako bi se gotovi proizvodi mogli isporučiti u rokovima koje zahteva tržište. Pošto u trenutku proizvodnje nisu poznate stvarne buduće potrebe, stvara se zaliha za buduću potrošnju;
- neki proizvodni procesi imaju promenljiv prinos, zbog čega je potrebno održavati zalihu materijala;
- želi se stvoriti zaliha ispred kritičnog resursa (uskog grla) kako bi se sprečilo zaustavljanje proizvodnje zbog nedostatka materijala, budući da upravo uska grla određuju ukupni proizvodni kapacitet fabrike;
- želi se razdvojiti pojedine proizvodne procese kako bi se smanjila njihova međusobna zavisnost kada ih nije moguće sinhronizovati kao u kontinuiranoj proizvodnji.

Ponekad se ipak odlučuje definisati šifru artikla čak i kada se za taj artikal ne vodi zaliha.
To se najčešće događa iz sledećih razloga:

- artikal služi isključivo kao logička grupa više artikala koji se zajedno koriste u drugim proizvodima ili se prodaju kao paket. Na taj način pojednostavljuje se izrada sastavnica jer se upravlja jednim artiklom umesto većim brojem pojedinačnih artikala (u literaturi poznato kao *kit bill*);
- artikal se po pravilu odmah troši nakon proizvodnje, ali je potrebno održavati malu zalihu za potrebe servisiranja i rezervnih delova;
- tehnološki postupak sastavljenog proizvoda ne može se prikazati linearnim sledom operacija jer ima mrežnu strukturu sa više grananja. Pošto većina ERP sistema podržava samo sekvencijalne radne procese, potrebno je uvesti dodatne šifre artikala na mestima gde dolazi do grananja;
- radi logičkog izdvajanja delova proizvoda ili potrebe za obračunom troškova pojedinih delova;
- zbog tehničke dokumentacije za popravke i održavanje.

U slučajevima kada postoji šifra artikla, ali za njega nikada ne postoji stanje zalihe, takav artikal se definiše kao fantomski artikal (*phantom item*) ili fiktivni artikal. Za njega nije moguće izdavati narudžbine niti sprovoditi skladišne transakcije, a MRP sistem će direktno uzimati u obzir njegove komponente bez planiranja samog artikla, budući da ne može imati ni zalihe ni narudžbine.
:::