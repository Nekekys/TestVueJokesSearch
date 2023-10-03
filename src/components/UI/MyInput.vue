<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text" :placeholder="placeholder" autofocus >
</template>

<script>
    export default {
        name: "my-input",
        props: {
            modelValue: [String, Number],
            placeholder: String
        },
        methods: {
            updateInput(event){
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>

<style scoped>
    .input {
        background-color: transparent;

        padding: 3% 6%;
        width: 88%;
        border: none;

        font-family: 'Fira Sans', sans-serif;
        font-weight: 700;
        font-size: 20px;
        box-shadow: 0px 7px 12px 0px #64646F33;
        color: #656EC2;

        outline: none;
        margin-bottom: 20px;
    }
    .input::placeholder  {
        color: #656EC2;
    }
</style>
