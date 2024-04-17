// formatNumber.js

export const formatInIndianSystem=(number:any)=> {
    if (number >= 1e7) { // crore and above
        number = (number / 1e7).toFixed(2) + ' Cr';
    } else if (number >= 1e5) { // lakh and above
        number = (number / 1e5).toFixed(2) + ' Lakh';
    } else {
        number = number.toString();
    }
    return number;
}

export const formattedPropertyAddress = ({ address, city, state, country, zip }:any) => {
    const parts = [address, city, state, `${country}, ${zip}`.trim()];

    return parts.filter(part => part && part.trim().length > 0).join(', ');
};
