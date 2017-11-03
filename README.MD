cppStolen
=======================

[![Greenkeeper badge](https://badges.greenkeeper.io/bangbang93/cppStolen.svg)](https://greenkeeper.io/)

魔都某大型漫展客户端由于设计不当，导致所有权限校验均可绕过，该示例代码仅供研究学习使用

*任何由于本代码带来的纠纷，均与作者无关，望相关方面尽快修复漏洞*

install
-----------------------
```bash
npm install
```

需要mongodb作为数据存储

usage
-----------------------
```bash
node index <func> <arg>
```

目前支持的func有

- user/fetchList
- book/fetchList

arguments
-----------------------
--host 使用的mongodb主机

--db 使用的mongodb库

--start 起始索引

--end 结束索引

--parallel 并发数量
