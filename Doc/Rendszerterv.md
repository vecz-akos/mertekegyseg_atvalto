# Mértékegység átváltó rendszerterv

## 1. A rendszer célja
A rendszerünk célja, hogy a zöldség-gyümölcs árusok gyorsan és könnyedén végezhessenek el átváltásokat és a fizetendő összeget egy egységár megadása után azzonal láthassa az eladó és a vevő is. A rendszernek nem célja az alapvető mértékegységeken kívül más mondjuk pénz vagy idő átváltásában segítséget nyújtani.

## 2. Projektterv

**Projekt szerepkörök és felelőségek**:

Backend: ...

Frontend: ...

Adatbázis: ...

**Projekt munkások és felelőségek**:

TODO

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

TODO

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

![adatbázis terv](/Doc/imgs/adatbazis.png)

## 9. Implementációs terv

A weboldal egy Node.js szerverről lesz elérhető. A tartalom HTML5 szabványú fájlban lesz megszerkesztve. A megjelenésért a CSS3 szabványú stíluslapok lesznek felelősek. Az átváltási funkcionalitást és egyéb szímításokat a kliensoldalon futó JavaScript kód fogja végezni. Ez utóbbi leveszi a terhet a szerverről és csupán minimálisan fogja használni a kliens számítógép erőforrásait.

Adatbázisként egy JSON fájl fog funkcionálni, amiből lehetőség lesz olvasni.

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


