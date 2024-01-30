# Title
![화면 캡처 2024-01-30 172016](https://github.com/shim-hello-vue/shim-hello-vue.github.io/assets/80744883/6395ff62-ae73-4b3a-a47d-63e1180fe160)

### How to Contribute
- WSL Ubuntu 22.04 LTS
- vim
- html/css

### How to Deploy

#### STG dev (svue.web.app)

#### STG prd (shim-hello-vue.github.io)

|STG|BRANCH|TRIGGER|URL|
|------|---|---|---|
|DEV|Branch of PR|manual firebase cmd*|[svue.web.app](https://svue.web.app)|
|PRD|main|Auto Github Action|[[shimguh.github.io](https://shimguh.github.io)]|
````bash
# manual firebase cmd*
$ firebase deploy

=== Deploying to 'sproject-f2667'...

i  deploying hosting
i  hosting[svue]: beginning deploy...
i  hosting[svue]: found 5 files in docs
✔  hosting[svue]: file upload complete
i  hosting[svue]: finalizing version...
✔  hosting[svue]: version finalized
i  hosting[svue]: releasing new version...
✔  hosting[svue]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/sproject-f2667/overview
Hosting URL: https://svue.web.app

````
