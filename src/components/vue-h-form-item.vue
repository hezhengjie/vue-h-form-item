<template>
    <div>
        <!--label+text-->
        <div class="h-item"  v-if="type=='input'" :class="{borderline_top:textOption.border=='top',borderline_bottom:textOption.border=='bottom',borderline_vertical:textOption.border=='vertical'}">
            <div class="h-left-wrap">
                <label :class="{require:textOption.require}">
                    {{textOption.label}}
                </label>
            </div>
            <div class="h-right-wrap">
            <input  type="text" :placeholder="textOption.placeholder" :maxlength="textOption.maxlength" @input="textOption.onchange(hModel.text)" v-model="hModel.text"/>
            </div>
        </div>
        <!--@/label+text-->
        <!--label+number-->
        <div class="h-item" v-if="type=='number'"  :class="{borderline_top:numberOption.border=='top',borderline_bottom:numberOption.border=='bottom',borderline_vertical:numberOption.border=='vertical'}">
            <div class="h-left-wrap">
                <label :class="{require:numberOption.require}">
                    {{numberOption.label}}
                </label>
            </div>
            <div class="h-right-wrap">
                <input  type="number" :placeholder="numberOption.placeholder" :max="numberOption.max" :min="numberOption.min"  @input="numberOption.onchange(hModel.number)" v-model="hModel.number"/>
            </div>
        </div>
        <!--@/label+number-->
        <!--label+radio-->
        <div class="h-item" v-if="type=='radio'" :class="{borderline_top:radioOption.border=='top',borderline_bottom:radioOption.border=='bottom',borderline_vertical:radioOption.border=='vertical'}">
            <div class="h-left-wrap">
                <label :class="{require:radioOption.require}">
                    {{radioOption.label}}
                </label>
            </div>
            <div class="h-right-wrap">
                <div v-for="item in radioOption.radios" @click="changeRadio(item.value)">
                    <span  :data-value="item.value">{{item.name}}</span><span class="h-checkbox" :class="{on:item.value==hModel.radio}"></span></div>
            </div>
        </div>
        <!--@/label+radio-->

        <!--label+forward-->
        <div class="h-item" v-if="type=='forward'" :class="{borderline_top:forwardOption.border=='top',borderline_bottom:forwardOption.border=='bottom',borderline_vertical:forwardOption.border=='vertical'}">
            <div class="h-left-wrap">
                <label :class="{require:forwardOption.require}">
                    {{forwardOption.label}}
                </label>
            </div>
            <div class="h-right-wrap">
                <i class="arrow" @click="forwardOption.handler"></i>
            </div>
        </div>
        <!--@/label+forward-->
        <!--label+custom-->
        <div class="h-item" v-if="type=='custom'" :class="{borderline_top:customOption.border=='top',borderline_bottom:customOption.border=='bottom',borderline_vertical:customOption.border=='vertical'}">
            <div class="h-left-wrap">
                <label :class="{require:customOption.require}">
                    {{customOption.label}}
                </label>
            </div>
            <div class="h-right-wrap">
                <slot name="h-item-right"></slot>
            </div>
        </div>
        <!--@/label+custom-->
    </div>
</template>
<script>
    export default{
        props:['type','option'],
        data(){
            return{
                hModel:{
                    text:'',
                    number:0,
                    radio:1
                },
                textOption:{
                    label:'文字',
                    require:false,//true or false
                    border:'vertical',//top ,bottom,vertical or none,
                    onchange:function(value){
                    }
                },
                numberOption:{
                    label:'数字',
                    require:false,//true or false
                    border:'vertical',//top ,bottom,vertical or none,
                    onchange:function(value){
                    }
                },
                radioOption:{
                    label:'单选框',
                    require:false,//true or false
                    border:'vertical',//top ,bottom,vertical or none,
                    radios:[{
                        name:'今天',
                        value:'0'
                    },
                        {
                            name:'明天',
                            value:'1'
                        }],
                    onchange:function(value){
                    }
                },
                forwardOption:{
                    label:'箭头',
                    require:false,//true or false
                    border:'vertical',//top ,bottom,vertical or none,
                    handler:function(){
                    }
                },
                customOption:{
                    label:'自定义',
                    require:false,//true or false
                    border:'vertical'//top ,bottom,vertical or none,

                }
            }
        },
       mounted(){
            let self = this;
           switch (self.type){
               case 'input':
                   self.textOption = Object.assign(self.textOption,self.option);
                   break;
               case 'number':
                   self.numberOption = Object.assign(self.numberOption,self.option);
                   break;
               case 'radio':
                   self.radioOption =Object.assign(self.radioOption, self.option);
                   break;
               case 'forward':
                   self.forwardOption = Object.assign(self.forwardOption,self.option);
                   break;
               case 'custom':
                   self.customOption = Object.assign(self.customOption,self.option);
                   break;
               default:
           }

       },
        methods:{
            changeRadio:function(value){
                this.hModel.radio= value;
                this.radioOption.onchange(this.hModel.radio);
            }
        }
    }
