transmission.torrents={all:null,puased:null,downloading:null,actively:null,searchResult:null,error:null,warning:null,folders:{},status:{},count:0,totalSize:0,loadSimpleInfo:false,activeTorrentCount:0,pausedTorrentCount:0,fields:{base:"id,name,status,hashString,totalSize,percentDone,addedDate,trackerStats,leftUntilDone,rateDownload,rateUpload,rateDownload,rateUpload,peersGettingFromUs,peersSendingToUs,uploadRatio,uploadedEver,downloadedEver,downloadDir,error,errorString",status:"id,status,percentDone,trackerStats,leftUntilDone,rateDownload,rateUpload,rateDownload,rateUpload,peersGettingFromUs,peersSendingToUs,uploadRatio,uploadedEver,downloadedEver,error,errorString",
config:"downloadLimit,downloadLimited,peer-limit,seedIdleLimit,seedIdleMode,seedRatioLimit,seedRatioMode,uploadLimit,uploadLimited"},datas:{},recently:null,removed:null,isRecentlyActive:false,newIds:[],getallids:function(b,c){var d=this.fields.base;if(this.loadSimpleInfo&&this.all)d=this.fields.status;arguments={fields:d.split(",")};this.isRecentlyActive=false;if(this.all&&c==undefined){arguments.ids="recently-active";this.isRecentlyActive=true}else if(c)arguments.ids=c;if(!this.all)this.all={};transmission.exec({method:"torrent-get",
arguments:arguments},function(a){if(a.result=="success"){transmission.torrents.newIds.length=0;transmission.torrents.loadSimpleInfo=true;transmission.torrents.recently=a.arguments.torrents;transmission.torrents.removed=a.arguments.removed;transmission.torrents.splitid();b&&b(a.arguments.torrents)}else{transmission.torrents.datas=null;b&&b(null)}})},splitid:function(){this.downloading=[];this.puased=[];this.actively=[];this.error=[];this.warning=[];transmission.downloadDirs=[];var b=transmission._status;
this.status={};transmission.trackers={};this.totalSize=0;this.folders={};var c=new Base64,d;for(d in this.recently){var a=this.recently[d];this.datas[a.id]=a}var f=[];for(d in this.removed){a=this.removed[d];f.push(a.id)}for(d in this.datas){a=this.datas[d];if($.inArray(a.id,f)&&f.length>0){if(this.all[a.id])this.all[a.id]=null}else{this.isRecentlyActive&&!this.all[a.id]&&this.newIds.push(a.id);a=$.extend(this.all[a.id],a);if(a.uploadedEver==0&&a.downloadedEver==0)a.uploadRatio="∞";a.infoIsLoading=
false;var h=this.status[a.status];this.addTracker(a);if(!h){this.status[a.status]=[];h=this.status[a.status]}h.push(a);a.error!=0&&this.error.push(a);if(a.rateUpload>0||a.rateDownload>0)this.actively.push(a);switch(a.status){case b.stopped:this.puased.push(a);break;case b.download:this.downloading.push(a)}this.all[a.id]=a;this.totalSize+=a.totalSize;$.inArray(a.downloadDir,transmission.downloadDirs)==-1&&transmission.downloadDirs.push(a.downloadDir);h=a.downloadDir.split("/");var g="folders-",i;for(i in h){var e=
h[i];if(e!=""){g+=c.encode(e);(e=this.folders[g])||(e={count:0,torrents:[],size:0});e.torrents.push(a);e.count++;e.size+=a.totalSize;this.folders[g]=e}}}}transmission.downloadDirs=transmission.downloadDirs.sort();this.newIds.length>0&&this.getallids(null,this.newIds)},addTracker:function(b){var c=b.trackerStats,d=false;b.leecherCount=0;b.seederCount=0;if(c.length>0){for(var a in c){var f=c[a],h=f.lastAnnounceResult.toLowerCase(),g=f.host.replace("http://","").replace("https://","").split(":")[0].split(".");
$.inArray(g[0],"www,tracker".split(","))!=-1&&g.shift();g=g.join(".");var i="tracker-"+g.replace(/\./g,"-"),e=transmission.trackers[i];if(!e){transmission.trackers[i]={count:0,torrents:[],size:0,connected:true};e=transmission.trackers[i]}e.name=g;e.nodeid=i;e.host=f.host;if(h!="success"){d=true;b.warning=f.lastAnnounceResult;if(h=="could not connect to tracker")e.connected=false}e.torrents.push(b);e.count++;e.size+=b.totalSize;b.leecherCount+=f.leecherCount;b.seederCount+=f.seederCount}d&&this.warning.push(b);
if(b.leecherCount<0)b.leecherCount=0;if(b.seederCount<0)b.seederCount=0;b.leecher=b.leecherCount+" ("+b.peersGettingFromUs+")";b.seeder=b.seederCount+" ("+b.peersSendingToUs+")"}},getPeers:function(b){transmission.exec({method:"torrent-get",arguments:{fields:"peers,peersFrom".split(","),ids:b}},function(c){console.log("data:",c)})},getMoreInfos:function(b,c,d){transmission.exec({method:"torrent-get",arguments:{fields:b.split(","),ids:c}},function(a){if(a.result=="success")d&&d(a.arguments.torrents);
else d&&d(null)})},search:function(b,c){if(!b)return null;if(!c)c=this.all;var d=[];$.each(c,function(a){c[a].name.toLowerCase().indexOf(b.toLowerCase())!=-1&&d.push(c[a])});return this.searchResult=d},getFiles:function(b,c){transmission.exec({method:"torrent-get",arguments:{fields:"files,fileStats".split(","),ids:b}},function(d){if(d.result=="success")c&&c(d.arguments.torrents);else c&&c(null)})},getConfig:function(b,c){this.getMoreInfos(this.fields.config,b,c)},getErrorIds:function(b){var c=[],
d;for(d in this.error){var a=this.error[d];$.inArray(a.id,b)!=-1&&b.length>0||c.push(a.id)}for(d in this.warning){a=this.warning[d];$.inArray(a.id,b)!=-1&&b.length>0||c.push(a.id)}return c}};
