<template>
  <div class="t-card" :style="{'width':width?width+'px':{}}">
    <div class="t-card-img" :style="{'height':imgHeight?imgHeight+'px':{}}">
        <img :src="imgSrc" alt="img">
    </div>
    <div v-if="summary" class="t-card-summary">
        {{ summary }}
    </div>
    <div class="t-card-summary">
        <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
    name:'t-card',
    props:{
        imgSrc:{
            type:String,
            default:''
        },
        imgHeight:{
            type:String,
            default:''
        },
        width:{
            type:String,
            default:''
        },
        summary:{
            type:String,
            default:''
        }

    }
}
</script>

<style lang="scss"> 
@import url('./card.scss');
</style>