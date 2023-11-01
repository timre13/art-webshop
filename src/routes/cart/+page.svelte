<script lang="ts">
    import { onMount } from "svelte";
    import imageData from "../gallery/images.json";
    import orderTypes from "../../ordertypes.json";

    class CartItem {
        picture: number = 0;
        orderType: number = 0;
        count: number = 0;
    }

    class CartItemNormDisp {
        pictureUrl: string = "";
        orderTypeStr: string = "";
        count: number = 0;
        itemName: string = "";
        pricePerItem: number = 0;
        priceSum: number = 0;

        constructor(
            pictureUrl: string,
            orderTypeStr: string,
            count: number,
            itemName: string,
            pricePerItem: number,
            priceSum: number
        ) {
            this.pictureUrl = pictureUrl;
            this.orderTypeStr = orderTypeStr;
            this.count = count;
            this.itemName = itemName;
            this.pricePerItem = pricePerItem;
            this.priceSum = priceSum;
        }
    }

    function getCartItems() {
        if (!localStorage) {
            return {};
        }

        let rawItems: Array<CartItem> = JSON.parse(localStorage.getItem("cartItems") || "[]");
        let result: any = {};
        rawItems.forEach(x => {
            let key = JSON.stringify({ picture: x.picture, orderType: x.orderType });
            result[key] = 0;
        });
        rawItems.forEach(x => {
            let key = JSON.stringify({ picture: x.picture, orderType: x.orderType });
            result[key] += x.count;
        });
        return result;
    }

    let cartItemsNormDisp: Array<CartItemNormDisp> = [];
    onMount(() => {
        let cartItemsNorm: Array<Array<any>> = [];
        cartItemsNorm = Object.entries(getCartItems()).map(x => [JSON.parse(x[0]), x[1]]);
        /*
        cartItemsNorm = cartItemsNorm.sort((x, y) => {
            if (x[0].picture == y[0].picture) {
                return Math.sign(x[0].orderType - y[0].orderType);
            }
            return Math.sign(x[0].picture - y[0].picture);
        });
        */
        console.log(cartItemsNorm);

        cartItemsNormDisp = cartItemsNorm.map(x => {
            let imgData = imageData[x[0].picture];
            let orderType = orderTypes[x[0].orderType];
            let itemCount = x[1];
            return new CartItemNormDisp(
                imgData.src,
                orderType.text,
                itemCount,
                imgData.title,
                orderType.price,
                orderType.price * itemCount
            );
        });
    });
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<div id="content-inner">
    <h1>Cart</h1>
    <div id="item-list">
        {#each cartItemsNormDisp as item}
            <div class="item">
                <div class="item-col img-col"><img src={item.pictureUrl} /></div>
                <div class="item-col">Picture: <b>{item.itemName}</b></div>
                <div class="item-col">Format: <b>{item.orderTypeStr}</b></div>
                <div class="item-col">Price/item: <b>{item.pricePerItem}&euro;</b></div>
                <div class="item-col">Count: <b>{item.count}</b></div>
                <div class="item-col">Total for item: <b>{item.priceSum}&euro;</b></div>
                <div class="item-col">
                    <button class="remove-btn" title="Remove from cart" on:click={_ => console.log(item)}
                        ><svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 384 512"
                            ><path
                                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                            /></svg
                        ></button
                    >
                </div>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    #item-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-left: 10rem;
        margin-right: 10rem;

        .item {
            background-color: #ccdde4;
            border-radius: 10px;
            padding-right: 1rem;

            display: grid;
            grid-template-columns: 1fr 1fr 2fr 1fr 1fr 1fr auto;
            gap: 1rem;

            .item-col {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 1rem;
                height: 10rem;

                .remove-btn {
                    background-color: white;
                    border: 2px solid black;
                    width: 2rem;
                    height: 2rem;
                    cursor: pointer;

                    svg {
                        fill: rgb(194, 17, 17);

                        &:hover {
                            fill: rgb(255, 66, 66);
                        }
                    }
                }
            }

            .img-col {
                width: 10rem;
                max-width: 10rem;
                overflow: hidden;
                background-color: rgb(179, 178, 178);
                display: flex;
                flex-direction: row;
                justify-content: center;
                margin-left: 1rem;

                img {
                    height: 100%;
                    max-height: 100%;
                }
            }
        }
    }
</style>
