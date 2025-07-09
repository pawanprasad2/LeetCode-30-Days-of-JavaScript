// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

// Note that minor deviation from millis in the actual sleep duration is acceptable.

function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}
