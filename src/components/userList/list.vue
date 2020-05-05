<template>
    <div class="list">
        <ul>
            <li>

            </li>
            <li>

            </li>
            <li>

            </li>
            <li>

            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style scoped>
    .list{
        width: 100%;
    }
    .list>ul{
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-around;
        list-style: none;
    }
    .list>ul>li{
        width: 20%;
        height: 108px;
        cursor: pointer;
        font-size: 12px;
        position: relative;
        overflow: hidden;
        color: #666;
        background: #fff;
        -webkit-box-shadow: 4px 4px 40px rgba(0,0,0,0.05);
        box-shadow: 4px 4px 40px rgba(0,0,0,0.05);
        border-color: rgba(0,0,0,0.05);
    }
</style>