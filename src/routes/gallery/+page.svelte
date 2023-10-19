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

    //import images from "./images.json";
    //console.log(images[0].src);

    async function sdasdfsdf() {
        let images: any[] = [];
        for (let i = 0; i < 3; ++i) {
            let y = await fetch("https://api.thecatapi.com/v1/images/search?limit=10").then(x => x.json());
            y.forEach(e => {
                images.push({ src: e.url, title: "Foobar", description: "Lorem ipsum dolor sit amet" });
                console.log(e);
            });
        }
        return images;
    }

    let images = sdasdfsdf();
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<div id="content-inner">
    <p>Foobar</p>
    <div id="gallery">
        {#await images then result}
            {#each result as image}
                <div class="gallery-item">
                    <img
                        src={image.src
                            ? image.src
                            : "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"}
                    />
                    <h2 class="title">{image.title}</h2>
                </div>
            {/each}
        {/await}
    </div>
</div>

<style lang="scss">
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
            img {
                width: 100%;
            }

            position: relative;
            background-color: #eee;
            padding: 1rem;
            border-radius: 3%;

            .title {
                position: absolute;
                left: 1rem;
                bottom: 1rem;
            }
        }
    }
</style>
