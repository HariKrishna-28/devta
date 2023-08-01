<script setup>
import { ref } from 'vue';
import { formatDates } from '../../components/utils/UnixDateTimeFunctions';


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
            </div>
        </div>
        <div class="block card block2">
            <div v-if="unix">

            </div>
        </div>
    </div>
</template>

<style scoped src="./style.css" />