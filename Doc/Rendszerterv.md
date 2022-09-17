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

TODO

## 11. Telepítési terv

TODO

## 12. Karbantartási terv

TODO


