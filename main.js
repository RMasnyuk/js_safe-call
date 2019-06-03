function safeCall(f) {
    try {
        f();
        return true;
    } catch {
        return false;
    }
}
console.log(safeCall(() => abc));
