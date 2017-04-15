//DO NOT DELETE FROM HERE 
function Person(user,ulink,comment){
	this.userName = user;
	this.userLink = ulink;
	this.comment = comment;
}
if(window.location.href.indexOf("facebook.com")>=0)
{
	//facebook
	var communityInteraction =document.getElementsByClassName("hidden_elem");
	var comsize = communityInteraction.length;
	var i =0;
	while(i<comsize)
	{
	if(communityInteraction[i].getElementByTagName("im").getAttribute("aria-label")!=null&&communityInteraction[i].getElementByTagName("p")!=null){
	var userName =communityInteraction[i].getElementsByTagName("im").getAttribute("aria-label");//TODO write code to grab that
	var refholder = communityInteraction[i].getElementsByTagName("a");
	var k=0;
	var userPage;
	var done =true
	while(k<refholder.length&&done)
	{
	var temp = refholder[k].getAttribute("href");
	if(temp.substring(0,24)==="https://www.facebook.com"&&temp.substring(temp.length-21,temp.length)!="NEWSFEED&amp;fref=nf"){userPage=temp;done=false;}
	k++;
	}
	var comment = communityInteraction[i].getElementsByTagName("p").innerHTML;//TODO write code to do this too 
	i++;
	var dossier = new Person(userName,userPage,comment);
	}
	}
}
// TO HERE MAKES TONS OF MERGE CONFLICTS also you need to test what website you are on this extension works on all urls the only way to filter through them is with the
//conditional statement above 
/*
else if(window.location.href.indexOf("twitter.com")>=0){
import System.IO;
var filePath = "/defaultBlacklist.txt";
	//The current website is twitter
	var elements = document.querySelectorAll('div.tweet.js-stream-tweet.js-actionable-tweet.js-profile-popup-actionable.original-tweet.js-original-tweet.my-tweet');

	var elements = document.getElementsByTagName('*');

	for (var i = 0; i < elements.length; i++)
	{
		var element = elements[i];

		for (var j = 0; j < element.childNodes.length; j++)
		{
			var node = element.childNodes[i];

			if (node.nodeName !== '#text')
			{
			}
			else
			{
				var text = node.textContent;
				if (text.equals("self-harm"))
				{
					var newHtml = text.replace(/\bself-harm\b/g,'<a href="http://www.cnn.com">asdf</a>');
				}

				if (newHtml !== text)
				{
					var newThing = document.createElement('span');
					newThing.innerHTML = newHtml;
					node.parentNode.replaceChild(newThing,node);
				}

			}
		}
	}

var parents = document.querySelectorAll(".my-tweet");
for(int i = 0; i < parents.length; i++){
	var tweetText = parents[i].querySelectorAll(".tweet-text");
	tweetText.innerHTML = tweetText.innerHTML.replace(/\bself-harm\b/g,'<a href="http://www.nami.org/Learn-More/Mental-Health-Conditions/Related-Conditions/Self-harm">self-harm</a>');
}
}
*/

document.body.innerHTML = document.body.innerHTML.replace(/\bself-harm\b/g,'<a href="http://www.nami.org/Learn-More/Mental-Health-Conditions/Related-Conditions/Self-harm">self-harm</a>');
document.body.innerHTML = document.body.innerHTML.replace(/\bautism\b/g,'<a href="https://www.autismspeaks.org/what-autism">self-harm</a>');
document.body.innerHTML = document.body.innerHTML.replace(/\bsuicide\b/g,'<a href="http://www.nami.org/Learn-More/Mental-Health-Conditions/Related-Conditions/Self-harm">self-harm</a>');
