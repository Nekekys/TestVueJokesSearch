<template>
    <div class="card" @click="pushUrl">
        <p>{{data.value}}</p>
        <div class="card-info">
            <span>{{data.id}}</span>
            <span>{{getFormDate}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: {
            data: Object
        },
        computed: {
            getFormDate: function () {
                return this.$props.data.created_at.split(" ")[0].split("-").reverse().join('.')
            }
        },
        methods: {
            pushUrl() {
                window.location.href = this.$props.data.url
            }
        }
    }
</script>

<style scoped>
    .card{
        cursor: pointer;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 0px 7px 25px 0px #64646F33;
    }
    .card>p{
        font-size: 16px;
        min-height: 50px;
        overflow: hidden;
    }
    .card-info{
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        color: #767676;
        display: flex;
        justify-content: space-between;
        word-break: break-all;
    }
</style>
