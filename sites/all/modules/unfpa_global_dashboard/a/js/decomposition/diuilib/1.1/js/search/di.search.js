/*
Search component object based
*/
function di_drawSearchBox(div_id, boxid, width, height, dtext, func, crossfunc) { 
	try
	{
		this.boxid = boxid;
		this.width = width;
		this.height = height;
		this.text = dtext;
		this.keyupfunc = func;
		this.crossfunc = crossfunc;
		
		var ui = this.getUI();
		
		di_jq("#" + div_id).html(ui);

		// on click search box
		di_jq('#'+boxid).bind('click', function(evt) { 
			if (this.value == dtext) {
				di_jq('#'+boxid).val("");
				di_jq('#'+boxid).removeClass('di_gui_searchbox_defaulttext');
				di_jq('#'+boxid).addClass('di_gui_searchbox_text');
			}
		});
		// on blur search box
		di_jq('#'+boxid).bind('blur', function() {
			if (this.value == '') {
				di_jq('#'+boxid).val(dtext);
				di_jq('#'+boxid).removeClass('di_gui_searchbox_text');
				di_jq('#'+boxid).addClass('di_gui_searchbox_defaulttext');
			}
		});
		// on typeing search box
		if(func!='') {
			di_jq('#'+boxid).bind('keyup', function() { 
				eval(func);
			});
		}
		// cross function 
		if(crossfunc!='' && crossfunc!=undefined) {
			di_jq('#cros_'+boxid).bind('click', function(evt) { 
				di_jq('#'+boxid).val("");
				di_jq('#'+boxid).removeClass('di_gui_searchbox_defaulttext');
				di_jq('#'+boxid).addClass('di_gui_searchbox_text');
				eval(crossfunc);
			});
		}
	}
	catch (err){}
}
/* function to create search box ui */
di_drawSearchBox.prototype.getUI = function() {
	var ui = '<div style="width:'+ this.width +'; height:'+ this.height +'" class="di_gui_searchpanel"><table width="100%" cellpadding="0" cellspacing="0"><tr><td class="di_gui_searchleft_box"></td><td class="di_gui_searchmiddle_box"><input type="text" name="'+this.boxid+'" id="'+this.boxid+'" value="'+this.text+'" class="di_gui_searchbox di_gui_searchbox_defaulttext" /></td><td class="di_gui_searchright_box" id="cros_'+this.boxid+'"><img src="'+di_images_path+'/spacer.gif" width="16" height="16" border="0" /></td></tr></table></div>';	
	return ui;
}
/* function to refresh search box */
di_drawSearchBox.prototype.refresh = function() {
	di_jq('#'+this.boxid).val(this.text);
	di_jq('#'+this.boxid).removeClass('di_gui_searchbox_text');
	di_jq('#'+this.boxid).addClass('di_gui_searchbox_defaulttext');
}