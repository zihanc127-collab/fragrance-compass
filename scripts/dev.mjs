import { spawn } from 'node:child_process';
const children=[spawn('npm',['run','dev:server'],{stdio:'inherit'}),spawn('npm',['run','dev:client'],{stdio:'inherit'})];
const stop=()=>children.forEach(x=>x.kill('SIGTERM')); process.on('SIGINT',stop);process.on('SIGTERM',stop);
