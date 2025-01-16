# Panini Card Creator

Ein interaktives Projekt, um Panini Karten zu erstellen. BenutzerInnen können eigene Charaktere mit verschiedenen Attributen erstellen, Bilder hinzufügen und die Karten dynamisch anzeigen lassen.

---

## 📸 Vorschau
![screenshot](/public/bild.png)

## 🚀 Funktionen

- **Charakterkarten erstellen**: Fülle ein Formular aus, um Charakterkarten zu erstellen.
- **Dynamische Anzeige**: Alle Karten werden automatisch im Kartencontainer dargestellt.

---

## 📋 Anforderungen

- **HTML5**: Grundlegendes HTML für Struktur.
- **CSS3**: Styling mit responsivem Layout und modernen Techniken wie Grid und Flexbox.
- **TypeScript/JavaScript**: Für die dynamische Erstellung, Speicherung und Verwaltung der Karten.

---

## 📂 Projektstruktur

```plaintext
Panini-Card-Creator/
├── index.html          # Hauptseite
├── styles.css          # CSS-Datei für das Styling
├── script.ts           # TypeScript-Datei für die Logik
├── assets/             # Verzeichnis für Bilder und andere statische Ressourcen
└── README.md           # Dokumentation
```

---

## 🛠️ Nutzung

### 1. Charakter erstellen

Fülle die folgenden Felder aus, um eine Karte zu erstellen:
- **Character Name**: Name des Charakters.
- **Character Last Name**: Nachname des Charakters.
- **Alias or Nickname**: Alias oder Spitzname.
- **Strength Level**: Stärke (1–10).
- **Speed**: Geschwindigkeit (1–10).
- **Intelligence**: Intelligenz (1–10).
- **Universe**: Universum, z. B. Marvel, Anime.
- **Quote**: Ein bekanntes Zitat des Charakters.
- **Image URL**: URL zu einem Bild des Charakters.

Drücke auf den Button **"Add New Character"**, um die Karte zu erstellen.

## 💡 Technologien

- **HTML5**: Für die Struktur des Projekts.
- **CSS3**: Für Styling und Layout.
  - Einsatz von Flexbox und Grid.
  - Responsives Design für unterschiedliche Bildschirmgrößen.
- **TypeScript**: Dynamische Erstellung der Karten und Event-Handling.

---

## 🎨 Design-Highlights

- **Rotierte Liste**: Eine Liste mit Charakteren wird in einem interessanten, leicht rotierten Design angezeigt.
- **Formular-Design**: Klar strukturiertes und responsives Formular für die Eingabe.
- **Karten-Container**: Dynamisch generierte Karten mit anpassbarem Design.

---

## 📦 Installation und Ausführung

1. **Projekt klonen**:
   ```bash
   git clone <repository-url>
   cd panini-card-creator
   ```

2. **Abhängigkeiten installieren**:
   Falls benötigt, installiere die Abhängigkeiten:
   ```bash
   npm install
   ```

3. **Projekt starten**:
   Starte einen lokalen Server, um die Anwendung auszuführen. Z. B.:
   ```bash
   npx live-server
   ```

---

## 🌟 Vorschläge für Erweiterungen

- **Kartenbearbeitung**: Füge die Option hinzu, jede Karte zu bearbeiten. Beim Bearbeiten sollen die Daten der Karte in das Formular geladen werden, und der Button **"Add New Character"** soll in **"Save"** umbenannt werden. Nach dem Speichern der Änderung wird das Formular geleert und der Button wieder in **"Add New Character"** umbenannt.
- **Alle Karten speichern**: Implementiere einen Event-Händler, der alle Karten als JSON im LocalStorage speichert.
- **Karten laden**: Implementiere eine Funktion, die alle gespeicherten Karten aus dem LocalStorage ausliest und anzeigt.
- **Drag-and-Drop**: Implementiere eine Drag-and-Drop-Funktion für die Karten.
- **Filter- und Suchfunktion**: Ermögliche das Filtern oder Suchen nach bestimmten Charakteren.

---



