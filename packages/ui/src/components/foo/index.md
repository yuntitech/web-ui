---
title: Foo
nav:
  title: 组件
  path: /components
group:
  title: 组件总览
  path: /components
  order: 2
---

## Foo

Demo:

```tsx
import React from 'react';
import { Foo } from '@yunti/web-ui';
import { Button } from 'antd';

export default () => {
  return (
    <div>
      <Foo title="第一个测试组件" />
      <Button type="primary">新增</Button>
    </div>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
