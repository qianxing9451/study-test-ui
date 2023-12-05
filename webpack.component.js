const {VueLoaderPlugin} = require('vue-loader')
const glob = require('glob');
const path = require('path')
const list = {}; 

async function makeList(dirPash,list){
    const files = glob.sync(`${dirPash}/**/index.js`)
    console.log(files,'文件');
    for(let file of files){
        const component = file.split(/[/.]/)[2];
        console.log(component);
        list[component] = `./${file}`
        console.log(list);
    }
}
makeList('components/lib',list)
module.exports = {
    entry:list,
    output: {
        filename:'[name].umd.js',
        path:path.resolve(__dirname,'dist'),
        library:'tui',
        libraryTarget:'umd'
    },
    plugins:[
        new VueLoaderPlugin()
    ],
    mode:'development',
    module:{
        //对应文件使用对应loader
        // test 属性，识别出哪些文件会被转换。
        // use 属性，定义出在进行转换时，应该使用哪个 loader。
        rules:[
            {
                test:/\.vue$/,
                use:[
                    {
                        loader:'vue-loader'
                    }
                ]
            }
        ]
    }
}