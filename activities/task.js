var Activity = require('./activity.js');

function Task(subject, who, what, dueDate, status) {
    Activity.apply(this, arguments);
    this.dueDate = dueDate;
    this.status = status;
}

Task.prototype = Object.create(Activity.prototype);

Task.prototype.getDueDate = function () {
    if (this.dateTime) {
        // TODO: oh god, not dates!
    }

    return null;
};

Task.prototype.complete = function () {
    this.status = 'Completed';
    return this;
};

Task.prototype.toString = function () {
    return this.subject + ', ' + this.who;
};

module.exports = Task;
