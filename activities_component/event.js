var Activity = require('./activity.js');

function Event(startDateTime, endDateTime) {

}

Event.prototype = Object.create(Activity.prototype);

Event.prototype.isAllDay = function () {
    // TODO: oh god why?!
    return false;
};

module.exports = Event;
