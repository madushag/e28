<template>
    <div v-bind:class="{ winner : winner == 'Player'}">
        <ul>
            <li>Round number : {{ number }}</li>
            <li>Winner: {{ winner }}</li>
            <li>
                <slot name="choice"></slot>
            </li>
            <li>
                <slot name="coin"></slot>
            </li>
        </ul>
        <button @click="$emit('delete-round', number)">Delete round</button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {};
    },
    props: {
        number: {
            type: Number,
            default: 0
        },
        winner: {
            type: String,
            default: ""
        }
    }
};
</script>

<style scoped>
.winner {
    background-color: green;
}
</style>