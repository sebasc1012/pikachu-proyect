module.exports = {
    presets: [
            ['@babel/preset-env', {targets: {node: 'current'}}],
            '@babel/preset-typescript',
            [ '@babel/preset-react', { runtime: 'automatic' } ]
          ] ,
    
    plugins: ["@babel/plugin-transform-runtime"],

    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
      '^.+\\.scss$': 'jest-transform-css'
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
    },
    transformIgnorePatterns: [
      '/node_modules/'
    ]
  };
