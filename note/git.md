# git

## 一、git运行前的配置

### 1 用户信息配置

`git  config --global user.name "Xxk"`

`git config --global user.email xxk@411.com`

注意：如果使用了`--global`选项，那么该命令只需要运行一次，之后git都会使用该信息。

### 2 检查配置信息

`git config --list`

## 二、git基础

### 1 获取git仓库

```
//将尚未进行版本控制的本地目录转化为Git仓库
	git init
	//创建名为.git的子目录，包含了初始化git的所有必须文件。但是此时项目中的文件还没有被跟踪
	git add .
	git commit -m"描述"
//从其他服务器克隆一个已存在的Git仓库
	git clone url
//如果想改变克隆仓库的名字，可以加入一个参数
	git clone url newName  此时新仓库的名字newName
```

### 2 记录每次更新到仓库

工作目录下的每个文件只有两种状态：**已跟踪**、**未跟踪**

已跟踪的文件是指那些被纳入了版本控制的文件，其有三种状态：**未修改，已修改，已放入暂存区**。

#### **查看当前文件的状态**	

```
git status
```

如果存在未跟踪的文件，`git status`会进行如下报告

```
Untracked files:
  (use "git add <file>..." to include in what will be committed)

    README

nothing added to commit but untracked files present (use "git add" to track)
```

#### **跟踪新文件**

```
git add README
```

README文件被跟踪了

#### **暂存已修改文件**

运行git status

```
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    new file:   README

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   CONTRIBUTING.md
```

CONTRIBUTING.md文件发生了变化，但是没有放到暂存区。

#### **状态简览**

`git status -s` 或者 `git status --short`

```
$ git status -s
 M README
MM Rakefile
A  lib/git.rb
M  lib/simplegit.rb
?? LICENSE.txt
```

?? 未跟踪文件

A  新添加到暂存区中的文件

M  修改已暂存

 M 修改未暂存

MM 修改中有暂存部分，也有未暂存部分

#### **忽略文件**

 `.gitignore` 的格式规范如下：

- 所有空行或者以 `#` 开头的行都会被 Git 忽略。
- 可以使用标准的 glob 模式匹配，它会递归地应用在整个工作区中。
- 匹配模式可以以（`/`）开头防止递归。
- 匹配模式可以以（`/`）结尾指定目录。
- 要忽略指定模式以外的文件或目录，可以在模式前加上叹号（`!`）取反。

#### **查看已暂存和未暂存的修改**

`git diff`

#### **提交更新**

`git commit -m"描述说明"`

提交时记录的是放在暂存区域的快照。

#### **跳过使用暂存区域**

`git commit -a` Git会自动把所有已经跟踪过的文件暂存起来一并提交，从而跳过`git add`步骤。

#### **移除文件**

`git rm 文件名`

### 3  查看提交历史

`git log`

按照时间顺序列出所有的提交的SHA-1校验和、作者的名字和电子邮件地址、提交时间以及提交说明。

`git log -p`或者`git log --patch`

会显示每次提交所引入的差异

### 4 撤销操作

`git commit -amend`

当你在修补最后的提交时，并不是通过用改进后的提交 **原位替换** 掉旧有提交的方式来修复的， 理解这一点非常重要。从效果上来说，就像是旧有的提交从未存在过一样，它并不会出现在仓库的历史中。

`git reset HEAD 文件名`

当我们修改了两个文件，只想提交一个，但失误全部暂存时，可以利用该指令来取消暂存

`git checkout -- 文件名`

该文件中的修改被撤销了

> git reset HEAD \<file\> 和 git checkout --\<file\> 都是危险的命令

### 5 远程仓库的使用

`git remote` 或者 `git remote -v`

查看远程仓库，列出你指定的每一个远程服务器的简写

`git remote add <shortname> <url>`

添加远程仓库 此时可以用shortname来代替整个url

`git fetch <remote>`

这个命令会抓取仓库中所有你还没有的数据。但是不会自动合并。

`git pull`

