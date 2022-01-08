const fs = require('fs')
const path = require('path')
const shell = require('shelljs')
const chalk = require('chalk')
const sub_app_ath = path.resolve()
const sub_apps = fs.readdirSync(sub_app_ath).filter(i => /^sub-/.test(i))
const log = console.log

shell.rm('-rf', `dist`)
sub_apps.forEach(i => {
  shell.mkdir('-p' ,`main/dist/subapp/${i}`)
  shell.mv(`${i}/dist/*`, `main/dist/subapp/${i}`)
  shell.rm('-rf', `${i}/dist`)
})
shell.mv('main/dist', './')

log(
`移动了以下应用到外层dist目录:
${chalk.green.bold(sub_apps.join('\n'))}
`)
