SSS CV — SPLIT ARCHITECTURE DEVELOPMENT PACKAGE
DATE: 20 SEPTEMBER 2026

STRUCTURE
- /index.html                    Countdown / entry page
- /introduction/index.html       Full-page slideshow shell
- /introduction/welcome-locked.html  Exact decoded approved slideshow payload
- /cv/index.html                 Live CV page
- /skills/index.html             Full-page Skills shell
- /skills/matrix-v034-locked.html    Exact byte-for-byte locked V0.34 Skills Matrix
- /shared/                       Shared cross-page navigation
- /assets/                       Existing media assets

LOCK
The file /skills/matrix-v034-locked.html is copied byte-for-byte from the approved V0.34 Beta.
Its text, evidence, hierarchy, layout and internal behaviour must not be edited.
Integration occurs only in /skills/index.html around the locked file.

STATUS
Development package for local verification. Do not deploy over GitHub main until desktop/mobile acceptance tests and a fresh main-branch backup are complete.
