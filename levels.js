const levels = [
    [
        [['assets/tiles/empty.png', 'assets/tiles/mountain_270.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/oasis.png'],
        ['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/bridge.png', 'assets/tiles/oasis.png'],
        ['assets/tiles/bridge.png', 'assets/tiles/empty.png', 'assets/tiles/mountain_180.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/oasis.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/mountain_90.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png']],
        [['assets/tiles/oasis.png', 'assets/tiles/empty.png', 'assets/tiles/bridge_rot.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/mountain_180.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/mountain_180.png'],
        ['assets/tiles/bridge.png', 'assets/tiles/oasis.png', 'assets/tiles/mountain_90.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/oasis.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png']],
        [['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/bridge_rot.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/bridge.png'],
        ['assets/tiles/empty.png', 'assets/tiles/mountain_180.png', 'assets/tiles/bridge.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/oasis.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/bridge_rot.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/mountain_180.png']],
        [['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/bridge_rot.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/bridge.png', 'assets/tiles/empty.png', 'assets/tiles/mountain_270.png', 'assets/tiles/empty.png', 'assets/tiles/mountain_270.png'],
        ['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/oasis.png', 'assets/tiles/mountain_90.png', 'assets/tiles/empty.png']],
        [['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/bridge_rot.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/mountain.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/bridge.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/mountain_90.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/bridge.png', 'assets/tiles/oasis.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/mountain_180.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png']]
    ],
    [
        [['assets/tiles/empty.png', 'assets/tiles/mountain_270.png', 'assets/tiles/oasis.png', 'assets/tiles/oasis.png', 'assets/tiles/empty.png', 'assets/tiles/bridge_rot.png', 'assets/tiles/empty.png'],
        ['assets/tiles/bridge.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/bridge.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/mountain_90.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/mountain_90.png', 'assets/tiles/empty.png', 'assets/tiles/mountain_270.png', 'assets/tiles/empty.png', 'assets/tiles/bridge_rot.png', 'assets/tiles/empty.png', 'assets/tiles/oasis.png'],
        ['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png','assets/tiles/bridge_rot.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png']],
        [['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/oasis.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/bridge.png', 'assets/tiles/empty.png', 'assets/tiles/bridge_rot.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/mountain_180.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/bridge_rot.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/bridge.png'],
        ['assets/tiles/mountain.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/oasis.png', 'assets/tiles/empty.png', 'assets/tiles/mountain_270.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/mountain.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/oasis.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png']],
        [['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/bridge_rot.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/bridge.png'],
        ['assets/tiles/oasis.png', 'assets/tiles/empty.png', 'assets/tiles/mountain_90.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/oasis.png', 'assets/tiles/mountain_90.png', 'assets/tiles/empty.png', 'assets/tiles/bridge_rot.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/bridge.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/mountain_270.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/oasis.png', 'assets/tiles/mountain_90.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png']],
        [['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/bridge.png', 'assets/tiles/empty.png', 'assets/tiles/mountain_180.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/mountain_90.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/bridge_rot.png', 'assets/tiles/empty.png', 'assets/tiles/oasis.png', 'assets/tiles/empty.png', 'assets/tiles/bridge_rot.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/mountain_180.png', 'assets/tiles/empty.png', 'assets/tiles/mountain_270.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/bridge.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/mountain_90.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png']],
        [['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/mountain.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/bridge_rot.png', 'assets/tiles/bridge_rot.png', 'assets/tiles/empty.png', 'assets/tiles/mountain_270.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/mountain.png', 'assets/tiles/empty.png', 'assets/tiles/oasis.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/mountain_180.png', 'assets/tiles/empty.png', 'assets/tiles/bridge.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png'],
        ['assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png', 'assets/tiles/empty.png']]
    ]
];