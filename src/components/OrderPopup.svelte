<script lang="ts">
    import { crossfade, draw, fade, scale, slide } from "svelte/transition";
    import images from "../routes/gallery/images.json";
    import FancyButton from "./FancyButton.svelte";

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
            <div class="left-col">
                <h2>Ordering</h2>
                <h3>{images[imageIndex].description}</h3>
                <img src={images[imageIndex].src} />
            </div>
            <div class="right-col">
                {#each popupOptions as opt}
                    <div class="right-col-row">
                        <div class="col-1">
                            <p>{opt.text}</p>
                        </div>
                        <div class="col-2">
                            <input type="number" />
                        </div>
                        <div class="col-3">
                            <p>{opt.price}&euro;</p>
                        </div>
                    </div>
                {/each}
                <div class="right-col-order-div">
                    <div>
                        <p>Total amount: 0&euro;</p>
                        <FancyButton
                            callback={() => {
                                console.log("Add to cart");
                            }}>Add to cart</FancyButton
                        >
                    </div>
                    <div>
                        <p>Download cost: 0&euro;</p>
                        <FancyButton
                            callback={() => {
                                console.log("Add to cart");
                            }}>Download</FancyButton
                        >
                    </div>
                </div>
            </div>
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
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .left-col {
                height: 100%;
            }

            .right-col {
                .right-col-row {
                    display: grid;
                    grid-template-columns: 30rem auto 2rem;
                    gap: 1rem;

                    input {
                        width: 3rem;
                    }

                    * {
                        display: flex;
                        justify-content: end;
                    }
                }

                .right-col-order-div {
                    * {
                        display: flex;
                        flex-direction: row;
                        gap: 2rem;
                    }
                }
            }

            img {
                max-width: 80%;
                max-height: 80%;
            }
        }
    }
</style>
