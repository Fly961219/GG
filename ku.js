/****************************

#!name = 酷我音乐 & 酷我畅听
#!desc = 〔 酷我音乐&酷我畅听 〕全功能破解
#!author = 影子[https://www.napi.ltd]
#!homepage = https://napi.ltd
#!openUrl = https://napi.ltd
#!tag = 酷我音乐,酷我畅听
#!loon_version = 3.2.3(762)
#!icon = https://static.napi.ltd/Image/KuWo.png
#!date = 2025-05-10


[Argument]
QS = select,"Hi-Res音质","无损音质","超品音质","高品音质",tag=音质选择

[Rule]
USER-AGENT,KWPlayer*,PROXY
DOMAIN-SUFFIX,kuwo.cn,PROXY

[Rewrite]
^.*?(ad(.*)?\.tencentmusic\.com|kuwo\.cn\/((EcomResource|(Mobile)?Ad)Serv(er|ice)|(vip|(open)?api)?\/v\d\/(user\/freeMode|album\/adBar|app\/(newMenuList\/menuListInfo|pasterAdvert\/config)|api\/advert\/(iListen|album)|operate\/pop\/info|-online\/sign\/new\/playEntryV1-)|kuwopay\/vip-tab\/page\/floatbox|commercia/eproxy/boot/recommend/fee/config)) reject-200

[Script]
http-response ^(?!.*img).*?(abt-kuwo\.tencentmusic\.com|kuwo\.cn)(/vip|/(open)?api)?(/enc.*?signver|/(v\d/)?(pay/app/getConfigInfo|user/vip\?vers|app/startup/config|theme\?op=gd|api/((pay/)?(user/info|payInfo/kwplayer/payMiniBar)|advert/myPage)|tingshu/index/radio|operate/homePage|sysinfo\?op\=getRePayAndDoPayBox(New)?&useNewHeadShow|recommend/(daily/main|songlist/getRecSonglist))|/kuwo/ui/info$|/kuwopay\/personal\/cells|/pay/viptab/index\.html|/kuwopay/vip-tab/(setting|page/cells)|/a\.p($|\?newver\=\d$|.*?op\=(getvip|policy_shortvideo)|.*?ptype\=vip)|/commercia/vip/(player/getStyleListByModel|hanger/wear)|/mobi\.s\?f\=kwxs|/music\.pay\?newver\=\d$|/basedata\.s|/mgxh\.s\?user) script-path=https://napi.ltd/script/Worker/KuWo.js, requires-body=true, timeout=60, tag=酷我音乐, img-url=https://static.napi.ltd/Image/KuWo.png, argument=[{QS}]

[Mitm]
hostname = *.kuwo.cn, *.tencentmusic.com

****************************/






































































