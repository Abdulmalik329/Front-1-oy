const usersForm = document.getElementById("usersForm")

let users = []



usersForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const { name, age, gender} = event.target

    users.push({
        id: Date.now(),
        name:name.value,
        age:age.value,
        gender:gender.value

    });
    render()
    event.target.reset();
})

document.addEventListener("DOMContentLoaded", () => render())