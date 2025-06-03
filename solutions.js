const tiles = {
    'assets/tiles/bridge_rail.png': ['up', 'down'],
    'assets/tiles/bridge_rot_rail.png': ['left', 'right'],
    'assets/tiles/curve_90_rail.png': ['up', 'right'],
    'assets/tiles/curve_180_rail.png': ['up', 'left'],
    'assets/tiles/curve_270_rail.png': ['down', 'left'],
    'assets/tiles/curve_rail.png': ['down', 'right'],
    'assets/tiles/mountain_90_rail.png': ['up', 'right'],
    'assets/tiles/mountain_180_rail.png': ['up', 'left'],
    'assets/tiles/mountain_270_rail.png': ['down', 'left'],
    'assets/tiles/mountain_rail.png': ['down', 'right'],
    'assets/tiles/straight_rail.png': ['up', 'down'],
    'assets/tiles/straight_rot_rail.png': ['left', 'right']
};

const directions = {
    'up': ['assets/tiles/bridge_rail.png', 'assets/tiles/curve_270_rail.png', 'assets/tiles/curve_rail.png', 'assets/tiles/mountain_270_rail.png', 'assets/tiles/mountain_rail.png', 'assets/tiles/straight_rail.png'],
    'down': ['assets/tiles/bridge_rail.png', 'assets/tiles/curve_90_rail.png', 'assets/tiles/curve_180_rail.png', 'assets/tiles/mountain_90_rail.png', 'assets/tiles/mountain_180_rail.png', 'assets/tiles/straight_rail.png'],
    'left': ['assets/tiles/bridge_rot_rail.png', 'assets/tiles/curve_90_rail.png', 'assets/tiles/curve_rail.png', 'assets/tiles/mountain_90_rail.png', 'assets/tiles/mountain_rail.png', 'assets/tiles/straight_rot_rail.png'],
    'right': ['assets/tiles/bridge_rot_rail.png', 'assets/tiles/curve_180_rail.png', 'assets/tiles/curve_270_rail.png', 'assets/tiles/mountain_180_rail.png', 'assets/tiles/mountain_270_rail.png', 'assets/tiles/straight_rot_rail.png']
};

const impossible = ['assets/tiles/empty.png', 'assets/tiles/bridge.png', 'assets/tiles/bridge_rot.png', 'assets/tiles/mountain_90.png', 'assets/tiles/mountain_180.png', 'assets/tiles/mountain_270.png', 'assets/tiles/mountain.png'];