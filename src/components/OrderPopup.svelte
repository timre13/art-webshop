<script lang="ts">
    import { crossfade, draw, fade, scale, slide } from "svelte/transition";
    import images from "../routes/gallery/images.json";
    import FancyButton from "./FancyButton.svelte";

    export let imageIndex: number;

    import popupOptions from "../ordertypes.json";

    let orderCounts: Array<number> = Array(popupOptions.length).fill(0);
    let orderSum: number = 0;

    $: orderCounts &&
        (function () {
            orderCounts = orderCounts.map(x => Math.max(0, x));
            orderSum = orderCounts.reduce((prev, curr, i) => prev + popupOptions[i].price * curr, 0);
            showNoItemsMsg = false;
        })();

    function hidePopup() {
        orderCounts.fill(0);
        orderSum = 0;
        imageIndex = -1;
        showNoItemsMsg = false;
    }

    class CartItem {
        picture: number = 0;
        orderType: number = 0;
        count: number = 0;

        constructor(picture: number, orderType: number, count: number) {
            this.picture = picture;
            this.orderType = orderType;
            this.count = count;
        }
    }
    function onAddToCartButtonClick() {
        console.log("Add to cart");
        if (orderCounts.every(x => x == 0)) {
            showNoItemsMsg = true;
            return;
        }

        let cartItems: Array<CartItem> = JSON.parse(localStorage.getItem("cartItems") || "[]");
        console.log(cartItems);

        orderCounts.forEach((val, i) => {
            if (val != 0) {
                // If an item is already in the cart, increment the count. Otherwise add to the cart.
                const foundI = cartItems.findIndex((x: any) => x.picture == imageIndex && x.orderType == i);
                if (foundI == -1) {
                    cartItems.push({ picture: imageIndex, orderType: i, count: val });
                } else {
                    cartItems[foundI].count += val;
                }
            }
        });

        console.log(cartItems);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        hidePopup();
    }

    let showNoItemsMsg: boolean = false;
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if imageIndex != -1}
    <div id="order-popup" in:fade out:fade on:click={hidePopup} class:visible={imageIndex != -1}>
        <div
            id="popup-content"
            in:scale
            out:scale
            on:click={e => {
                e.stopPropagation();
            }}
        >
            <div class="left-col">
                <img src={images[imageIndex].src} />
                <div>
                    <h2>{images[imageIndex].title}</h2>
                    <h3>{images[imageIndex].description}</h3>
                </div>
            </div>
            <div class="right-col">
                <div class="right-col-top">
                    {#each popupOptions as opt, i}
                        <div class="right-col-row">
                            <div class="col-1">
                                <p>{opt.text}</p>
                            </div>
                            <div class="col-2">
                                <input type="number" bind:value={orderCounts[i]} />
                            </div>
                            <div class="col-3">
                                <p>{opt.price}&euro;</p>
                            </div>
                        </div>
                    {/each}
                </div>
                <div class="right-col-bottom">
                    {#if showNoItemsMsg}
                        <div class="button-row">
                            <p id="no-item-msg">Please select some items.</p>
                        </div>
                    {/if}
                    <div class="button-row">
                        <p>Total amount: {orderSum}&euro;</p>
                        <FancyButton callback={onAddToCartButtonClick}>Add to cart</FancyButton>
                    </div>
                    <div class="button-row">
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
            max-width: 100%;
            width: 70%;
            height: 70%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            flex-wrap: wrap;

            .left-col {
                height: 100%;
                max-width: 50%;
                display: flex;
                flex-direction: column;
                align-items: start;
                gap: 1rem;

                img {
                    height: 100%;
                    max-height: 90%;
                    max-width: 100%;
                    object-fit: contain;
                    object-position: 0px 0px;
                }
            }

            .right-col {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: end;

                .right-col-top {
                    .right-col-row {
                        display: grid;
                        grid-template-columns: 30rem auto 2rem;
                        gap: 1rem;

                        input {
                            width: 3rem;
                        }

                        p {
                            font-size: large;
                        }

                        * {
                            display: flex;
                            justify-content: end;
                        }
                    }
                }

                .right-col-bottom {
                    .button-row {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: end;
                        height: 3rem;
                        gap: 1rem;

                        p {
                            font-size: x-large;
                        }

                        #no-item-msg {
                            color: red;
                            font-size: medium;
                        }
                    }
                }
            }
        }
    }
</style>
