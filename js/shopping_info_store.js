$(function() {
	$('#storeDetailModal').on('show.bs.modal', function(event) {
		let relatedTarget = $(event.relatedTarget);
		let store = relatedTarget.parents('.store-item');
		let storeTag = store.find('.store_tag').clone();
		let storeTitle = store.find('.store-title').text();
		let storeAddress = store.find('.store_address a').clone();
		let storeTel = store.find('.store_tel a').clone();
		let storeWeekdaysTime = store.find('.store_time .weekdays').text();
		let storeHolidaysTime = store.find('.store_time .holiday').text();
		
		$('.modal-field').empty();
		$('.modal-tag').append(storeTag);
		$('.modal-title').append(storeTitle);
		$('.modal-address').append(storeAddress);
		$('.modal-tel').append(storeTel);	
		$('.modal-weekdays').append(storeWeekdaysTime);
		$('.modal-holiday').append(storeHolidaysTime);
	})
});