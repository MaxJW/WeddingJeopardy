<script lang="ts">
    import Jeopardy from './components/Jeopardy.svelte';

    let start = false;
    let password = '';
    const hash = (s) =>
        s.split('').reduce((a, b) => {
            a = (a << 5) - a + b.charCodeAt(0);
            return a & a;
        }, 0);
</script>

{#if start}
    <Jeopardy />
{:else}
    <div class="center">
        <h1 class="title">Book Jeopardy</h1>
        <h2 class="subtitle">The Thursday <span>Murder</span> Club</h2>
        <h1 class="title">Edition</h1>
        <button
            on:click={() => {
                start = true;
            }}>Start</button
        >
    </div>
{/if}

<style>
    .center {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 90vh;
        background-color: transparent;
        color: #212427;
    }

    .title {
        font-size: 6rem;
        margin: 0;
    }
    .subtitle {
        font-family: 'Mate', serif;
        font-weight: 400;
        font-style: italic;
        font-size: 10rem;
        margin: 0;
    }

    .subtitle span {
        font-style: normal;
        font-weight: bold;
        color: var(--primary);
    }

    button {
        margin-top: 2rem;
    }
</style>
