module.exports = function(api) {
    api.cache(true);

    return {
        presets: ['babel-preset-expo'],
    
        env: {
            production: {
                plugins: ['react-native-paper/babel'], // smaller bundle size
            },
        },
        plugins: [
            [
                'module-resolver',
                {
                    alias: {
                        assets: './src/assets',
                        components: './src/components',
                        constants: './src/constants',
                        hooks: './src/hooks',
                        libs: './src/libs',
                        navigation: './src/navigation',
                        screens: './src/screens',
                        services: './src/services',
                        store: './src/store',
                        templates: './src/templates',
                    },
                },
                'react-native-reanimated/plugin' // keep in the last position
            ],
        ],

    };
};