自动抓取数据后合并该远程分支到当前分支。

`git push <remote> <branch>`

将你的修改推送到上游，只有当你有所克隆服务器的写入权限，并且之前没有人推送过时，这条命令才生效。

`git remote show <remote>`

查看远程服务器的具体信息

`git remote rename pb paul`

将远程仓库paul重命名为pb

`git remote remove`或者`git remote rm`

删除某个远程仓库

### 6 打标签

`git tag`

列出标签

https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%89%93%E6%A0%87%E7%AD%BE

### 7 Git别名

https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-Git-%E5%88%AB%E5%90%8D

## 三、Git分支

git保存的不是文件的变化或者差异，而是一系列不同时刻的`快照`。

在进行提交操作时，git会保存一个提交对象，该对象包含一个`指向暂存内容快照的指针`、`作者姓名邮箱`、`提交信息`以及`指向父对象的指针`。

首次提交没有父对象，普通提交有一个父对象，合并提交有多个父对象。

### 1 分支简介

#### 提交事例

有三个将要被暂存和提交的文件

```
git add README test.rb LICENSE
git commit -m 'the initial commit of my project'
```

此时git会计算每个子目录的`校验和`，并保存为`树对象`。

现在git仓库中有五个对象：

1. 三个blob对象（快照）
2. 一个树对象（记录着目录结构和blob对象的索引）
3. 提交对象（指向前述树对象的指针和所有提交信息）

![](https://git-scm.com/book/en/v2/images/commit-and-tree.png)

上图是首次提交对象以及其树结构

做些修改之后再次提交，新产生的对象会包含一个指向上次提交对象的指针。

git分支，`本质上只是指向提交对象的可变指针`。默认分支名是master。每次提交该分支会向后移动。

#### 分支创建

```
git branch testing
```

**会在当前提交对象上创建一个指针**。此时testing和master指针都指向当前提交对象。

**git有一个名为`HEAD`的指针，他指向当前所在的本地分支**。此时我们仍然在msater分支上。

```
git log --oneline --decorate
```

**该指令可以查看各个分支当前所指的对象。**

#### 分支切换

```
git checkout testing
```

**该指令切换到已存在的分支**。

此时HEAD指向了testing。如果我们修改提交，test分支就会向前移动，但是master分支却没有移动，此时切回master，工作目录就会恢复为master分支所指向的快照内容。若我们在对master进行修改提交，那这个项目的提交历史就出现了分叉。

![](https://git-scm.com/book/en/v2/images/advance-master.png)

```
git log --online --decorate --graph --all
```

**会输出提交历史、各个分支的指向以及项目的分支分叉情况**

### 2 分支新建与合并

#### 新建合并

```
git checkout -b iss53（常规开发）
```

是`git branch iss53`和`git checkout iss53`的简写。创建并指向了iss53

```
git checkout -b hotfix（临时问题）
```

hotfix完成提交后

```
git checkout master
git merge hotfix
```

切换到msater分支，将hotfix分支合并到master分支上。

**当你试图合并两个分支时， 如果顺着一个分支走下去能够到达另一个分支，那么 Git 在合并两者的时候， 只会简单的将指针向前推进（指针右移），因为这种情况下的合并操作没有需要解决的分歧——这就叫做 `“快进（fast-forward）”`**

```
git branch -d hotfix
```

master和hotfix已经指向同一个地方，可以删除hotfix分支了

```
git checkout iss53
```

此时可以把hotfix的工作合并到iss53上，也可以等iss53完成之后，合并回master

#### 分支冲突

遇到冲突git会停下来，等待开发人员手动解决冲突

```
git mergetool
```

可以启动一个可视化合并工具。

### 3 分支管理

```
git branch
```

分支列表

```
git branch --merged   git branch --no-merged
```

查看合并或者未合并的分支

### 4 分支开发工作流

#### 长期分支

#### 主题分支

### 5 远程分支

## git修改存储----git stash

https://www.cnblogs.com/zndxall/archive/2018/09/04/9586088.html

