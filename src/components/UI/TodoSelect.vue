<template >
    <select class="select" v-model="modelValue" @change="changeOptions">
        <option class="options__disabled" disabled  value="">Фильтры</option>
        <option 
        class="options"
        v-for="option in options" 
        :key="option.value" 
        :value="option.value">
        {{option.name}}
        </option>
    </select>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: String
        },
        options:{
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOptions(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>
<style scoped>
.select{
        padding: 8px 15px;
        border: none;
        border: 1px solid #000080;
        border-radius: 5px;
        color: black;
        font-size: 16px;
        font-weight: 400;
    }
    .options{
        padding: 8px 15px;
        border: none;
        border: 1px solid #000080;
        border-radius: 5px;
        color: black;
        font-size: 16px;
        background-color: #E0FFFF;
    }
    .options__disabled{
        background-color: #000080;
        color: white;
        font-size: 16px;
        font-weight: 600;

    }
        @media (max-width:576px) {  
            .select{
                width: 100%;
            }
        }
</style>