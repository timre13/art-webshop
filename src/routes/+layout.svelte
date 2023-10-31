<header>
    <div id="header-left">
        <a href="/">Art website</a>
    </div>

    <div id="header-right">
        <a href="/gallery">Gallery</a>
        <a href="/quote">Quote</a>
        <a href="/">About Me</a>
        <a href="/" class="svg-link"
            ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"
                ><path
                    d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                /></svg
            ></a
        >
    </div>
</header>
<div id="content">
    <slot />
</div>

<style lang="scss">
    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    $header-height: 50px;

    #content {
        padding-top: $header-height;
    }

    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap");

    header {
        background-color: rgba($color: #000000, $alpha: 0.4);
        height: $header-height;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-left: 1rem;
        padding-right: 1rem;
        position: fixed;
        width: 100vw;
        z-index: 999;

        a {
            text-decoration: none;
            vertical-align: middle;
            height: 100%;
            line-height: $header-height;
            vertical-align: middle;
            color: white;
            padding-left: 1rem;
            padding-right: 1rem;

            &:hover {
                background-color: rgba($color: #000000, $alpha: 0.2);
            }
        }

        .svg-link {
            height: $header-height;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
                height: 50%;
            }

            * {
                fill: white;
            }
        }

        #header-left,
        #header-right {
            display: flex;
            flex-direction: row;
        }

        #header-right {
            justify-content: right;
            gap: 1rem;
        }
    }
</style>
