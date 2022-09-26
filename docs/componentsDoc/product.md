# Product 组件
商品组件

### 展示
<!-- ![An image](./example.jpeg) -->
<img :src="$withBase('/example.jpeg')" alt="foo">

<product />

### 使用方式

```
 <product name="女装T恤"></product>
```

### Props


| 参数 | 说明 | 类型 | 默认值 |
| :------------: | :----------: | :-----------: | :------------: |
| name |   商品名称   | string | --- |
| desc    |  商品介绍   |   string | ---- |
| num | 商品数量 | number | 1 |
| price | 商品价格 | string | 2 |
