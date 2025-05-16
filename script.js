function getFormvalue() {
	event.preventDefault(); // Prevent page reload

      const fname = document.forms["userForm"]["fname"].value.trim();
      const lname = document.forms["userForm"]["lname"].value.trim();

      if (!fname && !lname) {
        alert("Please enter your first and last name.");
        return;
      }

      alert(`${fname} ${lname}`);
    }
  </script>

    //Write your code here

}
