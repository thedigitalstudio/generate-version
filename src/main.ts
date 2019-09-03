import * as core from '@actions/core';
import { exec as _exec } from 'child_process';
import { promisify } from 'util';

const exec = promisify(_exec);

async function run() {
  try {
    const MAJEURE = core.getInput('majeure');
    core.exportVariable('MAJEURE', MAJEURE);
    core.setOutput('MAJEURE', MAJEURE);

    const { stdout, stderr } = await exec("echo -n $MAJEURE.$(date +%m-%d).$(date -d '+1 hour' '+%H%M%S')");

    const output = stdout.trim();
    core.exportVariable('VERSION', output);
    core.setOutput('VERSION', output);

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();