const KuWoLa=['w547AFk=','woVJe8Kywqc=','wozCrknDgU1jw5o7','wojDg8KEHw==','AcO1wobDiMK7wrM=','55Sz5ZG45p2a5Ymk55SF5b6P5a2E5o6E5LyX','DA3CnTA=','PsOBcsOtXW9xwpADM1c5wpXDm3E=','OyfCumbCmQ==','w5PDpcKbRMOD','w4LDgsKWc8Ozw53Chw==','w5vDnBYZMA==','PhHCpEDCog==','w58wwrDCgMOPw7rDjA==','AMO6wpHDhg==','w4TDmDTCtw==','IsKdwqg=','w6YbCgA3','w7FTw6XCiMKLZQ8=','wowBw4TCoBo=','McKAw6ldfg==','YcKcHsOQAyxUwrRGannCpg==','woB0WMKpw7RcwqrDiV4O','TmLCncKVYSvDnjg+BcORw5sCAQI=','w7caPSAswqHDkg==','wplRw5Q0EcOA','JMKbwrbCn8KEGQ==','6aGf6YGe6L6K5pC1','AF1UH8O9w45mwpUNKsK9w7Q6ZsKm','w4bDqMKFwrfClGR7ISw=','DAt+P8K3','w4x0McKMw5s=','wr9Ew5UoEQ==','wrfCgnLCi8O/','wo1MXcKpwoY=','w6XDmsKSw7HCm8OHw5fDqg==','NnFFPcOQ','w4cCwpTCusOW','DBxZAsKmw5F8wpQQa8K8','w7hEw6/CmcKo','w546wq7Ci8Od','Zemds+imtuaaheaVosKDJMOJROivs+aYuuaVu+S8vOebn+iHiw==','YsKXwqzDoWFXwr4=','w45yEsKsw4jCtS9Xw7gwFMKcw7E=','wo/DgsKEMsKzwprCrQ==','wrhMw4g=','IGjDisKow7c=','woNeRy0xw79mfA==','wp19SBQs','CsO+wpHDosK+wqQS','wpnDlw3CgWpZwp4m','FEdgE8OQ','wpcOw6bCpAYU','dmTDnB0XFMOaw50+w4/Cg8KLw7rDgsO5','XH7Ckw==','AxxQ','4oC077q74oKw77qZ4oG/77mI4oK277mt4oGw77uI4oCv77mD4oKc77m84oC2','wrFow7DClWc=','wptiRcKp','wq3DmcOeVX5X','6Z2i6KST5pqD5peLJkjCjcOl6K+n5pu15pWc5L+n55uN6IWx5pyU','cuW0r+aPg+acuw==','w58pBw==','UMKvw5Q=','w47DsVHDj3lDwqRL','aW/DgAE=','wpFIVg==','VX/Cl8Odw6oa','fsOmwoHDosKE','XMKIw4oywqw=','w6nCpRFOw4s=','wpvCuVTDkA==','Y3jDiwNOMQ==','RcOeGsK7ZA==','HBBfFMK/w4Y=','axvCpkLCvMKSwrXDisKFJcOiXMOxAFA=','AwZPBMKgw5pAwpQLag==','ZcKpBcOsEg==','wqbDncOIRnM=','JXnDtsKsLA==','FsO+wpXDi8K+wrUZ','w5wZwpfCoMO9','GH/DmsKI','wpoqw53CoQI=','V8O4AcKxdwIMw4DDj8KnwoTDscOb','wrBNEhvCvg==','w5wYH2VN','wpPDlgDCnmtPwo42UMOdwr0=','wo8Yw4nCpzAdw5LCosKtUcKwwojDjQ==','w5IQw6vCrxcdw5LCosKtQ8K6wqzCicOrwo8=','w57ClDB/w60=','6aq85ZGa6ZyW6LaP','B8KVXw==','wowdw4/CkTU=','E8KwwrAZwofDt0fDkRt1ITIcfww=','w43DvS3CtsOJPcOB','b8KWwrXDtlxdwr0=','wpRsUcKAwrhjwobCiUk=','wojCq0zCqcOU','w47DpzHCt8O+aWNZwq3CsB43w78ibA==','OxvCuA==','WMOYGcKbTw==','EXvDncKaNzDCjg==','HH3DrMKnw6c=','eMOGwo/DgcKa','LMKNwrLDoUcF','w7wTMRUsw6LDlnbChsOICBbCh3zCqw==','wpDCsFXDuGU=','wo9Kw4oJF8OLwpU=','w6PCtyRfw5HCvcKb','BA9Vw65DVSBJF8OxGx3CqVnDgQ==','wobCo8OQw6w=','w4p+EsKUw4jCtB8=','AMO0wovDgg==','wpBuTsK+','W8OTwpTDtMK3wpZ2','KF3Dl8KaAQ==','DhXDkGEvL1M4w4wWFEvClEAw','wpxEeMKBwq0=','d8K8GcOEOA==','wqR/dsKXwpE=','w7TDi8KbV8O9','5o6C5p676ISy776e','wpjDicKQCsK7wpTCrQ==','w7d5w6PCj8Kg','fcODw6PCuCApwqUEKcOoIHjDgRc+','w48ZwrHCqsO+','77u04oGX77qH4oO/77m94oGA77qv4oOX77uM4oCL77uQ4oOi77uw4oK277us','csK7PcOpGDFlw5tZfkE5wpbDnyM=','wrvCq0vDsmo=','5L+Q5ZOk56Sl5YiK','fsKcPcOgB25iwpAeMVU5w4vDgzs=','O8OIw7HDr1RZwq0=','wph9UcK8wqA=','wokOw7nCthcPw5TCvsKxWw==','wpJMVj4=','fsOEw63DncKxIAkuMg==','LxHCrl4=','U8KawqjDrVA=','YcKPA8O9Iw==','wp5dw4w4H8OW','CeW1hOaNrOafm8Oc5o295p2Q5p6k5pW/5p+u6ISq772D','w5LDniTCosK+','w4HDumTCvsOJNMOVwpPDusKEwoDDo8KuDy4=','HANbGMKm','wph+w7XCgVvDt8K1','IcKAw6pKZEh6','w6FOw6TCrg==','w4DDhT/Co8KYMkRKwo3CqxM9','WcOawoXDocKfwpt1w4I=','w7nDkTw7','4oGY77qU4oOZ77qo4oOj77uZ4oGA77ut4oK677ij4oGt77ia4oOS77mQ4oCk','LMKFwq7CrGFl','E8Kvw4JKw4Z/wpQ5QsKeYMKRLgUh','w6gNwqXCnMOf','wovCt3PDhXY=','Ch1TJcK7w45s','w7wEa8KSwqbClsOYw4PDuksiw7jCsMKcWg==','GgLClTl0YVMyw4Y=','XcOZwrfDrMKk','ZwfCr0bDr8OiwoA=','fMOEw6vDviY=','wp8Ow67DrkZPw4PCicKgBMK8w6nCm8Kyw5U=','wp4TEnYDw7JvfcO5LA4/w6TDscKP','DD7ClsOdw6oGOQ==','wpDCq3g=','wqJVw6ATCg==','6LST5oqg5p2E5o2S5p2k','Q2XChsObw6AY','w7dVw6jCsMKGVwbDm8OqwprDtH3Dt8OXw70=','wrMUwrrCtcKEIA/DksO5wpLDvUzDqsOKwr0=','C2vDjcKlw73Cmw==','w7nDg8KewrPCjcONwp3Dv8KKHcOPOGTDr1Q=','bMO9NMKXTg==','w589F05MwrdUKBsww7fCjsOgNC0=','w7jDhiM=','CWnDgcOHNTnDhDRuAMOOw5FfDUA=','wpPDo8KyIcKI','wq5PYsKSwqzCiw==','w4rDvsKvQ8Oh','w6jDp8KFw6TCgsOGwprDvcOGHMKaYnLCq14=','HWXDjcKk','RS3CnsOEMG/CiSciTcKDwp8AUAw=','wpPCvU7DlnBo','NDHCmGDCgw==','HBNAwqdJQA==','HzozwqBMwqp7JMONaw==','wptXw5QJE8ORwqDDhQ==','6LaT57mP5L2T5ZOI','YueZq+aMj+adueS/rOaBixXljoPlsZjlh5PmraHojbTljI7kv6bnmaI=','ccKWEcORFDZxwrZAZGY=','w5s8wrDCuMOGw7zDhAI=','w5s8wrDCuMOPw74=','wpxjQsKiwqBhwpM=','EMOfAsOZNcK7w5cZw4Znwp5hw4rDp1Y=','Z8KXG8OHBi1qwrBQ','ajdtJcOHw5x6d8KHYMKOCW7Ch38=','wqclesKOw7lMw4zDjBpBwqYEDTd/','RH7Cu8OQw6Q=','L39mHcOHw5suV8KHcsKE','fVLCm8Ocw7oaacOzIjvDmg3Dp1TDig==','w7YVLRU=','JsKOw7Nb','O8KzKBTCs8OwwrzClw==','w6U4CGJZ','w4LDliTCrw==','wq1ffsKWwr3CkA==','w7jDnMKUw7M=','Q8K+w68SwpIo','Q8Kkw4UTwpAi','G2XDh8K4','a8OYw6PDoyclw6sRKcOpcCPDjVxt','wotRw5YYE8OQwok=','EcOpwok=','wrXCkVvCjcO8','DnHDm8KdMw==','IRfCuVM=','w5XDrzbDtsO9BMKGwrrCpw==','wp3Ct0TDiA==','w5g4FF9S','wrh9w6rCl0M=','SW3DlMK5w6PChlU1R2tow6zCpkLDnw==','NcKAwqvCncK6H04WDnPCuxbCkw==','woPDjwfCnVpFwos8VsOX','wofCo8OZw6XDh2Zr','5pag5Y+k55aI6ZS06K2t776I','w5jDp3/DryM=','wpQtw6rCqwo=','NGDDiQFOecO+wp4uw47DkcK1w5PClMOd','wpXDm0jCnnBIwok2QcKP','w6nDmsKFw5HCh8OQw4bDvMKBV8KMIybCn30=','HDXCmCRn','w5LDqcKMS8OA','GQXCgQh6bVAy','w4V0w7zDkj3CoMO0ICZ3JsKMw73Ds8Op','w7NYw7U=','JMKbwr3CmsKPUE0aPGfClRbCmBpK','w4rnmKjmjajmnKXkvLvmgpjig64=','MlTDo0w=','wp8Ew6bCpg==','HB9eEsK3','wpViRg==','DQPChSh9ZXE+w5QWZwPCjQ==','EGzDgMKuw4A=','5b+45YiF6LWD5oicHw==','wptIUSwZw7Zl','w77DjMKnw5LCvA==','woR+w5fChmU=','w7nCqwhI','w4LDrlnDkT1awrM=','NHdmJMOrw4s1cA==','JVrDuUrDsQ==','6YSV5oqD55Sy5ZGX','w4Bnw4zCrsKU','wrAjw6TCqhc=','5bGv54ei54Gw','w4Q7wqPCgMObw73DjBQ=','DS0WwpPCmcO8U8KwNsO7wqwRWmom','b8KWwqXDkFxVwqs=','w75Fw6nCuMKQ','PH3Dp1jDhw==','wovCrVLDlHcvwodlwrbChsKYw4/Cjw3Crw==','w4IrCkU=','O8KGwrzDvS43wrk=','PMKPFsORCSZtwrldf23ChjfCi8Oa','W8OzK8KSQQ==','wpNcWBQd','wr1Nw4APBw==','wrUMFH3Dt8O2wq0cw5jDosOWwpXCmcOdw4g=','w5Z/DcKPwofCsB9Qw54tO8KDw7zCu1U=','cEfDvknCvw==','UcO2GsK7','H8K7wq7CpsKt','a8KcwoDDp0FtwrzDrg==','AsKrwq0M','w6TDpkHDmxE=','DsKgwqYCw4zCvkbDjCtqICMQNk4=','BcO3AzJoA8Oc','wo0Cw7jChgoMw4nCmcKmRA==','wp9Ew6/CpgYqw4XCmQ==','wrfCqXrCssOP','WXfCl8Odw5w=','GXDDmsKlPyTCnyFhHMKTwo8ROXs=','RsOnAsKzUw==','RcKiw48QwpA=','wpx4w6vCkA==','w7wRPBAHwqXDkmI=','wq1ddMKCwpc=','w4o7FkJYw7Y=','wrTCgGbDnEA=','FyckwqxTwpA=','w6EBOzcqwqLDkW/CkcKyBQXCjg==','wqZmRy8s','54GP5YeW6I6V5Y6J5o+w5p+S','w5UlCMOtw6dqwo7Cik4Pwo8sTAYd','5p2C5o+05p2z','bcKJwrHCq2Qxw6MRJcKlfynCh1px','w4XDoEDDgA==','G8KBw4LDrcOrwp1nw5lHwoLDvGpuZMKu','FeW1peaPpuaemS3npL7kvJTnlo3mhoflvKjvv4c=','wpnDicKUEMK7wps=','wp9COg==','ZMKywojDtkQ=','DB1Ewq8=','IMKAw6hRXUV4wpUfOg==','Ig7Co0M=','wo3CvVDDnWVjw5A=','LMKuw6lJbw==','wqnCsHnDp28=','wrnDiMOLV3p0DTDCngow','KR/CvkY=','wqVbZMKQ','wofCo8Oaw6bDmnh7LjRJw5Y=','w4LCq0XDhU1uw4Eww7bDhcOJwpLClxLCqQ==','M8KtOxTCvw==','wofCpMOdw7nDig==','w4vDnjTCt8KJ','D2PDk8KIw7zCkFY=','XMOkOMKzVw==','w5F1AcKUw5zCsx9X','e3TDkQhf','BsOzAxo=','cRnCvwTCv8Ksw4jCj8KdMnI3ScK5w4U=','DsKaw4zCscOrw4tow4RRw5nCvTZMNMOx','CcKaw5BV','wqLDk8OHRktUHw==','w4XDpFLCjGAFwrVFw5EGKB8Owp/Dow==','w54/Cg1Kw6sDahQ=','aMKRwqTDoGZXwqDDpQ==','NSVOK8KU','B8OfwofDtMKd','XsKew54vwro=','EsKhwrkZwoPCukY=','c8KhEMOBAA==','woLClsOXO8K+wp3DhMONwozCsBzDjzPCsQ==','wozCqFHDhWk=','wrdyw4kFJw==','woJCcSsK','ZsORw6nDsgEuw68G','w77DncKWw7XCmsOww4bDuMKbR8KN','woJgRsKUwp0=','w4ctC0xLw7A=','IkbDn0LDr8O3w6TCg8KeYg==','wqxLLTvCssKyw7FQwqDDgMO0w5TCgsOvwpY=','w4/DoTUYGQ==','wq3CmcOww4XDtA==','VsKrw5Qdwpk0','wpNlJBjCjw==','G8KUcsOPfsK5wps=','wpt0w6HClw==','CwpAIsKZ','aVzDozBq','w6s3wpHCosO6','bMObw6LDsw==','wpjCq3HCuA==','w6ZYw7HCsMKDaw8=','HzonwrBA','ccOOUcOSDiM=','woZcw5EOFw==','wopcw54WAA==','Bg3CpzF8','em7DgBZzN8Oxwp8Ww4rDgcKmw54=','e8OBw67Dgiozw6YH','bMOVw7jDtw==','CxJDEMKEwpE=','wqpPZ8Ke','RcO9wogMwpog','wrDDvMKLAcKV','ecOGw7bDrCg=','wpDCo8Onw6HDnA==','X3HDhB1zHQ==','wozDslzDgDpRwr5Gw5sbKlgawonCoQ==','CR9EwqdFXQ==','esKYDMOtFypUwqdbe3HCpzfCkw==','AhXCoT11bWs+w5IxXBo=','wodCLTLClcK1w6BH','5Ya76LSU5qiD5b2Q','AMKxJS7CsQ==','5pSA5Y+855S96ZWG6K6X776L','w5LDhzfCpsK+','ZMKcEcOWLC13wqFRZXHCp2vDjcOY','w77Dt8Kbw57Cvg==','wotoUcK8wrhywoI=','Z8OtH8KvRA==','w47DrSfCnsK6','QsOgw7hXw5jDqQ==','esKJK8O1GA==','wo7DhMOGYls=','EHvDgMKOIj8=','w4nlt5Xmj4DmnJXDneemgeS/uueUi+aHq+W9ku++tg==','R8OZworDvcOxw45uw5BKw53DqGkfaMKn','w4Q4AEV9w6wITEx9wrM=','RMOODcK2QQ==','w7zCrRVkw43CusKN','JcKKwrDCg8KYEAlcbTfDklfClU8E','wo3DicKU','K8Kcwo8YwqY=','csKJPcOx','d8OFeMKiQWV+woZDaRNkw4vDjj8=','dsKWEcOH','QmnCosO9w5w=','wpYOw6zCqhNRw5XCmcKv','wpzCsEnDnWA=','PsONwpzDvcKZ','w6nDlTsu','w4/DlMKsZMOrw5/CpsKJw5jDug==','wpHCvsOY','HQnCgTBza1g=','BcK0R8OsWw==','5pWt5o+r6Z686LWn','azU/YsO5w7Z6Q8KU','w6BUw7XCsMKH','OikOwoE=','wqjDk8OFSElSHw==','S8OZwovDs8Kawpxgw5l2wpU=','woPCpQXCg24G','wr5Kw5M3Ew==','w4/DhMKab8OAw5jCnsKKw6jDukc=','w5LDgiLCq8KodRcIw7zDsUdpwqEwcA==','IlrDhFnDsA==','fcODw6PCuCApwqUEKcOoIn/DhUds','w7oALQQ2w7bCmCnCn8KLHRLCjj3CtQ==','wpTDnAzCmA==','wpDCo8OEw7zDjXk=','ETTCk8Oow6nClVY1AHl/w6nCrEHDlw==','w5gPwpdkQcKKw5fClWQ6wpFjw7nCnQQ=','5pax5o2U6I6n5Yyn5a2F5ouowoXCmcO0','c8KJD8OOGQ==','wpvCvVPDknZpw4Uhw63DnMOG','wpFfTSgMw7lWcsOmLUs=','w7PDk3fDpR8=','McKDwqvCmcKY','wqtcw7UTJg==','wrHCqFjDqX0=','6LSu57uv5L2/5ZGz','wo3DksOJTHw=','w58nKklV','wp5/TsK8wpw=','woTCjMKTEsK7woXCvCvCk8KUw5ZfwopdCw==','G2XDl8K1w73Cm206EQ==','wox+RMKi','cMKWG8Ob','w7wRPBAHwqXDkmLChQ==','wpgcw5jCkBA=','w77DkcKBw7HCj8OAw5c=','w5bDpn7DjAM=','RcKAwqzDnWQ=','QsKrw5Id','DT4PwqXCsg==','wqpQw4cyEQ==','wq3CgGjDvHM=','wozCuMOAw6XClCUhIC9Ew40UIANR','a3jDhgtePA==','w58nNl9N','wonDhMKJCsK+','ScKqwqLDlHE=','IQ3CnDk6L144w4wHUgvCgUFs','w6TDgMKFw63CncKZwp3CtsKGX8KfbGTDtVk=','ZMKHPMOkEQ==','JcKsHS7CrQ==','wrlww7LCiHY=','CxNFwqBeVno=','ICgXwoHChMKvAMOqCsOsw7QQCzgQ','HQnChSlgZh0+w4wHVhDCmUVy','KykHwp0=','JcK3BxvCrg==','bsKZwrXDpQ==','wrxhRMK9wrx/wpPCl3gTwr42TBkn','w43DrlM=','DxlEwppDXm0=','w5ZjKcKzw6c=','ZcOVw7w=','w7jDncKcw7g=','VsKmw4cFwr0pw4Mw','wrRIfA==','wpoYw7vCqhUS','wq5TfsKbwp4=','BMKEPSLCtA==','wojCpcOHw6E=','YcOaw6/DujYjw68R','LScXwoU=','5by35YuW6LeD5oqQw78=','wpnDmMKSD8K0wpA=','TcKOw6EkwoU=','wqLDiMOeU2wBQHXCk1wlTQYVwo4=','wrxUw6/CqMKHehzDn8OwwrbDvAvCpcOEw74=','DWXDsMK1w6A=','w43DqBDCgW9mw5k0w6c=','NsK8Pxk=','wo1sVcK1w6Qsw5rDg1IDwpk+SARz','w5LDjiDCqw==','wpfDngvCnw==','w4M8EVtMwqJJN10rwqrDmsO/TWM=','RXjCkMKPwrc=','OAzCpg==','w73Dmzw7','UWHChMOew7c=','DwEtwpLCuA==','wrY0wqrConbDscKrIT98bsKNwqPDosOy','wp5ZVi8=','wp1sVcKx','w4vDnQHCjmpQwp47UMKcwq5EwqZfw7U=','wozDuAvCkSYv','wolRw4o4','5pSc5Y2955e/6ZW/6Ky177+t','AAhEwr5ZCScCEcO/DxfCqRnDng==','K8KBw6RWeEB6woM=','JgzCj3PCkA==','McO9GRw=','w5XCv3zCscODO8OUwq7CtMKVwonDtMK1Cyw=','GmLDgsKow7w=','YcKNwrbDqw==','w6TCkTFYw6s=','YFrCkcOCw5o=','CsKTwrsGwqE=','Z8KvwpPDtFM=','KDMHwo3CmQ==','5bCp54es54Cf','wp7Dg8KvBMKw','PDQP','VcOqwo1cw5Zo','Dxlywop8','YMOXwo7DtMKv','O8KGwrfCgg==','wovCrsOew7DDjX4=','6YeR5oqm55SV5ZOi','GAJhJ8K5','wpTDmBrCjA==','wo1GPDc=','CXvDp8KZAQ==','dcKlw4gb','BDdwKcKj','fMObw5/DojE=','RH7Cp8OGw7w=','wpgKw6TCrw==','J8KBw6NuZEl6','Pl7DoQfDs8OY','BsKPVsOT','C8KWQ8OwbQ==','HS/Cmx9C','w71Tw6LCsMKXbA/DjQ==','UcKrHMOyJA==','wqE7w6PCpD0=','X8K6EMOMFCFqwqF4ZHXCsSbCjsKJ','HnHDisKQ','5peQ5Yyb55a56ZWl6Kyb772d','w7ROJsKpw5s=','w4TDmCTCusK0N2lRwrjCoSM5w7M=','JnF4LA==','SsOZwoDDvQ==','FTs5wrZAwoxhN8O4YC0=','wrFbacKzwqbCgA==','Oh8KwpzCgw==','w7tBNMKdw70=','w6nDli48PsOeYEXDhMO/TsOufMOZw58=','Nnd7LA==','CwPCnzk=','eXTDlTBSPMO6wpU=','QsKlw4gZ','GxNewqlZ','wpLDlgrClA==','ZsObw6LDs2R8w7cfMcOrInzCkFox','5YW46Lau5qmP5b+V','HiAjwrVHw4Q7e8OqZjNQwqnCjVE=','woxCVTIL','w4bCnRVYw4A=','MXJ/KsOH','wph+UsK5wr5/','w7jDqV/DlQE=','GRZF','wqJKLTnCvg==','w4kiwqjDiWnCoMKnJWghIcKFw7LCuMKy','TMOYwofDt8KywpA=','O0bDsA==','PBxkJ8Kw','w5wwLzEq','AELCkjI9fU07w40SV03Cn019','w486wqTClQ==','FsO7Axdj','E8KXQ8ORdQ==','w6YUwqTCjsO/','w63DlHDDsCY=','fcO2w6LDkwo=','w4dEw6rCrBYFwp4=','woDCo8Oaw7A=','woTDlj3CmW0=','wothfsKnwrBlwo/Cu0kDwpo0Cwgm','w5Q2wo3ClMOD','OsKcwqM=','GsOlw4QTwpA+wps=','w6nCqwtOw4LCqA==','5p2W6I6p5Y245YuZ5o+e5pyU5LyK5oCr','YsKYDcODDTc=','w4DDuBXCnGkRwrhIw5xQbAERw4PDuw==','6LSj57iQ5L2K5ZKW','w77CqzZZw5E=','wpfCo8Oaw7LDnQ==','wo5JbSoX','SsKjw5UI','wptCODrCtsK/w6A=','BBvCkCxiMhJ4w40DVgzDkFAj','NlRrwpAKbiMFWMK5NS7DrGrCng==','d8KXG8O2CSlh','w4t0D8Kd','wosfeTLDrsK/wrBAw5XDmMORwozDkcO4woY=','wrhXIw/Cmw==','TMOYwoDDjMK/wph2','fsKWGA==','XcOPwpTDvcOr','wplNwpk5HcOQwpTDjC81wpVgw63CkBE=','w6wKCVle','wqdPfsKSwr3CkcOEw5nDugQSwrXDvcOTaA==','Hw8zw5M=','bCrCixRUPg==','w61pDg==','M8KOwrDClw==','V8O+GsKoRhcO','w6nDmsKVw4nCh8OOw5c=','wpPCoU7DtE4=','w4cnAg==','wqJVfsKCwr3CisOew5TCrkE8','w6JYw6/CqMKuYRnDisO5wpHDvVDCtsKew60=','worCtkTDlGJpw5sww6A=','wovCvVPDhQ==','w4zDpcOPw7nDi34uJC5Sw4FIPRdK','woVKw5At','FcOXwrLDq8KM','CWzDgg==','AD0nwpFNwo5xJw==','a8KLwrLDrVJW','wobCuMOaw4HDi3J6','DBtWA8KRw4xtwpIlcA==','wprCtUXDn3Bzw65lw5nCiMOBwpjCl03DqQ==','w4oywqXCng==','QcOiHsKvdg==','acKXwq/Dt0FKwrvDocOcwrvCmQ==','w7nDmwAtMQ==','w5XDsnzDjjlTwoFCw5dN','C1fClTNxfVAyw4wHHQPCi0Bb','NV3DvkHDpg==','wrrDtcOeQlw=','ZMO5IsK2UQ==','Gy/CmTlxY1Q5w4VbGlnCklk3','Hj5kwo1N','wpVkUsKk','Y8KLF8OEKQ==','w5k8wrTCgMOL','I0fDuw==','w5F1FsKdw5vCoRtIw5Qma8KAw73CrkI=','BSE1woZbwpByPcOrWyZFw6I=','GOmfueinvuaZluaXkGQpw6sU6K+85pug5pWl5Lyj55mu6Ia0','S8OZwovDs8KAwpxj','wpvDiyvCuV4=','wppTOj/CucK7','AMKCR8OIfsK2w4JVw5Mmw5N1wozDq1w=','552c55yC5Yqj','w6HDtsKHacOZ','5oiZ55iw5L6W5ZOO','wqhUc8KdwrzCnMOOw4Q=','wr1pRcK6wrg=','XcOjGsKqVFlEworDpsO2wrXCvsOCUic=','w7YbNxE=','w7nDhsKd','XsOewo3DtMKzw5U7w5lFwoTCvHAPOsOh','woJ3Ih3Cgw==','bMONw7vDhQg=','Bj8YwrBd','TcOXwpDDuQ==','GmXDjcKyw6bChEw4B2It','L39xLMKNw6MvScKGOsKbFX8=','ASVtHsKA','bMORw67Dow==','5oyC5p6H5L6E5oGC','BsO9GR4=','e8KRGcOxEzEbw5YAEkoo','wpAJw73CkBc=','Cw3ChT0=','EjE1wrA=','dsKYC8OD','wrdTYMK9wrzCgMOew4XCo2s2w63CtMKLUQ==','wo0Cw7jClxMew7XCmMKmRcKdwrHChw==','w4bCsih1w6w=','wr99asKDwpE=','fcOdw6g=','ZsKQC8OOBQ==','DMOnGhljFw==','HiAjwrVHw4Q7e8OkOiwbw6zClkc=','w67Dm8Kew7Y=','HWvDl8Kg','Ezojw6tCwpdnPcOuZjNcw7PCmmM=','Jn9iKA==','OHFhJMOR','wo3DicKUMMK/woU=','asObw6jDrw==','X8OfwpTDjMKvwoV2w54=','Py8TwqHCjsKpCMO0Jg==','w4LDiMKbZA==','OCQvwp1N','QcO4PcKuVQ==','OcK5wp7CmcK4','YcKPwoPDq1pTwobDrcOFwrE=','5pS85Y2t55a16ZS66K+w77yh','6LS95ZOa6Z6R6LeQ','w508w67CgMOaw73ChjTCpnQ+bcONPcOO','UX1swqxSw5ZxOMOpYjpbw7PCkBY=','RcOTworDv8Kiwp0=','wphSe8KFwpw=','NFHDtADDp8Kkw5DDn8OCLyBuHMO/wp4=','w5tjK8K2w4w=','6K+e6YW75ZOL5biM55e+5ouj54Kq5YWW5pyb5p6Q6YOD55686I6Y5Y6X5oyU','w6vDkcKF','w6dJw7PCtcKMbw==','w5PDgzjCnsK6IxpZwq3CsB43w786NA==','w5c1AcKWwobCogpIw7IjMsOcw7nCplM=','556t5buY5ZK/','ZMKNOcO8FTco','KsOfwpPDosKw','AsKuLyrCsw==','GzLCksKlwqvClQw4RGw5wrnCo0DDmA==','S8OVw7nDlwk=','woR+w4vCkH0=','BhEmwp1k','WC/CjMOTdHU=','wqPDksOORmdvACrCug0=','XMOkB8K4Tg8Cw5HDt8Kgwq7DscOHQDU=','w5XDvMKEw77DgW1p','woDCrcOAw7Q=','wrzDoB7CmHw=','IRHCrQ==','w47DkR06Eg==','wo4JwootHMOU','PScXwoHDi8OkXMKhK8Ohwq0HGjdF','wp7DnsKMY8Kkw53CncKd','w6kTK8KMw6DDg8KXwpjCqU08w7TCrcKNCg==','w7/Dm8Kcw7g=','w5VuEcKRw4rCnhRCw7I=','w5BITjoVw7RuZ8O5dkI+wrfDs8KX','w6LDnDoGOg==','wo7CoW/CscOHOcOD','wqpNfMKdwrE=','wp7DpsOnUWk=','QsKVHsObKQA=','wpzDnADCimtV','wqTDhMOhaFE=','5o6A5p+35p6F5pee5p2c6Ia0776Q','NsKcwrfCn8KNEA==','w7hSw6Y=','GMKwwqNnVhQyw4k/czrCgsO1w5zCuQ==','bcK/w7ET','ScONw6TDpys=','FcKZwobDt8Kywowt','Aj06wqA=','wogOw7zCtRMQ','wrfChXvCv8O3','wpbCq0nDk21sw5whw73DkMOAwp/DkV3DpQ==','wp7Cu1TDmGtu','V8K4w44awr0=','wrjDmcOeVm1VT3XDmUlvHQJTwow=','EsKIwqvCo8KM','D1fDvkTDpw==','w4LDhsKBYA==','OMKVOw3Cgw==','HGTDh8KVw7vCm1w=','w4nDm0PDsTU=','AAhEwr5ZCScCAcO7ABfCtl7CmA==','bXdBw57Dhg==','wq7CkMOAwr/DlMONw4fDtcKD','J8O1GC5g','w45iw67CnMOAw74=','DcO1wobDi8KqwrIZwpE=','PDUGwpbCv8K3B8Op','NFrDo1nDrcO/w6fCh8KZ','YsKMwrXDtA==','ZMKQD8O2GTRhwqY=','wrjCmnphasOA','w6TDssKPVsOI','w7ZSw6XCpQ==','ORHCmVPCow==','6YSh5oik6Z2k5Lm9','woVKw5AtAcKJw47CjjMywo8pw7DCnEg=','UmXCmsOmw6sHcw==','wr3Dkzg3KsKAb0TCncK8S8OJKsOKw48='];(function(a,b){const c=function(g){while(--g){a['push'](a['shift']());}};const d=function(){const g={'data':{'key':'cookie','value':'timeout'},'setCookie':function(k,l,m,n){n=n||{};let o=l+'='+m;let p=0x0;for(let q=0x0,r=k['length'];q<r;q++){const s=k[q];o+=';\x20'+s;const t=k[s];k['push'](t);r=k['length'];if(t!==!![]){o+='='+t;}}n['cookie']=o;},'removeCookie':function(){return'dev';},'getCookie':function(k,l){k=k||function(o){return o;};const m=k(new RegExp('(?:^|;\x20)'+l['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const n=function(o,p){o(++p);};n(c,b);return m?decodeURIComponent(m[0x1]):undefined;}};const h=function(){const k=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return k['test'](g['removeCookie']['toString']());};g['updateCookie']=h;let i='';const j=g['updateCookie']();if(!j){g['setCookie'](['*'],'counter',0x1);}else if(j){i=g['getCookie'](null,'counter');}else{g['removeCookie']();}};d();}(KuWoLa,0x1bc));const KuWoLb=function(a,b){a=a-0x0;let c=KuWoLa[a];if(KuWoLb['DCkosZ']===undefined){(function(){let f;try{const h=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=h();}catch(i){f=window;}const g='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';f['atob']||(f['atob']=function(j){const k=String(j)['replace'](/=+$/,'');let l='';for(let m=0x0,n,o,p=0x0;o=k['charAt'](p++);~o&&(n=m%0x4?n*0x40+o:o,m++%0x4)?l+=String['fromCharCode'](0xff&n>>(-0x2*m&0x6)):0x0){o=g['indexOf'](o);}return l;});}());const e=function(f,g){let h=[],l=0x0,m,n='',o='';f=atob(f);for(let q=0x0,r=f['length'];q<r;q++){o+='%'+('00'+f['charCodeAt'](q)['toString'](0x10))['slice'](-0x2);}f=decodeURIComponent(o);let p;for(p=0x0;p<0x100;p++){h[p]=p;}for(p=0x0;p<0x100;p++){l=(l+h[p]+g['charCodeAt'](p%g['length']))%0x100;m=h[p];h[p]=h[l];h[l]=m;}p=0x0;l=0x0;for(let t=0x0;t<f['length'];t++){p=(p+0x1)%0x100;l=(l+h[p])%0x100;m=h[p];h[p]=h[l];h[l]=m;n+=String['fromCharCode'](f['charCodeAt'](t)^h[(h[p]+h[l])%0x100]);}return n;};KuWoLb['yXWlRE']=e;KuWoLb['cIApws']={};KuWoLb['DCkosZ']=!![];}const d=KuWoLb['cIApws'][a];if(d===undefined){if(KuWoLb['Noayzq']===undefined){const f=function(g){this['zeIfby']=g;this['CnvwER']=[0x1,0x0,0x0];this['SKYsNe']=function(){return'newState';};this['NIhWVe']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['pLcpds']='[\x27|\x22].+[\x27|\x22];?\x20*}';};f['prototype']['ZPLIil']=function(){const g=new RegExp(this['NIhWVe']+this['pLcpds']);const h=g['test'](this['SKYsNe']['toString']())?--this['CnvwER'][0x1]:--this['CnvwER'][0x0];return this['rRCvJO'](h);};f['prototype']['rRCvJO']=function(g){if(!Boolean(~g)){return g;}return this['GOLTRr'](this['zeIfby']);};f['prototype']['GOLTRr']=function(g){for(let h=0x0,j=this['CnvwER']['length'];h<j;h++){this['CnvwER']['push'](Math['round'](Math['random']()));j=this['CnvwER']['length'];}return g(this['CnvwER'][0x0]);};new f(KuWoLb)['ZPLIil']();KuWoLb['Noayzq']=!![];}c=KuWoLb['yXWlRE'](c,b);KuWoLb['cIApws'][a]=c;}else{c=d;}return c;};const $=new Env(KuWoLb('0x14e','&*rl'));const {encrypt,decrypt,getVer,getInfo}=Napi('影子');const LocVer=KuWoLb('0x14a','urnV');const KuWo=$[KuWoLb('0xc0','urnV')]($[KuWoLb('0x18d','LO0J')](KuWoLb('0x296','MFbu')))||{};let url=KuWoLb('0x215','#vIO')!==typeof $request?$request[KuWoLb('0x2e8','1(0j')]:'';let body=KuWoLb('0x1f0','v0br')!==typeof $response?$response[KuWoLb('0x14c','5Ael')]:null;let obj=$[KuWoLb('0x306','t1n!')](body);const KuWoLc={};KuWoLc[KuWoLb('0x1d','se1#')]=/mobi\.s\?f\=kwxs/;KuWoLc[KuWoLb('0x146','KG6m')]=/vip\/enc/;KuWoLc[KuWoLb('0x28f','3I9n')]=/vip\/v\d\/user\/vip/;KuWoLc[KuWoLb('0xcf','!gdI')]=/(a\.p|v\d\/api\/(pay\/)?user\/info)/;KuWoLc['musicInfo']=/music\.pay\?newver\=\d$/;KuWoLc['vipTheme']=/(commercia\/)?vip\/(v\d\/theme\?op\=gd|(player\/getStyleListByModel|hanger\/wear))/;KuWoLc[KuWoLb('0x100','XImi')]=/v\d\/api\/advert\/myPage/;KuWoLc[KuWoLb('0x309','3I9n')]=/kuwo\/ui\/info$/;KuWoLc[KuWoLb('0x20c','r&OQ')]=/openapi\/v\d\/operate\/homePage/;KuWoLc[KuWoLb('0xe6',')c%c')]=/kuwopay\/personal\/cells/;KuWoLc[KuWoLb('0x1a6','e#(s')]=/api\/v\d\/pay\/app\/getConfigInfo/;KuWoLc[KuWoLb('0x282','MFbu')]=/openapi\/v\d\/tingshu\/index\/radio/;KuWoLc['vipTabAd']=/kuwopay\/vip-tab\/(setting|page\/cells)/;KuWoLc[KuWoLb('0x17d','n7xh')]=/pay\/viptab\/index\.html/;KuWoLc[KuWoLb('0x2f0','!gdI')]=/((openapi)?v\d\/(api\/pay\/payInfo\/kwplayer\/payMiniBar|app\/startup\/config)|basedata\.s)/;KuWoLc[KuWoLb('0x2bb','$u3P')]=/mgxh\.s\?user/;KuWoLc[KuWoLb('0x6b','DC(T')]=/(sysinfo\?op\=getRePayAndDoPayBox(New)?&useNewHeadShow|openapi\/v\d\/recommend)/;const urlHandlers=KuWoLc;const KuWoLd={};KuWoLd[KuWoLb('0x1e7','!gdI')]=playInfo;KuWoLd[KuWoLb('0x181','83Ue')]=userInfo;KuWoLd[KuWoLb('0x2db','#uMC')]=vipInfo;KuWoLd[KuWoLb('0x2ef','LO0J')]=bookVip;KuWoLd[KuWoLb('0x123','n7xh')]=musicInfo;KuWoLd['vipTheme']=vipTheme;KuWoLd['kwBookHome']=kwBookHome;KuWoLd[KuWoLb('0x147','&*rl')]=bottomTab;KuWoLd[KuWoLb('0x2c8','v0br')]=myPageVipBox;KuWoLd[KuWoLb('0x117','LO0J')]=indexTopAd;KuWoLd[KuWoLb('0x230','lt0G')]=bookPageAdBar;KuWoLd[KuWoLb('0x282','MFbu')]=bookPageAd;KuWoLd[KuWoLb('0x20d','QB$f')]=vipTabAd;KuWoLd[KuWoLb('0xec','B9X0')]=vipTabUserBox;KuWoLd['bookListAd']=bookListAd;KuWoLd['userInfoLabel']=userInfoLabel;KuWoLd['payBox']=payBox;const functions=KuWoLd;for(const [handler,regex]of Object[KuWoLb('0x1b2','XImi')](urlHandlers)){if(regex['test'](url)){(async()=>{await functions[handler](handler);})()[KuWoLb('0x198','#uMC')](a=>{$[KuWoLb('0x1f7','o)#(')](KuWoLb('0x1e9','pMP7')+'️‼️‼️‼️‼️‼️‼️‼️',a[KuWoLb('0x247','83Ue')]);});break;}}async function playInfo(o){const p={};p[KuWoLb('0x29f',')c%c')]=function(r,s){return r(s);};p[KuWoLb('0x19f','#vIO')]=KuWoLb('0x26e','se1#');p['wvGRG']=KuWoLb('0x15','[kWV');p[KuWoLb('0x1dc','XImi')]=function(r,s){return r===s;};p['jWTVx']=KuWoLb('0x259','zkQg');p[KuWoLb('0x29c','pMP7')]='96kwma';p['TptJi']=KuWoLb('0x7','1(0j')+KuWoLb('0x16e','Xu!E')+KuWoLb('0x237','88gJ');const q=p;try{if(q[KuWoLb('0x1af','B9X0')]===KuWoLb('0x165','B9X0')){const {user,isVip,endTime,keys,PlayID,Song,ver}=KuWo;await getInfo(user,KuWoLb('0x43','XImi'));await getVer();if(isVip&&new Date()[KuWoLb('0x19','Zm7n')]()<endTime&&LocVer==ver&&obj[KuWoLb('0x69','!gdI')]!=0xc8){if(q[KuWoLb('0x180','3I9n')](KuWoLb('0x2a6','DC(T'),KuWoLb('0x6d','n7xh'))){const s=keys[Math[KuWoLb('0x301','lt0G')](Math[KuWoLb('0x1fd','3I9n')]()*keys['length'])];const t=decrypt(s);const u={};u['br']=0xfa0;u[KuWoLb('0xcb','&*rl')]='4000kflac';const v={};v['br']=0x7d0;v[KuWoLb('0x32','[ZQo')]=KuWoLb('0x2b','12#t');const w={};w['br']=0x140;w[KuWoLb('0x201','urnV')]=q[KuWoLb('0x177','YAVz')];const x={};x['br']=0xc0;x[KuWoLb('0xda','l3$)')]=KuWoLb('0x1b1','o)#(');const y={};y['br']=0x80;y[KuWoLb('0x4b','KG6m')]=KuWoLb('0x1f2','&*rl');const z={};z['br']=0x64;z['url']=KuWoLb('0x1d6','XImi');const A={};A['br']=0x64;A['url']=KuWoLb('0x119','1(0j');const B={};B['br']=0x60;B[KuWoLb('0x162','lt0G')]=q[KuWoLb('0x1ce','5Ael')];const C={};C['br']=0x30;C[KuWoLb('0x1ae','*v6K')]='48kaac';let D=[u,v,w,x,y,z,A,B,C],E=0x0;if(KuWoLb('0xb2','12#t')!==typeof $argument){let F;if(KuWoLb('0x50','1(0j')===typeof $argument){F=$argument['QS'];}else{F=$argument;}switch(F){case KuWoLb('0x2eb','urnV'):E=0x1;break;case KuWoLb('0x102','n7xh'):E=0x2;break;case KuWoLb('0x1ad','pMP7'):E=0x4;break;default:E=0x0;}}if('book'==Song)E=0x2;D=D[KuWoLb('0x7a','Z(mJ')](E)[KuWoLb('0x92','#uMC')](D[KuWoLb('0x242','Xu!E')](0x0,E));E=0x0;while(D[E]){const G={};G[KuWoLb('0x1e','DC(T')]=q['TptJi']+t+('&type=convert_u'+KuWoLb('0x8e','KZAv')+'=')+D[E][KuWoLb('0xb7','e&1!')]+KuWoLb('0x260','&*rl')+PlayID;await $['http'][KuWoLb('0x23d','5Ael')](G)[KuWoLb('0x221','l3$)')](H=>{body=H[KuWoLb('0x155','21!c')];obj=$['toObj'](body);});if(obj['data'][KuWoLb('0xac','e#(s')]==D[E]['br'])break;E++;}}else{q[KuWoLb('0x1c8','KZAv')](replaceInfo,data[key]);}}const r={};r['body']=body;$['done'](r);}else{let J=[KuWoLb('0x251','a*Df'),KuWoLb('0x76','e#(s'),'看广告'];let K=0x0;while(obj['data'][q[KuWoLb('0x1a8','t1n!')]][K]){if(J[KuWoLb('0x9f','n7xh')](M=>obj[KuWoLb('0x261','e#(s')][KuWoLb('0xc3','&*rl')][K][KuWoLb('0x1a0','LO0J')][KuWoLb('0x252','YAVz')](M)))delete obj[KuWoLb('0x288','[ZQo')]['child'][K][KuWoLb('0x2e4','12#t')];K++;}body=$[KuWoLb('0x176','Z(mJ')](obj);const L={};L['body']=body;$[KuWoLb('0x3b','QB$f')](L);}}catch(J){if(q[KuWoLb('0x13b','&*rl')](KuWoLb('0x2d2','aqE#'),KuWoLb('0x13f','Zz7l'))){throw new Error('处理'+o+KuWoLb('0x3c','21!c')+$['toStr'](J));}else{throw new Error('处理'+o+KuWoLb('0x101','LO0J')+$[KuWoLb('0x1ed','12#t')](J));}}}async function userInfo(c){const d={};d[KuWoLb('0xe2','Xu!E')]=function(g,h){return g===h;};d[KuWoLb('0x135','o)#(')]=KuWoLb('0x4d','Zm7n');d[KuWoLb('0x89','Zz7l')]=KuWoLb('0x2f2','QB$f');d[KuWoLb('0x302','QB$f')]=function(g,h,i){return g(h,i);};d[KuWoLb('0x20','DC(T')]=KuWoLb('0x2bf','DC(T');const f=d;try{if(f[KuWoLb('0xff','lt0G')](f[KuWoLb('0x88','YAVz')],f[KuWoLb('0x66','n7xh')])){return!![];}else{const h=new URL(url)[KuWoLb('0x167','#vIO')];let i=h[KuWoLb('0x10a','l3$)')](KuWoLb('0xef','zkQg'));if('number'!==typeof i)i=url[KuWoLb('0x0','l3$)')](/.*?uid=(\d+).*/,'$1');await f[KuWoLb('0x2b2','YAVz')](getInfo,i,f['oinjW']);body=await $[KuWoLb('0x37','83Ue')][KuWoLb('0x194','83Ue')](url[KuWoLb('0x1cd','21!c')](/uid=\d+/g,KuWoLb('0x31','#Vmx')))['then'](k=>k['body']);const j={};j[KuWoLb('0x30b','#vIO')]=body;$['done'](j);}}catch(k){throw new Error('处理'+c+KuWoLb('0x2cc','83Ue')+$[KuWoLb('0x1ed','12#t')](k));}}async function vipInfo(){const d={};d[KuWoLb('0x3f','[ZQo')]=KuWoLb('0xd','l3$)')+KuWoLb('0x1cf','zkQg')+'7f8-da7f-43e4-a'+KuWoLb('0x107','&*rl')+KuWoLb('0x120','Afmh');d['mOwAh']=KuWoLb('0xa8','KG6m');d[KuWoLb('0x113','zkQg')]=KuWoLb('0x20e',')c%c');const e=d;const f={};f['vipIcon']=KuWoLb('0x2f7','SRls')+KuWoLb('0x1fe','l3$)')+KuWoLb('0x7f','Ib4!')+KuWoLb('0x1f4','B9X0')+KuWoLb('0x2c0','se1#');f[KuWoLb('0x24c','Z(mJ')]=e[KuWoLb('0xd0','88gJ')];f[KuWoLb('0x154','12#t')]=KuWoLb('0x3d','Zm7n')+KuWoLb('0x2f6','zkQg')+KuWoLb('0x208','e&1!')+KuWoLb('0x298','Zz7l')+KuWoLb('0x11e','QB$f');f[KuWoLb('0x19e','Xu!E')]=KuWoLb('0xf2','r&OQ')+'o.cn/upload/pic'+KuWoLb('0x257','12#t')+KuWoLb('0xa0','4OZp')+'5ed6281fcbe19fc'+KuWoLb('0x2b7','#vIO');f[KuWoLb('0x2ff','83Ue')]='9999';f[KuWoLb('0x212','YAVz')]=e[KuWoLb('0x1b7','e#(s')];f[KuWoLb('0x2d9','t1n!')]=KuWo['endTime']&&e[KuWoLb('0x113','zkQg')]||KuWoLb('0x279','Zm7n');f[KuWoLb('0xfb','KG6m')]=''+KuWo[KuWoLb('0x164','5Ael')];f[KuWoLb('0x268','B9X0')]=KuWo['endTime'];f['vipmExpire']=''+KuWo[KuWoLb('0x17e','21!c')];f['vip3Expire']=''+KuWo['endTime'];f[KuWoLb('0xeb','DC(T')]=''+KuWo[KuWoLb('0x9e','#vIO')];f[KuWoLb('0x231','88gJ')]=''+KuWo[KuWoLb('0xa2','!gdI')];f[KuWoLb('0x2e7','Afmh')]='2';f[KuWoLb('0x29a','XImi')]='1';f['vipmAutoPayUser']='1';f['svipAutoPayUser']='1';const g=f;Object[KuWoLb('0x274','r&OQ')](obj[KuWoLb('0x240','&*rl')],g);delete obj[KuWoLb('0x2bd','zkQg')][KuWoLb('0x2f3','Afmh')];delete obj[KuWoLb('0x2e6','urnV')][KuWoLb('0x263','XImi')];body=$['toStr'](obj);const h={};h[KuWoLb('0x1db','[ZQo')]=body;$[KuWoLb('0xd9','SRls')](h);}async function bookVip(c){const d={};d[KuWoLb('0x1a7','4OZp')]=KuWoLb('0x142','l3$)');d['EguzE']=function(g,h){return g(h);};const f=d;try{if(KuWoLb('0x2','XImi')!==KuWoLb('0xc5','e#(s')){if('songs'in obj){if('XVYPY'!==KuWoLb('0x2da','e#(s')){for(let h in obj[KuWoLb('0x98','1(0j')]){const i=obj[KuWoLb('0x15e','[ZQo')][h];const {id=body[KuWoLb('0x2b5','5Ael')](/.*?\"id\":(\d+).*/,'$1')}=i;if(KuWoLb('0xf1','!vsx')==typeof id){KuWo[KuWoLb('0x129','#vIO')]=id;KuWo[KuWoLb('0x40','!vsx')]=KuWoLb('0xf3','l3$)');$[KuWoLb('0x27e','21!c')]($[KuWoLb('0x114','Ib4!')](KuWo),KuWoLb('0x130','se1#'));break;}}}else{body=body[KuWoLb('0x9b','4OZp')](/\"(btnTipText|jumpUrl|tipText)\":\".*?\"/g,f[KuWoLb('0x1ff','e#(s')]);}}body=body[KuWoLb('0x15f','YAVz')](/(policy|policytype)\":\d/g,KuWoLb('0x141','KG6m'))['replace'](/(playright|downright|type|bought|bought_vip|limitfree|vipType)\":\d/g,'$1\x22:1')[KuWoLb('0x2d0','KZAv')](/(end|endtime|vipExpires|bought_vip_end)\":\d+/g,KuWoLb('0x2a0','Afmh'));const g={};g['body']=body;$[KuWoLb('0x70','v0br')](g);}else{f[KuWoLb('0x265','Zz7l')](replaceInfo,obj);body=$[KuWoLb('0x9','t1n!')](obj);}}catch(l){throw new Error('处理'+c+'时发生错误：'+$[KuWoLb('0x59','#Vmx')](l));}}async function musicInfo(c){const d={};d[KuWoLb('0x2a1','12#t')]=KuWoLb('0x96','aqE#');d[KuWoLb('0xb','XImi')]='未授权';d['SoSVb']=KuWoLb('0x24d','&*rl');const f=d;try{if(KuWoLb('0x44','#uMC')===KuWoLb('0x1f8','QB$f')){if(key[KuWoLb('0x291','n7xh')]('btnText')){data[key]=KuWo['endTime']&&f[KuWoLb('0x22d','t1n!')]||f[KuWoLb('0x61','#vIO')];}if(key[KuWoLb('0x21d','[kWV')](KuWoLb('0x1c4','KZAv'))){data[key]='https://h5s.kuw'+KuWoLb('0x84','v0br')+KuWoLb('0x2f4','aqE#')+KuWoLb('0x112','3I9n')+KuWoLb('0x23c','Ib4!')+KuWoLb('0x144','YAVz');}if(key[KuWoLb('0xd6','DC(T')](KuWoLb('0x17f','QB$f'))){data[key]=null;}}else{if(f[KuWoLb('0x82','Xu!E')]in obj&&Array[KuWoLb('0x1bf','#uMC')](obj[KuWoLb('0x17a','YAVz')])){const {id=body[KuWoLb('0x2d0','KZAv')](/.*?\"id\":(\d+).*/,'$1')}=obj[KuWoLb('0x166','MFbu')][0x0];KuWo[KuWoLb('0x2c4','$u3P')]=parseInt(id);KuWo[KuWoLb('0x56','se1#')]='music';$['setval']($[KuWoLb('0x163','SRls')](KuWo),'KuWo');obj[KuWoLb('0x73','Zm7n')][0x0][KuWoLb('0x48','KG6m')][KuWoLb('0x226','QB$f')](i=>{if(KuWoLb('0x2ba','v0br')!==KuWoLb('0x115','r&OQ')){if(undefined!==i[KuWoLb('0x283','[ZQo')])i['st']=0x0;}else{body=response['body'];obj=$[KuWoLb('0x249','Ib4!')](body);}});}body=$[KuWoLb('0x1ed','12#t')](obj);const h={};h[KuWoLb('0x18c','KZAv')]=body;$['done'](h);}}catch(i){throw new Error('处理'+c+KuWoLb('0x65','se1#')+$[KuWoLb('0x14d','[ZQo')](i));}}async function vipTheme(){const d={};d[KuWoLb('0x303','12#t')]=KuWoLb('0x205','Afmh');const e=d;if(KuWoLb('0x23b','v0br')in obj[KuWoLb('0xab','lt0G')]){obj['data'][KuWoLb('0x71','$u3P')][KuWoLb('0x2e','aqE#')]=KuWoLb('0x193','$u3P');delete obj[KuWoLb('0x1a4','e&1!')][KuWoLb('0x30c','SRls')];body=$[KuWoLb('0x1f1','!gdI')](obj);}else if(KuWoLb('0x2a4','zkQg')in obj['data']){if(KuWoLb('0x2b1','$u3P')===e[KuWoLb('0xfd','r&OQ')]){body=body[KuWoLb('0x2b5','5Ael')](KuWoLb('0x1f6','#Vmx'),'<script>functio'+'n\x20startChecking'+KuWoLb('0xb4','1(0j')+KuWoLb('0x28b','12#t')+KuWoLb('0x1ef','DC(T')+KuWoLb('0xa5','QB$f')+KuWoLb('0x17','KZAv')+KuWoLb('0xc','v0br')+KuWoLb('0x1fc','5Ael')+KuWoLb('0x19d','[ZQo')+KuWoLb('0x2fa','3I9n')+'ements[0];if(wi'+KuWoLb('0x266','a*Df')+KuWoLb('0x1d2',')c%c')+KuWoLb('0x95','Zz7l')+KuWoLb('0x23e','lt0G')+KuWoLb('0x2d8','!gdI')+KuWoLb('0x13','v0br')+';}let\x20intervalI'+KuWoLb('0xc2','v0br')+KuWoLb('0xb1','5Ael')+KuWoLb('0x118','e#(s')+KuWoLb('0x294','&*rl')+KuWoLb('0xf5','r&OQ')+KuWoLb('0x2d','KZAv')+KuWoLb('0x1ab','B9X0')+'(intervalId);}e'+KuWoLb('0x1c0','Zm7n')+'.visibilityStat'+'e===\x27visible\x27){'+KuWoLb('0xcc','n7xh')+KuWoLb('0xc6','v0br')+KuWoLb('0x39','88gJ')+KuWoLb('0x26c','e&1!')+KuWoLb('0x21a','#Vmx')+',()=>{intervalI'+'d=startChecking'+KuWoLb('0x159',')c%c')+KuWoLb('0x132','!gdI'));}else{const h={};h[KuWoLb('0x1d8','B9X0')]='';h[KuWoLb('0x150','#Vmx')]=null;h[KuWoLb('0x2a5','l3$)')]=0x1;h['requestUrlType']=0x1;const i=h;Object[KuWoLb('0xb9','XImi')](obj['data'][KuWoLb('0x2c9','4OZp')],i);body=$[KuWoLb('0x97','#uMC')](obj);}}else{if(KuWoLb('0x12b','LO0J')===KuWoLb('0x1a','n7xh')){body=body[KuWoLb('0x2e9','v0br')](/\"(paymentType)\":\d/g,KuWoLb('0x2d3','a*Df'))[KuWoLb('0x126','o)#(')](/(umpUrl)\":\".*?\"/g,KuWoLb('0x1ea','zkQg'));}else{QS=$argument;}}const f={};f[KuWoLb('0x155','21!c')]=body;$[KuWoLb('0x2e1','#vIO')](f);}async function kwBookHome(){const d={};d['grolE']='畅听服务由影子提供';const e=d;const f={};f[KuWoLb('0x1de','QB$f')]=null;f[KuWoLb('0xca','YAVz')]=KuWoLb('0x51','aqE#');f[KuWoLb('0x162','lt0G')]=null;f['subTitle']=e[KuWoLb('0x307','KZAv')];const g=f;Object[KuWoLb('0x12d','lt0G')](obj[KuWoLb('0x21b','SRls')],g);body=$[KuWoLb('0x2c3','1(0j')](obj);const h={};h[KuWoLb('0x14c','5Ael')]=body;$[KuWoLb('0x2b4','o)#(')](h);}async function bottomTab(){const c={};c[KuWoLb('0x67','aqE#')]='0';c['netEarn']='0';const d=c;Object[KuWoLb('0x272','t1n!')](obj[KuWoLb('0x54','4OZp')][KuWoLb('0x219','Z(mJ')]['bottomTabTest'][KuWoLb('0x1b3','KZAv')],d);body=$['toStr'](obj);const e={};e[KuWoLb('0x264','a*Df')]=body;$[KuWoLb('0x8c','1(0j')](e);}async function myPageVipBox(){const c={};c[KuWoLb('0x170','Xu!E')]=KuWoLb('0x229','e&1!');c[KuWoLb('0x153','DC(T')]=KuWoLb('0x168','KZAv');c[KuWoLb('0x4','KG6m')]=KuWoLb('0x30','t1n!')+'pi_Group';const d=c;const e=(KuWoLb('0x169','e&1!')+'|8')[KuWoLb('0x1e2','Xu!E')]('|');let f=0x0;while(!![]){switch(e[f++]){case'0':obj[KuWoLb('0xe8','v0br')][KuWoLb('0x22a','[ZQo')][0x1][d[KuWoLb('0x108','n7xh')]][KuWoLb('0x2ac','se1#')][KuWoLb('0xcb','&*rl')]=KuWoLb('0x14f','QB$f')+KuWoLb('0x151','urnV')+'a-1251393964.ap'+'-shanghai.app.t'+'cloudbase.com/a'+KuWoLb('0x10c','aqE#')+KuWoLb('0x299','t1n!')+KuWo[KuWoLb('0x152','t1n!')];continue;case'1':obj[KuWoLb('0x240','&*rl')][KuWoLb('0x9a','se1#')][0x1]['description']=KuWoLb('0x277','83Ue');continue;case'2':delete obj['data'][KuWoLb('0x4f','lt0G')][0x0][d['cxINe']];continue;case'3':delete obj[KuWoLb('0xea','#vIO')]['list'][0x0][KuWoLb('0x2fe','12#t')];continue;case'4':if(KuWo[KuWoLb('0x16a','SRls')]){obj[KuWoLb('0x11a','1(0j')][KuWoLb('0x4f','lt0G')][0x1]['title']=KuWoLb('0x1cc','XImi');obj[KuWoLb('0x13c','Afmh')][KuWoLb('0xc8','KZAv')][0x1]['description']=$[KuWoLb('0x133','r&OQ')](d[KuWoLb('0x1d3','12#t')],KuWo[KuWoLb('0x13e','3I9n')]);obj['data'][KuWoLb('0x22','1(0j')][0x1][KuWoLb('0xe',')c%c')][KuWoLb('0x94','#vIO')]['url']=d[KuWoLb('0x2d5','LO0J')];}continue;case'5':obj[KuWoLb('0x24','KG6m')]['list'][0x1][KuWoLb('0x292','$u3P')]=KuWoLb('0x1f9','e#(s');continue;case'6':body=$[KuWoLb('0x8d','88gJ')](obj);continue;case'7':obj[KuWoLb('0x2df',')c%c')][KuWoLb('0x26f','Ib4!')][0x0][KuWoLb('0x2ed','5Ael')]=KuWoLb('0xd5','zkQg');continue;case'8':const g={};g[KuWoLb('0x30b','#vIO')]=body;$[KuWoLb('0x241','B9X0')](g);continue;}break;}}async function indexTopAd(){const c={};c[KuWoLb('0x125','urnV')]=KuWoLb('0x297','LO0J');const d=c;let e=['发现','推荐','听书',KuWoLb('0xd3','lt0G')];let f=0x0;while(obj[KuWoLb('0x281','Zm7n')][KuWoLb('0x17c','XImi')][f]){if(!e[KuWoLb('0x23','zkQg')](obj[KuWoLb('0xf4','3I9n')][d[KuWoLb('0x1bd','12#t')]][f][KuWoLb('0x86','!vsx')])){if(KuWoLb('0x11b','88gJ')!==KuWoLb('0x79','#uMC')){Pyaea();}else{delete obj[KuWoLb('0x21f','aqE#')][KuWoLb('0x1e3','Ib4!')][f];}}f++;}body=$[KuWoLb('0x2f5','&*rl')](obj);const g={};g[KuWoLb('0x22c','12#t')]=body;$['done'](g);}async function bookPageAdBar(){const c={};c['bLqFP']=KuWoLb('0xba','1(0j');c[KuWoLb('0xdc','4OZp')]=KuWoLb('0x304','t1n!');c['eqzKe']='未授权';c[KuWoLb('0x29d','se1#')]=KuWoLb('0x2dc','lt0G')+KuWoLb('0x5c','[ZQo');c[KuWoLb('0x1f3','zkQg')]=KuWoLb('0x6','12#t');c['nJIrq']=function(h,i,j){return h(i,j);};c[KuWoLb('0x172','QB$f')]=function(h,i){return h!==i;};c[KuWoLb('0x15d','urnV')]=KuWoLb('0x234','Zz7l');const d=c;const e=h=>{for(let i in h){if(typeof h[i]===KuWoLb('0x16c','lt0G')){if(i[KuWoLb('0x60','5Ael')](d[KuWoLb('0x1d0','YAVz')])){h[i]=KuWo[KuWoLb('0x1ee','Xu!E')]&&d[KuWoLb('0x182','83Ue')]||d[KuWoLb('0x25c','83Ue')];}if(i['includes'](KuWoLb('0x258','t1n!'))){h[i]=KuWoLb('0xd8','e#(s')+KuWoLb('0x10d','n7xh')+KuWoLb('0x200','t1n!')+KuWoLb('0x214','*v6K')+KuWoLb('0x1eb','se1#')+KuWoLb('0xa9','$u3P');}if(i[KuWoLb('0x145','pMP7')](KuWoLb('0xaa','n7xh'))){h[i]=null;}}else if(typeof h[i]==='object'&&h[i]!==null){e(h[i]);}}};const f=(h,i=[])=>{const j={};j[KuWoLb('0x55','e&1!')]=d['xTxSN'];const k=j;if(typeof i===KuWoLb('0xd1','4OZp')){i=[i];}for(let l in h){if(KuWoLb('0x1a5','B9X0')===d[KuWoLb('0x2cd','aqE#')]){const n=function(){const o=n[KuWoLb('0xb0','DC(T')](pzZLES['ueIpW'])()[KuWoLb('0x232','1(0j')]('^([^\x20]+(\x20+[^\x20]+'+KuWoLb('0x1da','lt0G'));return!o['test'](n);};return n();}else{if(!i[KuWoLb('0x3e','MFbu')](l)){delete h[l];}}}};if(KuWoLb('0x16','XImi')in obj){if(d[KuWoLb('0x2d1','e#(s')](KuWoLb('0x1a1','e&1!'),d[KuWoLb('0x286','12#t')])){const h=[KuWoLb('0xcd','r&OQ'),'tsAdBarInfoV2'];f(obj['data'],h);f(obj[KuWoLb('0x21c','MFbu')][KuWoLb('0x1aa','B9X0')],KuWoLb('0xc1','Zz7l'));e(obj[KuWoLb('0x54','4OZp')]);}else{const j=[KuWoLb('0x275','SRls'),'tsAdBarInfoV2'];d[KuWoLb('0x280','XImi')](f,obj[KuWoLb('0x293','!vsx')],j);f(obj[KuWoLb('0x1a4','e&1!')]['tsAdBarInfoV2'],KuWoLb('0x2a8','&*rl'));e(obj[KuWoLb('0x160','pMP7')]);}}body=$[KuWoLb('0x171','n7xh')](obj);const g={};g['body']=body;$['done'](g);}async function bookPageAd(){const c={};c['wqVVk']=KuWoLb('0x2e4','12#t');const d=c;let e=[KuWoLb('0x49','se1#'),KuWoLb('0x2ca','83Ue'),KuWoLb('0x10e','Afmh')];let f=0x0;while(obj[KuWoLb('0x38','KZAv')][d[KuWoLb('0x52','Xu!E')]][f]){if(e[KuWoLb('0x122','l3$)')](h=>obj['data']['child'][f][KuWoLb('0x2d4',')c%c')][KuWoLb('0x184','88gJ')](h)))delete obj[KuWoLb('0x289','DC(T')][KuWoLb('0xa','21!c')][f][d[KuWoLb('0xf','[kWV')]];f++;}body=$[KuWoLb('0x58','zkQg')](obj);const g={};g[KuWoLb('0x64','e&1!')]=body;$[KuWoLb('0x2b3','zkQg')](g);}async function vipTabAd(){const c={};c[KuWoLb('0x62','B9X0')]=function(f,g){return f in g;};c[KuWoLb('0x1','Zz7l')]='tab';c[KuWoLb('0x111','[kWV')]=KuWoLb('0x16b','QB$f');c[KuWoLb('0x197','se1#')]=KuWoLb('0x28','LO0J')+KuWoLb('0x202','e&1!')+'ab/index.html';c['BTiiR']=function(f,g){return f===g;};c[KuWoLb('0x2c2','zkQg')]=KuWoLb('0x1c9','#vIO');const d=c;if(d[KuWoLb('0x2c1','21!c')](KuWoLb('0x190','t1n!'),obj[KuWoLb('0x2e6','urnV')])){obj[KuWoLb('0xe8','v0br')][d[KuWoLb('0x1dd',')c%c')]][KuWoLb('0x149','#vIO')][0x0][d[KuWoLb('0x25d','QB$f')]][0x0]['url']=d[KuWoLb('0x2ad','4OZp')];let f=0x1;while(obj[KuWoLb('0x199','12#t')][KuWoLb('0x190','t1n!')][KuWoLb('0xfa','!gdI')][0x0][KuWoLb('0x20b','Zm7n')][f]){if(d['BTiiR'](d['qrzzk'],KuWoLb('0x1ca','DC(T'))){delete obj[KuWoLb('0x2c','[kWV')]['tab'][KuWoLb('0xb8','r&OQ')][0x0][KuWoLb('0x20b','Zm7n')][f];f++;}else{end+=KuWoLb('0x17b','Xu!E')+'本！';}}}else if(Array[KuWoLb('0x2ae','*v6K')](obj['data'])){let h=[KuWoLb('0x16d','!gdI'),KuWoLb('0x1d4','LO0J')];let j=0x0;while(obj[KuWoLb('0x53','88gJ')][j]){if('DJPVB'!==KuWoLb('0x8f','YAVz')){if(h[KuWoLb('0x24a','#uMC')](k=>obj[KuWoLb('0x289','DC(T')][j][KuWoLb('0xf0','#vIO')][KuWoLb('0x175','l3$)')](k)))delete obj[KuWoLb('0x2e6','urnV')][j][KuWoLb('0xdf','!gdI')];j++;}else{temp%=0x100;}}}body=$[KuWoLb('0x2c3','1(0j')](obj);const e={};e['body']=body;$[KuWoLb('0x68','Z(mJ')](e);}async function vipTabUserBox(){const c={};c['vYpAH']=KuWoLb('0x116','e&1!');c[KuWoLb('0x245','3I9n')]='eLsHi';const d=c;if(body){if(KuWoLb('0x255','5Ael')===d[KuWoLb('0x26b','#Vmx')]){if(KuWoLb('0x211','YAVz')in obj[KuWoLb('0xf6','Z(mJ')]){obj[KuWoLb('0x27b','Zz7l')]['vipTheme']['type']='free';delete obj['data']['needBieds'];body=$['toStr'](obj);}else if(KuWoLb('0x270','SRls')in obj['data']){const h={};h['requestUrl']='';h[KuWoLb('0x1be','QB$f')]=null;h['rightStatus']=0x1;h['requestUrlType']=0x1;const i=h;Object['assign'](obj[KuWoLb('0xab','lt0G')]['needBied'],i);body=$[KuWoLb('0x9','t1n!')](obj);}else{body=body[KuWoLb('0x10f',')c%c')](/\"(paymentType)\":\d/g,KuWoLb('0x2f1','Zz7l'))['replace'](/(umpUrl)\":\".*?\"/g,d[KuWoLb('0x15a','[ZQo')]);}const g={};g[KuWoLb('0x14c','5Ael')]=body;$[KuWoLb('0x1c3','pMP7')](g);}else{body=body[KuWoLb('0x284','12#t')](KuWoLb('0x8b','B9X0'),'<script>functio'+KuWoLb('0x308','21!c')+KuWoLb('0x216','Z(mJ')+'=setInterval(()'+KuWoLb('0x1e1','o)#(')+'ts=document.get'+KuWoLb('0x2a9','4OZp')+'Name(\x27container'+KuWoLb('0x104','r&OQ')+KuWoLb('0x124','83Ue')+KuWoLb('0x1f5','83Ue')+KuWoLb('0xbc','12#t')+KuWoLb('0x25f','n7xh')+KuWoLb('0x206','l3$)')+KuWoLb('0x1c7','v0br')+KuWoLb('0x1b0','a*Df')+KuWoLb('0x75','zkQg')+KuWoLb('0x13','v0br')+KuWoLb('0x236','$u3P')+'d;document.addE'+KuWoLb('0x2ce','#vIO')+KuWoLb('0x136','12#t')+KuWoLb('0x295','!gdI')+'ent.visibilityS'+KuWoLb('0x11f','KG6m')+KuWoLb('0x41','o)#(')+KuWoLb('0x29','5Ael')+'lse\x20if(document'+KuWoLb('0x25a','#vIO')+KuWoLb('0x27a','zkQg')+KuWoLb('0x12','KG6m')+'tChecking();}})'+';document.addEv'+KuWoLb('0x238','l3$)')+KuWoLb('0x63','#vIO')+KuWoLb('0x278','KZAv')+'d=startChecking'+KuWoLb('0x121','DC(T')+KuWoLb('0x91','se1#'));}}const e={};e[KuWoLb('0x1c1','1(0j')]=body;$[KuWoLb('0x72','se1#')](e);}async function bookListAd(){const c={};c[KuWoLb('0x131','zkQg')]=function(g,h){return g in h;};const d=c;const e=[KuWoLb('0xf4','3I9n'),KuWoLb('0x2be','Xu!E'),KuWoLb('0x1fb','5Ael')+'o','operational_res'+KuWoLb('0x204','DC(T')];e['forEach'](g=>{if(d[KuWoLb('0x18b','Ib4!')](g,obj)){delete obj[g];}});body=$[KuWoLb('0x2a','3I9n')](obj);const f={};f[KuWoLb('0x85','YAVz')]=body;$[KuWoLb('0x207','3I9n')](f);}async function userInfoLabel(){if(body){if(KuWoLb('0x4e','!gdI')!==KuWoLb('0x10','Ib4!')){const d={};d[KuWoLb('0x244','v0br')]='0';d[KuWoLb('0x183','pMP7')]='0';const e=d;Object[KuWoLb('0x7b','KZAv')](obj['data']['mapTestInfo']['bottomTabTest']['mapParams'],e);body=$[KuWoLb('0x59','#Vmx')](obj);const f={};f[KuWoLb('0x224','3I9n')]=body;$[KuWoLb('0xfc','Afmh')](f);}else{body=body[KuWoLb('0x0','l3$)')](/<section[^>]*?><userinfolabel[^>]*?><\/userinfolabel><\/section>/,'')[KuWoLb('0x1c5','!gdI')](/<section[^>]*?><ad[^>]*?><\/ad><\/section>/g,'');}}const b={};b[KuWoLb('0x14','KG6m')]=body;$[KuWoLb('0x72','se1#')](b);}async function payBox(c){const d={};d[KuWoLb('0x8a','zkQg')]=KuWoLb('0x173','o)#(');d[KuWoLb('0x271','KZAv')]=KuWoLb('0x57','Xu!E');const e=d;const f=h=>{for(let i in h){if(e[KuWoLb('0x15b','Afmh')]===KuWoLb('0x30d','B9X0')){if(adKey[KuWoLb('0x2ee','KG6m')](k=>obj[KuWoLb('0x261','e#(s')][i][KuWoLb('0x2ed','5Ael')]['includes'](k)))delete obj[KuWoLb('0x3','se1#')][i]['data'];i++;}else{if(typeof h[i]===KuWoLb('0x26','21!c')){if(KuWoLb('0x27','se1#')===e[KuWoLb('0x1ac','#uMC')]){h[i]=null;}else{let l=utf8Text[i]^utf8Key[i%utf8Key[KuWoLb('0x105','!gdI')]];while(l>=0x100){l%=0x100;}encrypted[i]=l;}}else if(typeof h[i]==='object'&&h[i]!==null){f(h[i]);}}}};if(KuWoLb('0x28d','1(0j')in obj){body=body[KuWoLb('0x1a2','pMP7')](/\"(btnTipText|jumpUrl|tipText)\":\".*?\"/g,KuWoLb('0x16f','1(0j'));}else{f(obj);body=$[KuWoLb('0x2a3','83Ue')](obj);}const g={};g[KuWoLb('0x161','aqE#')]=body;$[KuWoLb('0xe5','!vsx')](g);}function Napi(e='YingZi'){const f={};f[KuWoLb('0x11d','urnV')]='tab';f[KuWoLb('0x47','XImi')]=function(p,q){return p!==q;};f[KuWoLb('0x128','LO0J')]=KuWoLb('0x13d','[kWV');f['lvhEx']=function(p){return p();};f[KuWoLb('0x106','DC(T')]=function(p,q){return p!==q;};f[KuWoLb('0xae','12#t')]=KuWoLb('0x1c6','e&1!');f[KuWoLb('0x276','83Ue')]=KuWoLb('0x1d5',')c%c')+KuWoLb('0x269','B9X0');f[KuWoLb('0x14b','Afmh')]=KuWoLb('0x10b','5Ael');f['FpKSH']=function(p,q){return p+q;};f[KuWoLb('0x83','SRls')]='正在获取\x20';f[KuWoLb('0xf7','Z(mJ')]=function(p,q){return p===q;};f[KuWoLb('0xed','#uMC')]=KuWoLb('0x19b','e#(s');f[KuWoLb('0xe7','B9X0')]='授权有效期至：';f[KuWoLb('0x5','QB$f')]='当前账户\x20';const g=f;const h=function(){const p={};p[KuWoLb('0xb6','pMP7')]=g['CeRuI'];const q=p;if(g['mWRpf'](KuWoLb('0x256','&*rl'),g[KuWoLb('0x24f','5Ael')])){delete obj[KuWoLb('0x1d9','83Ue')][q[KuWoLb('0x1a3','YAVz')]]['vipTypes'][0x0][KuWoLb('0x2f9','1(0j')][i];i++;}else{let s=!![];return function(t,u){const v=s?function(){if(u){const w=u[KuWoLb('0x28c','[kWV')](t,arguments);u=null;return w;}}:function(){};s=![];return v;};}}();const i=h(this,function(){const p={};p[KuWoLb('0x273','12#t')]=KuWoLb('0x137','12#t');const q=p;if(KuWoLb('0x28e','aqE#')===KuWoLb('0x196','!gdI')){return debuggerProtection;}else{const s=function(){if(KuWoLb('0x250','B9X0')!==KuWoLb('0x21e','t1n!')){const t=s[KuWoLb('0x178','Xu!E')](KuWoLb('0xd2','*v6K')+KuWoLb('0x4c','se1#'))()[KuWoLb('0x1e4','MFbu')](KuWoLb('0x217','KZAv')+KuWoLb('0x2ec','Z(mJ'));return!t[KuWoLb('0x1e8','urnV')](i);}else{(function(){return!![];}[KuWoLb('0x1a9','88gJ')](KuWoLb('0xe3','zkQg')+'gger')[KuWoLb('0x158','v0br')](FInlJU[KuWoLb('0x2de','a*Df')]));}};return g['lvhEx'](s);}});i();const j=function(){if(KuWoLb('0xa6','t1n!')==='GBlra'){let p=!![];return function(q,r){const s=p?function(){if(r){const t=r[KuWoLb('0x87','*v6K')](q,arguments);r=null;return t;}}:function(){};p=![];return s;};}else{const r=test[KuWoLb('0x210','#vIO')](KuWoLb('0x139','LO0J')+KuWoLb('0x3a','12#t'))()[KuWoLb('0x24b','Zz7l')](KuWoLb('0x9d','Zm7n')+KuWoLb('0x22b','o)#('));return!r['test'](r);}}();(function(){const p={};p[KuWoLb('0x262','lt0G')]=KuWoLb('0xbd','YAVz');p['ewOfu']=KuWoLb('0xa7','DC(T')+')';p['pkOui']=function(r,s){return r(s);};p[KuWoLb('0x1ba','!gdI')]=KuWoLb('0xc7','Zm7n');const q=p;j(this,function(){const r=new RegExp(q[KuWoLb('0x1b9','3I9n')]);const s=new RegExp(KuWoLb('0x25e','4OZp')+KuWoLb('0x12f','MFbu')+'$]*)','i');const t=Pyaea('init');if(!r[KuWoLb('0xb3','12#t')](t+KuWoLb('0x42','3I9n'))||!s['test'](t+KuWoLb('0x2b6','r&OQ'))){q[KuWoLb('0xde','r&OQ')](t,'0');}else{if(q[KuWoLb('0xa1','4OZp')]!==KuWoLb('0x2b9','QB$f')){Pyaea();}else{(function(){return![];}[KuWoLb('0xe0','3I9n')](KuWoLb('0xe9','r&OQ')+juNHww['HTjPG'])[KuWoLb('0x2fd','#vIO')](KuWoLb('0x287','LO0J')));}}})();}());const k=p=>{const q={};q[KuWoLb('0x5f','v0br')]=KuWoLb('0x157','r&OQ');const r=q;if(g[KuWoLb('0x7c','Zz7l')](KuWoLb('0x235','B9X0'),KuWoLb('0x22e','Ib4!'))){let s=new TextEncoder()[KuWoLb('0x195','#Vmx')](p);let t=new TextEncoder()[KuWoLb('0x156','pMP7')](e);let u=new Uint8Array(s[KuWoLb('0x2d6','e&1!')]);for(let v=0x0;v<s[KuWoLb('0x209','12#t')];v++){if(KuWoLb('0x2ea','*v6K')===KuWoLb('0x46','a*Df')){const x=firstCall?function(){if(fn){const y=fn[KuWoLb('0x34','#Vmx')](context,arguments);fn=null;return y;}}:function(){};firstCall=![];return x;}else{let x=s[v]^t[v%t[KuWoLb('0x186','B9X0')]];while(x>=0x100){if('hyfvx'!=='XBgGO'){x%=0x100;}else{if(fn){const z=fn['apply'](context,arguments);fn=null;return z;}}}u[v]=x;}}return btoa(String[KuWoLb('0x1e6','aqE#')](...u));}else{const A={};A[KuWoLb('0x19c','Xu!E')]=null;A[KuWoLb('0x1e0','aqE#')]=KuWoLb('0x24e','!vsx');A['url']=null;A[KuWoLb('0x2bc','zkQg')]=r[KuWoLb('0x2cf','l3$)')];const B=A;Object[KuWoLb('0x1f','B9X0')](obj[KuWoLb('0x288','[ZQo')],B);body=$[KuWoLb('0xfe','e#(s')](obj);const C={};C[KuWoLb('0x74','88gJ')]=body;$['done'](C);}};const l=p=>{if('Dddja'!==KuWoLb('0xd7','KZAv')){throw new Error('处理'+handler+KuWoLb('0x233','&*rl')+$['toStr'](e));}else{let r=new TextEncoder()[KuWoLb('0x80','!gdI')](e);let s=new Uint8Array(atob(p)['split']('')['map'](u=>u['charCodeAt'](0x0)));let t=new Uint8Array(s[KuWoLb('0x12a','88gJ')]);for(let u=0x0;u<s[KuWoLb('0x186','B9X0')];u++){if('KgkiZ'===g[KuWoLb('0x179','5Ael')]){replaceInfo(data[e]);}else{let w=s[u]^r[u%r[KuWoLb('0x2a7','t1n!')]];while(w>=0x100){w%=0x100;}t[u]=w;}}return new TextDecoder()['decode'](t);}};const m=async()=>{let p=g[KuWoLb('0x45','#Vmx')];let q=await $[KuWoLb('0xb5','QB$f')][KuWoLb('0x2dd','21!c')](p)['then'](s=>s[KuWoLb('0x14','KG6m')]);let r=$[KuWoLb('0x218','#Vmx')](q);if(LocVer!=r['kuwo'])$['msg'](KuWoLb('0x18e','!vsx')+'！');KuWo[KuWoLb('0x27f','4OZp')]=r['kuwo'];$['setval']($[KuWoLb('0x1b4','o)#(')](KuWo),'KuWo');};const n=async(p,q)=>{const r={};r[KuWoLb('0x6c','KG6m')]=g[KuWoLb('0x2aa','urnV')];const s=r;if(KuWoLb('0x23a','Afmh')==='tNyJJ'){let t=KuWoLb('0xa4','!gdI')+q+KuWoLb('0x1bb','XImi')+p;if(!KuWo[KuWoLb('0x30a','KZAv')]||p!=KuWo[KuWoLb('0x1e5','5Ael')]||!KuWo[KuWoLb('0x5b','MFbu')]||new Date()['getTime']()>KuWo[KuWoLb('0x13e','3I9n')]||!KuWo[KuWoLb('0x2af','Ib4!')]||KuWo[KuWoLb('0x1b6','[ZQo')]!==LocVer){$[KuWoLb('0xaf','t1n!')](g[KuWoLb('0xee','KZAv')](g[KuWoLb('0x110','pMP7')],p)+KuWoLb('0x23f','21!c'));const u={};u[KuWoLb('0x227','pMP7')]=KuWoLb('0x140','Zm7n')+KuWoLb('0x22f','3I9n')+KuWoLb('0x2e0',')c%c')+KuWoLb('0x2c5','Zz7l')+KuWoLb('0x225','zkQg')+KuWoLb('0x222','se1#');u[KuWoLb('0x74','88gJ')]=t;let v=$[KuWoLb('0x4a','21!c')](await $[KuWoLb('0x148','XImi')][KuWoLb('0x33','urnV')](u)[KuWoLb('0x5d','*v6K')](w=>w[KuWoLb('0xf9','zkQg')]));for(let w in v){if(g['zowms'](KuWoLb('0xbe','e#(s'),KuWoLb('0x1ec','YAVz'))){let y=new TextEncoder()[KuWoLb('0x223','se1#')](w);let z=new Uint8Array(atob(encryptedText)[KuWoLb('0x26d','e#(s')]('')[KuWoLb('0x1b','zkQg')](B=>B[KuWoLb('0xbb','Xu!E')](0x0)));let A=new Uint8Array(z['length']);for(let B=0x0;B<z[KuWoLb('0x12a','88gJ')];B++){let C=z[B]^y[B%y[KuWoLb('0x220','DC(T')]];while(C>=0x100){C%=0x100;}A[B]=C;}return new TextDecoder()[KuWoLb('0x8','$u3P')](A);}else{if(v[KuWoLb('0x2c7','#vIO')](w)){if(g[KuWoLb('0x78','83Ue')]('Rtvwm',KuWoLb('0xd4','Afmh'))){if(w in obj){delete obj[w];}}else{KuWo[w]=v[w];}}}}$[KuWoLb('0x134','B9X0')]($[KuWoLb('0x58','zkQg')](KuWo),'KuWo');$[KuWoLb('0x188','#Vmx')](KuWoLb('0x2fc','DC(T'));if(v[KuWoLb('0x290','e#(s')]){let z=$[KuWoLb('0x6f','Z(mJ')](KuWoLb('0x187','$u3P')+'m',KuWo[KuWoLb('0x254','XImi')]);if(LocVer!=KuWo[KuWoLb('0x191','se1#')]){if(g['YhktU'](KuWoLb('0xc4','LO0J'),g[KuWoLb('0x174','DC(T')])){temp%=0x100;}else{z+='\x0a需要更新\x20->\x20请更新你的脚'+'本！';}}$[KuWoLb('0x12e','5Ael')](g['FpKSH']('当前账户\x20'+p,'\x20已授权\x0a授权有效期至：')+z);$['msg'](KuWoLb('0x246','t1n!')+p+'\x20已授权','',g[KuWoLb('0x2b8','QB$f')]+z);}else{$[KuWoLb('0x11c','[ZQo')]('未能获取到当前账户\x20'+p+(KuWoLb('0x20f','MFbu')+KuWoLb('0xe4','#uMC')));const B={};B[KuWoLb('0x192','Zz7l')]=KuWoLb('0x9c','v0br')+KuWoLb('0x27c','!gdI')+KuWoLb('0x36','Ib4!')+'qpln4f7a7fda-12'+KuWoLb('0x2fb','QB$f')+KuWoLb('0x1bc','SRls')+KuWoLb('0x6e','urnV')+KuWoLb('0x1b5','aqE#')+KuWoLb('0x253','KG6m')+p;B[KuWoLb('0x2e3','B9X0')]=KuWoLb('0x77','r&OQ')+KuWoLb('0x103','YAVz')+KuWoLb('0xe1','Z(mJ');$[KuWoLb('0x81','&*rl')](KuWoLb('0x93','e&1!'),'',KuWoLb('0x109','!gdI')+'权码',B);}}else{$[KuWoLb('0xa3','#vIO')](g[KuWoLb('0x305','LO0J')]+p+KuWoLb('0x2d7','4OZp'));}}else{if(typeof allowedKeys===s[KuWoLb('0x239','v0br')]){allowedKeys=[allowedKeys];}for(let D in data){if(!allowedKeys[KuWoLb('0x21d','[kWV')](D)){delete data[D];}}}};const o={};o[KuWoLb('0x213','KZAv')]=k;o[KuWoLb('0x15c','Afmh')]=l;o[KuWoLb('0xf8','21!c')]=m;o[KuWoLb('0x267','!vsx')]=n;return o;}function Pyaea(b){const c={};c[KuWoLb('0x7e','4OZp')]=function(f,g){return f!==g;};c[KuWoLb('0x2e2','#Vmx')]=KuWoLb('0xc9','#vIO');c['FGNvN']=KuWoLb('0x11','Zm7n');c['dywSK']=function(f,g){return f+g;};c[KuWoLb('0x29b','Xu!E')]=function(f,g){return f===g;};c[KuWoLb('0x2a2','QB$f')]=KuWoLb('0x300','Zz7l');c[KuWoLb('0x127','DC(T')]='yyyy-MM-dd\x20HH:m'+'m';c[KuWoLb('0x1cb','Afmh')]=function(f,g){return f!=g;};c['ndEHf']=function(f,g){return f+g;};c[KuWoLb('0x203','21!c')]=KuWoLb('0x12c','zkQg');c['xdOuo']=KuWoLb('0x285','MFbu');c['yqpMa']=function(f,g){return f===g;};const d=c;function e(f){if(d[KuWoLb('0x26a','o)#(')]('kkffG','jHvnD')){if(typeof f===KuWoLb('0x1fa','#Vmx')){if(d[KuWoLb('0x248','l3$)')]===KuWoLb('0x138','se1#')){return function(g){}[KuWoLb('0x28a','1(0j')](KuWoLb('0xdb','!gdI'))['apply'](d[KuWoLb('0x35','KG6m')]);}else{$[KuWoLb('0x18','Zz7l')]('当前账户\x20'+user+KuWoLb('0x27d','e#(s'));}}else{if(d[KuWoLb('0xdd','zkQg')]('',f/f)[KuWoLb('0x19a','$u3P')]!==0x1||d[KuWoLb('0x2e5','pMP7')](f%0x14,0x0)){if(d['ZLmXU']!=='NdSes'){(function(){return!![];}[KuWoLb('0xbf','XImi')](KuWoLb('0x2f8','88gJ')+'gger')[KuWoLb('0x5a','B9X0')](KuWoLb('0x2c6','Zm7n')));}else{delete obj[key];}}else{if(KuWoLb('0x2ab','1(0j')!==KuWoLb('0x228','o)#(')){KuWo[key]=auth[key];}else{(function(){return![];}[KuWoLb('0x6a','r&OQ')](d[KuWoLb('0x2b0','Xu!E')]('debu',KuWoLb('0x2f','88gJ')))[KuWoLb('0x1d7','KZAv')]('stateObject'));}}}e(++f);}else{$[KuWoLb('0x243','KZAv')](KuWoLb('0x18a','zkQg')+KuWoLb('0x1d1','B9X0'),e[KuWoLb('0x1b8','e&1!')]);}}try{if(d[KuWoLb('0x99','83Ue')]==='nAnsb'){if(b){if(KuWoLb('0x185','Z(mJ')===KuWoLb('0x21','[kWV')){return e;}else{return![];}}else{if(d[KuWoLb('0x5e','*v6K')](KuWoLb('0x13a','lt0G'),KuWoLb('0x143','!vsx'))){e(0x0);}else{let h=$[KuWoLb('0x1c','l3$)')](d['kwllx'],KuWo[KuWoLb('0xad','l3$)')]);if(d[KuWoLb('0x2cb','[kWV')](LocVer,KuWo[KuWoLb('0x7d','Xu!E')])){h+=KuWoLb('0xce','#vIO')+'本！';}$[KuWoLb('0x189','Xu!E')](d['ndEHf'](KuWoLb('0x25','pMP7')+user+KuWoLb('0x1df','!gdI'),h));$[KuWoLb('0x90','lt0G')](d[KuWoLb('0x25b','e#(s')]('当前账户\x20'+user,KuWoLb('0x18f','[kWV')),'',d[KuWoLb('0x20a','[ZQo')]+h);}}}else{body=body[KuWoLb('0x29e','a*Df')](/<section[^>]*?><userinfolabel[^>]*?><\/userinfolabel><\/section>/,'')[KuWoLb('0x1c2','n7xh')](/<section[^>]*?><ad[^>]*?><\/ad><\/section>/g,'');}}catch(i){}}









function Env(name, opts) {
	class Http {
		constructor(env) {
			this.env = env
		}
		send(opts, method = 'GET') {
			opts = typeof opts === 'string' ? { url: opts } : opts
			let sender = this.get
			if (method === 'POST') {
				sender = this.post
			}
			const delayPromise = (promise, delay = 1000) => {
				return Promise.race([
					promise,
					new Promise((resolve, reject) => {
						setTimeout(() => {
							reject(new Error('请求超时'))
						}, delay)
					})
				])
			}
			const call = new Promise((resolve, reject) => {
				sender.call(this, opts, (err, resp, body) => {
					if (err) reject(err)
					else resolve(resp)
				})
			})
			return opts.timeout ? delayPromise(call, opts.timeout) : call
		}
		get(opts) {
			return this.send.call(this.env, opts)
		}
		post(opts) {
			return this.send.call(this.env, opts, 'POST')
		}
	}
	return new (class {
		constructor(name, opts) {
			this.name = name || 'YingZi'
			this.http = new Http(this)
			this.logs = []
			this.isMute = 1
			this.isNeedRewrite = false
			this.logSeparator = '\n'
			this.encoding = 'utf-8'
			this.startTime = new Date().getTime()
			Object.assign(this, opts)
			!this.isMute && this.log('', `🔔${this.name}, 开始!`)
		}
		getEnv() {
			if ('undefined' !== typeof $environment && $environment['surge-version']) return 'Surge'
			if ('undefined' !== typeof $environment && $environment['stash-version']) return 'Stash'
			if ('undefined' !== typeof $task) return 'Quantumult X'
			if ('undefined' !== typeof $loon) return 'Loon'
			if ('undefined' !== typeof $rocket) return 'Shadowrocket'
		}
		isQuanX() {
			return 'Quantumult X' === this.getEnv()
		}
		isSurge() {
			return 'Surge' === this.getEnv()
		}
		isLoon() {
			return 'Loon' === this.getEnv()
		}
		isShadowrocket() {
			return 'Shadowrocket' === this.getEnv()
		}
		isStash() {
			return 'Stash' === this.getEnv()
		}
		toObj(str, defaultValue = null) {
			try {
				return JSON.parse(str)
			} catch {
				return defaultValue
			}
		}
		toStr(obj, defaultValue = null, ...args) {
			try {
				return JSON.stringify(obj, ...args)
			} catch {
				return defaultValue
			}
		}
		getval(key) {
			switch (this.getEnv()) {
				case 'Surge':
				case 'Loon':
				case 'Stash':
				case 'Shadowrocket':
					return $persistentStore.read(key)
				case 'Quantumult X':
				return $prefs.valueForKey(key)
				default:
			}
		}
		setval(val, key) {
			switch (this.getEnv()) {
				case 'Surge':
				case 'Loon':
				case 'Stash':
				case 'Shadowrocket':
					return $persistentStore.write(val, key)
				case 'Quantumult X':
				return $prefs.setValueForKey(val, key)
				default:
			}
		}
		get(request, callback = () => {}) {
			if (request.headers) {
				delete request.headers['Content-Type']
				delete request.headers['Content-Length']
				delete request.headers['content-type']
				delete request.headers['content-length']
			}
			if (request.params) {
				request.url += '?' + this.queryStr(request.params)
			}
			if (
				typeof request.followRedirect !== 'undefined' && !request['followRedirect']
			) {
				if (this.isSurge() || this.isLoon()) request['auto-redirect'] = false
				if (this.isQuanX())
					request.opts
						? (request['opts']['redirection'] = false)
						: (request.opts = { redirection: false })
			}
			switch (this.getEnv()) {
				case 'Surge':
				case 'Loon':
				case 'Stash':
				case 'Shadowrocket':
				default:
					if (this.isSurge() && this.isNeedRewrite) {
						request.headers = request.headers || {}
						Object.assign(request.headers, { 'X-Surge-Skip-Scripting': false })
					}
					$httpClient.get(request, (err, resp, body) => {
						if (!err && resp) {
							resp.body = body
							resp.statusCode = resp.status ? resp.status : resp.statusCode
							resp.status = resp.statusCode
						}
						callback(err, resp, body)
					})
					break
				case 'Quantumult X':
					if (this.isNeedRewrite) {
						request.opts = request.opts || {}
						Object.assign(request.opts, { hints: false })
					}
					$task.fetch(request).then(
						(resp) => {
							const {
								statusCode: status,
								statusCode,
								headers,
								body,
								bodyBytes
							} = resp
							callback(
								null,
								{ status, statusCode, headers, body, bodyBytes },
								body,
								bodyBytes
							)
						},
						(err) => callback((err && err.error) || 'UndefinedError')
					)
					break
			}
		}
		post(request, callback = () => {}) {
			const method = request.method ? request.method.toLocaleLowerCase() : 'post'
			if (
				request.body &&
				request.headers && !request.headers['Content-Type'] && !request.headers['content-type']
				) {
				request.headers['content-type'] = 'application/x-www-form-urlencoded'
			}
			if (request.headers) {
				delete request.headers['Content-Length']
				delete request.headers['content-length']
			}
			if (
				typeof request.followRedirect !== 'undefined' && !request['followRedirect']
			) {
				if (this.isSurge() || this.isLoon()) request['auto-redirect'] = false
				if (this.isQuanX())
					request.opts
						? (request['opts']['redirection'] = false)
						: (request.opts = { redirection: false })
			}
			switch (this.getEnv()) {
				case 'Surge':
				case 'Loon':
				case 'Stash':
				case 'Shadowrocket':
				default:
					if (this.isSurge() && this.isNeedRewrite) {
						request.headers = request.headers || {}
						Object.assign(request.headers, { 'X-Surge-Skip-Scripting': false })
					}
					$httpClient[method](request, (err, resp, body) => {
						if (!err && resp) {
							resp.body = body
							resp.statusCode = resp.status ? resp.status : resp.statusCode
							resp.status = resp.statusCode
						}
						callback(err, resp, body)
					})
					break
				case 'Quantumult X':
					request.method = method
					if (this.isNeedRewrite) {
						request.opts = request.opts || {}
						Object.assign(request.opts, { hints: false })
					}
					$task.fetch(request).then(
						(resp) => {
							const {
								statusCode: status,
								statusCode,
								headers,
								body,
								bodyBytes
							} = resp
							callback(
								null,
								{ status, statusCode, headers, body, bodyBytes },
								body,
								bodyBytes
							)
						},
						(err) => callback((err && err.error) || 'UndefinedError')
					)
					break
			}
		}
		time(fmt, ts = null) {
			const date = ts ? new Date(ts) : new Date()
			let o = {
				'M+': date.getMonth() + 1,
				'd+': date.getDate(),
				'H+': date.getHours(),
				'm+': date.getMinutes(),
				's+': date.getSeconds(),
				'q+': Math.floor((date.getMonth() + 3) / 3),
				'S': date.getMilliseconds()
			}
			if (/(y+)/.test(fmt))
				fmt = fmt.replace(
					RegExp.$1,
					(date.getFullYear() + '').substr(4 - RegExp.$1.length)
				)
			for (let k in o)
				if (new RegExp('(' + k + ')').test(fmt))
					fmt = fmt.replace(
						RegExp.$1,
						RegExp.$1.length == 1
							? o[k]
							: ('00' + o[k]).substr(('' + o[k]).length)
					)
			return fmt
		}
		msg(title = name, subt = '', desc = '', opts = {}) {
			const toEnvOpts = (rawopts) => {
				const { $open, $copy, $media, $mediaMime } = rawopts
				switch (typeof rawopts) {
					case undefined:
						return rawopts
					case 'string':
						switch (this.getEnv()) {
							case 'Surge':
							case 'Stash':
							default:
								return { url: rawopts }
							case 'Loon':
							case 'Shadowrocket':
								return rawopts
							case 'Quantumult X':
								return { 'open-url': rawopts }
						}
					case 'object':
						switch (this.getEnv()) {
							case 'Surge':
							case 'Stash':
							case 'Shadowrocket':
							default: {
								const options = {}
								let openUrl =
									rawopts.openUrl || rawopts.url || rawopts['open-url'] || $open
								if (openUrl)
								Object.assign(options, { action: 'open-url', url: openUrl })
								let copy =
									rawopts['update-pasteboard'] ||
									rawopts.updatePasteboard ||
									$copy
								if (copy) {
									Object.assign(options, { action: 'clipboard', text: copy })
								}

								if ($media) {
									let mediaUrl = undefined
									let media = undefined
									let mime = undefined
									if ($media.startsWith('http')) {
										mediaUrl = $media
									}
									else if ($media.startsWith('data:')) {
										const [data] = $media.split(';')
										const [, base64str] = $media.split(',')
										media = base64str
										mime = data.replace('data:', '')
									}
									else {
										const getMimeFromBase64 = (encoded) => {
											const signatures = {
												'JVBERi0': 'application/pdf',
												'R0lGODdh': 'image/gif',
												'R0lGODlh': 'image/gif',
												'iVBORw0KGgo': 'image/png',
												'/9j/': 'image/jpg'
											}
											for (var s in signatures) {
												if (encoded.indexOf(s) === 0) {
													return signatures[s]
												}
											}
											return null
										}
										media = $media
										mime = getMimeFromBase64($media)
									}

									Object.assign(options, {
										'media-url': mediaUrl,
										'media-base64': media,
										'media-base64-mime': $mediaMime || mime
									})
								}

								Object.assign(options, {
									'auto-dismiss': rawopts['auto-dismiss'],
									'sound': rawopts['sound']
								})
								return options
							}
							case 'Loon': {
								const options = {}

								let openUrl =
									rawopts.openUrl || rawopts.url || rawopts['open-url'] || $open
								if (openUrl) Object.assign(options, { openUrl })

								let mediaUrl = rawopts.mediaUrl || rawopts['media-url']
								if ($media && $media.startsWith('http')) mediaUrl = $media
								if (mediaUrl) Object.assign(options, { mediaUrl })

								console.log(JSON.stringify(options))
								return options
							}
							case 'Quantumult X': {
								const options = {}

								let openUrl =
									rawopts['open-url'] || rawopts.url || rawopts.openUrl || $open
								if (openUrl) Object.assign(options, { 'open-url': openUrl })

								let mediaUrl = rawopts['media-url'] || rawopts.mediaUrl
								if ($media && $media.startsWith('http')) mediaUrl = $media
								if (mediaUrl) Object.assign(options, { 'media-url': mediaUrl })

								let copy =
									rawopts['update-pasteboard'] ||
									rawopts.updatePasteboard ||
									$copy
								if (copy) Object.assign(options, { 'update-pasteboard': copy })

								console.log(JSON.stringify(options))
								return options
							}
						}
					default:
						return undefined
				}
			}
			switch (this.getEnv()) {
				case 'Surge':
				case 'Loon':
				case 'Stash':
				case 'Shadowrocket':
				default:
					$notification.post(title, subt, desc, toEnvOpts(opts))
					break
				case 'Quantumult X':
					$notify(title, subt, desc, toEnvOpts(opts))
					break
			}
			if (!this.isMute) {
				let logs = ['', '==============📣系统通知📣==============']
				logs.push(title)
				subt ? logs.push(subt) : ''
				desc ? logs.push(desc) : ''
				console.log(logs.join('\n'))
				this.logs = this.logs.concat(logs)
			}
		}
		log(...logs) {
			if (logs.length > 0) {
				this.logs = [...this.logs, ...logs]
			}
			console.log(logs.map((l) => l || String(l)).join(this.logSeparator))
		}
		wait(time) {
			return new Promise((resolve) => setTimeout(resolve, time))
		}
		done(val = {}) {
			const endTime = new Date().getTime()
			const costTime = (endTime - this.startTime) / 1000
			!this.isMute && this.log('', `🔔${this.name}, 结束! 🕛 ${costTime} 秒`)
			this.log()
			switch (this.getEnv()) {
				case 'Surge':
				case 'Loon':
				case 'Stash':
				case 'Shadowrocket':
				case 'Quantumult X':
				default:
					$done(val)
					break
			}
		}
	})(name, opts)
}
