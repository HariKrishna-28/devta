<script setup>
import { ref } from 'vue';
import { formatDates } from '../../components/utils/UnixDateTimeFunctions';
import DateTimeConstants from '../../components/DateTimeConstants/DateTimeConstants.vue';

const unix = ref()
const data = ref()

const handleChange = () => {
    data.value = formatDates(unix.value)
}


</script>

<template>
    <div class="grid">
        <div class="block card block1">
            <div class="p-3">
                <h2>
                    <strong>
                        Unix to date converter
                    </strong>
                </h2>
                <input v-model="unix" @input="handleChange" type="text" class="form-control"
                    placeholder="Enter unix timestamp">

                <div class="mt-2 p-2">
                    <DateTimeConstants />
                </div>
            </div>
        </div>
        <div class="block card block2">
            <div v-if="unix">
                <div v-for="(value, key) in data" class="p-1 d-flex flex-column gap-2" :key="key">
                    {{ key }} : {{ value }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped src="./style.css" />