import System.IO;
var filePath = "/defaultBlacklist.txt";



if(window.location.href.indexOf("twitter.com")>=0)
{
	//The current website is twitter
	var elements = document.getElementsByTagName('my-tweet');

	for (var i = 0; i < elements.length; i++)
	{
		var element = elements[i];

		for (var j = 0; j < element.childNodes.length; j++)
		{
			var node = element.childNodes[i];

			if (node.nodeType === 3)
			{
				var text = node.nodeValue;
				var replacedText = text.replace('self-harm', '<a href="http://www.healthyplace.com/abuse/self-injury/alternatives-to-self-harm-self-injury/">self-harm</a>');

			}
		}
	}
}
