export default function removeSubdomain(fullUrl = '') {
    const urlParts = fullUrl.split('.');

    if (urlParts.length < 2) {
        return fullUrl;
    }

    // This won't work for things like .co.uk but we don't care about that for now
    // If that is needed in the future, this package can be used - https://www.npmjs.com/package/psl
    return `${urlParts[urlParts.length - 2]}.${urlParts[urlParts.length - 1]}`;
}
