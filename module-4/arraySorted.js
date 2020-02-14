/**
 * It determines, whether the given array is sorted in
 * alphabetically ascending order.
 * 
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 * 
 * @param {string[]} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the array is properly sorted,
 *                    false otherwise
 */
function arraySorted(array) {
    let st1, st2;
    let sorted = true;

    if (array.length < 1) {
        sorted = true;
    } else {

        for (let i = 0; i < array.length; i++) {
            st1 = array[i + 1];
            st2 = array[i];
            if (typeof st1 === 'string') {



                st2 = st2.replace(/[^a-zA-Z]/g, "");
                st1 = st1.replace(/[^a-zA-Z]/g, "");
                if (st1 < st2) {

                    sorted = false;
                    break;

                } else if (st1 < st2 === false) {
                    sorted = true;

                }
            } else if (typeof st1 === 'number') {

                if (array[i + 1] - array[i] < 0) {

                    sorted = false;
                    break;
                }
            }

        }
    }
    return sorted;

}
module.exports = (arraySorted);