<script lang="ts">
    import { onMount } from "svelte";

    class Image {
        src: string;
        title: string;
        description: string;

        constructor(src: string, title: string, description: string) {
            this.src = src;
            this.title = title;
            this.description = description;
        }
    }

    import images from "$lib/images.json";
    import OrderPopup from "../../components/OrderPopup.svelte";

    let openImage: number = -1;
</script>

<title>Gallery</title>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<h1>Gallery</h1>
<div id="content-inner">
    <div id="gallery">
        {#each images as image, index}
            <div
                class="gallery-item"
                on:click={() => {
                    openImage = index;
                }}
            >
                <div class="image-div">
                    <img
                        src={image.src
                            ? image.src
                            : "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"}
                    />
                </div>
                <h2 class="title">{image.title}</h2>
            </div>
        {/each}
        <OrderPopup bind:imageIndex={openImage} />
    </div>
</div>

<style lang="scss">
    h1 {
        font-size: 80px !important;
        margin-left: 200px;
    }

    h2 {
        font-size: 20px !important;
    }

    h1 {
        font-variant: small-caps !important;
    }
    #gallery {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        gap: 3rem;
        margin-left: 4rem;
        margin-right: 4rem;

        .gallery-item {
            max-width: 300px;
            max-height: 300px;
            overflow: hidden;
            position: relative;
            background-color: #eee;
            padding: 1rem;
            border-radius: 3%;
            cursor: pointer;

            .image-div {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: row;
                justify-content: center;

                img {
                    max-width: 100%;
                    max-height: 100%;
                }
            }

            .title {
                position: absolute;
                left: 0;
                bottom: 1rem;
                transform: translateY(3rem);
                opacity: 0;
                width: 100%;
                padding-left: 1rem;
                margin-bottom: -1rem;
                font-size: medium;

                transition: transform 300ms, opacity 300ms;
                transition-timing-function: ease-in-out;

                color: white;
                background-color: #00000055;
            }

            &:hover {
                .title {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        }
    }
</style>
