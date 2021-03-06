"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const child_process_1 = require("child_process");
const util_1 = require("util");
const exec = util_1.promisify(child_process_1.exec);
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const MAJEURE = core.getInput('majeure');
            core.exportVariable('MAJEURE', MAJEURE);
            core.setOutput('MAJEURE', MAJEURE);
            const { stdout, stderr } = yield exec("echo -n $MAJEURE.$(date +%m-%d).$(date -d '+1 hour' '+%H%M%S')");
            const output = stdout.trim();
            core.exportVariable('VERSION', output);
            core.setOutput('VERSION', output);
        }
        catch (error) {
            core.setFailed(error.message);
        }
    });
}
run();
