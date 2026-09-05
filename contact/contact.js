const form = document.querySelector('#form_container');

form.addEventListener("submit", async (event) => {
    try {
        event.preventDefault();


        // form fields 
        const botcheck = form.querySelector("[name='botcheck']").checked;
        const firstName = form.querySelector("[name='firstName']").value.trim();
        const lastName = form.querySelector("[name='lastName']").value.trim();
        const PhoneNumber = form.querySelector("[name='PhoneNumber']").value.trim();
        const email = form.querySelector("[name='email']").value.trim();
        // const EventType = form.querySelector("[name='EventType']").value;
        const EventDate = form.querySelector("[name='EventDate']").value;
        const GuestCount = form.querySelector("[name='GuestCount']").value;
        const Message = form.querySelector("[name='Message']").value.trim();


        // bot check
        if (botcheck) return;



        // firstname validations
        if (firstName === "") {
            throw Error("Enter First Name");
        }
        const firstNameRegex = /^[a-zA-Z\s']+$/;
        if (!firstNameRegex.test(firstName)) {
            throw Error("First Name can only contain letters and spaces");
        }
        if (15 < firstName.length) {
            throw Error("First Name exceeds limit");
        }


        // lastname validations
        if (lastName === "") {
            throw Error("Enter Last Name");
        }
        const lastNameRegex = /^[a-zA-Z\s']+$/;
        if (!lastNameRegex.test(lastName)) {
            throw Error("Last Name can only contain letters and spaces");
        }
        if (15 < lastName.length) {
            throw Error("Last Name exceeds limit");
        }



        // phonenumber validations
        if (PhoneNumber === "") {
            throw Error("Enter Phone Number");
        }
        const phoneRegex = /^\+?[0-9]{10,}$/;
        if (!phoneRegex.test(PhoneNumber)) {
            throw Error("Please enter a valid phone number");
        }




        // email validations
        if (email === "") {
            throw Error("Enter Email");
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            throw Error("Please enter a valid email address.");
        }



        // EventDate validations
        if (EventDate === "") {
            throw Error("Enter Event Date");
        }
        const selectedDate = new Date(EventDate);
        const minAllowedDate = new Date();
        minAllowedDate.setMonth(minAllowedDate.getMonth() + 3);
        if (selectedDate < minAllowedDate) {
            throw Error("Event date must be scheduled at least 3 months in advance");
        }


        // GuestCount validations
        if (GuestCount.trim() !== "") {
            const digitsOnlyRegex = /^[0-9]{0,3}$/;
            if (parseInt(GuestCount, 10) <= 0) {
                throw Error("Guest Count must be greater than zero");
            }
            if (!digitsOnlyRegex.test(GuestCount)) {
                throw Error("Guest Count must be a valid whole number");
            }
        }


        // Message validations
        if (Message.length > 500) {
            throw Error("Message cannot exceed 500 characters");
        }


        const payload = Object.fromEntries(new FormData(form));

        const res = await fetch("https://splitforms.com/api/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(payload)
        })

        if (res.ok) {
            alert("form submitted");
            form.reset();
        }
        else {
            alert("something went wrong");
        }

    } catch (Error) {
        await alert(Error.message);
    }
});