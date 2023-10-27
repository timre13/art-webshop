<div>
    <form action="POST">
        <label>
            First name: <span style="color: red;">*</span>
            <br>
            <input class="inpf" name="fname" type="text">
        </label>
        <br>
        <label>
            Last name: 
            <br>
            <input class="inpf" name="lname" type="text">
        </label>
        <br>
        <label>
            Email: <span style="color: red;">*</span>
            <br>
            <input class="inpf" name="email" type="email">
        </label>
        <br>
        <label>
            Phone number:
            <br>
            <input class="inpf" type="tel" name="phone">
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
            <input id="reqf" class="inpf" name="request" type="text">
        </label>
        <br>
        <button type="submit">
            Submit
        </button>
    </form>
</div>
<style>
    label{
        font-size: 24px;
    }
    .radiob{
        font-size: 14px;
    }
    form{
        margin-left: 67px;
        vertical-align: middle;
        margin-top: 100px;
    }
    .inpf{
        height: 28px;
        width: 330px;
    }
    #reqf{
        height: 220px;
    }

</style>