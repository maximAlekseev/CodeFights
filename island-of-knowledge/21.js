function isIPv4Address(inputString) {
    return inputString.split('.').every(val => val && val >= 0 && val <= 255) && inputString.split('.').length === 4;
}

isIPv4Address("172.16.254.1");