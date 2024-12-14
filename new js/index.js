let demo = document.getElementById("demo");
const person = {
    firstname: "Taha",
    lastname: "Yasin",
    age: 30,
    fullName: function () {
        return this.firstname + "" + this.lastname;
    }

};
demo.innerHTML = person.fullName();