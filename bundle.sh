#!/bin/sh

echo "\n\033[4m$(pwd)\033[0m"

_pwd="$(pwd)"


 react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ${_pwd}/bundles/index.jsbundle --assets-dest ${_pwd}
 react-native bundle --entry-file common.js --platform ios --dev false --bundle-output ${_pwd}/bundles/common.jsbundle --assets-dest ${_pwd}
 react-native bundle --entry-file index2.js --platform ios --dev false --bundle-output ${_pwd}/bundles/index2.jsbundle --assets-dest ${_pwd}
 react-native unbundle --entry-file index.js --platform android --dev false --bundle-output ${_pwd}/index.jsbundle --assets-dest ${_pwd}
