<script>
    import { fade, scale } from 'svelte/transition';
    import jsonData from '../assets/data.json';

    const pointValues = [100, 200, 300, 400, 500];

    let activeRound = 0;
    const rounds = jsonData.rounds;
    let categories = rounds[activeRound].categories;

    let moneyBig = true;
    let activeQuestion = null;
    let answerRevealed = false;
    let allQuestionsDone = false;

    function nextRound() {
        activeRound++;
        categories = rounds[activeRound].categories;
        activeQuestion = null;
        answerRevealed = false;
        allQuestionsDone = false;
    }

    async function showQuestion(question) {
        activeQuestion = question;
        moneyBig = true;
        setTimeout(() => {
            moneyBig = false;
        }, 2000);
    }

    function showAnswer() {
        answerRevealed = true;
        activeQuestion.done = true;
        categories = categories;
    }

    function hideQuestion() {
        activeQuestion = null;
        answerRevealed = false;
        checkAllQuestionsDone();
    }

    function handleKeyPress(e) {
        if (!activeQuestion) return;
        switch (e.code) {
            case 'Escape':
                hideQuestion();
                break;
            case 'Space':
                moveForward();
                break;
            default:
                break;
        }
    }

    function moveForward() {
        if (!moneyBig) {
            answerRevealed ? hideQuestion() : showAnswer();
        }
    }

    function checkAllQuestionsDone() {
        const allQuestions = [].concat(...categories.map((c) => c.questions));
        allQuestionsDone = allQuestions.every((q) => q.done);
    }
</script>

<div class="jeopardy-board" transition:fade>
    {#each categories as category}
        <div class="category">{category.name}</div>
    {/each}

    {#each pointValues as pointValue, k}
        {#each categories as category, i}
            {#each category.questions as question, j}
                {#if question.points === pointValue}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div
                        class="tile"
                        class:done={question.done}
                        on:click={() => showQuestion(question)}
                    >
                        {question.done ? '✅' : question.points}
                    </div>
                {/if}
            {/each}
        {/each}
    {/each}

    {#if activeQuestion !== null}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="question-modal" transition:scale on:click={moveForward}>
            <div class="modal-content">
                {#if moneyBig}
                    <h2 in:fade>{activeQuestion.points}</h2>
                {:else if answerRevealed}
                    {#if activeQuestion.answer.startsWith('img:')}
                        <img
                            in:fade
                            src="/src/assets/picture_round/{activeQuestion.answer.substring(4)}.jpg"
                            alt="Answer"
                        />
                    {:else}
                        <h2 in:fade>{activeQuestion.answer}</h2>
                    {/if}
                {:else if activeQuestion.question.startsWith('img:')}
                    <img
                        in:fade
                        src="/src/assets/picture_round/{activeQuestion.question.substring(4)}.jpg"
                        alt="Question"
                    />
                {:else}
                    <h2 in:fade>{activeQuestion.question}</h2>
                {/if}
            </div>
        </div>
    {/if}
</div>

{#if activeRound < rounds.length - 1 && allQuestionsDone}
    <div class="next-round-button" transition:scale>
        <button on:click={nextRound}>Next Round</button>
    </div>
{/if}

<svelte:window on:keydown={handleKeyPress} />

<style>
    .jeopardy-board {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 6rem repeat(5, calc((100vh - 16.7rem) / 5));
        grid-gap: 1rem;
        padding: 1rem;
    }

    .category {
        font-size: 1.75rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #4a684c;
        color: white;
        border-radius: 2%;
    }

    .tile {
        width: 100%;
        height: 100%;
        margin: 0;
        cursor: pointer;
        background-color: #cbe0cf;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        font-weight: bold;
        color: #2d3748;
        border-radius: 2%;
    }

    .done {
        background-color: #4a684c;
        color: white;
    }

    .question-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        z-index: 999;
        background-color: #cfdfd0;
        text-align: center;
        cursor: default;
    }

    .question-modal .modal-content {
        text-align: center;
        font-size: 7em;
        text-transform: uppercase;
        padding: 75px;
    }

    .modal-content h2 {
        color: #2d3748;
    }

    .modal-content img {
        max-height: 90vh;
        max-width: 90vw;
    }

    .next-round-button {
        background-color: #48bb78;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
        text-align: center;
    }

    .next-round-button button {
        width: 50%;
        height: 40%;
        font-size: 5rem;
        border-radius: 100px;
    }
</style>
