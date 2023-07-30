<script source>

</script>

<template>
    <div class="d-flex flex-direction-column p-1 gap-2">
        <div class="w-100">
            <div>
                <h3 class="font-weight-bold">Unix to date</h3>
            </div>
            <input v-model="unix" @input="$emit('handleChange', unix)" type="text" class="form-control"
                placeholder="Enter unix timestamp">
        </div>
        <div class="w-100">
            <div>
                <h3 class="font-weight-bold">Date to unix</h3>
            </div>
            <input v-model="date" @input="$emit('handleDateChange', date)" type="text" class="form-control"
                placeholder="Enter date">
        </div>
    </div>
</template>