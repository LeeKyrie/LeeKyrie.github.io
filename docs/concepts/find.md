# npm 类和 pnpm 类查找差异

使用 `npm` 类的包管理器和使用 `pnpm` 类的包管理器，所下载的依赖存放的位置是不同的。因此需要分别配置相关查找算法。

## npm 类

`npm` 类的包管理器，具有<strong>扁平化</strong>的特性：将所有依赖都直接安装在项目根目录下的 `node_modules` 目录中，当出现同一个依赖的不同版本时，只会<strong>依赖提升</strong>遇到的第一个版本，而后续的版本会被安装在对应依赖内的 `node_modules` 目录中。

因此，我们设计了一种<strong>冒泡查找</strong>的算法，从当前目录下的 `node_modules` 目录开始查找依赖的 `package.json` 文件，如果内部没有找到，则向上一级目录查找，直到根依赖目录。

这样就能准确地在扁平化和依赖提升特性下，找到各个依赖真正依赖的位置。

## pnpm 类

`pnpm` 类的包管理器，从磁盘硬连接到项目根目录下的 `node_modules/.pnpm` 目录中，之后再将依赖**软连接**到项目根目录下的 `node_modules` 目录中。

因此，我们格外设计了一种<strong>软连接查找</strong>的算法，从当前目录下的 `node_modules` 目录开始查找依赖，并直接通过 `fs.readlinkSync` 方法获取软连接的真实路径，从而拿到其对应的 `package.json`，如果内部没有找到，则向上一级目录查找，直到根依赖目录。

这样直接利用软连接的特性，就能找到各个依赖真正依赖的位置。
