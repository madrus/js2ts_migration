module.exports = function (grunt) {
    grunt.initConfig({
        ts: {
            default: {
                src: [
                    "**/*.ts",
                    "!node_modules/**/*.ts",
                    "!packages/**/*.ts"
                ],
                options: {
                    comments: true // copy comments to the target js files
                }
            }
        },
        concat: {
            vendor: {
                src: [
                    "CoinCounterGame/Scripts/jquery-2.1.4.min.js",
                    "CoinCounterGame/Scripts/big.min.js",
                    "CoinCounterGame/Scripts/bootstrap.min.js",
                    "CoinCounterGame/Scripts/knockout-3.3.0.debug.js"
                ],
                dest: "CoinCounterGame/Built/vendor.js"
            }
        },
        uglify: {
            coinCounter: {
                src: [
                    "CoinCounterGame/*.js",
                    "!Gruntfile.js"
                ],
                dest: "CoinCounterGame/Built/coinCounter.min.js"
            }
        },
        qunit: {
            default: {
                options: {
                    urls: ["http://localhost:8000/tests/tests.html"]
                }
            }
        },
        connect: {
            default: {
                options: {
                    port: 8000,
                    base: "."
                }
            }
        }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-gunit");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.registerTask("default", ["ts", "concat", "uglify", "connect", "qunit"]);
};