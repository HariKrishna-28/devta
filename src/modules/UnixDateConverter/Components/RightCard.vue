<script setup>
import CurrentTimestamp from './CurrentTimestamp.vue';
const props = defineProps([
    "epoch", "dateLoc", "dateGmt"
])
</script>
<template>
    <div class="m-0">
        <CurrentTimestamp />
    </div>
    <!-- Unix to date converter -->
    <div class="card">
        <div class="card-body">
            Local Time : {{ dateLoc }}
        </div>
        <div class="card-body">
            Local GMT : {{ dateGmt }}
        </div>
    </div>

    <div class="card">
        <div class="card-body">
            Local Time : {{ dateLoc }}
        </div>
        <div class="card-body">
            Local GMT : {{ dateGmt }}
        </div>
    </div>
</template>