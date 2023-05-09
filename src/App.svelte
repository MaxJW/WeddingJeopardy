<script lang="ts">
    import Jeopardy from './components/Jeopardy.svelte';

    let start = false;
</script>

{#if start}
    <Jeopardy />
{:else}
    <div class="center">
        <h1 class="welcome-text">Welcome to</h1>
        <h1 class="title-text">Wedding Jeopardy</h1>
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

    .welcome-text {
        font-size: 4rem;
        margin-bottom: 0;
    }

    .title-text {
        font-size: 8rem;
        margin-top: 0;
        font-family: 'Great Vibes', cursive;
        margin-bottom: 2rem;
    }
</style>
