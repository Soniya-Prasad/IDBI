var mobile = false;

if(navigator.appVersion.indexOf("iPad") != -1 || navigator.appVersion.indexOf("iPhone") != -1 ){
	mobile = true;
}
if (navigator.userAgent.indexOf("iPad") != -1 ){
	mobile = true;
}

if(document.getElementById("AVChat_exists").value == "false"){
	document.getElementById("av_message").innerHTML = "For the plugin to work, you need the AVChat files to be copied to the plugin directory! Request a <a href='http://avchat.net/integrations/phpfox' target='_blank'>trial</a> or review the <a href='http://avchat.net/support/documentation/phpfox#121' target='_blank'>Documentation!</a>";
} else {
	if(mobile){
		//alert(document.getElementById("av_message"));
		
		document.getElementById("av_message").innerHTML = "<a href='"+chat_path+"/ws/m.php' style='background:#f0f0f0;display:block;padding:10px 20px;width:200px;text-align:center;border:1px solid #ccc'>Enter mobile version</a> ";
	}else{
		if(embed == "embed" ){
	
			document.getElementById("av_message").innerHTML = "You do not have the proper Flash Player installed. Click below to download the newest version of Flash Player: <p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Get Adobe Flash player\" /></a></p>";
		} else {
		
			//Do nothing
		}
	}
}
