export default {
    // Set the scene size.
    WIDTH: 800,
    HEIGHT: 600,

    // Set some camera attributes.
    VIEW_ANGLE: 45,
    get ASPECT() { return this.WIDTH / this.HEIGHT },
    NEAR: 0.1,
    FAR: 5000,

    // Set some point lights
    POINT_LIGHT: {
        color: '0xFFFFFF',
        x: 10,
        y: 50,
        z: 130
    }
}