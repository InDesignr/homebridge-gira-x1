module.exports = (api) => {
    api.registerAccessory('ExampleAccessory', ExampleAccessory);
};

class ExampleAccessory {
    constructor(log, config, api) {
        this.log = log;
        this.config = config;
        this.api = api;
    }

    // ... other methods and properties ...
}
