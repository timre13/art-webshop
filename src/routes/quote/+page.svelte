<form action="POST">
    <label>
        First name: *
        <input name="fname" type="text">
    </label>
    <label>
        Last name: 
        <input name="lname" type="text">
    </label>
    <label>
		Email: *
		<input name="email" type="email">
	</label>
    <label>
        Phone number:
        <input type="tel" name="phone">
    </label>
    <label>
        I prefer contact by...
        <label>
            <input type="radio" name="contact" id="email">
            E-mail
        </label>
        <label>
            <input type="radio" name="contact" id="whatsapp">
            Text(Whatsapp)
        </label>
        <label>
            <input type="radio" name="contact" id="other">
            Other (in request)
        </label>
    </label>
    <label>
        Request: *
        <input name="request" type="text">
    </label>
    <button type="submit">
        Submit
    </button>
</form>