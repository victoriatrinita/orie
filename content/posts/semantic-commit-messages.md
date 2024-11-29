---
title: Semantic Commit Messages
tags:
language: english
description: Commit messages convention that I follow by default
date:published: 2024-07-12
date:updated:
---

[DRAFT]
- semantic meaning -> meaning and intention behind the changes being made, rather than just a description of what was changed
- follow a structured format that conveys specific information about the nature of the changes, making it easier for developers to understand the purpose of each commit at a glance
- may vary person by person or organization or project by one person even 
- i use this by default when there is no defined convention in related organization/community
- this is what i follow and i write this for my own guideline incase i need to refresh back when in doubt when naming
- i use this for commit messages/pr title (since i often squash merge)
- lucky it was introduced early to me before long using git
- but i often create pr instead of commiting directly, and squash merge since it lets me try and break things quickly and squash since to 1 commit that matters and concludes. as far as possible i make sure 1 pr solves 1 problem, unless there are other constraints like time and dependency between other backlog
- issue title i dont follow this, i am freer about issue title
-  improves the readability and maintainability of the project's history, making it easier to understand the impact of each change. often helps when diving into git history when something goes wrong or i forgot what i was thinking when past me wrote that specific line of code!

Reference(s)
- https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716
- https://www.conventionalcommits.org/en/v1.0.0/
- https://medium.com/@callmeryan/semantic-commit-messages-bcd60f75de1f
- https://karma-runner.github.io/6.3/dev/git-commit-msg.html