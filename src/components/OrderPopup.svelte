<script lang="ts">
    import type images from "../routes/gallery/images.json";

    export let image: (typeof images)[0];
    console.log(image);
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<div id="order-popup">
    <h2>Ordering</h2>
    <h3>{image.description}</h3>
    <img src={image.src} />
</div>

<style lang="scss">
    #order-popup {
        position: fixed;
        left: 50%;
        top: 50%;
        background-color: gray;
        padding: 2rem;
        transform: translate(-50%, -50%);

        img {
            max-width: 100px;
        }
    }
</style>
