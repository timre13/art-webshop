<title>Welcome page</title>
<div id="content-inner">
    <div id="welcome">
        <h1>Art Website</h1>
        <div class="intro">
            <h2 class="introtitle">Hello my name is [NAME]! Nice to meet you!</h2>
        </div>
        <div id="Longerintro">
            <img
                class="intropic"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="A very flattering picture"
            />
            <h2 class="introtitle">
                I am from <a href="https://www.openstreetmap.org/relation/1130390">[CITY]</a> ,
                <a href="https://www.openstreetmap.org/relation/21335">[COUNTRY]</a>. I am [AGE] years old. I formally
                study(/ studied) at <a href="https://szbi-pg.hu">[ALMA MATER]</a>, from [YEAR] to [YEAR]. I'm most
                comfortable with <a href="https://en.wikipedia.org/wiki/Postmodernism">[ARTSTYLE]</a> and
                <a href="https://en.wikipedia.org/wiki/Posthumanism">[ARTSTYLE]</a>, and you can check out my work on
                <a href="https://facebook.com">[SOCIAL MEDIA]</a>, <a href="https://twitter.com">[SOCIAL MEDIA]</a> and
                <a href="https://instagram.com">[SOCIAL MEDIA]</a>.
            </h2>
        </div>
    </div>
</div>

<style lang="scss">
    #content-inner {
        margin-top: -50px;
        background-image: url(/bg1.png);
        background-attachment: fixed;

        background-size: auto;
        min-height: 80vh;
        max-height: 100vh;
        background-repeat: no-repeat;
        h1 {
            font-size: 80px !important;
            margin-left: 20px;
        }

        h2 {
            font-size: 40px !important;
        }

        h1,
        h2 {
            font-variant: small-caps !important;
        }

        #welcome {
            padding-top: 15vh;
            padding-left: 5rem;

            .intro {
                display: flex;
                margin-right: 30px;
                .introtitle {
                    flex: 1;
                    margin-right: 50px;
                }
            }
            #Longerintro {
                margin-top: 100vh;
                display: flex;
                margin-right: 50px;
                .introtitle {
                    flex: 1;
                    font-size: 30px;
                    margin-left: 10px;
                }
                .intropic {
                    width: 300px;
                    height: 300px;
                }
                max-height: 100vh;
                min-height: 80vh;
            }
        }
    }
</style>
