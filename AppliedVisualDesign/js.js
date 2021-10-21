let person = {
    firstname: "fName",
    lastName: "lName",
    info: function () {
        let i = 2;
        while (i < 10) {
            console.log(this.firstname + " " + this.lastName);
            i+=1;
        }
    }
};

person.info();


days = ['mon','tuesday','wednesday','thursday','friday','saturday']

days.forEach(function(s,index){
    console.log(s+" "+index);
    }
);