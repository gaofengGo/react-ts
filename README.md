- 在ts编写react时，需要额外安装加上@types/  的依赖，引入的时候才能直接引用
- 用ts编辑react时报 interface name must start with a capitalized I 错误，需要在tslint.json文件中添加 
  "rules": {
        "interface-name" : [true, "never-prefix"]
    }		https://blog.csdn.net/zi__kang/article/details/89382084

- tslint取消import引入字母排序的验证 rlues中设置属性“ordered-imports” 为 false 
- styled-components与react组件冲突报错需要将版本降到4.1.8
- styled-components在tsx文件中使用需要额外配置，详情见文档