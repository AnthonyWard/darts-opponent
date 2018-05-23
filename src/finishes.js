export default class Finishes {

    static calculate(score) {
        let target = " ¯\\_(ツ)_/¯ "

        /// these are finishes ///

        if (score <= 0) {
            // do nothing
        }
        else if (this.table[score]) {
            // lookup first
            target = this.table[score] + " to finish"
        }
        else if (score <= 40 && score %2 === 0) {
            // else even numbers 40 or under
            target = `D${score / 2} to finish`;
        }

        /// end of finishes ///

        /// you can't finish from here, but try to set up the next one ///
        // dumb logic for now

        else if (score > 230) {
            // just go for gold if you're this high
            target = "T20"
        }
        else if (score %2 === 0) {
            // it's high and even
            target = "T20"
        }
        else if (score %2 !== 0) {
            // it's high and odd
            target = "T19"
        }
        return target;
        // if on a finish and no misses, don't recalculate
        /*  could use single number logic in the table
            assume number will be hit, then calculate the next
            then the next, to get your 3 dart lineup
            that would help with 170 to 230 range */
    }

    static table = {
        170: "T20, T20, Bullseye",
        167: "T20, T19, Bullseye",
        164: "T20, T18, Bullseye",
        161: "T20, T17, Bullseye",
        160: "T20, T20, D20",
        158: "T20, T20, D19",
        157: "T20, T19, D20",
        156: "T20, T20, D18",
        155: "T20, T19, D19",
        154: "T20, T18, D20",
        153: "T20, T19, D18",
        152: "T20, T20, D16",
        151: "T20, T17, D20",
        150: "T20, T18, D18",
        149: "T20, T19, D16",
        148: "T20, T20, D14",
        147: "T20, T17, D18",
        146: "T20, T18, D16",
        145: "T20, T19, D14",
        144: "T20, T20, D12",
        143: "T19, T18, D16",
        142: "T20, T14, D20",
        141: "T20, T19, D12",
        140: "T20, T20, D10",
        139: "T19, T14, D20",
        138: "T20, T18, D12",
        137: "T20, T19, D10",
        136: "T20, T20, D8",
        135: "T20, T17, D12",
        134: "T20, T14, D16",
        133: "T20, T19, D8",
        132: "T20, T16, D12",
        131: "T20, T13, D16",
        130: "T20, T18, D8",
        129: "T19, T16, D12",
        128: "T18, T14, D16",
        127: "T20, T17, D8",
        126: "T19, T15, D12",
        125: "T18, T13, D16",
        124: "T20, T16, D8",
        123: "T19, T14, D12",
        122: "T18, T18, D7",
        121: "T20, T11, D14",
        120: "T20, S20, D20",
        119: "T19, T12, D13",
        118: "T20, S18, D20",
        117: "T20, S17,D20",
        116: "T20, S16, D20",
        115: "T19, S18, D20",
        114: "T20, S14, D20",
        113: "T19, S16, D20",
        112: "T20, T12, D8",
        111: "T19, S14, D20",
        110: "T20, S10, D20",
        109: "T20, S9, D20",
        108: "T19, S19, D16",
        107: "T20, S15, D16",
        106: "T20, S6, D20",
        105: "T19, S8, D20",
        104: "T20, T12, D4",
        103: "T17, S12, D20",
        102: "T20, S10, D16",
        101: "T17, S10, D20",
        100: "T20, D20",
        99: "T19, S10, D16",
        98: "T20, D19",
        97: "T19, D20",
        96: "T20, D18",
        95: "T19, D19",
        94: "T18, D20",
        93: "T19, D18",
        92: "T20, D16",
        91: "T17, D20",
        90: "T20, D15",
        89: "T19, D16",
        88: "T16, D20",
        87: "T17, D18",
        86: "T18, D16",
        85: "T15, D20",
        84: "T20, D12",
        83: "T17, D16",
        82: "T14, D20",
        81: "T19, D12",
        80: "T20, D10",
        79: "T13, D20",
        78: "T18, D12",
        77: "T15, D16",
        76: "T20, D8",
        75: "T17, D12",
        74: "T14, D16",
        73: "T19, D8",
        72: "T16, D12",
        71: "T13, D16",
        70: "T18, D8",
        69: "T19, D6",
        68: "T20, D4",
        67: "T17, D8",
        66: "T14, D12",
        65: "T19, D4",
        64: "T16, D8",
        63: "T13, D12",
        62: "T10, D16",
        61: "T15, D8",
        60: "S20, D20",
        59: "S19, D20",
        58: "S18, D20",
        57: "S17, D20",
        56: "T16, D4",
        55: "S15, D20",
        54: "S14, D20",
        53: "S12, D20",
        52: "S12, D20",
        51: "S11, D20",
        50: "S10, D20",
        49: "S9, D20",
        48: "S8, D20",
        47: "S15, D16",
        46: "S14, D16",
        45: "S13, D16",
        44: "S12, D16",
        43: "S11, D16",
        42: "S10, D16",
        41: "S9, D16",
        39: "S7, D16",
        37: "S5, D16",
        35: "S3, D16",
        33: "S1, D16",
        31: "S7, D12",
        29: "S13, D8",
        27: "S11, D8",
        25: "S9, D8",
        23: "S7, D8",
        21: "S5 ,D8",
        19: "S3, D8",
        17: "S13, D2",
        15: "S7, D4",
        13: "S5, D4",
        11: "S3, D4",
        9: "S1, D4",
        7: "S3, D2",
        5: "S1, D2",
        3: "S1, D1"
    }

}