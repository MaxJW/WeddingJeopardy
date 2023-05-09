<script>
    import { fade, scale } from 'svelte/transition';
    import jsonData from '../assets/data.json';

    const pointValues = [100, 200, 300, 400, 500];

    let activeRound = 0;
    const rounds = jsonData.rounds;
    let categories = rounds[activeRound].categories;
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

    function showQuestion(question) {
        activeQuestion = question;
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
        if (e.code === 'Escape') {
            hideQuestion();
        } else if (e.code === 'Space') {
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
                        {question.done ? '✅' : '£' + question.points}
                    </div>
                {/if}
            {/each}
        {/each}
    {/each}

    {#if activeQuestion !== null}
        <div class="question-modal" transition:scale>
            <div class="modal-content">
                <h2>{activeQuestion.question}</h2>
                {#if answerRevealed}
                    <h2>---</h2>
                    <h2 transition:fade>{activeQuestion.answer}</h2>
                    <button on:click={hideQuestion}>Close</button>
                {:else}
                    <button on:click={showAnswer}>Show Answer</button>
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
        font-size: 1.5rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #4a684c;
        color: white;
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
        font-size: 2rem;
        font-weight: bold;
        color: #2d3748;
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
        justify-content: center;
        align-items: center;
        z-index: 999;
        background-color: white;
        text-align: center;
    }

    .question-modal .modal-content {
        text-align: center;
        font-size: 4em;
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
