module.exports = function override(config, env) {
    config.output.hashFunction = 'xxhash64'
    return config;
}
