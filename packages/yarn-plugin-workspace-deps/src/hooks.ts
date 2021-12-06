import type { Hooks as PackHooks } from '@yarnpkg/plugin-pack';
import { structUtils } from '@yarnpkg/core';

export type Hooks = PackHooks;

export const beforeWorkspacePacking: Hooks['beforeWorkspacePacking'] = (
    workspace,
    rawManifest: any
) => {
    // remove dependencies that also appear in peerDependencies
    for (const descriptor of workspace.manifest
        .getForScope('peerDependencies')
        .values()) {
        if (workspace.manifest.dependencies.get(descriptor.identHash)) {
            delete rawManifest.dependencies?.[
                structUtils.stringifyIdent(descriptor)
            ];
        }
    }
};
