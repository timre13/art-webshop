<script lang="ts">
    import { crossfade, draw, fade, scale, slide } from "svelte/transition";
    import images from "../routes/gallery/images.json";

    export let imageIndex: number;

    let popupOptions = [
        { text: "10cm x 8cm card sized paper print", price: 5 },
        { text: "10cm x 8cm card sized paper print (laminated)", price: 10 },
        { text: "10cm x 8cm card sized metal print", price: 55 },
        { text: "100cm x 80cm wall decor print", price: 30 },
        { text: "100cm x 80cm wall decor print(laminated)", price: 50 },
        { text: "100cm x 80cm wall decor print framed", price: 100 },
        { text: "100cm x 80cm wall decor metal print ", price: 95 }
    ];
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if imageIndex != -1}
    <div
        id="order-popup"
        in:fade
        out:fade
        on:click={_ => {
            imageIndex = -1;
        }}
        class:visible={imageIndex != -1}
    >
        <div
            id="popup-content"
            in:scale
            out:scale
            on:click={e => {
                e.stopPropagation();
            }}
        >
            <h2>Ordering</h2>
            <h3>{images[imageIndex].description}</h3>
            <img src={images[imageIndex].src} />
        </div>
    </div>

    <style>
        body {
            overflow: hidden;
        }
        .visible {
            opacity: 1;
        }
    </style>
{/if}

<style lang="scss">
    #order-popup {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(10px);

        #popup-content {
            position: fixed;
            left: 50%;
            top: 50%;
            background-color: white;
            box-shadow: 5px 5px 25px 2px black;
            padding: 2rem;
            transform: translate(-50%, -50%);
            width: 70%;
            height: 70%;

            img {
                max-width: 80%;
                max-height: 80%;
            }
        }
    }
</style>
