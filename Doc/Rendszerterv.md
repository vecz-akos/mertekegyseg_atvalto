# Mértékegység átváltó rendszerterv

## 1. A rendszer célja
A rendszerünk célja, hogy a zöldség-gyümölcs árusok gyorsan és könnyedén végezhessenek el átváltásokat és a fizetendő összeget egy egységár megadása után azzonal láthassa az eladó és a vevő is. A rendszernek nem célja az alapvető mértékegységeken kívül más mondjuk pénz vagy idő átváltásában segítséget nyújtani.

## 2. Projektterv

**Projekt szerepkörök és felelőségek**:

Backend: Bródi Máté Gábor

Frontend: Kerekes Konrád Péter

Adatbázis: Oravecz Ákos

**Ütemterv**:

Fejlesztés: 2022. 09. 19-23.

Tesztelés: 2022. 09. 24-26.

Határidő: 2022. 09. 26.

## 3. Üzleti folyamatok modellje

![üzleti folyamatok modellje](/Doc/imgs/modell.png)

## 4. Követelmények

**Funkcionális követelmények**:

### [K01] Dizájn
    A dizájn a HTML és CSS segítségével lesz megvalósítva.
### [K02] Rendszerfüggetlenség
    A böngészőben való futtatás biztosítja a rendszerfüggetlenséget.
### [K03] Gyors működés
    A böngészőben lévő elérhetőség miatt az alkalmazás gyors működésre képes.
### [K04] Könnyű kezelhetőség
    Az átváltó egy egyszerű és átlátható weblapként lesz megjelenítve, így az egyszerű felhasználók is könnyen megérthetik majd a működését.
### [K05] Pontos számítás
    A számítógép végzi a számításokat, így a számítás mindig pontos lesz.

**Törvényi előírások, szabványok**:

Az [SI-mértékegységrendszer](https://hu.wikipedia.org/wiki/SI-m%C3%A9rt%C3%A9kegys%C3%A9grendszer)-nek való megfelelés.

## 5. Funkcionális terv

**Rendszerszereplő**:
- Eladó

**Rendszerhasználati esetek és lefutásaik**:
- ELADÓ:

- Beléphet az online felületre
- Képes mértékegységek megadására és átváltására
- Képes egységár megadására
- A megadott értékek segítségével látja a végösszeget

**Menü-hierarchiák**:
- BEJELENTKEZÉS
    - Bejelentkezés
    - Regisztráció
- MAIN MENÜ
    - Mértékegység kiválasztása
    - Számolási felület és végösszeg megjelenítő
    - Kijelentkezés


## 6. Fizikai környezet

Az alkalmazás web platformra, hordozható eszközökre (okostelefonok, táblagépek) készül.
- Nincsenek megvásárolt komponensek.
- Kliens által biztosított eszközök:
    - Webszerver
    - Okostelefon
    - Táblagép
- Fejlesztői eszközök:
    - github
    - Visual Studio Code
    - Notepad++
- Tesztelési környezet:
    - Chrome
    - Firefox
    - Opera
    - Safari
    - Microsoft Edge

## 7. Architekturális terv

A rendszert egy HTML, CSS, JavaScript és egy JSON fájl alkotja. A dizájnért felelős fájlok a HTML és a CSS. A JavaScript dolgozza fel a JSON fájlban lévő adatokat, illetve a számitásokhoz szükséges függvényeket.

![Architekturális terv](/Doc/imgs/Architekturálisterv.PNG)

## 8. Adatbázis terv

A különböző tömeg mértékegységek egy tömb adattípusban lesznek eltárolva. A tömb elemei objektumok lesznek, melyek 3-3 adatot tárolnak el.

Egy objektumban a következő értékek lesznek megtalálhatóak:
 * `név`: a mértékegység teljes neve, mely egy `string` lesz
 * `rövidítés`: a mértékegység rövidítése, mely ugyancsak `string`, és csupán pár karakter hosszúak
 * `arány`: az adott mértékegység átváltva az alap mértékegységre, mely `float` típusú lesz. Az alap mértékegység arány értéke `1.0` pontosan.
 
 A nevek magyar nyelven fognak szerepelni. Akár név, akár rövidítés alapján egyértelműen be lehet majd azonosítani egy elemet, mivel ezek az értékek egyediek lesznek. Az arányszám fogja segíteni a tényleges számolást, ezek egy alap mértékegységhez lesznek viszonyítva.

![adatbázis terv](/Doc/imgs/adatbazis.png)

## 9. Implementációs terv

A tartalom HTML5 szabványú fájlban lesz megszerkesztve. Ennek fő eleme egy szám beviteli mező lesz, mellyel a forrás mértékegység mennyiségét kérhetjük le. A megjelenésért a CSS3 szabványú stíluslapok lesznek felelősek. Figyelmet fordítunk a színvakok és látássérültek helyzetére, így különböző árnyalatú, világosságú színeket fogunk használni. Az átváltási funkcionalitást és egyéb szímításokat a kliensoldalon futó JavaScript kód fogja végezni. Ez utóbbi leveszi a terhet a szerverről és csupán minimálisan fogja használni a kliens számítógép erőforrásait.

A JavaScript kód egy JSON fájlban lévő mértekegységeket fogja adatbázisként használni. Az átváltási mechanizmus algoritmusa rendkívül hatékony, csupán a cél mértékegység arányát kell elosztani a forrás mértékegység arányával, majd ezt megszorozni a forrás mértékegység mennyiségével.

Így az összes különbőző technológia külön fájlban lesz, amelyeket egymáshoz fogunk csatolni. Ez a megközelítés átláthatóbb és könnyebben változtatható a projektet eredményez, ami segíti a jövőbeli karbantartást is.

## 10. Tesztterv

### Unit teszt:

- A fejlesztési idő egyik fontosabb részét képzi a unit tesztek írása, mivel fontos, hogy a függvények megfelelően működjenek a mértékegység váltás és a végösszeg pontos kiszámításához.

### Alfa teszt:

- A tesztet a fejlesztők végzik.
- A teszt elsődleges célja, hogy az eddig meglévő funkciók megfelelően működnek az összes böngészőben, illetve az androidos és IOS rendszerrel rendelkező eszközökön. Ez a teszt akkor sikeres, ha az összes böngészöben és eszközön megfelelően működik.

### Beta teszt:

- A tesztet az alkalmazottak végzik.
- Tesztelendő böngészők:
    - Chrome
    - Firefox
    - Safari
    - Opera
    - Microsoft Edge

A tesztelés alatt a tesztelő felhasználók visszajelzéseket küldhetnek a
fejlesztőknek, probléma/hiba felmerülése esetén. Ha hiba lép fel, a fejlesztők kijavítják a lehető leghamarabb.

## 11. Telepítési terv

### Webes alkalmazás:
- A szoftver webes felületéhez csak egy ajánlott böngésző telepítése
szükséges (Google Chrome, Firefox, Opera, Safari), külön szoftver
nem kell hozzá. A webszerverre közvetlenül az internetről
kapcsolódnak rá a kliensek.


## 12. Karbantartási terv

A karbantartás a weboldal egyszerűsége miatt nem szükséges, kivéve abban az esetben, ha az [SI-mértékegységrendszer](https://hu.wikipedia.org/wiki/SI-m%C3%A9rt%C3%A9kegys%C3%A9grendszer) meg nem változik, illetve a váltó nem lett teljesen letesztelve.


