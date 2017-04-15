//import System.IO;
//var filePath = "/defaultBlacklist.txt";
	//The current website is twitter
	//var elements = document.querySelectorAll('div.tweet.js-stream-tweet.js-actionable-tweet.js-profile-popup-actionable.original-tweet.js-original-tweet.my-tweet');

	/*var elements = document.getElementsByTagName('*');

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
	}*/
/*
var parents = document.querySelectorAll(".my-tweet");
for(int i = 0; i < parents.length; i++){
	var tweetText = parents[i].querySelectorAll(".tweet-text");
	tweetText.innerHTML = tweetText.innerHTML.replace(/\bself-harm\b/g,'<a href="http://www.nami.org/Learn-More/Mental-Health-Conditions/Related-Conditions/Self-harm">self-harm</a>');
}
*/

document.body.innerHTML = document.body.innerHTML.replace(/\bself-harm\b/g,'<a href="http://www.nami.org/Learn-More/Mental-Health-Conditions/Related-Conditions/Self-harm">self-harm</a>');
document.body.innerHTML = document.body.innerHTML.replace(/\bautism\b/g,'<a href="https://www.autismspeaks.org/what-autism">self-harm</a>');
document.body.innerHTML = document.body.innerHTML.replace(/\bsuicide\b/g,'<a href="http://www.nami.org/Learn-More/Mental-Health-Conditions/Related-Conditions/Self-harm">self-harm</a>');
