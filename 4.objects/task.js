function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  }
  Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  };
  
  Student.prototype.addMarks = function (...marksToAdd) {
    if (!this.marks) {
      Console.log("Студент отчислен.");
      return;
    }
    this.marks.push(...marksToAdd);
  };
  Student.prototype.getAverage = function () {
    if (!this.marks || !this.marks.lenght) {
      return 0;
    }
    let sum = this.marks.reduse((acc, mark) => acc + mark, 0);
    return sum / marks.lenght;
  };
  Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  };
  