<script setup>
import { ref } from 'vue'
import LeftCard from './Components/LeftCard.vue';
import RightCard from './Components/RightCard.vue';
import { dateToUnixTimestamp, formatDates, getRelativeTime, unixToDate } from './Utils/Converterfunctions'

const unix = ref()
const GMT = ref()
const LocalT = ref()
const dtoUnix = ref()
const relativeTime = ref()
const dates = ref()

const handleChange = (value) => {
    unix.value = value
    const { gmt, loc } = unixToDate(value)
    GMT.value = gmt
    LocalT.value = loc
    relativeTime.value = getRelativeTime(value)
    dates.value = formatDates(value)
    console.log(dates.value)
}

const handleDateChange = (value) => {
    dtoUnix.value = dateToUnixTimestamp(value)
}

</script>

<template>
    <div class="d-flex p-2 flex-direction-row gap-2 min-vh-100">
        <!-- menu card -->
        <div class="w-25 text-alighn-center">
            Unix to date
        </div>
        <!-- <div class="w-25 p-1 rounded border">
            <button type="button" @click="handleClick" class="btn btn-primary">
                {{ buttonText }}
            </button>
        </div> -->

        <div class="w-75 d-flex flex-direction-row gap-2">
            <div class="w-50 p-1 rounded border">
                <LeftCard @handle-date-change="(date) => handleDateChange(date)"
                    @handle-change="(name) => handleChange(name)" />
            </div>
            <div class="w-50 p-1 rounded border">
                <RightCard :unix="unix" :date-loc="LocalT" :date-gmt="GMT" :date-to-unix="dtoUnix"
                    :rel-time="relativeTime" />
            </div>

        </div>
    </div>
</template>