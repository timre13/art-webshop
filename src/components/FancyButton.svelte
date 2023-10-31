<script lang="ts">
    import type { MouseEventHandler } from "svelte/elements";

    export let callback: MouseEventHandler<HTMLElement>;
</script>

<button class="fancy-button" on:click={callback}>
    <slot />
</button>

<style lang="scss">
    .fancy-button {
        background: steelblue;
        color: white;
        border-radius: 8px;
        border: none;
        box-shadow: 1px 2px 6px black;
        padding: 0.5rem;
        cursor: pointer;
        font-size: x-large;
        min-width: 10rem;

        &:hover {
            box-shadow: 1px 2px 8px 1px black !important;
            background: rgb(90, 140, 181);
        }

        &:active {
            background: rgb(134, 183, 222);
        }
    }
</style>
