function Activity(subject, who, what) {
    this.subject = subject;
    this.who = who;
    this.what = what;
}

Activity.prototype.toString = function () {
    return this.subject;
};

module.exports = Activity; 
