
	$(document).ready(function ()
	{
		
		if(window.location.href.indexOf("facebook.com")>=0)
		{
			var last_known_scroll_position = 0;
			var ticking = false;
			var holder = new CommentLoader();
			var c1 = document.getElementsByTagName("P").item(0);
			var c2 = document.getElementsByTagName("P").item(1);
			console.log(c1.innerHTML);
			console.log(c2.innerHTML);
			window.addEventListener('scroll', function(e) {
				last_known_scroll_position = window.scrollY;
				if (!ticking) {
					window.requestAnimationFrame(function() 
					{
						holder.loadComments(last_known_scroll_position);
						ticking = false;
						});
  }
  ticking = true;
});
		}
		else if(window.location.href.indexOf("twitter.com")>=0)twitterHandler();
	});
function CommentLoader()
{
	this.count =2;
	this.loadComments =function(scroll_pos) 
	{
		var c1 = document.getElementsByTagName("P").item(this.count);
		this.count++;
		var c2 = document.getElementsByTagName("P").item(this.count);
		this.count++;
	}
}
/*
function facebookHandler()
{	
	//facebook
	var tags =document.getElementsByClassName("hidden_elem");
	var people =[].forEach.call(tags,function(input){
	var incremeneter=0;
	var imtag = input.getElementByTagName("im");
	var ptag = input.getElementByTagName("p");
	while(incremeneter<imtag.length&&incremeneter<ptag)
	{
	if(imtag.item(incremeneter).getAttribute("aria-label")!=null&&ptag.item(incremeneter)!=null)
	{
	var userName =imtag.item(incremeneter).getAttribute("aria-label");//TODO write code to grab that
	var refholder = input.getElementsByTagName("a");
	var k=0;
	var userPage;
	var done =true
	while(k<refholder.length&&done)
	{
	var temp = refholder.item(k).getAttribute("href");
	if(temp.substring(0,24)==="https://www.facebook.com"&&temp.substring(temp.length-21,temp.length)!="NEWSFEED&amp;fref=nf"){userPage=temp;done=false;}
	k++;
	}
	var comment = ptag.item(incremeneter).innerHTML;//TODO write code to do this too 
	var dossier = new Person(userName,userPage,comment);
	return person;
	}
	}
	return null;
});
	document.body.style.border = "5px solid red";
	return people;
}
*/
// TO HERE MAKES TONS OF MERGE CONFLICTS also you need to test what website you are on this extension works on all urls the only way to filter through them is with the
//conditional statement above 
function twitterHandler(){
//import System.IO;
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
//for(int i = 0; i < parents.length; i++){
	//var tweetText = parents[i].querySelectorAll(".tweet-text");
//	tweetText.innerHTML = tweetText.innerHTML.replace(/\bself-harm\b/g,'<a href="http://www.nami.org/Learn-More/Mental-Health-Conditions/Related-Conditions/Self-harm">self-harm</a>');
//}


document.body.innerHTML = document.body.innerHTML.replace(/\bself-harm\b/g,'<a href="http://www.nami.org/Learn-More/Mental-Health-Conditions/Related-Conditions/Self-harm">self-harm</a>');
document.body.innerHTML = document.body.innerHTML.replace(/\bautism\b/g,'<a href="https://www.autismspeaks.org/what-autism">self-harm</a>');
document.body.innerHTML = document.body.innerHTML.replace(/\bsuicide\b/g,'<a href="http://www.nami.org/Learn-More/Mental-Health-Conditions/Related-Conditions/Self-harm">self-harm</a>');
}
