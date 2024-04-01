//Problem: It looks gross in smaller browser widths and small devices
//Solution: to hide the text links and swap them out with a more appropiate navigation


// Create a select and append to menu
var $select = $('<select></select>');
var $menu   = $('#menu');

$menu.append($select);
// Circle over menu links
$menu.find("a").each(function () {
	var $link    = $(this);
	//Option value is href link
	var href     = $link.attr('href');
	//Option text is text of link
	var textLink = $link.text();	

	//Create an option
	var $newOption = $('<option value="' + href + '">' + textLink + ' </option>');

	if ($link.parent().hasClass('selected')) {
		$newOption.prop('selected', true);
	}


	///Append option to select
	$select.append($newOption);
});

$select.on('change', function () {
	//Go to select's location
	window.location = $select.val();
})

// //Create button 
// var $button = $("<button>Go</button>");
// $menu.append($button);
// //Bind click to button 
// $button.on('click', function () {
// 	//Go to select's location
// 	window.location = $select.val();
// });
	

//Deal with selected options depending on current page

