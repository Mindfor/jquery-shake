(function ($) {
	$.fn.shake = function (option) {
		// Default settings
		var setting = {
			vibration: 6, // number of shifts
			amplitude: 50, // maximum shift distance
			direction: "left", // first shift direction
			timeFirstDeviation: 240, // time of first shift
		};
		if (option) { $.extend(setting, option); }

		var direction;
		if ((setting.direction == "left") && setting.vibration % 2 == 0)
			direction = -1;
		else if (setting.direction == "left")
			direction = 0;
		else if ((setting.direction == "right") && setting.vibration % 2 == 0)
			direction = 0;
		else
			direction = -1;

		var deltaTime = setting.timeFirstDeviation / (setting.vibration);
		var deltaDeviation = (setting.amplitude) / (setting.vibration - 1);

		var make = function (currentVibration, elem, amplitude, timeDeviation) {
			if (currentVibration > 0) {
				elem.css("position", "relative").animate({ "left": (((Math.pow(-1, (currentVibration + direction)) * (amplitude))).toString()) },
													 timeDeviation,
													function () { make(currentVibration - 1, $(elem), amplitude - deltaDeviation, timeDeviation - deltaTime); });
			}
			else if (currentVibration == 0) {
				elem.css("position", "relative").animate({ "left": "0" }, timeDeviation);
			}
		};

		return this.each(function (number, elem, amplitude, timeDeviation) {
			new make(setting.vibration, $(elem), setting.amplitude, setting.timeFirstDeviation);
		});
	};
})(jQuery);

