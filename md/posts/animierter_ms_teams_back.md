---
{
"title": "Animierter Hintergrund in MS Teams: Wie geht das?",
"filename": "animierter_ms_teams_back.md",
"imgurl":"msteams.png",
"keywords": ["MacPC"],
"language": "de",
"date":"2022-02-06",
"published":true,
"excerpt":"Dieses kurze Tutorial bechreibt wie wir aus einer z.B. in PowerPoint generierten Animation, ein bewegtes Hintergrundbild erzeugen und dieses in MS Teams implantieren."
}
---
MS Teams und Co. sind jetzt schon seit einigen Jahren täglicher Begleiter durch das Berufslebeben und haben den Büroalltag mehr als ergänzt. Möchte man auch im virtuellen Besprechungsraum ein wenig Individualität und Kreativität zeigen, geschieht das meistens durch ein ausgefeiltes Hintergrundbild.
Aber dann sind da noch die Kollegen die besonders herausstechen, indem sie mit bewegeten Hintergrundanimationen und Interaktivität aufwarten.
Wie machen die das? - Gerade MS Teams lässt doch gar keine animierten Hintergründe zu, sondern akzeptiert nur statische Bilddateien wie jpgs und pngs!
Um selbst in den Genuss von animierten Hintergründen in einer MS Teams Besprechung zu kommen, gibt es grundsätzlich zwei Wege:
- Einsatz einer Software eines Drittanbieters, wie OBS Studio & Co., sowie ggfs. weiteren Accessoires, wie einem Greenscreen.
- Oder ganz einfach; mit einem kleinen Trick mit dem sich MS Teams überreden lässt auch animierte Hintergründe zu verwenden :-)
Dieses Tutorial bechreibt wie wir aus einer z.B. in PowerPoint generierten Animation, ein bewegtes Hintergrundbild erzeugen und dieses in MS Teams implantieren.

## Die animierte PowerPoint Datei
Was wir benötigen ist eine GIF Datei, ein animiertes Bild. Ein solches lässt sich mit einer Vielzahl von Werkzeugen erstellen, PowerPoint ist also nur eine von vielen Möglichkeiten.
Zunächst erstellen wir eine neue Folie und darin dann wie gewohnt die gewünschte Animation.
Sobald wir mit unserem Ergebnis zufrieden sind, exportieren wir die Folie als "gif" Datei.

## Unser Trick
In unserem Beispiel gehen wir davon aus, dass unsere exportierte GIF Datei folgenden Namen trägt:
 `hintergrund.gif `
Der ganze Trick liegt jetzt darin diese Datei zweimal zu kopieren und die zwei neuen Dateien
 `hintergrund.jpg `
 `hintergrund_thumb.jpg `
zu nennen.
Das führt zwar eigentlich zu zwei ungültigen Dateien, aber so lässt sich MS Teams dazu überreden diese zu "schlucken".

## Integration in MS Teams
Wir sind schon fast fertig. Jetzt beenden wir MS Teams am besten, falls es gerade geöffnet ist. Die beiden zuvor generierten Dateien müssen wir nun nur noch in einen bestimmten Ordner auf unserem PC oder Mac verschieben.

Windows Benutzer können im Windows-Suchfeld `%appdata%` eingeben und sich dann in folgenden Unterordner "hangeln":
`%APPDATA%\Microsoft\Teams\Backgrounds\Uploads`
Um die Dateien dort abzulegen.

Und Mac User gehen über den Finder unter "Gehe zu" -> "Gehe zum Ordner" nach:
`/Users/BENUTZER/Library/Application Support/Microsoft/Teams/Backgrounds/Uploads`
Wobei die Variable "BENUTZER" im Pfadnamen natürlich durch unseren Benutzernamen zu ersetzten ist.

Jetzt können wir MS Teams wieder starten und unseren neuen animierten HIntergrund wie gewohnt bei der auswahl der Hintergrundfilter selektieren!