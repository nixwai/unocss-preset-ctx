import { spawn } from 'node:child_process';

export async function run(command: string, path = '.') {
  const [cmd, ...args] = command.split(' ');
  return new Promise((resolve) => {
    const app = spawn(cmd, args, {
      cwd: path, // execution directory for the command
      stdio: 'inherit', // output is shared with the parent process
      shell: true, // shell support is enabled (required for Windows Git-based environments)
    });
    // resolve the Promise when the child process closes.
    app.on('close', resolve);
  });
}
