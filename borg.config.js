
const config = {
  create: {
    options: [
    // '--debug',
    // '--dry-run', //disable --stats if you enabled this
    //  '--filter AME',
    //  '--list',
      '--stats',
      '--compression zstd,22',
      '--exclude-caches'
    ],
    excludes: [
      '/home/coop/.cache/*',
      '/home/coop/.dbus',
      '/home/coop/.local/share/gvfs-metadata/home',
      '/home/coop/.gvfs',
      '/home/coop/.local/share/recently-used.xbel',
      '/home/coop/.config/Mousepad',
      '/home/coop/.config/leafpad',
    ],
    repository: '/mnt/Backup_1/Borg-Backup/GeneralBackup',
    prefix: null,
    foldersToBackup: [
      '/home/coop',
      '/mnt/Tutorials/Coding Tutorials & Books',
    ],
    showNotification: true,
  },
  prune: {
    options: [
      '--stats',
    ],
    repository: '/mnt/Backup_1/Borg-Backup/GeneralBackup',
    prefix: null,
    keepDaily: 7,
    keepWeekly: 2,
    keepMonthly: 1,
  }
}

module.exports = {
  config
}
