<script setup>
import { ref } from 'vue'
import { getCurrentDate, getUnixTime } from '../utils/UnixDateTimeFunctions';

const epochTime = ref(getUnixTime())
const { loc, gmt } = getCurrentDate()
const localeTime = ref(loc)
const gmTime = ref(gmt)


// Update the unix every single second
setInterval(() => {
    epochTime.value = getUnixTime()
    const { loc, gmt } = getCurrentDate()
    localeTime.value = ref(loc)
    gmTime.value = ref(gmt)
}, [1000])

</script>


<template>
    <div class="d-flex flex-column align-items-start gap-4 justify-content-center">
        <div class="align-items-center gap-2">
            Current UNIX
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