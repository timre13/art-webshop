<script lang="ts">
    import { onMount } from "svelte";
    import imageData from "../gallery/images.json";
    import orderTypes from "../../ordertypes.json";
    import FancyButton from "../../components/FancyButton.svelte";

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
        pictureId: number = 0;
        orderTypeId: number = 0;

        constructor(
            pictureUrl: string,
            orderTypeStr: string,
            count: number,
            itemName: string,
            pricePerItem: number,
            priceSum: number,
            pictureId: number,
            orderTypeId: number
        ) {
            this.pictureUrl = pictureUrl;
            this.orderTypeStr = orderTypeStr;
            this.count = count;
            this.itemName = itemName;
            this.pricePerItem = pricePerItem;
            this.priceSum = priceSum;
            this.pictureId = pictureId;
            this.orderTypeId = orderTypeId;
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
    function loadCartItemsNormDisp() {
        let cartItemsNorm: Array<Array<any>> = [];
        cartItemsNorm = Object.entries(getCartItems()).map(x => [JSON.parse(x[0]), x[1]]);
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
                orderType.price * itemCount,
                x[0].picture,
                x[0].orderType
            );
        });
    }
    onMount(() => loadCartItemsNormDisp());

    let cartTotal: number = 0;
    $: cartItemsNormDisp && recalcCartTotal();
    function recalcCartTotal() {
        cartTotal = cartItemsNormDisp.reduce((prev, curr) => {
            return prev + curr.priceSum;
        }, 0);
        console.log(`Total price: ${cartTotal}`);
    }

    function removeItemFromCart(item: CartItemNormDisp) {
        console.log(`Removing: ${item}`);

        if (!localStorage) {
            return;
        }

        let cartItems: Array<CartItem> = JSON.parse(localStorage.getItem("cartItems") || "[]");
        cartItems = cartItems.filter(x => x.picture != item.pictureId || x.orderType != item.orderTypeId);

        localStorage.setItem("cartItems", JSON.stringify(cartItems));

        loadCartItemsNormDisp();
    }

    function onItemCountChanged(e: Event) {
        const target = e.target as HTMLInputElement;
        target.value = Math.max(Number.parseInt(target.value), 1).toString();

        // Remélem, hogy soha többé nem kell JS/TS-hez nyúlnom (ikszdé)
        // Ne módosítsd a lista markup-ot, mert ez eltörik
        const listI: number =
            Number.parseInt(
                target.parentElement?.parentElement?.firstChild?.firstChild?.childNodes[1].nodeValue ?? ""
            ) - 1;

        let cartItems: Array<CartItem> = JSON.parse(localStorage.getItem("cartItems") || "[]");
        console.log(listI);
        console.log(cartItems[listI]);
        cartItems[listI].count = Number.parseInt(target.value);

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        loadCartItemsNormDisp();
    }
</script>

<title>Cart</title>

<!-- svelte-ignore a11y-missing-attribute -->
<div id="content-inner">
    <h1>Your cart</h1>
    {#if cartItemsNormDisp.length == 0}
        <h2 id="cart-empty-label">
            The cart is empty.
            <br />You can order items from the <a href="/gallery">Gallery</a>.
        </h2>
    {/if}
    <div id="item-list">
        {#if cartItemsNormDisp.length != 0}
            <div id="list-header">
                <div class="header-col"><i>#</i></div>
                <div class="header-col">Thumbnail</div>
                <div class="header-col">Title</div>
                <div class="header-col">Format</div>
                <div class="header-col">Price/Item</div>
                <div class="header-col">Count</div>
                <div class="header-col">Total</div>
                <div class="header-col" />
            </div>
        {/if}
        {#each cartItemsNormDisp as item, i}
            <div class="item">
                <div class="item-col"><i>{i + 1}</i></div>
                <div class="item-col img-col"><img src={item.pictureUrl} /></div>
                <div class="item-col">{item.itemName}</div>
                <div class="item-col">{item.orderTypeStr}</div>
                <div class="item-col">{item.pricePerItem}&euro;</div>
                <div class="item-col">
                    <input
                        value={item.count}
                        class="item-cnt-in"
                        type="number"
                        min="1"
                        title="Change number of items to order"
                        on:change={onItemCountChanged}
                    />
                </div>
                <div class="item-col"><b>{item.priceSum}&euro;</b></div>
                <div class="item-col">
                    <button class="remove-btn" title="Remove from cart" on:click={() => removeItemFromCart(item)}
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
    <div id="cart-summary">
        <h3>Order Total: <b>{cartTotal}&euro;</b></h3>
        <FancyButton callback={_ => console.log("Checkout")} isEnabled={cartTotal > 0}>Proceed to checkout</FancyButton>
    </div>
</div>

<style lang="scss">
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
    #item-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-left: 10rem;
        margin-right: 10rem;
        margin-bottom: 6rem;

        @media (max-width: 1400px) {
            margin-left: 2rem;
            margin-right: 2rem;
        }

        #list-header {
            position: sticky;
            top: 50px;
            background-color: rgba(0, 0, 0, 0.4);
            padding-right: 1rem;
            padding-left: 1rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;

            display: grid;
            grid-template-columns: 1rem 1fr 1.5fr 2fr 1fr 1fr 1fr 2rem;
            gap: 1rem;

            .header-col {
                font-weight: bold;
            }

            .header-col:nth-of-type(2) {
                width: 10rem;
                margin-left: 1rem;
            }
        }

        .item {
            background-color: #ccdde4;
            border-radius: 10px;
            padding-right: 1rem;
            padding-left: 1rem;

            display: grid;
            grid-template-columns: 1rem 1fr 1.5fr 2fr 1fr 1fr 1fr 2rem;
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

                .item-cnt-in {
                    width: 3rem;
                    text-align: right;
                    font-weight: bold;
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

    #cart-empty-label {
        width: 100%;
        margin-top: 5%;
        text-align: center;

        a {
            color: steelblue;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    #cart-summary {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: gray;
        padding-left: 4rem;
        padding-right: 4rem;
        color: white;
        background-color: rgba(0, 0, 0, 0.7);
        font-size: large;
        padding-top: 1rem;
        padding-bottom: 1rem;

        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
        gap: 1rem 4rem;

        @media (max-width: 900px) {
            justify-content: center;
        }

        @media (max-width: 640px) {
            flex-direction: column;
        }
    }
</style>
