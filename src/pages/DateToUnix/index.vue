<script setup>
import { ref, watch } from 'vue';
import { dateToUnixTimestamp, formatDates, labelFormatter } from '../../components/utils/UnixDateTimeFunctions';
import DateTimeConstants from '../../components/DateTimeConstants/DateTimeConstants.vue';
import { copyToClipboard } from '../../components/utils/UnixDateTimeFunctions';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


const date = ref()
const unix = ref()
const formatteddates = ref()

watch(date, (newDate, oldDate) => {
    if (newDate !== "") {
        try {
            const val = dateToUnixTimestamp(date.value)
            unix.value = val
            getFormatteddates(val)
        } catch (error) {
            unix.value = "Error"
        }
    }
})

const getFormatteddates = (date) => formatteddates.value = formatDates(date)

const handleClick = (value) => {
    copyToClipboard(value)
}


</script>

<template>
    <div class="grid bg-light">
        <div class="block card block1">
            <div class="p-3">
                <h2>
                    <strong>
                        Unix to date converter
                    </strong>
                </h2>
                <p class="muted">Enter a date or choose from the datepicker below</p>
                <div class="p-2">
                    <input v-model="date" type="text" class="form-control mb-2" placeholder="Enter Date">
                    <VueDatePicker v-model="date"></VueDatePicker>
                </div>
            </div>
        </div>
        <div class="block card block2 overflow-auto">
            <div v-if="date" class="mt-3">
                <div v-for="(value, key) in formatteddates" class="p-1 d-flex flex-column gap-2" :key="key">
                    <div role="button" @click="handleClick(value)" class="card p-1 flex flex-row">
                        <strong> {{ labelFormatter(key) }} </strong> : {{ value }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped src="./style.css" />