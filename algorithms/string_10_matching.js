const regexMatching = (s, p) => {

    const inner = (i, j) => {
        // if we get to the end of both s & p, we're done!
        if(i >= s.length && j >= p.length) return true;

        // if we're at the end of s, the only hope we have is a bunch of *s
        if(i === s.length) return p[j+1] === '*' ? inner(i, j+2) : false;
        // otherwise we've reached the end of s without exhausting p or vice versa
        if(j >= p.length || i >= s.length) return false;

        if(p[j+1] === '*'){ // if j is part of a special sequence
            const zero = inner(i, j+2); // we can either match 0 chars or oneOrMore
            const oneOrMore = (s[i] === p[j] || p[j] === '.') ? inner(i+1, j) : false;
            return zero || oneOrMore; // if either works, return it
        }

        if(p[j] === '.') return inner(i+1, j+1); // otherwise, dots match any one char

        if(s[i] === p[j]) return inner(i+1, j+1); // otherwise the chars must match exactly
        return false; // and if none of those cases worked, return false
    };

    return inner(0, 0);
};

var isMatch = function(string, pattern) {
    // early return when pattern is empty
if (!pattern) {
    // returns true when string and pattern are empty
    // returns false when string contains chars with empty pattern
    return !string;
}

// check if the current char of the string and pattern match when the string has chars
const hasFirstCharMatch = Boolean(string) && (pattern[0] === '.' || pattern[0] === string[0]);

// track when the next character * is next in line in the pattern
if (pattern[1] === '*') {
    // if next pattern match (after *) is fine with current string, then proceed with it (s, p+2).  That's because the current pattern may be skipped.
    // otherwise check hasFirstCharMatch. That's because if we want to proceed with the current pattern, we must be sure that the current pattern char matches the char
    // If hasFirstCharMatch is true, then do the recursion with next char and current pattern (s+1, p).  That's because current char matches the pattern char. 
    return (
        isMatch(string, pattern.slice(2)) || 
        (hasFirstCharMatch && isMatch(string.slice(1), pattern))
    );
}

// now we know for sure that we need to do 2 simple actions
// check the current pattern and string chars
// if so, then can proceed with next string and pattern chars (s+1, p+1)
return hasFirstCharMatch ? isMatch(string.slice(1), pattern.slice(1)) : false;
};