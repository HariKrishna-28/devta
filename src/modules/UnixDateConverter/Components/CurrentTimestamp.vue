<script setup>
import { ref } from 'vue'
import { copyToClipboard, getEpochTime } from '../Utils/Converterfunctions';
const epochTime = ref(getEpochTime())

// Update the epoch every single second
setInterval(() => {
    epochTime.value = getEpochTime()
}, [1000])

const handleClick = async () => {
    copyToClipboard(epochTime.value)
}
</script>


<template>
    <div class="d-flex p-3 flex-direction-row align-items-center gap-4 justify-content-start">
        The current Unix epoch time is
        <strong>
            {{ epochTime }}
        </strong>
        <copyIcon />
        <button type="button" @click="handleClick" class="btn btn-primary">
            Copy
        </button>

    </div>
</template>