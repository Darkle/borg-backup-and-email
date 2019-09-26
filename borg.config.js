
const config = {
  create: {
    options: [
    // '--debug',
    // '--dry-run', //disable --stats if you enabled this
    //  '--filter AME',
    //  '--list',
     '--stats',
     '--compression lz4',
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
    repository: '/media/coop/Backup/Borg-Backup',
    prefix: null,
    foldersToBackup: [
      '/home/coop',
      '/media/coop/Media/Music',
      '/media/coop/1TB_Internal/Coding Tutorials & Books',
    ],
    showNotification: true,
  },
  prune: {
    options: [
      '--stats',
    ],
    repository: '/media/coop/Backup/Borg-Backup',
    prefix: null,
    keepDaily: 7,
    keepWeekly: 2,
    keepMonthly: 1,
  }
}

module.exports = {
  config
}
