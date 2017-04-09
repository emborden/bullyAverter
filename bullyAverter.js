//manifest is functional for most urls issues with youtube resolve later 
if(window.location.href.indexOf("facebook.com")>=0)//This does work 
{
	//The current website is face book
	document.body.style.border = "5px solid red";
}
else if(location.hostname.indexOf("twitter.com")>=0)
{
	//The current website is twitter
}
else if(location.hostname.indexOf("reddit.com")>=0)
{
	//current site is reddit
}
else if(location.hostname.indexOf("youtube.com")>=0)
{
	//site is youtube
}
