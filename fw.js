[rewrite_local]
^http://8\.210\.246\.163:10010/emby/Users/b8476671779d45b5852c39754a0c3b76/Items/Resume?.* url script-request-header your_script.js
[rewrite_local]
^http://141\.11\.175\.105:10010/emby/Users/AuthenticateByName url script-request-body your_script.js
