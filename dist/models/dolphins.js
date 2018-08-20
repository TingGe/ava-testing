"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@rematch/core");
const helpers_1 = require("../helpers");
exports.dolphins = core_1.createModel({
    state: 0,
    reducers: {
        increment: (state) => state + 1,
    },
    effects: dispatch => ({
        incrementAsync() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield helpers_1.delay(500);
                dispatch.dolphins.increment();
            });
        },
    }),
});
//# sourceMappingURL=dolphins.js.map