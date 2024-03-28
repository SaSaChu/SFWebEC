$(function () {

	// mobile menu widget
	
	// $('.side_widget_title').map(function(i) {
	// 	let item = `<li class="dropdown-item">${$(this).text().trim()}</a></li>`
	// 	$('.mobile-main-menu').append(item);
	// });

	$('.mobile-main-menu .dropdown-item').on('click', function() {
		$('.mobile-sub-menu').empty();
		$('#dropdownMobileMainMenuButton').text($(this).text());
		$('#dropdownMobileSubMenuButton').text('請選擇');

		let targetId = `#collapse${$(this).index() + 1}`
		let children = $(targetId).find('.ul_li_links').children();
		
		children.map(function() {
			let targetA = $(this).find('a'); 
			let item = `<li><a class="dropdown-item" href="${targetA.attr('href')}">${targetA.text().trim()}</a></li>`
			$('.mobile-sub-menu').append(item);	
		})
	})
});
