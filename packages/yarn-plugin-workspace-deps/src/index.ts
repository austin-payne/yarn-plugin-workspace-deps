import { Hooks, beforeWorkspacePacking } from './hooks';

import { Plugin } from '@yarnpkg/core';

const plugin: Plugin<Hooks> = {
    hooks: {
        beforeWorkspacePacking,
    },
};

export default plugin;
