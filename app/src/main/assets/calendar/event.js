var calendar = {};
$(document).ready(function () {
	var lotsOfEvents = [];
	var pharmacy_id = $('.pharmacy_id').val();
	var doctor_id = $('.doctor_id').val();

	$.ajax({
		url: 'https://bookmymakeover.com/sathi/admin/getEventList.php?doctor_id=' + doctor_id + '&pharmacy_id=' + pharmacy_id,
		dataType: 'json',
		success: function (data) {
			var datax = [];
			for (var i = 0; i < data.length; i++) {
				datax = { "date": data[i].date };
				lotsOfEvents.push(datax);
			}

			calendar.clndr = $('.cal1').clndr({
				events: lotsOfEvents,
				clickEvents: {
					click: function (target) {
						$.ajax({
							url: 'https://bookmymakeover.com/sathi/admin/getEventByDate.php',
							dataType: 'json',
							type: 'POST',
							data: {
								eventDate: target['date']['_i']
							},
							success: function (json) {
								Results(json);
							}
						});
						function Results(json) {
							$("#event").html("");
							$(".day .day-contents").css("color", "#000");
							$(".calendar-day-" + target['date']['_i'] + " .day-contents").css("color", "#FF0000");

							var a = target['date']['_i'];
							$('.selected_date').val(a);
							// 		for(var i = 0;i<json.length;i++) {
							// 			$("#event").append("<div class='event-row'>"+json[i].title+"</div>");
							// 		}
						}
						$("#event").empty();
					}
				},

				showAdjacentMonths: true,
				adjacentDaysChangeMonth: false
			});
		}
	});
});