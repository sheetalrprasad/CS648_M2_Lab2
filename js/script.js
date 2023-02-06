window.addEventListener("load", () => {
    const form = document.getElementById("empForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const id = document.getElementById("id").value;
        const name = document.getElementById("name").value;
        const ext = document.getElementById("ext").value;
        const email = document.getElementById("email").value;
        const department = document.getElementById("department").value;
        console.log("ID: " + id + "\n" + "Name: " + name + "\n" + "Extension: " + ext + "\n" + "Email: " + email + "\n" + "Department: " + department);
    });
});