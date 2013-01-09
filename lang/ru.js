// lang file
system.lang = {
	"name":"ru"
	,"system":{
		"title":"Transmission WEB Control"
		,"status":{
			"connect":"Соединение..."
			,"connected":"Соединен"
			,"queue":"Очередь:"
			,"queuefinish":"Очередь загрузки завершена."
			,"notfinal":"Не завершена"
		}
	}
	,"error":{
		"data-error":"Ошибка данных."
		,"data-post-error":"Ошибка отправки данных."
	}
	,"config":{
		"save-path":"Каталог для загрузки"
	}
	,"toolbar":{
		"start":"Старт"
		,"pause":"Пауза"
		,"start-all":"Начать все"
		,"pause-all":"Пауза все"
		,"remove":"Удалить"
		,"remove-all":"Удалить все"
		,"remove-data":"Удалить данные"
		,"add-torrent":"Добавить торрент"
		,"attribute":"Атрибут"
		,"alt-speed":"Поделить скорость"
		,"system-config":"Настройки"
		,"system-reload":"Перезагрузить"
		,"about":"О программе"
		,"reload-time":"Авто обновление:"
		,"reload-time-unit":"с/раз"
		,"autoreload-disabled":"Отключено"
		,"autoreload-enabled":"Включено"
		,"search-prompt":"Поиск по торрентам"
		,"tip":{
			"start":"Загрузить проверенные торренты"
			,"pause":"Приостановить проверенные торренты"
			,"recheck":"Перепроверить выбранные торренты"
			,"recheck-confirm":"Вы уверены что необходимо перепроверить выбранные загрузки? Это займет некоторое время!"
			,"start-all":"Начать все"
			,"pause-all":"Пауза все"
			,"remove":"Удалить"
			,"delete-all":"Удалить все"
			,"delete-data":"Удалить данные"
			,"add-torrent":"Добавить торренты"
			,"attribute":"Отрибут"
			,"alt-speed":"Разделить скорость"
			,"system-config":"Настройки"
			,"system-reload":"Перезагрузить"
			,"about":"О программе"
			,"autoreload-disabled":"Отключить авто-обновление"
			,"autoreload-enabled":"Включить авто-обновление"
		}
	}
	,"title":{
		"left":"Навигация"
		,"list":"Загрузки"
		,"attribute":"Информация"
		,"status":"Статус"
	}
	,"tree":{
		"all":"Все"
		,"active":"Активные"
		,"paused":"Приостановленны"
		,"downloading":"Загружаются"
		,"sending":"Раздаются"
		,"error":"Ошибка"
		,"warning":"Предупреждение"
		,"actively":"Активны"
		,"check":"Проверка"
		,"wait":"Ожидание"
		,"search-result":"Результаты поискаt"
		,"status":{
			"loading":"Загрузка..."
		}
		,"statistics":"Статистика"
		,"statistics":{
			"title":"Статистика"
			,"cumulative":"Общая"
			,"current":"Текущая"
			,"uploadedBytes":"ОтдачаБайты: "
			,"downloadedBytes":"ПриемБайты: "
			,"filesAdded":"ФайлыДобавлены: "
			,"sessionCount":"КоличествоСессий: "
			,"secondsActive":"ВремяРаботы: "
		}
		,"server":"Трекеры"
	}
	,"statusbar":{
		"downloadspeed":"Скорость загрузки:"
		,"uploadspeed":"Скорость отдачи:"
		,"version":"Версия:"
	}
	,"dialog":{
		"torrent-add":{
			"download-dir":"Download Dir:"
			,"torrent-url":"Torrent URL:"
			,"tip-torrent-url":"Tip：Please multiple content with 'Enter' to separate"
			,"autostart":"Auto Start:"
			,"tip-autostart":""
			,"set-default-download-dir":"Set as default dir"
			,"upload-file":"Torrent file(s):"
			,"nosource":"No torrent file or URL."
			,"tip-title":"Upload file priority in the URL"
		}
		,"system-config":{
			"title":"Server Config"
			,"tabs":{
				"base":"Base"
				,"network":"Network"
				,"limit":"Limit"
				,"alt-speed":"Scheduled"
			}
			,"download-dir":"Default path to download torrents:"
			,"download-dir-free-space":"Free space:"
			,"incomplete-dir-enabled":"Use incomplete dir"
			,"cache-size-mb":"Disk cache size:"
			,"rename-partial-files":"Append '.part' to incomplete files"
			,"start-added-torrents":"Auto start added torrents"
			,"download-queue-enabled":"Enabled download queue, max queue number:"
			,"seed-queue-enabled":"Enabled seed queue, max queue number:"
			,"peer-port-random-on-start":"Use random port on start"
			,"port-forwarding-enabled":"Enabled forwarding"
			,"test-port":"Test the port"
			,"port-is-open-true":"The port is close"
			,"port-is-open-false":"The port is open"
			,"testing":"Testing..."
			,"encryption":"Encryption:"
			,"encryption-type":{
				"required":"Required"
				,"preferred":"Preferred"
				,"tolerated":"Tolerated"
			}
			,"utp-enabled":"Enabled uTP(UPnP)"
			,"dht-enabled":"Enabled DHT"
			,"lpd-enabled":"Enabled LPD"
			,"pex-enabled":"Enabled PEX"
			,"peer-limit-global":"Maximum global number of peers:"
			,"peer-limit-per-torrent":"Maximum peers number of torrent:"
			,"speed-limit-down-enabled":"Max global download speed:"
			,"speed-limit-up-enabled":"Max global upload speed:"
			,"alt-speed-enabled":"Use the alt speeds"
			,"alt-speed-down":"Max global download speed:"
			,"alt-speed-up":"Max global upload speed:"
			,"alt-speed-time-enabled":"Use scheduled"
			,"alt-speed-time":"Time："
			,"weekday":{
				"1":"Monday"
				,"2":"Tuesday"
				,"3":"Wednesday"
				,"4":"Thursday"
				,"5":"Friday"
				,"6":"Saturday"
				,"0":"Sunday"
			}
			,"blocklist-enabled":"Use blocklist"
			,"seedRatioLimited":"The default seed ratio for torrents to use:"
			,"queue-stalled-enabled":"Whether or not to consider idle torrents as stalled:"
			,"idle-seeding-limit-enabled":"Torrents we're seeding will be stopped if they're idle for this long:"
			,"minuets":"Minuets"
			,"nochange":"No change"
			,"saveing":"Saveing..."
		}
		,"public":{
			"button-ok":"OK"
			,"button-cancel":"Cancel"
			,"button-reload":"Reload"
			,"button-save":"Save"
			,"button-close":"Close"
		}
		,"about":{
			"infos":"Author：culturist<br/>Statement：Most of the icons used in this program from the network, if any violation of your rights, please contact me delete."
		}
		,"torrent-remove":{
			"title":"Remove confirm"
			,"confirm-text":"Are you sure you want to remove the checked torrent(s)?"
			,"remove-data":"Delete local data"
			,"remove-error":"Delete failed!"
		}
		,"torrent-changeDownloadDir":{
			"title":"Set new dir"
			,"old-download-dir":"Old dir:"
			,"new-download-dir":"New dir:"
			,"move-data":"If checked, move from previous location. otherwise, search 'New dir' for files."
			,"set-error":"set error!"
		}
	}
	,"torrent":{
		"fields":{
			"id":"#"
			,"name":"Name"
			,"hashString":"HASH"
			,"downloadDir":"Download Dir"
			,"totalSize":"Total size"
			,"status":"Status"
			,"percentDone":"Percent done"
			,"addedDate":"Added date"
			,"completeSize":"Complete size"
			,"rateDownload":"Rate download"
			,"rateUpload":"Rate upload"
			,"leecherCount":"Leecher"
			,"seederCount":"Seeder"
			,"uploadedEver":"Uploaded ever"
			,"uploadRatio":"Ratio"
		}
		,"status-text":{
			"0":"Paused"
			,"1":"Wait check"
			,"2":"Checking"
			,"3":"Wait download"
			,"4":"Downloading"
			,"5":"Wait seed"
			,"6":"Seeding"
		}
		,"attribute":{
			"tabs":{
				"base":"Base"
				,"servers":"Trackers"
				,"files":"Files"
				,"users":"Peers"
				,"config":"Config"
			}
			,"files-fields":{
				"name":"Name"
				,"length":"Size"
				,"percentDone":"Percent done"
				,"bytesCompleted":"Complete size"
				,"wanted":"Wanted"
				,"priority":"Priority"
			}
			,"servers-fields":{
				"announce":"Announce"
				,"announceState":"Status"
				,"lastAnnounceResult":"Infos"
				,"lastAnnounceSucceeded":"Succeeded"
				,"lastAnnounceTime":"AnnounceTime"
				,"lastAnnounceTimedOut":"TimedOut"
				,"downloadCount":"Download count"
			}
			,"peers-fields":{
				"address":"IP address"
				,"clientName":"Client"
				,"flagStr":"Flag"
				,"progress":"Progress"
				,"rateToClient":"RateToClient"
				,"rateToPeer":"RateToPeer"
			}
			,"status":{
				"true":"True"
				,"false":"False"
			}
			,"priority":{
				"0":"Normal"
				,"1":"High"
				,"-1":"Low"
			}
			,"label":{
				"name":"Name:"
				,"addedDate":"Added date:"
				,"totalSize":"Total size:"
				,"completeSize":"Complete size:"
				,"leftUntilDone":"Left until done:"
				,"hashString":"HASH:"
				,"downloadDir":"Download dir:"
				,"status":"Status:"
				,"rateDownload":"Rate download:"
				,"rateUpload":"Rate upload:"
				,"leecherCount":"Leecher:"
				,"seederCount":"Seeder:"
				,"uploadedEver":"Uploaded ever:"
				,"uploadRatio":"Upload Ratio:"
				,"creator":"Creator:"
				,"dateCreated":"Date created:"
				,"comment":"Comment:"
				,"errorString":"Error string:"
				,"downloadLimited":"Max global download speed："
				,"uploadLimited":"Max global upload speed："
				,"peer-limit":"Maximum peers number of torrent："
				,"seedRatioMode":"Seed ratio for torrents to use："
				,"seedIdleMode":"Torrents we're seeding will be stopped if they're idle for this long："
			}
			,"tip":{
				"button-allow":"Download checked file(s)"
				,"button-deny":"Skip checked file(s)"
				,"button-priority":"Set priority"
			}
		}
	}
	,"public":{
		"text-unknown":"Unknown"
		,"text-drop-title":"Drag and drop the file in the region to add to the Transmission."
		,"text-saved":"Saved"
		,"text-nochange":"No change"
		,"text-info":"Infos"
	}
};