const student = {
    firstName: "ლევან",
    lastName: "ყიფიანი",
    age: 29,
    scores: [4, 7, 5, 3, 2],
    
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  console.log(student.fullName());