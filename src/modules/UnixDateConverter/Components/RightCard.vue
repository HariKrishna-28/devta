<script setup>
import CurrentTimestamp from './CurrentTimestamp.vue';
const props = defineProps([
    "epoch", "dateLoc", "dateGmt", "dateToUnix", "relTime",
])

</script>

<template>
    <div class="m-0">
        <CurrentTimestamp />
    </div>
    <!-- Unix to date converter -->
    <div class="card" v-if="dateGmt">
        <div class="card-body">
            Local Time : {{ dateLoc }}
        </div>
        <div class="card-body">
            Local GMT : {{ dateGmt }}
        </div>
        <div class="card-body">
            Relative Time: {{ relTime }}
        </div>
    </div>

    <div class="card" v-if="dateToUnix">
        <div class="card-body">
            Unix : {{ dateToUnix }}
        </div>
    </div>
</template>