<script source>

</script>

<template>
    <div class="d-flex flex-direction-column p-1 gap-2">
        <div class="w-100">
            <div>
                <h3 class="font-weight-bold">Unix to date</h3>
            </div>
            <input v-model="unix" @input="$emit('handleChange', unix)" type="email" class="form-control"
                id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter epoch">
        </div>
    </div>
</template>