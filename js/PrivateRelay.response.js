class t{constructor(){this.name="Lodash",this.version="1.0.0",console.log(`\n${this.name} v${this.version}\n`)}get(t={},e="",s=void 0){Array.isArray(e)||(e=this.toPath(e));const a=e.reduce(((t,e)=>Object(t)[e]),t);return void 0===a?s:a}set(t={},e="",s){return Array.isArray(e)||(e=this.toPath(e)),e.slice(0,-1).reduce(((t,s,a)=>Object(t[s])===t[s]?t[s]:t[s]=/^\d+$/.test(e[a+1])?[]:{}),t)[e[e.length-1]]=s,t}toPath(t){return t.replace(/\[(\d+)\]/g,".$1").split(".").filter(Boolean)}}var e={Switch:!0},s={Storefront:[["AE","143481"],["AF","143610"],["AG","143540"],["AI","143538"],["AL","143575"],["AM","143524"],["AO","143564"],["AR","143505"],["AT","143445"],["AU","143460"],["AZ","143568"],["BA","143612"],["BB","143541"],["BD","143490"],["BE","143446"],["BF","143578"],["BG","143526"],["BH","143559"],["BJ","143576"],["BM","143542"],["BN","143560"],["BO","143556"],["BR","143503"],["BS","143539"],["BT","143577"],["BW","143525"],["BY","143565"],["BZ","143555"],["CA","143455"],["CD","143613"],["CG","143582"],["CH","143459"],["CI","143527"],["CL","143483"],["CM","143574"],["CN","143465"],["CO","143501"],["CR","143495"],["CV","143580"],["CY","143557"],["CZ","143489"],["DE","143443"],["DK","143458"],["DM","143545"],["DO","143508"],["DZ","143563"],["EC","143509"],["EE","143518"],["EG","143516"],["ES","143454"],["FI","143447"],["FJ","143583"],["FM","143591"],["FR","143442"],["GA","143614"],["GB","143444"],["GD","143546"],["GF","143615"],["GH","143573"],["GM","143584"],["GR","143448"],["GT","143504"],["GW","143585"],["GY","143553"],["HK","143463"],["HN","143510"],["HR","143494"],["HU","143482"],["ID","143476"],["IE","143449"],["IL","143491"],["IN","143467"],["IQ","143617"],["IS","143558"],["IT","143450"],["JM","143511"],["JO","143528"],["JP","143462"],["KE","143529"],["KG","143586"],["KH","143579"],["KN","143548"],["KP","143466"],["KR","143466"],["KW","143493"],["KY","143544"],["KZ","143517"],["TC","143552"],["TD","143581"],["TJ","143603"],["TH","143475"],["TM","143604"],["TN","143536"],["TO","143608"],["TR","143480"],["TT","143551"],["TW","143470"],["TZ","143572"],["LA","143587"],["LB","143497"],["LC","143549"],["LI","143522"],["LK","143486"],["LR","143588"],["LT","143520"],["LU","143451"],["LV","143519"],["LY","143567"],["MA","143620"],["MD","143523"],["ME","143619"],["MG","143531"],["MK","143530"],["ML","143532"],["MM","143570"],["MN","143592"],["MO","143515"],["MR","143590"],["MS","143547"],["MT","143521"],["MU","143533"],["MV","143488"],["MW","143589"],["MX","143468"],["MY","143473"],["MZ","143593"],["NA","143594"],["NE","143534"],["NG","143561"],["NI","143512"],["NL","143452"],["NO","143457"],["NP","143484"],["NR","143606"],["NZ","143461"],["OM","143562"],["PA","143485"],["PE","143507"],["PG","143597"],["PH","143474"],["PK","143477"],["PL","143478"],["PT","143453"],["PW","143595"],["PY","143513"],["QA","143498"],["RO","143487"],["RS","143500"],["RU","143469"],["RW","143621"],["SA","143479"],["SB","143601"],["SC","143599"],["SE","143456"],["SG","143464"],["SI","143499"],["SK","143496"],["SL","143600"],["SN","143535"],["SR","143554"],["ST","143598"],["SV","143506"],["SZ","143602"],["UA","143492"],["UG","143537"],["US","143441"],["UY","143514"],["UZ","143566"],["VC","143550"],["VE","143502"],["VG","143543"],["VN","143471"],["VU","143609"],["XK","143624"],["YE","143571"],["ZA","143472"],["ZM","143622"],["ZW","143605"]]},a={Settings:e,Configs:s},i={Switch:!0,PEP:{GCC:"US"},Services:{PlaceData:"CN",Directions:"AUTO",Traffic:"AUTO",RAP:"XX",Tiles:"AUTO"},Geo_manifest:{Dynamic:{Config:{Country_code:{default:"AUTO",iOS:"CN",iPadOS:"CN",watchOS:"US",macOS:"CN"}}}},Config:{Announcements:{"Environment:":{default:"AUTO",iOS:"CN",iPadOS:"CN",watchOS:"XX",macOS:"CN"}},Defaults:{LagunaBeach:!0,DrivingMultiWaypointRoutesEnabled:!0,GEOAddressCorrection:!0,LookupMaxParametersCount:!0,LocalitiesAndLandmarks:!0,POIBusyness:!0,PedestrianAR:!0,"6694982d2b14e95815e44e970235e230":!0,OpticalHeading:!0,UseCLPedestrianMapMatchedLocations:!0,TransitPayEnabled:!0,SupportsOffline:!0,SupportsCarIntegration:!0,WiFiQualityNetworkDisabled:!1,WiFiQualityTileDisabled:!1}}},o={Settings:i},n={Switch:!0,CountryCode:"US",newsPlusUser:!0},r={Settings:n},l={Switch:!0,CountryCode:"US",canUse:!0},h={Settings:l},c={Switch:!0,CountryCode:"SG",Domains:["web","itunes","app_store","movies","restaurants","maps"],Functions:["flightutilities","lookup","mail","messages","news","safari","siri","spotlight","visualintelligence"],Safari_Smart_History:!0},p={VisualIntelligence:{enabled_domains:["pets","media","books","art","nature","landmarks"],supported_domains:["ART","BOOK","MEDIA","LANDMARK","ANIMALS","BIRDS","FOOD","SIGN_SYMBOL","AUTO_SYMBOL","DOGS","NATURE","NATURAL_LANDMARK","INSECTS","REPTILES","ALBUM","STOREFRONT","LAUNDRY_CARE_SYMBOL","CATS","OBJECT_2D","SCULPTURE","SKYLINE","MAMMALS"]}},u={Settings:c,Configs:p},d={Switch:"true",CountryCode:"US",MultiAccount:"false",Universal:"true"},g={Settings:d},m={Switch:!0,"Third-Party":!1,HLSUrl:"play-edge.itunes.apple.com",ServerUrl:"play.itunes.apple.com",Tabs:["WatchNow","Originals","MLS","Sports","Kids","Store","Movies","TV","ChannelsAndApps","Library","Search"],CountryCode:{Configs:"AUTO",Settings:"AUTO",View:["SG","TW"],WatchNow:"AUTO",Channels:"AUTO",Originals:"AUTO",Sports:"US",Kids:"US",Store:"AUTO",Movies:"AUTO",TV:"AUTO",Persons:"SG",Search:"AUTO",Others:"AUTO"}},y={Locale:[["AU","en-AU"],["CA","en-CA"],["GB","en-GB"],["KR","ko-KR"],["HK","yue-Hant"],["JP","ja-JP"],["MO","zh-Hant"],["TW","zh-Hant"],["US","en-US"],["SG","zh-Hans"]],Tabs:[{title:"主页",type:"WatchNow",universalLinks:["https://tv.apple.com/watch-now","https://tv.apple.com/home"],destinationType:"Target",target:{id:"tahoma_watchnow",type:"Root",url:"https://tv.apple.com/watch-now"},isSelected:!0},{title:"Apple TV+",type:"Originals",universalLinks:["https://tv.apple.com/channel/tvs.sbd.4000","https://tv.apple.com/atv"],destinationType:"Target",target:{id:"tvs.sbd.4000",type:"Brand",url:"https://tv.apple.com/us/channel/tvs.sbd.4000"}},{title:"MLS Season Pass",type:"MLS",universalLinks:["https://tv.apple.com/mls"],destinationType:"Target",target:{id:"tvs.sbd.7000",type:"Brand",url:"https://tv.apple.com/us/channel/tvs.sbd.7000"}},{title:"体育节目",type:"Sports",universalLinks:["https://tv.apple.com/sports"],destinationType:"Target",target:{id:"tahoma_sports",type:"Root",url:"https://tv.apple.com/sports"}},{title:"儿童",type:"Kids",universalLinks:["https://tv.apple.com/kids"],destinationType:"Target",target:{id:"tahoma_kids",type:"Root",url:"https://tv.apple.com/kids"}},{title:"电影",type:"Movies",universalLinks:["https://tv.apple.com/movies"],destinationType:"Target",target:{id:"tahoma_movies",type:"Root",url:"https://tv.apple.com/movies"}},{title:"电视节目",type:"TV",universalLinks:["https://tv.apple.com/tv-shows"],destinationType:"Target",target:{id:"tahoma_tvshows",type:"Root",url:"https://tv.apple.com/tv-shows"}},{title:"商店",type:"Store",universalLinks:["https://tv.apple.com/store"],destinationType:"SubTabs",subTabs:[{title:"电影",type:"Movies",universalLinks:["https://tv.apple.com/movies"],destinationType:"Target",target:{id:"tahoma_movies",type:"Root",url:"https://tv.apple.com/movies"}},{title:"电视节目",type:"TV",universalLinks:["https://tv.apple.com/tv-shows"],destinationType:"Target",target:{id:"tahoma_tvshows",type:"Root",url:"https://tv.apple.com/tv-shows"}}]},{title:"频道和 App",destinationType:"SubTabs",subTabsPlacementType:"ExpandedList",type:"ChannelsAndApps",subTabs:[]},{title:"资料库",type:"Library",destinationType:"Client"},{title:"搜索",type:"Search",universalLinks:["https://tv.apple.com/search"],destinationType:"Target",target:{id:"tahoma_search",type:"Root",url:"https://tv.apple.com/search"}}],i18n:{WatchNow:[["en","Home"],["zh","主页"],["zh-Hans","主頁"],["zh-Hant","主頁"]],Movies:[["en","Movies"],["zh","电影"],["zh-Hans","电影"],["zh-Hant","電影"]],TV:[["en","TV"],["zh","电视节目"],["zh-Hans","电视节目"],["zh-Hant","電視節目"]],Store:[["en","Store"],["zh","商店"],["zh-Hans","商店"],["zh-Hant","商店"]],Sports:[["en","Sports"],["zh","体育节目"],["zh-Hans","体育节目"],["zh-Hant","體育節目"]],Kids:[["en","Kids"],["zh","儿童"],["zh-Hans","儿童"],["zh-Hant","兒童"]],Library:[["en","Library"],["zh","资料库"],["zh-Hans","资料库"],["zh-Hant","資料庫"]],Search:[["en","Search"],["zh","搜索"],["zh-Hans","搜索"],["zh-Hant","蒐索"]]}},S={Settings:m,Configs:y},f=Database={Default:Object.freeze({__proto__:null,Configs:s,Settings:e,default:a}),Location:Object.freeze({__proto__:null,Settings:i,default:o}),News:Object.freeze({__proto__:null,Settings:n,default:r}),PrivateRelay:Object.freeze({__proto__:null,Settings:l,default:h}),Siri:Object.freeze({__proto__:null,Configs:p,Settings:c,default:u}),TestFlight:Object.freeze({__proto__:null,Settings:d,default:g}),TV:Object.freeze({__proto__:null,Configs:y,Settings:m,default:S})};const v=new class{constructor(e,s){this.name=e,this.version="1.4.0",this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,s),this.log("","🚩 开始!",`ENV v${this.version}`,""),this.lodash=new t(this.name),this.log("",this.name,"")}platform(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":void 0}isNode(){return"Node.js"===this.platform()}isQuanX(){return"Quantumult X"===this.platform()}isSurge(){return"Surge"===this.platform()}isLoon(){return"Loon"===this.platform()}isShadowrocket(){return"Shadowrocket"===this.platform()}isStash(){return"Stash"===this.platform()}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;if(this.getdata(t))try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise((e=>{this.get({url:t},((t,s,a)=>e(a)))}))}runScript(t,e){return new Promise((s=>{let a=this.getdata("@chavy_boxjs_userCfgs.httpapi");a=a?a.replace(/\n/g,"").trim():a;let i=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");i=i?1*i:20,i=e&&e.timeout?e.timeout:i;const[o,n]=a.split("@"),r={url:`http://${n}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:i},headers:{"X-Key":o,Accept:"*/*"},timeout:i};this.post(r,((t,e,a)=>s(a)))})).catch((t=>this.logErr(t)))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),a=!s&&this.fs.existsSync(e);if(!s&&!a)return{};{const a=s?t:e;try{return JSON.parse(this.fs.readFileSync(a))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),a=!s&&this.fs.existsSync(e),i=JSON.stringify(this.data);s?this.fs.writeFileSync(t,i):a?this.fs.writeFileSync(e,i):this.fs.writeFileSync(t,i)}}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,a]=/^@(.*?)\.(.*?)$/.exec(t),i=s?this.getval(s):"";if(i)try{const t=JSON.parse(i);e=t?this.lodash.get(t,a,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,a,i]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(a),n=a?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(n);this.lodash.set(e,i,t),s=this.setval(JSON.stringify(e),a)}catch(e){const o={};this.lodash.set(o,i,t),s=this.setval(JSON.stringify(o),a)}}else s=this.setval(t,e);return s}getval(t){switch(this.platform()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.read(t);case"Quantumult X":return $prefs.valueForKey(t);case"Node.js":return this.data=this.loaddata(),this.data[t];default:return this.data&&this.data[t]||null}}setval(t,e){switch(this.platform()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.write(t,e);case"Quantumult X":return $prefs.setValueForKey(t,e);case"Node.js":return this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0;default:return this.data&&this.data[e]||null}}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}async fetch(t={}||"",e={}){switch(t.constructor){case Object:t={...t,...e};break;case String:t={url:t,...e}}t.method||(t.method="GET",(t.body??t.bodyBytes)&&(t.method="POST")),delete t.headers?.["Content-Length"],delete t.headers?.["content-length"];const s=t.method.toLocaleLowerCase();switch(this.platform()){case"Loon":case"Surge":case"Stash":case"Shadowrocket":default:return delete t.id,t.policy&&(this.isLoon()&&(t.node=t.policy),this.isStash()&&this.lodash.set(t,"headers.X-Stash-Selected-Proxy",encodeURI(t.policy))),ArrayBuffer.isView(t.body)&&(t["binary-mode"]=!0),await new Promise(((e,a)=>{$httpClient[s](t,((s,i,o)=>{s?a(s):(i.ok=/^2\d\d$/.test(i.status),i.statusCode=i.status,o&&(i.body=o,1==t["binary-mode"]&&(i.bodyBytes=o)),e(i))}))}));case"Quantumult X":switch(delete t.scheme,delete t.sessionIndex,delete t.charset,t.policy&&this.lodash.set(t,"opts.policy",t.policy),(t?.headers?.["Content-Type"]??t?.headers?.["content-type"])?.split(";")?.[0]){default:delete t.bodyBytes;break;case"application/protobuf":case"application/x-protobuf":case"application/vnd.google.protobuf":case"application/grpc":case"application/grpc+proto":case"application/octet-stream":delete t.body,ArrayBuffer.isView(t.bodyBytes)&&(t.bodyBytes=t.bodyBytes.buffer.slice(t.bodyBytes.byteOffset,t.bodyBytes.byteLength+t.bodyBytes.byteOffset));case void 0:}return await $task.fetch(t).then((t=>(t.ok=/^2\d\d$/.test(t.statusCode),t.status=t.statusCode,t)),(t=>Promise.reject(t.error)));case"Node.js":let e=require("iconv-lite");this.initGotEnv(t);const{url:a,...i}=t;return await this.got[s](a,i).on("redirect",((t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}})).then((t=>(t.statusCode=t.status,t.body=e.decode(t.rawBody,this.encoding),t.bodyBytes=t.rawBody,t)),(t=>Promise.reject(t.message)))}}time(t,e=null){const s=e?new Date(e):new Date;let a={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in a)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?a[e]:("00"+a[e]).substr((""+a[e]).length)));return t}msg(t=name,e="",s="",a){const i=t=>{switch(typeof t){case void 0:return t;case"string":switch(this.platform()){case"Surge":case"Stash":default:return{url:t};case"Loon":case"Shadowrocket":return t;case"Quantumult X":return{"open-url":t};case"Node.js":return}case"object":switch(this.platform()){case"Surge":case"Stash":case"Shadowrocket":default:return{url:t.url||t.openUrl||t["open-url"]};case"Loon":return{openUrl:t.openUrl||t.url||t["open-url"],mediaUrl:t.mediaUrl||t["media-url"]};case"Quantumult X":return{"open-url":t["open-url"]||t.url||t.openUrl,"media-url":t["media-url"]||t.mediaUrl,"update-pasteboard":t["update-pasteboard"]||t.updatePasteboard};case"Node.js":return}default:return}};if(!this.isMute)switch(this.platform()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:$notification.post(t,e,s,i(a));break;case"Quantumult X":$notify(t,e,s,i(a));case"Node.js":}if(!this.isMuteLog){let a=["","==============📣系统通知📣=============="];a.push(t),e&&a.push(e),s&&a.push(s),console.log(a.join("\n")),this.logs=this.logs.concat(a)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t){switch(this.platform()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:this.log("",`❗️ ${this.name}, 错误!`,t);break;case"Node.js":this.log("",`❗️${this.name}, 错误!`,t.stack)}}wait(t){return new Promise((e=>setTimeout(e,t)))}done(t={}){const e=((new Date).getTime()-this.startTime)/1e3;switch(this.log("",`🚩 ${this.name}, 结束! 🕛 ${e} 秒`),this.log(),this.platform()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:$done(t);break;case"Node.js":process.exit(1)}}getENV(t,e,s){let a=this.getjson(t,s),i={};if("undefined"!=typeof $argument&&Boolean($argument)){let t=Object.fromEntries($argument.split("&").map((t=>t.split("=").map((t=>t.replace(/\"/g,""))))));for(let e in t)this.lodash.set(i,e,t[e])}const o={Settings:s?.Default?.Settings||{},Configs:s?.Default?.Configs||{},Caches:{}};Array.isArray(e)||(e=[e]);for(let t of e)o.Settings={...o.Settings,...s?.[t]?.Settings,...i,...a?.[t]?.Settings},o.Configs={...o.Configs,...s?.[t]?.Configs},a?.[t]?.Caches&&"string"==typeof a?.[t]?.Caches&&(a[t].Caches=JSON.parse(a?.[t]?.Caches)),o.Caches={...o.Caches,...a?.[t]?.Caches};return this.traverseObject(o.Settings,((t,e)=>("true"===e||"false"===e?e=JSON.parse(e):"string"==typeof e&&(e=e.includes(",")?e.split(",").map((t=>this.string2number(t))):this.string2number(e)),e))),o}traverseObject(t,e){for(var s in t){var a=t[s];t[s]="object"==typeof a&&null!==a?this.traverseObject(a,e):e(s,a)}return t}string2number(t){return t&&!isNaN(t)&&(t=parseInt(t,10)),t}}(" iRingo: ☁️ iCloud Private Relay v1.0.3(3) response"),b=(new class{constructor(t=[]){this.name="URI v1.2.6",this.opts=t,this.json={scheme:"",host:"",path:"",query:{}}}parse(t){let e=t.match(/(?:(?<scheme>.+):\/\/(?<host>[^/]+))?\/?(?<path>[^?]+)?\??(?<query>[^?]+)?/)?.groups??null;if(e?.path?e.paths=e.path.split("/"):e.path="",e?.paths){const t=e.paths[e.paths.length-1];if(t?.includes(".")){const s=t.split(".");e.format=s[s.length-1]}}return e?.query&&(e.query=Object.fromEntries(e.query.split("&").map((t=>t.split("="))))),e}stringify(t=this.json){let e="";return t?.scheme&&t?.host&&(e+=t.scheme+"://"+t.host),t?.path&&(e+=t?.host?"/"+t.path:t.path),t?.query&&(e+="?"+Object.entries(t.query).map((t=>t.join("="))).join("&")),e}}).parse($request.url);v.log(`⚠ ${v.name}`,`URL: ${JSON.stringify(b)}`,"");const T=$request.method;b.host;const C=b.path;b.paths,v.log(`⚠ ${v.name}`,`METHOD: ${T}`,"");const $=($response.headers?.["Content-Type"]??$response.headers?.["content-type"])?.split(";")?.[0];v.log(`⚠ ${v.name}`,`FORMAT: ${$}`,""),(async()=>{const{Settings:t,Caches:e={},Configs:s}=await function(t,e,s,a){console.log("☑️ Set Environment Variables","");let{Settings:i,Caches:o,Configs:n}=t.getENV(e,s,a);if(i?.Tabs&&!Array.isArray(i?.Tabs)&&t.lodash_set(i,"Tabs",i?.Tabs?[i.Tabs.toString()]:[]),i?.Domains&&!Array.isArray(i?.Domains)&&t.lodash_set(i,"Domains",i?.Domains?[i.Domains.toString()]:[]),i?.Functions&&!Array.isArray(i?.Functions)&&t.lodash_set(i,"Functions",i?.Functions?[i.Functions.toString()]:[]),console.log(`✅ Set Environment Variables, Settings: ${typeof i}, Settings内容: ${JSON.stringify(i)}`,""),n.Storefront=new Map(n.Storefront),n.Locale&&(n.Locale=new Map(n.Locale)),n.i18n)for(let t in n.i18n)n.i18n[t]=new Map(n.i18n[t]);return{Settings:i,Caches:o,Configs:n}}(v,"iRingo","PrivateRelay",f);switch(t.Switch){case!0:default:if("v1/fetchAuthTokens"===C);else/\/accounts\//i.test(C)?(v.log(`🚧 ${v.name}, accounts`,""),/\/subscriptions\/features/i.test(C)&&(v.log(`🚧 ${v.name}, /subscriptions/features`,""),$request.headers["X-MMe-Country"]=t.CountryCode,/\/features$/i.test(C)?v.log(`🚧 ${v.name}, /features`,""):/\/networking\.privacy\.subscriber$/i.test(C)?v.log(`🚧 ${v.name}, /networking.privacy.subscriber`,""):/\/networking\.privacy\.attestation$/i.test(C)?v.log(`🚧 ${v.name}, /networking.privacy.attestation`,""):/\/mail\.hide-my-email\.create$/i.test(C)?v.log(`🚧 ${v.name}, /mail.hide-my-email.create`,""):/\/mail\.custom-domains\.transfer$/i.test(C)?v.log(`🚧 ${v.name}, /mail.custom-domains.transfer`,""):v.log(`🚧 ${v.name}, unknown`,""))):/\/devices\//i.test(C)&&(v.log(`🚧 ${v.name}, devices`,""),/\/subscriptions\/features/i.test(C)&&(v.log(`🚧 ${v.name}, /subscriptions/features`,""),$request.headers["X-MMe-Country"]=t.CountryCode,/\/features$/i.test(C)?v.log(`🚧 ${v.name}, /features`,""):/\/networking\.privacy\.subscriber$/i.test(C)?v.log(`🚧 ${v.name}, /networking.privacy.subscriber`,""):/\/networking\.privacy\.attestation$/i.test(C)?v.log(`🚧 ${v.name}, /networking.privacy.attestation`,""):/\/mail\.hide-my-email\.create$/i.test(C)?v.log(`🚧 ${v.name}, /mail.hide-my-email.create`,""):/\/mail\.custom-domains\.transfer$/i.test(C)?v.log(`🚧 ${v.name}, /mail.custom-domains.transfer`,""):v.log(`🚧 ${v.name}, unknown`,"")));v.log(`🚧 ${v.name}, Private Relay`,`$response.body = ${$response.body}`,"");case!1:}})().catch((t=>v.logErr(t))).finally((()=>{if(void 0!==$response)if(v.log(`🎉 ${v.name}, finally`,"$response",`FORMAT: ${$}`,""),$response?.headers?.["Content-Encoding"]&&($response.headers["Content-Encoding"]="identity"),$response?.headers?.["content-encoding"]&&($response.headers["content-encoding"]="identity"),v.isQuanX())switch($){case void 0:v.done({status:$response.status,headers:$response.headers});break;default:v.done({status:$response.status,headers:$response.headers,body:$response.body});break;case"application/protobuf":case"application/x-protobuf":case"application/vnd.google.protobuf":case"application/grpc":case"application/grpc+proto":case"applecation/octet-stream":v.done({status:$response.status,headers:$response.headers,bodyBytes:$response.bodyBytes.buffer.slice($response.bodyBytes.byteOffset,$response.bodyBytes.byteLength+$response.bodyBytes.byteOffset)})}else v.done($response)}));