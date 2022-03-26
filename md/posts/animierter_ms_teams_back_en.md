---
{
"title": "Moving MS Teams backgrounds: How?",
"filename": "animierter_ms_teams_back_en.md",
"imgurl":"msteams.png",
"keywords": ["MacPC"],
"language": "en",
"date":"2022-02-06",
"published":true,
"excerpt":"Aim of this short tutorial is to show how you can trick MS Teams to accept animated backgrounds without additional software."
}
---
Since several years MS Teams and similar are our daily companion, at least if we are working on front of a mac or pc and communicate with people. To spread some indivdual spirit and to show creativity, in most cases some special background image is used.
But did you ever see one of those guys who has an animated background while using Teams?
Since the tool doesn't allow us to use any other than static images, how is that still possible?
If you would like to do the same or your are just curious, there in general there are two ways to achieve it:
- Utilization of third party Software like OBS Studio or others.
- Or, very simple; using a small "cheat" to convience MS Teams to proceed with animated backgrounds :-)
This short tutorial shows how you can include and use an animated image, created e.g. via MS PowerPoint, in MS Teams.

## Animated PowerPoint File
What we actually need is a `.gif` file, an animated image. There are plenty of ways to generate a gif, but PowerPoint should be the most simple way, since most likely you already know how to use it.
First step is to create a slide and include the desired animation into it. Once you are done with that, just export the single file as 
`.gif`, which will preserve the created animation.

## Our cheat
As an example we asume our exported gif file goes with the name:
`background.gif `
All the magic to do now is to duplicate/copy the file and rename those two files to:
`background.jpg `
`background_thumb.jpg `
You are right if you are thinking that operation leads to two invalid files, but as typical Microsoft behavior there is no validation of the files before importing, so MS Teams just accepts them.

## Integration in MS Teams
We are nearly done. Best thing is you close MS Teams, if open. Now, we have to move both of our files to a specific folder on our hard disk.

Windows users enter `%appdata%` in the search bar and then can navigate to following sub-folder:
`%APPDATA%\Microsoft\Teams\Backgrounds\Uploads` .
And that's where the two files go.

Mac users start the finder application on top the top bar at "Go To" --> "Go To Folder" and then enter:
`/Users/USER/Library/Application Support/Microsoft/Teams/Backgrounds/Uploads`
"USER" is a variable and has to be replaced by your user name, for sure. 

Now, you can restart Teams and select the new background as any other one. Done!