# vue-h-form-item
vue 移动端表单单条组件
# Install

    npm install vue-h-form-item --save

# Demo

https://hezhengjie.github.io/vue-h-form-item/example/index.html

# Usage

支持五种模式选择,input,number,radio,forward和custom(自定义)

    <template>
        <div>
           <h-item type="input" :option="textOption"></h-item>
            <h-item type="number" :option="numberOption"></h-item>
            <h-item type="radio" :option="radioOption"></h-item>
            <h-item type="forward" :option="forwardOption"></h-item>
            <h-item type="custom" :option="customOption">
               <div slot="h-item-right">这里是一个自定义内容</div>
            </h-item>
        </div>
    </template>
    <style>
    </style>
    <script>
        import item from '../src/components/vue-h-form-item.vue';
        export default{
            data(){
                return{
                    textOption:{
                        label:'姓名',//必填
                        require:false,//true or false,默认为false
                        placeholder:'请填写你的姓名',
                        maxlength:10,
                        border:'vertical',//top ,bottom,vertical or none,默认为vertical
                        onchange:function(value){
                            console.log('文字:'+value);//回调函数
                        }
                    },
                    numberOption:{
                        label:'数字',//必填
                        require:true,//true or false 默认为false
                        placeholder:'请填写手机',
                        max:10,
                        min:0,
                        border:'vertical',//top ,bottom,vertical or none,默认为vertical
                        onchange:function(value){
                            console.log('数字:'+value);//回调函数
                        }
                    },
                    radioOption:{
                        label:'单选框',//必填
                        require:true,//true or false 默认为false
                        border:'vertical',//top ,bottom,vertical or none,默认为vertical
                        radios:[
                            {
                                name:'明天',
                                value:'1'
                            },{
                            name:'今天',
                            value:'0'
                        }],
                        onchange:function(value){
                            console.log('单选框:'+value);//回调函数
                        }
                    },
                    forwardOption:{
                        label:'箭头',//必填
                        require:true,//true or false 默认为false
                        border:'vertical',//top ,bottom,vertical or none,默认为vertical
                        handler:function(){ ////点击箭头的回调函数
                            console.log('箭头');
                        }
                    },
                    customOption:{
                        label:'自定义',
                        require:true,//true or false 默认为false
                        border:'vertical'//top ,bottom,vertical or none,默认为vertical
                    }
                }
            },
            components:{
                'h-item':item
            }
        }
    </script>

