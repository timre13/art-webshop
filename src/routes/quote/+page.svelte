<title>Quote</title>
<script>
    import FancyButton from "../../components/FancyButton.svelte";

</script>
<div>
    <h1>Get a quote</h1>
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
            <textarea class="inpf" name="request" style="height: 220px;"></textarea>
        </label>
        <br>
        <div class="submitDiv">
            <FancyButton callback={() => {
                console.log("Submitted quote");
            }}>Submit</FancyButton>
        </div>
    </form>
</div>
<style>
    h1 {
        font-size: 80px !important; 
        margin-left: 80px;
        }

        h2 {
            font-size: 40px !important;
        }

        h1,
        h2 {
            font-variant: small-caps !important;
        }
    div{
        margin-top: 20px;
    }
    label{
        font-size: 24px;
    }
    .radiob{
        font-size: 14px;
    }
    form{
        margin-left: 67px;
        
        text-align: left;
    }
    .inpf{
        height: 28px;
        width: 330px;
    }
    .submitDiv{
        margin-top: 10px;
        margin-left: 170px;
    }


</style>