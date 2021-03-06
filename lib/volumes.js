/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/*
 * Copyright (c) 2017, Joyent, Inc.
 */

var assert = require('assert-plus');

var NFS_SHARED_VOLUME_EXPORTS_BASEDIR = '/exports';
var NFS_SHARED_VOLUME_EXPORTS_DIRNAME = 'data';
var NFS_SHARED_VOLUME_VM_ALIAS_PREFIX = 'nfs-shared-volume';
var NFS_SHARED_VOLUME_SYSTEM_ROLE = 'nfsvolumestorage';

module.exports = {
    NFS_SHARED_VOLUME_EXPORTS_BASEDIR: NFS_SHARED_VOLUME_EXPORTS_BASEDIR,
    NFS_SHARED_VOLUME_EXPORTS_DIRNAME: NFS_SHARED_VOLUME_EXPORTS_DIRNAME,
    NFS_SHARED_VOLUME_SYSTEM_ROLE: NFS_SHARED_VOLUME_SYSTEM_ROLE,
    NFS_SHARED_VOLUME_VM_ALIAS_PREFIX: NFS_SHARED_VOLUME_VM_ALIAS_PREFIX
};