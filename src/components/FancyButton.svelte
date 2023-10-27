<script lang="ts">
    import type { MouseEventHandler } from "svelte/elements";

    export let callback: MouseEventHandler<HTMLElement>;
</script>

<button class="fancy-button" on:click={callback}>
    <slot />
</button>

<style lang="scss">
    .fancy-button {
        background: red;
        color: white;
        border-radius: 8px;
        border: none;
        box-shadow: 1px 2px 6px black;
        padding: 0.5rem;
        cursor: pointer;
        transition-duration: all 200ms;

        &:hover {
            box-shadow: 1px 2px 8px 1px black !important;
        }

        &:active {
            background: #ff7777 !important;
        }
    }
</style>
