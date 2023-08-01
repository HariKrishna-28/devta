<script setup>
import { copyToClipboard, labelFormatter } from '../utils/UnixDateTimeFunctions';

const props = defineProps({
    key: String,
    value: String
})

const handleClick = (value) => {
    copyToClipboard(value)
}
</script>


<template>
    <div role="button" @click="handleClick(value)" class=" card p-1 flex flex-row">
        <strong> {{ labelFormatter(key) }} </strong> : {{ value }}
    </div>
</template>