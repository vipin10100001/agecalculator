function calculateAge() {
    const dobInput = document.getElementById("dob").value;
    const dob = new Date(dobInput);
    const today = new Date();
    const age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
    document.getElementById("result").innerHTML = `Your age is ${age} years.`;
  }
  