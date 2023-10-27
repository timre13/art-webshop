<form action="POST">
    <label>
        First name: <span style="color: red;">*</span>
        <br>
        <input name="fname" type="text">
    </label>
    <br>
    <label>
        Last name: 
        <br>
        <input name="lname" type="text">
    </label>
    <br>
    <label>
		Email: <span style="color: red;">*</span>
        <br>
		<input name="email" type="email">
	</label>
    <br>
    <label>
        Phone number:
        <br>
        <input type="tel" name="phone">
    </label>
    <br>
    <label>
        I prefer contact by... <span style="color: red;">*</span>
        <br>
        <label class="radiob">
            <input type="radio" name="contact" id="email">
            E-mail
        </label>
        <label class="radiob">
            <input type="radio" name="contact" id="whatsapp">
            Text(Whatsapp)
        </label>
        <label class="radiob">
            <input type="radio" name="contact" id="other">
            Other (in request)
        </label>
    </label>
    <br>
    <label>
        Request: <span style="color: red;">*</span>
        <br>
        <input name="request" type="text">
    </label>
    <br>
    <button type="submit">
        Submit
    </button>
</form>

<style>
    label{
        font-size: 24px;
    }
    .radiob{
        font-size: 12px;
    }
    form{
        margin-left: 67px;
        vertical-align: middle;
    }
</style>