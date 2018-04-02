//微信接口
// WXSettings.posturl = "ajax.php?mode=Action&page=Index&visitid=" + visitid + "&userid=" + userid;
function BuildShareData(){
	if(!WXSettings)
		return;
	if(!visitid)
		visitid = -1;
	if(!userid)
		 userid = -1;

	shareDataMessage = {
		title: WXSettings.defaulttitle,
		desc: WXSettings.defaultdesc,
		link: WXSettings.link,
		imgUrl: WXSettings.defaultimgUrl
	};
	shareDataTimeline = {
		title: WXSettings.defaulttimeline,
		desc: WXSettings.defaulttimeline,
		link: WXSettings.link,
		imgUrl: WXSettings.defaultimgUrl
	};
	wx.onMenuShareAppMessage({
		title: WXSettings.defaulttitle,
		desc: WXSettings.defaultdesc,
		link: WXSettings.link,
		imgUrl: WXSettings.defaultimgUrl,
		success: function () {
			if(WXSettings.posturl!=""){
				$.post(WXSettings.posturl + "&action=ShareAppMessage&memo=Share");
			}
		},
		cancel: function () {
			if(WXSettings.posturl!=""){
				$.post(WXSettings.posturl + "&action=ShareAppMessage&memo=Cancel");
			}
		}
	});
	wx.onMenuShareTimeline({
		title: WXSettings.defaulttimeline,
		desc: WXSettings.defaulttimeline,
		link: WXSettings.link,
		imgUrl: WXSettings.defaultimgUrl,
		success: function () {
			if(WXSettings.posturl!=""){
				$.post(WXSettings.posturl + "&action=ShareTimeline&memo=Share");
			}
		},
		cancel: function () {
			if(WXSettings.posturl!=""){
				$.post(WXSettings.posturl + "&action=ShareTimeline&memo=Cancel");
			}
		}
	});
	wx.onMenuShareQQ({
		title: WXSettings.defaulttitle,
		desc: WXSettings.defaultdesc,
		link: WXSettings.link,
		imgUrl: WXSettings.defaultimgUrl,
		success: function () {
			if(WXSettings.posturl!=""){
				$.post(WXSettings.posturl + "&action=ShareQQ&memo=Share");
			}
		},
		cancel: function () {
			if(WXSettings.posturl!=""){
				$.post(WXSettings.posturl + "&action=ShareQQ&memo=Cancel");
			}
		}
	});
}
