# Shot Tips videos

Finished Shot Tips episodes (the Director reviewing a clip). This is the folder the Cinebody Marketing content calendar reads finished social videos from.

Files are named by episode number: `shot-tips-epNN.mp4`. They are the full-quality, 1080x1920, 30 fps masters, with the moov atom at the start so they can stream. They are stored with Git LFS (see the repo-root `.gitattributes` entry for `marketing/creatives/social/*.mp4`).

The site build lives in `site/` and does not include this folder, so these files are not part of the Vercel deploy output.

Share cuts (`*-share.mp4`, same resolution, much lower bitrate, about 400 MB for the set) were left out in favor of the full-quality files plus LFS. Total for these 34 files is about 996 MB (950 MiB). Episode 1 is 54.4 MB; no file is over GitHub's 100 MB limit.

Clips 18 and 19 (the accordion trio and the shuttle to the accordion players) were cut by Scott and are not in this folder.

## Episodes

Titles below are the finished-episode titles from each episode's `post.md`. The early `episodes.md` draft only lists episodes 1-5, and those draft titles do not match the shipped videos (for example the draft calls episode 1 "Face the window"; the finished video is "The foreground reveal"). Episodes 18-34 were produced from clip folders 20-36 after clips 18 and 19 were cut, so the clip number is no longer the episode number.

| Ep | File | Title | Source |
|---|---|---|---|
| 1 | shot-tips-ep01.mp4 | The foreground reveal | ep01/shot-tips-ep01-faststart.mp4 |
| 2 | shot-tips-ep02.mp4 | The scale reveal | ep02/shot-tips-ep02-faststart.mp4 |
| 3 | shot-tips-ep03.mp4 | The slow pan up | ep03/shot-tips-ep03-faststart.mp4 |
| 4 | shot-tips-ep04.mp4 | Close-up to wide | ep04/shot-tips-ep04-faststart.mp4 |
| 5 | shot-tips-ep05.mp4 | Move with it | ep05/shot-tips-ep05-faststart.mp4 |
| 6 | shot-tips-ep06.mp4 | Start and end on details | ep06/shot-tips-ep06-faststart.mp4 |
| 7 | shot-tips-ep07.mp4 | Frame within a frame | ep07/shot-tips-ep07-faststart.mp4 |
| 8 | shot-tips-ep08.mp4 | Anchor the foreground | ep08/shot-tips-ep08-faststart.mp4 |
| 9 | shot-tips-ep09.mp4 | Lead the eye | ep09/shot-tips-ep09-faststart.mp4 |
| 10 | shot-tips-ep10.mp4 | The car is your dolly | ep10/shot-tips-ep10-faststart.mp4 |
| 11 | shot-tips-ep11.mp4 | Brace against the glass | ep11/shot-tips-ep11-faststart.mp4 |
| 12 | shot-tips-ep12.mp4 | Pan, then hold | ep12/shot-tips-ep12-faststart.mp4 |
| 13 | shot-tips-ep13.mp4 | Keep the horizon level | ep13/shot-tips-ep13-faststart.mp4 |
| 14 | shot-tips-ep14.mp4 | Parallax, then tilt | ep14/shot-tips-ep14-faststart.mp4 |
| 15 | shot-tips-ep15.mp4 | Over the shoulder | ep15/shot-tips-ep15-faststart.mp4 |
| 16 | shot-tips-ep16.mp4 | Lock off, let them walk | ep16/shot-tips-ep16-faststart.mp4 |
| 17 | shot-tips-ep17.mp4 | The natural wipe | ep17/shot-tips-ep17-faststart.mp4 |
| 18 | shot-tips-ep18.mp4 | Beat the wind | clip20/shot-tips-clip20-faststart.mp4 |
| 19 | shot-tips-ep19.mp4 | Show what they see | clip21/shot-tips-clip21-faststart.mp4 |
| 20 | shot-tips-ep20.mp4 | Place, then subject | clip22/shot-tips-clip22-faststart.mp4 |
| 21 | shot-tips-ep21.mp4 | Leave room ahead | clip23/shot-tips-clip23-faststart.mp4 |
| 22 | shot-tips-ep22.mp4 | Earn the view | clip24/shot-tips-clip24-faststart.mp4 |
| 23 | shot-tips-ep23.mp4 | Frame in layers | clip25/shot-tips-clip25-faststart.mp4 |
| 24 | shot-tips-ep24.mp4 | Meet at one point | clip26/shot-tips-clip26-faststart.mp4 |
| 25 | shot-tips-ep25.mp4 | Mirror both sides | clip27/shot-tips-clip27-faststart.mp4 |
| 26 | shot-tips-ep26.mp4 | Wide, medium, close | clip28/shot-tips-clip28-faststart.mp4 |
| 27 | shot-tips-ep27.mp4 | Slow small moves | clip29/shot-tips-clip29-faststart.mp4 |
| 28 | shot-tips-ep28.mp4 | Low where it lands | clip30/shot-tips-clip30-faststart.mp4 |
| 29 | shot-tips-ep29.mp4 | Roll before it happens | clip31/shot-tips-clip31-faststart.mp4 |
| 30 | shot-tips-ep30.mp4 | Cool to warm | clip32/shot-tips-clip32.mp4 |
| 31 | shot-tips-ep31.mp4 | Quiet behind | clip33/shot-tips-clip33.mp4 |
| 32 | shot-tips-ep32.mp4 | Stop, then stand | clip34/shot-tips-clip34.mp4 |
| 33 | shot-tips-ep33.mp4 | Whole trick | clip35/shot-tips-clip35.mp4 |
| 34 | shot-tips-ep34.mp4 | Turn to the light | clip36/shot-tips-clip36.mp4 |

## Notes

- Episode 12 still has the original plate blur. It was not re-rendered.
- Clip 21 was re-rendered unblurred; the old blurred files were not included.
- Episodes 30-34 had no `*-faststart.mp4` filename. The plain `shot-tips-clipNN.mp4` files already have the moov atom at the start, so they were copied as-is and renamed to the episode scheme.
- Work folders, `old-numbered/` rerenders, and source SDR clips were not added.
