!function(){function e(){this.init()}function t(e){return 3==e.type&&14==e.body.type||(1!=e.type||4!=e.body.type||1!=e.body.templateId)&&(!!([1,3,12].indexOf(e.body.type)>-1&&function(){return(3!=e.type||4==e.body.type)&&(4!=e.type||12!=e.body.type)}()||function(){var t=e.body,o=e.body.type;return 3==e.type&&14==o||3==e.type&&1==o&&1==t.templateId}())||(!(3!=e.type||4!=e.body.type||!e.body.action)||(1==e.type&&2==e.body.type&&1==e.body.templateId||(1==e.type||(14==e.body.type||3==e.type&&1==e.body.type)))))}function o(e){return 3==e.type&&1==e.body.type&&5==e.body.templateId}Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){if(null==this)throw new TypeError("Array.prototype.indexOf() - can't convert `"+this+"` to object");var o=isFinite(t)?Math.floor(t):0,s=this instanceof Object?this:new Object(this),n=isFinite(s.length)?Math.floor(s.length):0;if(o>=n)return-1;if(o<0&&(o=Math.max(n+o,0)),void 0===e){do{if(o in s&&void 0===s[o])return o}while(++o<n)}else do{if(s[o]===e)return o}while(++o<n);return-1});var s=e.prototype;s.init=function(){if("undefined"==typeof dcodeIO||!dcodeIO.ProtoBuf)throw new Error("ProtoBuf.js is not present. Please see www/index.html for manual setup instructions.");var e=dcodeIO.ProtoBuf;s.chatProto=e.loadProtoFile("/v2/web/boss/js/module/chat.proto"),s.createMessage.init()},s.decode=function(e){return s.createMessage.build.chatProtocol.decode(e)},s.createMessage={init:function(){this.build={chatProtocol:s.chatProto.build("TechwolfChatProtocol"),message:s.chatProto.build("TechwolfMessage"),messageSync:s.chatProto.build("TechwolfMessage"),messageRead:s.chatProto.build("TechwolfMessageRead"),presence:s.chatProto.build("TechwolfPresence"),user:s.chatProto.build("TechwolfUser"),body:s.chatProto.build("TechwolfMessageBody"),clientInfo:s.chatProto.build("TechwolfClientInfo")}},model:{chatProtocol:function(e){var t=new s.createMessage.build.chatProtocol;return t.setType(e),t},message:function(e,t,o,n,i){var r=new s.createMessage.build.message;return r.setType(e),r.setMid(t,!0),r.setCmid(t,!0),r.setFrom(o),r.setTo(n),r.setBody(i),r},messageSync:function(e,t){var o=new s.createMessage.build.messageSync;return o.setClientMid(e,!0),o.setServerMid(t,!0),o},messageRead:function(e,t){var o=new s.createMessage.build.messageRead;return o.setUserId(e,!0),o.setMessageId(t,!0),o.setReadTime((new Date).getTime(),!0),o},presence:function(e){var t=new s.createMessage.build.presence,o=new s.createMessage.build.clientInfo,n=e.clientInfo;return t.setUid(_PAGE.uid,!0),t.setType(e.type),t.setLastMessageId(e.lastMessageId,!0),o.setVersion(n.version),o.setSystem(n.system),o.setSystemVersion(n.systemVersion),o.setModel(n.model),o.setUniqid(n.uniqid),o.setNetwork(n.network),o.setAppid(n.appid),o.setPlatform(n.platform),o.setChannel(n.channel),o.setSsid(n.ssid),o.setBssid(n.bssid),o.setLongitude(n.longitude),o.setLatitude(n.latitude),t.setClientInfo(o,!0),t},user:function(e,t){var o=new s.createMessage.build.user;return o.setUid(0,!0),e&&o.setName(t),o},body:function(e,t){var o=new s.createMessage.build.body;return o.setType(e),o.setTemplateId(t),o}},text:function(e){var t=this.model,o=t.user(),s=t.user(e.to.uid,e.to.encryptUid),n=t.body(1,1);n.setText(e.body.text);var i=t.message(1,e.tempID,o,s,n),r=t.chatProtocol(1);return r.setMessages([i]),r},sync:function(e){var t=this.model,o=t.messageSync(e.clientMid,e.serverMid),s=t.chatProtocol(5);return s.setMessageSync([o]),s},read:function(e){var t=this.model,o=t.messageRead(e.uid,e.mid),s=t.chatProtocol(6);return s.setMessageRead([o]),s},presence:function(e){var t=this.model,o=t.presence(e),s=t.chatProtocol(2);return s.setPresence(o),s}};var n={count:0,receiveMaxId:0,messages:[],usersCount:{},isNew:function(e){return this.messages.indexOf(e)<0},add:function(e,t){var o=t.from&&t.from.uid?t.from.uid:t.userId;this.usersCount[o]||(this.usersCount[o]=0);var s=this.usersCount[o],n=e>0?1:-1*s;this.count+=n,this.usersCount[o]+=n,this.messages.push(t.mid),"EventBus"in window&&EventBus.publish("MESSAGE_STATISTIVS",this.count),this.messages.length>100&&this.messages.splice(0,1)}},i=function(e){return t(e)&&!function(){return 3==e.type&&1==e.body.type&&3==e.body.templateId||(4==e.type&&1==e.body.type&&3==e.body.templateId||(!(4!=e.body.type||2!=e.body.templateId||!e.body.action.aid)||(!!o(e)||!(7!=e.body.type||!e.isSelf||void 0==e.body.dialog.type))))}()?_PAGE.uid==e.from.uid||e.isSelf?"sent":"received":"system"},r=function(e){var t={style:i(e),interview:{},visible:!0},o=e.body.type,s=e.body;if([1,2,4,7].indexOf(o)>-1){t.type="text";var n={27:"请求交换电话已发送",32:"请求交换微信已发送",40:"附件简历已发送"},r={1:e.pushText?e.pushText.replace(e.from.name+":",""):"",2:t.text="收到语音消息，请登录APP端查收",4:t.text=s.action?n[s.action.aid]:"",default:e.pushText?e.pushText.replace(e.from.name+":",""):""};t.text=e.body.text?e.body.text:r[o]||r.default}3==o&&s.image&&(t.type="image",t.image=s.image);if(function(){return 3==e.type&&4==o&&[48,50,61,63,66,69].indexOf(s.action.aid)>-1||(1==e.type&&7==s.type||14!=o&&(1==e.type&&7==o))}()){var a={0:"contact",1:"weixin",2:"resume",8:"resume"};if(e.body.dialog&&!e.isSelf)t.type=a[s.dialog.type]||"text",t.text=e.body.dialog.text,t.respond={dialog:8!=e.body.dialog.type,operated:s.dialog.operated};else if(e.body.action&&e.body&&!e.body.interview){var d={};e.body.action.extend&&(d=JSON.parse(e.body.action.extend)),t.type="interviewDialog",t.text=s.interview?s.interview.text:d.title||d.msg,t.respond={operated:!1}}if(!e.isSelf&&1==e.type&&7==s.type&&s.dialog&&(t.text=s.dialog.text,t.text.indexOf("面试")>-1&&(t.type="interviewDialog")),e.isSelf&&7==e.body.type){var c={0:"请求交换电话已发送",1:"请求交换微信已发送",2:"附件简历已发送"};e.body.dialog&&(t.text=c[e.body.dialog.type])}}if(14!=o||t.respond||(t.text=s.interview.text,t.interview=s.interview,t.type="interview"),s.interview&&(t.interview=s.interview),/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g.test(t.text)){t.type="link";var l=/^(?!(http|https)).*/.test(t.text)?"http://":"";t.text=t.text.replace(/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g,"<a href='"+l+"$1' target='_blank'>$1</a>")}var c=(t.text+"").replace("&lt;phone&gt;","").replace("&lt;/phone&gt;","").replace("&lt;copy&gt;","").replace("&lt;/copy&gt;","").replace("&nbsp;"," ");return t.text="undefined"!=c?c:"",(!t.text&&"image"!=t.type||"interviewDialog"==t.type)&&(t.visible=!1),t},a={message:function(e){e.isSelf=void 0==e.isSelf?e.from.uid==_PAGE.uid:e.isSelf;var t=r(e);return $.extend({mid:e.mid,time:e.time,status:e.status||1,avatar:e.from.avatar,classify:e.body.type},t)}},d=new e,c=0,l={init:function(){this.settings={cid:"",token:"",password:"",receiveUrl:"",receiveStepTime:5e3,onSendMessage:function(e){},onRecevieMessage:function(e){},onlineDebug:!!getQueryString("debug")};var e=Cookie.get("wt")||Cookie.get("t");if(!e)return!1;l.settings.password=e,this.uuid="ws-"+getUuid(16,16),this.client=new Paho.MQTT.Client(_PAGE.ws.server,_PAGE.ws.port,"/chatws",this.uuid),this.client.onConnectionLost=this.onConnectionLost,this.client.onMessageArrived=this.onMessageArrived,this.client.onMessageDelivered=this.onMessageDelivered,this.connection(!0),l.isKickOut=!1},connection:function(e){this.client.connect({userName:_PAGE.token,password:l.settings.password,timeout:60,keepAliveInterval:40,cleanSession:!0,onSuccess:this.onConnect,onFailure:this.onFailure,mqttVersion:3,useSSL:!!_PAGE.ws.useSSL})},reConnection:function(){++c>5||this.connection()},onConnect:function(e){l.settings.onlineDebug&&console.log("%cconnect:",l.logCss),l.sendPresence()},onFailure:function(e,t,o){if(l.settings.onlineDebug&&(console.log("%conFailure:",l.logCss),console.log(e,t,o)),"object"==typeof e&&6==e.errorCode){var s=e.errorMessage.match(/^AMQJS0006E Bad Connack return code:(\d).+$/);s&&3==parseInt(s[1],10)&&setTimeout(function(){l.reConnection()},2e3)}else setTimeout(function(){l.reConnection()},2e3)},onConnectionLost:function(e){this.onlineDebug&&(console.log("%conConnectionLost(data):"+new Date+" "+(new Date).getTime(),l.logCss),console.log(e)),8!=e.errorCode&&5!=e.errorCode||l.isKickOut||l.reConnection(),0!==e.errorCode&&(console.log("%conConnectionLost(message):",l.logCss),console.log(e.errorMessage))},send:function(e,t,o){l.settings.onlineDebug&&(console.log("%csend:",l.logCss),console.log(e)),this.client.isConnected()?this.client.send("chat",e.toArrayBuffer(),1,!0):1==e.type&&1==e.messages[0].type&&1==e.messages[0].body.type&&l.reConnection()},sendPresence:function(){var e=Cookie.get("__a").split("."),t=d.createMessage.presence({type:1,lastMessageId:n.receiveMaxId<0?0:n.receiveMaxId,clientInfo:{version:"",system:"",systemVersion:"",model:Cookie.get("sid")||"",uniqid:e[1]+""+e[0]||"",network:_PAGE.clientIP||"",appid:9019,platform:"web",channel:"-1",ssid:"",bssid:"",longitude:0,latitude:0}});l.settings.onlineDebug&&(console.log("%cpresence:",l.logCss),console.log(t)),l.send(t,1)},onMessageArrived:function(e){try{var t=e.payloadBytes,o=d.decode(t);switch(o=l.eachParseInt(o),l.settings.onlineDebug&&(console.log("%conMessageArrived(data):",l.logCss),console.log(e),console.log("%conMessageArrived(message):",l.logCss),console.log(o)),o.type){case 1:l.receiveMessage(o);break;case 5:l.receiveSyncMessage(o);break;case 6:l.receiveStatusMessage(o)}}catch(e){console.log("%conMessageArrived(try error):",l.logCss),console.log(e)}},onMessageDelivered:function(){},receiveMessage:function(e){for(var o=0;o<e.messages.length;o++){var s=e.messages[o];if(3==s.type&&4==s.body.type||1==s.type&&s.body.action&&70==s.body.action.aid)if(10==s.body.action.aid);else if(70==s.body.action.aid&&""!=s.body.action.extend)alert("您的账号当前处于不可使用状态，请登录BOSS直聘手机APP查看详情"),window.location.href="/logout/?toUrl=/user/security/blocktip.html";else if(0==s.body.action.aid)switch(parseInt(s.body.action.extend,10)){case 1011:window.location.href="/";break;case 1012:var i=Cookie.get("wt"),r=Cookie.get("t");if(r&&i&&r!=i)return void(window.location.href="/logout/");alert("您订购的网页版聊天服务已到期，请重新购买！"),window.location.reload();break;case 1013:alert("抱歉，您的BOSS账号刚被冻结。请前往App端申请解冻，解冻后可正常使用"),window.location.href="/logout/";break;case 1014:alert("抱歉，由于被多人举报，您需要认证身份后才可继续使用，请您打开BOSS直聘APP进行认证。"),window.location.href="/logout/"}if(s.to.uid<=1e3)return!1;if(2===s.type||5===s.type||6===s.type)return!0;if(n.isNew(s.mid)||14==s.body.type){var d=a.message(s);if(s.from&&s.from.uid<1001)return!1;if(t(s)&&6!=s.type){n.receiveMaxId=s.mid;[].push(s),_PAGE.uid!=s.from.uid&&d.visible&&2!==s.status&&0===s.uncount&&n.add(1,s)}}}},receiveStatusMessage:function(e){if(e.messageRead)for(var t=0;t<e.messageRead.length;t++){var o=e.messageRead[t];o.sync&&o.userId>1e3&&n.add(-1,o)}},eachParseInt:function(e){for(var t in e){var o=e[t];o&&"object"==typeof o&&("boolean"==typeof o.unsigned&&"number"==typeof o.high&&"number"==typeof o.low?(window.longVal=new dcodeIO.Long(o.low,o.high),e[t]=parseInt(longVal.toString(),10)):this.eachParseInt(o))}return e}};"_PAGE"in window&&_PAGE.ws&&l.init()}();