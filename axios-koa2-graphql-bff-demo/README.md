# 案例1： helloworld

查询方式: 
http://127.0.0.1:3001/graph?query={hello}

基础玩法官方有文档说明：


# 案例2： 多条件查询

查全部用户：
http://127.0.0.1:4000/graph?query={alluser{id,name,email,rule,status}}

按条件查：
http://127.0.0.1:4000/graph?query={user(status:1){id,name,email,rule,status}}


综合:
http://127.0.0.1:4000/graph?query={user(status:1){id,name,email,rule,status}alluser{rule,status}}


知识点：

1.多条件查询


2.实现类似ts的any类型

3.思考分页等功能



# 案例3：grapql.js（集成到controller中）
和2结构一致，但分controller层，并在controller里传参，拒绝中间件形态。



# 案例5： mongodb

参考： https://juejin.im/post/5c7223f251882562654acf54


# 案例4: xxx


