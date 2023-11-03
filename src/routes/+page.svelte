<div id="content-inner">
    <div id="welcome">
        <h1>Art Website</h1>
        <div class="intro">
            <h2 class="introtext">Hello my name is [NAME] and I am from <a href="https://www.openstreetmap.org/relation/1130390">[CITY]</a> , <a href="https://www.openstreetmap.org/relation/21335">[COUNTRY]</a>. I am [AGE] years old. I formally study(/ studied) at <a href="https://szbi-pg.hu">[ALMA MATER]</a>, from [YEAR] to [YEAR]. I'm most comfortable with <a href="">[ARTSTYLE]</a> and <a href="">[ARTSTYLE]</a>, and you can check out my work on <a href="facebook.com">[SOCIAL MEDIA]</a>, <a href="twitter.com">[SOCIAL MEDIA]</a> and <a href="instagram.com">[SOCIAL MEDIA]</a>.</h2>
            <img class="intropic" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="A very flattering picture">
        </div>
        
    </div>
</div>

<style lang="scss">
    #content-inner {
        margin-top: -50px;
        background-image: url(bg1.png);
        background-size: cover;
        min-height: 100vh;

        #welcome {
            padding-top: 15vh;
            padding-left: 5rem;

            h1 {
                font-size: 60px;
            }

            h2 {
                font-size: 40px;
            }

            h1,
            h2 {
                font-variant: small-caps;
            }
            .intro{
                display: flex;
                margin-right: 30px;
                .introtext{
                    flex: 1;
                    margin-right: 50px;
                }
                .intropic{
                    width: 400px;
                }
            }
        }
    }
</style>
