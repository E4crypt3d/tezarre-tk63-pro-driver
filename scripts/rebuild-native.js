#!/usr/bin/env node
// Cross-platform entry point for `npm run rebuild:native`.
// Picks the bash script on Unix and the PowerShell script on Windows.
const { spawnSync } = require('child_process')
const path = require('path')

const root = path.resolve(__dirname, '..')
const isWindows = process.platform === 'win32'

const command = isWindows ? 'powershell.exe' : 'bash'
const args = isWindows
  ? ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', path.join(__dirname, 'rebuild-native.ps1')]
  : [path.join(__dirname, 'rebuild-native.sh')]

const result = spawnSync(command, args, { stdio: 'inherit', cwd: root })

if (result.error) {
  console.error(`error: ${result.error.message}`)
  process.exit(1)
}

process.exit(result.status === null ? 1 : result.status)
