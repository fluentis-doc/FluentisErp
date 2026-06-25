---
title: Uvod
sidebar_position: 0
---

:::important **Identifikacija proizvoda i pripadajućih djelova**     

Identifikacija proizvoda i njihovih sastavnih dijelova

Svako proizvodno poduzeće prodaje fizičke proizvode koji se uobičajeno nazivaju gotovim proizvodima.

Za njihovu izradu potrebne su sirovine i komponente dostupne na tržištu.

Očito je da svako proizvodno poduzeće mora, kao minimum, identificirati ulaznu i izlaznu robu kako bi moglo upravljati procesima nabave, prodaje i pripadajućim računovodstvenim procesima.

Svaki proizvod jedinstveno se identificira putem šifre artikla, najčešće alfanumeričke, prema pravilima kodiranja specifičnima za pojedino poduzeće.

Teoretski je stoga uvijek moguće opisati strukturu gotovog proizvoda jednostavnom sastavnicom (BOM) na jednoj razini, koja sadrži sve sirovine i/ili nabavne komponente.

Međutim, takav je prikaz često previše pojednostavljen i nedovoljno učinkovit, pa je potrebno definirati i poluproizvode.

Postavlja se pitanje:

Koju logiku treba primijeniti kako bi se utvrdilo kada je potrebno kreirati šifru artikla za poluproizvod?
Koliko je poluproizvoda potrebno definirati kako bi se opisala struktura gotovog proizvoda?

S projektantskog odnosno inženjerskog stajališta moguće je prepoznati velik broj dijelova unutar gotovog proizvoda, no iz proizvodne perspektive potreba za njihovim šifriranjem može biti znatno drukčija.

Općenito, ako se određena logička komponenta nakon proizvodnje uvijek odmah koristi u sljedećoj fazi procesa, nije preporučljivo za nju kreirati zasebnu šifru artikla (uz neke iznimke koje će biti objašnjene kasnije).

Ako trenutak proizvodnje i trenutak korištenja nisu vremenski podudarni, nastaje potreba za skladištenjem te komponente. U tom je slučaju potrebno definirati šifru artikla kako bi se mogli upravljati povezanim procesima i evidentirati vrijednosti u godišnjim računovodstvenim obračunima.

Stoga je potreba za skladištenjem dovoljan razlog za otvaranje zasebne šifre artikla.

Najčešći razlozi zbog kojih je potrebno skladištiti određenu komponentu su:

proizvodnja komponente zahtijeva značajne troškove pripreme stroja, pa se definiraju minimalne proizvodne serije kako bi se smanjio broj priprema i povećao omjer stvarnog proizvodnog vremena u odnosu na raspoloživo radno vrijeme. Zbog toga su proizvodne serije često veće od trenutačnih potreba, pa se dio proizvedene količine skladišti za buduću potrošnju;
određene komponente potrebno je proizvesti unaprijed kako bi se gotovi proizvodi mogli isporučiti u rokovima koje zahtijeva tržište. Budući da u trenutku proizvodnje nisu poznate stvarne buduće potrebe, stvara se zaliha za buduću potrošnju;
neki proizvodni procesi imaju promjenjiv prinos, zbog čega je potrebno održavati zalihu materijala;
želi se stvoriti zaliha ispred kritičnog resursa (uskog grla) kako bi se spriječilo zaustavljanje proizvodnje zbog nedostatka materijala, budući da upravo uska grla određuju ukupni proizvodni kapacitet tvornice;
želi se odvojiti pojedine proizvodne procese kako bi se smanjila njihova međusobna ovisnost kada ih nije moguće sinkronizirati kao u kontinuiranoj proizvodnji.

Ponekad se ipak odlučuje definirati šifru artikla čak i kada se za taj artikl ne vodi zaliha.

To se najčešće događa iz sljedećih razloga:

artikl služi isključivo kao logička grupa više artikala koji se zajedno koriste u drugim proizvodima ili se prodaju kao paket. Na taj se način pojednostavljuje izrada sastavnica jer se upravlja jednim artiklom umjesto većim brojem pojedinačnih artikala (u literaturi poznato kao kit bill);
artikl se u pravilu odmah troši nakon proizvodnje, ali je potrebno održavati malu zalihu za potrebe servisiranja i rezervnih dijelova;
tehnološki postupak sastavljenog proizvoda ne može se prikazati linearnim slijedom operacija jer ima mrežnu strukturu s više grananja. Budući da većina ERP sustava podržava samo sekvencijalne radne procese, potrebno je uvesti dodatne šifre artikala na mjestima gdje dolazi do grananja;
radi logičkog izdvajanja dijelova proizvoda ili potrebe za obračunom troškova pojedinih dijelova;
zbog tehničke dokumentacije za popravke i održavanje.

U slučajevima kada postoji šifra artikla, ali za njega nikada ne postoji stanje zalihe, takav se artikl definira kao fantomski artikl (phantom item) ili fiktivni artikl. Za njega nije moguće izdavati narudžbe niti provoditi skladišne transakcije, a MRP sustav će izravno uzimati u obzir njegove komponente bez planiranja samog artikla, budući da ne može imati ni zalihe ni narudžbe.
:::