</script>
<style scoped lang="less">
    @iphone4: 8.53px;
    @galaxyS4: 9.6px;
    @iphone5: 8.53px;
    @iphone6: 10px;
    @iphone6P: 11.04px;
    @color:#F4F4F4;
    @media (device-width: 320px) and (min-resolution: 2dppx) {
        .h-item {
            font-size: @iphone4;
        }
    }

    @media (device-width: 360px) and (min-resolution: 3dppx) {
        .h-item {
            font-size: @galaxyS4;
        }
    }

    @media (device-width: 320px) and (min-resolution: 2dppx) {
        .h-item {
            font-size: @iphone5;
        }
    }

    @media (device-width: 375px) and (min-resolution: 2dppx) {
        .h-item {
            font-size: @iphone6;
        }
    }

    @media (device-width: 414px) and (min-resolution: 3dppx) {
        .h-item {
            font-size: @iphone6P;
        }
    }

    @media (device-width: 320px) and (min--moz-device-pixel-ratio: 2) {
        .h-item {
            font-size: @iphone4;
        }
    }

    @media (device-width: 360px) and (min--moz-device-pixel-ratio: 3) {
        .h-item {
            font-size: @galaxyS4;
        }
    }

    @media (device-width: 320px) and (min--moz-device-pixel-ratio: 2) {
        .h-item {
            font-size: @iphone5;
        }
    }

    @media (device-width: 375px) and (min--moz-device-pixel-ratio: 2) {
        .h-item {
            font-size: @iphone6;
        }
    }

    @media (device-width: 414px) and (min--moz-device-pixel-ratio: 3) {
        .h-item {
            font-size: @iphone6P;
        }
    }

    @media (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {
        .h-item {
            font-size: @iphone4;
        }
    }

    @media (device-width: 360px) and (-webkit-min-device-pixel-ratio: 3) {
        .h-item {
            font-size: @galaxyS4;
        }
    }

    @media (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {
        .h-item {
            font-size: @iphone5;
        }
    }

    @media (device-width: 375px) and (-webkit-min-device-pixel-ratio: 2) {
        .h-item {
            font-size: @iphone6;
        }
    }

    @media (device-width: 414px) and (-webkit-min-device-pixel-ratio: 3) {
        .h-item {
            font-size: @iphone6P;
        }
    }
    .border-style(){
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 200%;
        height: 200%;
        -webkit-transform: scale(0.5);
        -moz-transform: scale(0.5);
        -webkit-transform-origin: 0 0;
        -moz-transform-origin: 0 0;
        box-sizing: border-box;
        pointer-events: none;
        z-index: 9
    }
    .borderline(bottom){
        position: relative;
        &:after {
            border-bottom: 1px solid @color;
            .border-style();
        }
    }
    .borderline(top){
        position: relative;
        &:after {
            border-top: 1px solid @color;
            .border-style();
        }
    }
    .borderline(vertical){
        position: relative;
        &:after {
            border-top: 1px solid @color;
            border-bottom: 1px solid @color;
            .border-style();

        }
    }
    .rotate(@degrees) {
        -webkit-transform: rotate(@degrees);
        -moz-transform: rotate(@degrees);
        -ms-transform: rotate(@degrees);
        -o-transform: rotate(@degrees);
        transform: rotate(@degrees);
    }
    .arrow(@degrees:-45deg, @position:absolute, @color:rgb(187, 187, 187)) {
        display: block;
        width: 10px;
        height: 10px;
        position: @position;
        border-right: 2px solid @color;
        border-bottom: 2px solid @color;
        .rotate(@degrees);
    }
    .h-item{
        font-size: 10px;
        min-height: 5.2em;
        width: 100%;
        background-color: #ffffff;
        padding: 0 1.6em;
        position: relative;
        display: box;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -moz-box;
        display: flex;
        &.borderline_vertical{
            .borderline(vertical);
        }
        &.borderline_top{
            .borderline(top);
        }
        &.borderline_bottom{
            .borderline(bottom);
        }
        .h-left-wrap{
            width: 25%;
            -webkit-box-flex: 0;
            -ms-flex: none;
            flex: none;
            label{
                font-family: PingFangSC-Regular;
                font-size: 1.4em;
                color: #333333;
                display: table-cell;
                vertical-align: middle;
                height: 3.7em;
                &.require{
                    &:before{
                        content:'*';
                        color: #FF6633;
                        position: absolute;
                        left: 0.5em;
                        top: 0.5em;
                    }
                }
            }
        }

        .h-right-wrap {
            display: inline-block;
            flex:1;
            input {
                height: 100%;
                font-size: 1.4em;
                padding: 0.6em;
                width: 99%;
                margin-left: 1em;
                border: none;
                outline: none;
            }
            .h-checkbox{
                width: 1.5em;
                height: 1.5em;
                border: 1px solid #F07546;
                border-radius: 50%;
                margin: 1.1em 0;
                float: right;
                &.on{
                    background-image:url("../img/check.png");
                    display: block;
                    background-size: 150% 150%;
                    background-position: 50% 50%;
                }
            }
            span {
                font-family: PingFangSC-Regular;
                font-size: 1.4em;
                color: #333333;
                float: right;
                line-height: 3.7em;
                margin: 0 0.8em;
                i {
                    font-style: normal;
                    color: #FF6633;
                }
            }
            .arrow{
                .arrow(-45deg, absolute);
                width: 1em;
                height: 1em;
                right: 1.7em;
                top: 0;
                bottom: 0;
                margin: auto;
            }
        }

    }
</style>
