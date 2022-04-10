---
{
"title": "System Password Lost? (Nearly) no problem on Windows!",
"filename": "passwort_vergessen_en.md",
"imgurl":"finger.png",
"keywords": ["MacPC"],
"language": "en",
"date":"2022-01-06",
"published":true,
"excerpt":"If you ever lost your Win 10 admin password or just wondering what you could do in that case, spend 7 minutes for this post."
}
---
It could have happend to myself: an old friend contacted me if I maybe could help him out, since he has forgotten his computers user password. 
My first thought was, as usual, you can not be the only one who ever faced this challenge. And, no wonder, yes there are plenty of search results containing hints how to reset a lost Windows 10 password.

But then, after trying some of the tutorials I figured out that many of the hints have been already identified as security issues by Microsoft and just have been fixed. Others basically just did not work at all. So what's next?

Time to get the hands dirty :-) This posts describes how you can reset the admin password in the most current (2022-01-06) version of Windows 10.

Only thing required: Internet access from another pc and physical access to the affected computer.

## Perparation

My friend just brought the affected pc to me, so I could take my time to work on the issue. Bad and good news was: The locked account was a local acccount, which means he could not utilize Micorosofts standard procedure for password reset but opened the gate for the dirty tricks described within the article.

![Win10Download](/media/full/passwort_vergessen/win10down.webp)

In advance I already created a Win 10 installation media on an USB-stick, since most tutorials recommended to do so.
The official source for download at Microsoft is linked at the end of the article, and totally legal to use.
There are plenty of desriptions how to setup a USB-stick for Windows installation on the net, so I will not desribe that here.

## Procedure

Following procedure helped me to reset the password, it can slightly differ for you, depending on your environment.

1. First thing is to boot the affected pc from the newly created installation media.
![01_boot_img](/media/full/passwort_vergessen/01_boot_img.webp)

2. When arrived at the dialogue for chosing the language, instead of doing so we press `SHIFT`+`F10` keys simultaniosly.
![02_boot_shift](/media/full/passwort_vergessen/02_boot_shift.webp)

3. Now, a command line appears (weird that it does). The we change to our system drive, e.g. by entering `C:`.

4. Here we have to navigate to our system directory, in most cases by `cd Windows`, `ENTER` and then `cd system32`, `ENTER`.

5. Some more DOS commands follow: `cp utilman.exe utilman_old.exe` creates a backup to be able to reverse our small "hack" later on.

6. `copy cmd.exe utilman.exe` overwrites the utilman executable we backed up before with a copy of the command line tool.

7. Basically that waas the part we can call a small "hack", we will rely on in the next steps. The PC has to be rebooted without the instalalation media, now.

8. At least in the latest versions of Win 10 (or better of the windows defender tool) Microsoft blocks any direct call to the command line, so we have to reboot again in safe mod to bypass this, too. If you don't use defender, you maybe can ignore this step. To reboot in safe mode: keep the `SHIFT` key pressed and click on bottom right power icon and select "reboot".
![07_down](/media/full/passwort_vergessen/07_down.webp)

9. After some seconds a selection screen appears, where you can choose "Advanced Options" and then "Startup Settings". Now you finally can click "Restart".
![08_troubleshoot](/media/full/passwort_vergessen/08_troubleshoot.webp)

10. Once the machine is up again, press key `6` to continue boot in safe mode.
![08_troubleshoot](/media/full/passwort_vergessen/08_troubleshoot.webp)

![09_advanced](/media/full/passwort_vergessen/09_advanced.webp)

11. Don't worry that you are prompted to key in your password again. Let the magic start and click on the "Ease of Access" button (the second icon bottom right). Instead of the "Ease of Access" tool, the command line will open and you have full administrative persmissions on your pc, WITHOUT knowing the password.
![10_startup](/media/full/passwort_vergessen/10_startup.webp)

![11_startup_settings](/media/full/passwort_vergessen/11_startup_settings.webp)

12. To reset the locked password a few more commands have to follow, now: `net user` will show us all currently existing user accounts on the pc. In my case the account I wanted to reset, was not shown here. Maybe a gap of knowledge on my own, but anyhow I saw the "Administrator" user. So I changed my plan slightly and reactived that account (it's deactivated in a default installation), to use it login to Windows and the reset my targets user password via the graphical interface of Windows. To reactivate the "Administrator" account, see the next step.
![12_netuser](/media/full/passwort_vergessen/12_netuser.webp)

13. Command `net user Administrator /active:yes` will do the reactivation for us. Another  `net user Administrator PASSWORD` sets the password to "PASSWORD". If you have issues to find your original user and also not able to reactivate the Administrator account, the net user ... commands also would allow you to create a new user.
![13_cmd](/media/full/passwort_vergessen/13_cmd.webp)

14. Time for another reboot.

15. This time at the login screen we see at least more than one user to select from on the bottom left side. For sure we choose the "Administrator" user, since we know that password for that one from two steps before.

16. Some steps later in the Win guy we will see a mostly clean desktop and are logged in successfully.

17. We open the Control Panel and navigate to -> Users --> Other Accounts where we are finally able to reset the password of our locked user. 

18. We are done! Time for a last reboot. But this time we can do a login with our normal user again :-)

## Cleanup

Maybe best to cleanup the mess we created before. We open the command line and execute the following:
- `net user administrator /active:no`  - to deactive the "Administrator" user.
- `C:` , `cd Windows` , `cd system32` , `del utilman.exe` , `copy utilman_old.exe utilman.exe` - to restore the utilman executable to it's original state.

## Conclusion
To avoid to have issues about forgotten win passworrds at all there are plenty of options. One would be to use the Microsoft Online Accounts instead of a local user. It seems Microsoft more and more forces the users of windows to do so anyway, if they like it or not. At least reseting a forgotten password should be easier that way, as long as you have an internet connection...

Anyhow, that the described procedure is actually a security risk, not a feature. If you followed the guied, you most likely already recognized that it can be executed on any pc with physical access.
Other operating system, at least the unix based ones like Linux and MacOS, wouldn't allow similar.

But, at least I was able to help my friend :-)

## Appendix: How can I block such an attack to protect myself and my data?

Just using the Microsoft Online accounts instead of a local one is not a real fix, since the described procedure also allows us to create new local accounts with administrative permisssions.

In addition you would have to:
- Set a password at the computers BIOS/UEFI which is requested first thing on your pc's boot before allowing any other action.  
- Additionally you would have to enable encyrption of your hard disc, e.g. my Micorsoft Bitlocker to avoid attackers from just removing the hard disk and attaching it to a different pc without BIOS/UEFI password.
Both actions make the user experience slower and less comfortable, so I assume not many people will do so.

Another thing could be done by Microsoft themselves:
- if they block access to the command line during windows installation. still not secure, since we just could boot e.g. from a WinPE disc.
- if they would check the signatures of system related files like the command line or utilman to block dirty "hacks" like described in this article. Other operating systems provide similar functionalities, no idea why Micosoft does not.

## Sources
- https://adamtheautomator.com/reset-windows-10-password-command-prompt/ 
- https://www.avast.com/c-recover-windows-password#gref 
- https://www.makeuseof.com/tag/3-ways-to-reset-the-forgotten-windows-administrator-password/ 
- https://www.sony.com/electronics/support/articles/00123047 
- https://www.microsoft.com/en-us/software-download/windows10ISO


