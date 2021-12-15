---
title: 【Git】コンフリクトの解消
date: 2021-12-05T05:04:13.347Z
description: Gitでコンフリクトが起きたときの対処
tag: Git
---
**Step 1:** From your project repository, bring in the changes and test.

```
git fetch origin
git checkout -b develop origin/develop
git merge main
```

**Step 2:** Merge the changes and update on GitHub.

```
git checkout main
git merge --no-ff develop
git push origin main
```