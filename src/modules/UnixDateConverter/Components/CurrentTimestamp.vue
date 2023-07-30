<script setup>
import { ref } from 'vue'
import { copyToClipboard, getCurrentDate, getUnixTime } from '../Utils/Converterfunctions';
const epochTime = ref(getUnixTime())
const { loc, gmt } = getCurrentDate()
const localeTime = ref(loc)
const gmTime = ref(gmt)


// Update the unix every single second
setInterval(() => {
    epochTime.value = getUnixTime()
}, [1000])

const handleClick = async () => {
    copyToClipboard(epochTime.value)
}
</script>


<template>
    <div class="d-flex p-3 flex-column align-items-start gap-4 justify-content-center">
        <div class="d-flex align-items-center gap-2">
            Current UNIX timestamp:
            <strong class="p-2 rounded bg-light">
                {{ epochTime }}
            </strong>
        </div>

        <div class="align-items-center gap-2">
            Current Locale Time
            <strong class="p-2 rounded bg-light"> {{ localeTime }}</strong>
        </div>
        <div class="align-items-center gap-2">
            Current GMT
            <strong class="p-2 rounded bg-light"> {{ gmTime }}</strong>
        </div>

    </div>
</template>