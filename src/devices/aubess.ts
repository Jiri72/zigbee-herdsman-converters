import * as tuya from "../lib/tuya";
import type {DefinitionWithExtend} from "../lib/types";
import * as zosung from "../lib/zosung";

const fzZosung = zosung.fzZosung;
const tzZosung = zosung.tzZosung;
const ez = zosung.presetsZosung;

export const definitions: DefinitionWithExtend[] = [
    {
        fingerprint: tuya.fingerprint("TS1201", ["_TZ3290_acv1iuslxi3shaaj"]),
        model: "ZXZIR-02",
        vendor: "Aubess",
        description: "Universal smart IR remote control",
        fromZigbee: [
            fzZosung.zosung_send_ir_code_00,
            fzZosung.zosung_send_ir_code_01,
            fzZosung.zosung_send_ir_code_02,
            fzZosung.zosung_send_ir_code_03,
            fzZosung.zosung_send_ir_code_04,
            fzZosung.zosung_send_ir_code_05,
        ],
        toZigbee: [tzZosung.zosung_ir_code_to_send, tzZosung.zosung_learn_ir_code],
        exposes: [ez.learn_ir_code(), ez.learned_ir_code(), ez.ir_code_to_send()],
    },
];
